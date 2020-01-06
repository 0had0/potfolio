import React from "react";
import { Typography, Grid, makeStyles } from "@material-ui/core";

import "./home.css";
import Typical from "react-typical";

const useStyles = makeStyles({
  root: {
    height: "90vh",
    width: "100%",
    padding: "3% 5%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  centered: {
    width: "70%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  title: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  }
});
export default function Home(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.centered}>
        <div className={classes.title}>
          <Typography
            variant="h3"
            color="primary"
            style={{ marginRight: "6px" }}
          >
            {"I'm "}
          </Typography>
          <Typography variant="h3" color="primary">
            <Typical
              steps={[
                " Hadi Houssainy !",
                1000,
                " a Web developer.",
                1000,
                " a Creactive Mind.",
                1000
              ]}
              loop={Infinity}
              wrapper="h4"
            />
          </Typography>
        </div>
        <Typography variant="h5">
          As a full stack web developer with some experience I create amazing
          websites and web apps to make the internet a better place. Get in
          touch to discuss how we can work together.
        </Typography>
      </div>
    </div>
  );
}
