import React from "react";
import {
  Chip,
  Grid,
  makeStyles,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "./about.css";
import colors from "./colors";

const useStyle = makeStyles(theme => ({
  Order: {
    wodth: "100%",
    padding: "10px 0",
    order: 1,

    [theme.breakpoints.up(`sm`)]: {
      order: 3
    }
  },
  chip: {
    margin: theme.spacing(0.2)
  }
}));

const Chips = props => {
  const classes = useStyle();
  const { items } = props;
  return (
    <Grid container alignContent="space-around">
      {items.map((item, i) => (
        <Chip
          className={classes.chip}
          key={i}
          variant="outlined"
          label={item}
          color="primary"
          size="small"
        />
      ))}
    </Grid>
  );
};

const Section = props => {
  const { title, items } = props;
  return (
    <ExpansionPanel
      style={{ backgroundColor: colors.background }}
      defaultExpanded
    >
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <h3 style={{ color: colors.main }}>{title}</h3>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Chips items={items} />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};
export default function About() {
  const classes = useStyle();
  return (
    <Grid container style={{ backgroundColor: colors.white }}>
      <Grid item xs={12} sm={3} md={3} className={classes.Order}>
        <Section
          className="skills"
          title="My Skills"
          items={[
            "Html5",
            "CSS3",
            "JavaScript",
            "Python",
            "ES6",
            "ReactJS",
            "nodeJS",
            "Django",
            "MongoDB",
            "MySQL",
            "GIMP",
            "Inkscape"
          ]}
        />
        <Section
          className="softS"
          title="Soft Skills"
          items={[
            "Strong communication skills",
            "Leadership Skills",
            "Problem Solving",
            "Creative Thinking",
            "Wide array of skills",
            "Teamwork"
          ]}
        />
        <Section
          className="lang"
          title="Languages"
          items={["English", "Frensh", "Arabic"]}
        />
      </Grid>
      <Grid
        style={{ order: "2", padding: "1vw 4vw" }}
        item
        xs={12}
        sm={8}
        md={8}
      >
        <h1 style={{ color: colors.background, margin: "0" }} className="title">
          About<span style={{ color: colors.main }}>.</span>
        </h1>
        <br />
        <article>
          <Typography color="secondary">
            The advancement of technology today is amazing and has helped
            improve our society. Having a website that expresses the cohesive
            brand of your business makes it easier for visitors (potential
            customers) to navigate, understand and have a better experience
            visiting your website.
          </Typography>
        </article>
        <br />
        <article>
          <Typography color="secondary">
            As a Web Developer, I love innovations and technologies right from
            childhood. I was fortunate to learn <u>HTML</u> at age 12 and{" "}
            <u>nodeJS</u>
            at age 15, for this reason, I enjoy multi-tasking and getting to
            wear many hats. These have made me gain a lot of experience, having
            worked with Frameworks like <b>React</b> and <b>Express</b>.
          </Typography>
        </article>
        <br />
        <article>
          <Typography color="secondary">
            My duties embrace making your website easily accessible on any
            device, helping your business get have a good presentation, and my
            skill set include Web Development, JavaScript Development, API
            integration <b>(nodeJS, Django)</b>, React Development and{" "}
            <span style={{ color: "green" }}>Python programming</span> just to
            mention a few.
          </Typography>
        </article>
      </Grid>
    </Grid>
  );
}
