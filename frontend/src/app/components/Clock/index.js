import styled from "styled-components";
import { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { WorldClockService } from "../../services/WorldClockService";

const service = new WorldClockService();

const Text = styled.div`
  padding: 5px 10px;
  color: #00ff00;
  font-size: 45px;
  font-family: DSDIGI;
  background-color: black;
  width: 250px;
  text-align: center;
`;

const Circle = styled.div`
  background-color: #2364AA;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  width: 350px;
  height: 350px;
`;

const buttonsStyles = {
  color: "#00ff00" , 
  fontFamily: "DSDIGI" , 
  fontSize: "22px",
  backgroundColor: "black",
}

function Clock(props) {
  const [paused, setPaused] = useState(true);
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function loadData() {
      const rs = await service.getUTCTime();
      const dt = new Date(rs);
      setDate(dt);
      console.log(
        "api: ",
        `${("" + dt.getHours()).padStart(2, 0)}:${(
          "" + dt.getMinutes()
        ).padStart(2, 0)}:${("" + dt.getSeconds()).padStart(2, 0)}:${(
          "" + dt.getMilliseconds()
        ).padStart(3, 0)}`
      );
    }
    loadData();
  }, []);

  useEffect(() => {
    let interval = 0;
    if (!paused) {
      interval = setInterval(() => {
        setDate((date) => new Date(date.setMilliseconds(date.getMilliseconds() + 1)));
      }, 1);
    }
    return () => clearInterval(interval);
  }, [paused]);

  const getUTCTime = () =>
    `${("" + date.getHours()).padStart(2, 0)}:${(
      "" + date.getMinutes()
    ).padStart(2, 0)}:${("" + date.getSeconds()).padStart(2, 0)}:${(
      "" + date.getMilliseconds()
    ).padStart(3, 0)}`;

  return (
    <Circle>
      <Text>{date && getUTCTime()}</Text>
      <div style={{ marginTop: "20px" }}>
        <Button
          onClick={() => setPaused((paused) => !paused)}
          style={{ marginRight: "10px" ,  ...buttonsStyles }}
          variant="contained"
        >
          {paused ? "Start" : "Stop"}
        </Button>

        <Button
        style={buttonsStyles }
          onClick={() => setDate(new Date(0,0,0))}
          color="primary"
          variant="contained"
        >
          Clear
        </Button>
      </div>
    </Circle>
  );
}

export { Clock };
