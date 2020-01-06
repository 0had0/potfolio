import React from "react";

import {
  makeStyles,
  AppBar,
  Typography,
  Link,
  Hidden
} from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";

import HomeIcon from "@material-ui/icons/HomeOutlined";
import InfoIcon from "@material-ui/icons/InfoOutlined";
import ContactsIcon from "@material-ui/icons/ContactsOutlined";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    position: "sticky",
    top: "0"
  },
  rootRight: {
    width: "20%",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  title: {
    fontFamily: "Quicksand",
    color: blue["A700"],
    fontWeight: "700"
  },
  colored: {
    color: "white",
    transition: "color .5s ease",
    "&:hover": {
      color: blue["A700"]
    }
  },
  rootBottom: {
    width: "100%",
    height: "auto",
    position: "fixed",
    bottom: "0",
    left: "0",
    zIndex: "100",
    backgroundColor: "black"
    // transform: "translateY(50%)"
  },
  navBottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  element: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      color: blue["A700"]
    }
  }
});

export default function Nav() {
  const classes = useStyles();
  return (
    <nav className={classes.root}>
      <h2 className={classes.title}>
        Hadi <span className={classes.colored}>Houssainy</span>
      </h2>
      <Hidden mdDown>
        <nav className={classes.rootRight}>
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Contact</Link>
        </nav>
      </Hidden>
      <Hidden mdUp>
        <nav className={classes.rootBottom}>
          <div className={classes.navBottom}>
            <Link href="/">
              <div className={classes.element}>
                <HomeIcon />
                <p>Home</p>
              </div>
            </Link>
            <Link href="/">
              <div className={classes.element}>
                <InfoIcon />
                <p>About</p>
              </div>
            </Link>
            <Link href="/">
              <div className={classes.element}>
                <ContactsIcon />
                <p>Contact</p>
              </div>
            </Link>
          </div>
        </nav>
      </Hidden>
    </nav>
  );
}
