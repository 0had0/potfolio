import React from "react";
import { Link as RouterLink } from "react-router-dom";

import {
  makeStyles,
  AppBar,
  Hidden,
  Toolbar,
  Button,
  BottomNavigation,
  BottomNavigationAction
} from "@material-ui/core";

import HomeIcon from "@material-ui/icons/HomeOutlined";
import InfoIcon from "@material-ui/icons/InfoOutlined";
import ContactsIcon from "@material-ui/icons/ContactsOutlined";

import colors from "./colors";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-around",
      height: "70px"
    }
  },
  title: {
    fontFamily: "Quicksand",
    color: colors.main,
    fontWeight: "700",
    flexGrow: "1"
  },
  colored: {
    color: colors.white,
    transition: "color .5s ease",
    "&:hover": {
      color: colors.main
    }
  }
}));

export default function Nav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  return (
    <React.Fragment>
      <AppBar position="static" color="secondary" style={{ flexGrow: 1 }}>
        <Toolbar>
          <h2 className={classes.title}>
            Hadi <span className={classes.colored}>Houssainy</span>
          </h2>
          <Hidden xsDown>
            <div>
              <Button color="primary" component={RouterLink} to="/">
                Home
              </Button>

              <Button color="primary" component={RouterLink} to="/about">
                About
              </Button>

              <Button color="primary" component={RouterLink} to="/works">
                Works
              </Button>
            </div>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Hidden smUp>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          style={{
            position: "fixed",
            width: "100%",
            bottom: "0",
            top: "auto",
            zIndex: "1000",
            backgroundColor: colors.background,
            color: colors.white
          }}
        >
          <BottomNavigationAction
            style={{ color: "#fff" }}
            label="Home"
            icon={<HomeIcon />}
            component={RouterLink}
            to="/"
            color="primary"
          />
          <BottomNavigationAction
            style={{ color: "#fff" }}
            label="About"
            icon={<InfoIcon />}
            component={RouterLink}
            to="/about"
            color="primary"
          />
          <BottomNavigationAction
            style={{ color: "#fff" }}
            label="Works"
            icon={<ContactsIcon />}
            component={RouterLink}
            to="/works"
            color="primary"
          />
          <BottomNavigationAction
            style={{ color: "#fff" }}
            label="Contact"
            icon={<ContactsIcon />}
            component={RouterLink}
            to="/contact"
            color="primary"
          />
        </BottomNavigation>
      </Hidden>
    </React.Fragment>
  );
}
