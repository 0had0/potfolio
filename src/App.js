import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
  responsiveFontSizes
} from "@material-ui/core/styles";

import Nav from "./components/nav";
import Home from "./components/home";
import Works from "./components/works";
import About from "./components/about";
import Footer from "./components/Footer";

import CssBaseline from "@material-ui/core/CssBaseline";
import "../node_modules/normalize.css/normalize.css";
import "./App.css";

import ParticlesBg from "particles-bg";

import colors from "./components/colors";

let theme = createMuiTheme({
  palette: {
    type: "light",
    primary: { main: "#ffffff" },
    secondary: { main: colors.background },
    success: { main: "#2dce89" },
    warning: { main: "#fb6340" }
  }
});
theme = responsiveFontSizes(theme);

// let themeLight = createMuiTheme({
//   palette: {
//     type: "light",
//     primary: { main: "#ffffff" },
//     secondary: { main: colors.background },
//     success: { main: "#2dce89" },
//     warning: { main: "#fb6340" }
//   }
// });
// themeLight = responsiveFontSizes(theme);

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "start",
    minHeight: "90%",
    position: "static",
    width: "100%",
    color: "#fff"
  }
}));

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <Router>
          <Nav />
          <Switch>
            <Route path="/about">
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <About />
                  </div>
                </CSSTransition>
              )}
            </Route>
            <Route path="/works">
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <Works />
                  </div>
                </CSSTransition>
              )}
            </Route>
            <Route exact path="/">
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <Home />
                  </div>
                </CSSTransition>
              )}
            </Route>
          </Switch>
        </Router>
      </div>
      <ParticlesBg color={colors.white} num={20} type="cobweb" bg={true} />
      <ParticlesBg color={colors.main} num={5} type="cobweb" bg={true} />
      <Footer></Footer>
    </ThemeProvider>
  );
}

export default App;
