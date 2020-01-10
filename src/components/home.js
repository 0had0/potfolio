import React from "react";
import { makeStyles, IconButton } from "@material-ui/core";

import Typical from "react-typical";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

import colors from "./colors";

const useStyles = makeStyles({
  root: {
    minHeight: "90vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  section: {
    display: "flex",
    width: "90%",
    maxHeight: "90%",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "flex-start",
    fontSize: "4vmin",
    fontFamily: "Quicksand"
  },
  socialBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "start",
    minWidth: "200px",
    justifyContent: "space-between"
  },
  selected: {
    backgroundColor: colors.white,
    color: colors.background
  }
});
function Home(props) {
  const classes = useStyles();
  return (
    <main className={classes.root}>
      <section className={classes.section}>
        <h1>
          <span>
            <Typical
              steps={[
                "I'm Hadi Houssainy !",
                1000,
                "I'm a Web developer.",
                1000,
                "I'm a Creactive Mind.",
                1000
              ]}
              loop={Infinity}
              // wrapper="h1"
            />
          </span>
        </h1>
        <p>
          As a <b style={{ color: colors.main }}>full stack web developer</b>{" "}
          with some experience I create{" "}
          <i className={classes.selected}>amazing websites</i> and web apps to
          make the internet a better place. Get in touch to discuss how we can
          work together.
        </p>
        <div className={classes.socialBar}>
          <IconButton href="https://github.com/0had0/">
            <GitHubIcon color="primary" />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/hadi-h-908832b3/">
            <LinkedInIcon color="primary" />
          </IconButton>
          <IconButton href="https://www.facebook.com/hadi.houssainy.1">
            <FacebookIcon color="primary" />
          </IconButton>
          <IconButton href="https://www.instagram.com/hadihoussainy7575/">
            <InstagramIcon color="primary" />
          </IconButton>
        </div>
      </section>
    </main>
  );
}

export default Home;
