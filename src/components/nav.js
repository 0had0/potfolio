import React from "react";

import {
  makeStyles,
  AppBar,
  Typography,
  Link,
  Hidden
} from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";

import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  rootRight: {
    width: "20%",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  colored: {
    color: "white",
    "&:hover": {
      color: blue["A700"]
    }
  },
  rootBottom: {
    width: "100%",
    height: "auto",
    position: "fixed",
    bottom: "0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "black"
  },
  element: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default function Nav() {
  const classes = useStyles();
  return (
    <nav className={classes.root}>
      <Typography variant="h4" color="secondary">
        Hadi <span className={classes.colored}>Houssainy</span>
      </Typography>
      <Hidden mdDown>
        <nav className={classes.rootRight}>
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Contact</Link>
        </nav>
      </Hidden>
      <Hidden mdUp>
        <nav className={classes.rootBottom}>
          <Link>
            <div className={classes.element}>
              <HomeIcon />
              <p>Home</p>
            </div>
          </Link>
          <Link>About</Link>
          <Link>Contact</Link>
        </nav>
      </Hidden>
    </nav>
  );
}
