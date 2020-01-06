import React from "react";
import { Typography, Grid, makeStyles, Link } from "@material-ui/core";

import "./home.css";
import Typical from "react-typical";
import blue from "@material-ui/core/colors/blue";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

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
  socialBtn: {}
});
export default function Home(props) {
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
          As a full stack web developer with some experience I create amazing
          websites and web apps to make the internet a better place. Get in
          touch to discuss how we can work together.
        </p>
        <div className={classes.socialBar}>
          <Link href="https://github.com/0had0/">
            <GitHubIcon className={classes.socialBtn} />
          </Link>
          <Link>
            <LinkedInIcon className={classes.socialBtn} />
          </Link>
          <Link>
            <FacebookIcon className={classes.socialBtn} />
          </Link>
          <Link>
            <InstagramIcon className={classes.socialBtn} />
          </Link>
        </div>
      </section>
    </main>
  );
}

/*
<Typical
  steps={[
    "'m Hadi Houssainy !",
    1000,
    "'m a Web developer.",
    1000,
    "'m a Creactive Mind.",
    1000
  ]}
  loop={Infinity}
  // wrapper="h4"
/>

As a full stack web developer with some experience I create amazing
websites and web apps to make the internet a better place. Get in
touch to discuss how we can work together.
*/
