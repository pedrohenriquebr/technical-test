import styled from "styled-components";
import { useEffect, useState } from "react";
import { WorldClockService } from "../../services/WorldClockService";

const service = new WorldClockService();

const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  color: #00ff00;
  font-size: 45px;
  font-family: DSDIGI;
  background-color: black;
`;


function Clock(props) {
  const [UTCTime, setUTCTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      service.getUTCTime().then((d) => {
        const date = new Date(d);
        setUTCTime(`${(""+date.getHours()).padStart(2,0) }:${(""+date.getMinutes()).padStart(2,0)}:${(""+date.getSeconds()).padStart(2,0)}`);
      });
    }, 1000);
  }, []);

  return <Text>{UTCTime}</Text>;
}

export { Clock };
