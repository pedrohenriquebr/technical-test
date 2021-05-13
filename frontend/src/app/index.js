import { useTranslation } from "react-i18next";
function App() {
  const { t, i18n } = useTranslation();
  return <h2> {t("HELLOWORLD")} </h2>;
}

export default App;
