import React from "react";
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
import blue from "@material-ui/core/colors/blue";

let theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: { main: "#fff" },
    secondary: { main: blue["A700"] },
    success: { main: "#2dce89" },
    warning: { main: "#fb6340" }
  }
});
theme = responsiveFontSizes(theme);

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100vh",
    padding: "1% 3%",
    position: "static"
  }
});

function App() {
  const [index, setIndex] = React.useState("home");
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <Nav />
        <Home />
        <About />
        <Works />
      </div>
      <ParticlesBg type="cobweb" num={10} bg={true} color="#ffffff" />
      <Footer></Footer>
    </ThemeProvider>
  );
}

export default App;
