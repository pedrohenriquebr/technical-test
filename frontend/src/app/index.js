import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import api from "./services/api";

function App() {
  const { t, i18n } = useTranslation();
  let [UTCTime, setUTCTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      api.get("/json/utc/now").then((d) => {
        console.log(d)
        setUTCTime(d.data.currentDateTime);
      });
    }, 1000);
  }, []);
  return <h2> {UTCTime} </h2>;
}

export default App;
