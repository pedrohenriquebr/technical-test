import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Suspense } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import { Home } from "./pages/home";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
}));

function App() {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <Box className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Suspense fallback="loading...">
            <Typography variant="h6" className={classes.title} component="h1">
              {t("TITLE")}
            </Typography>
          </Suspense>
        </Toolbar>
      </AppBar>
      <Home />
    </Box>
  );
}

export default App;