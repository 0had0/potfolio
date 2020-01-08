import React from "react";
import { makeStyles } from "@material-ui/core";
import colors from "./colors";

const useStyles = makeStyles({
  root: {
    display: "flex",
    position: "static",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "10vh",
    width: "100%",
    backgroundColor: colors.white,
    color: colors.background
  }
});
const Footer = props => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <p>Creacted by Hadi Houssainy @2020</p>
    </footer>
  );
};

export default Footer;
