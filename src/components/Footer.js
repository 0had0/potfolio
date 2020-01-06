import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "10vh",
    width: "100%"
    // backgroundColor: "white"
  }
});
const Footer = props => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Typography color="white">Creacted by Hadi Houssainy @2020</Typography>
    </footer>
  );
};

export default Footer;
