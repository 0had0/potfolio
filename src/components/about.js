import React from "react";
import {
  Chip,
  Grid,
  makeStyles,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
  Avatar,
  Link
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import colors from "./colors";

const useStyle = makeStyles(theme => ({
  Order: {
    width: "100%",
    padding: "10px 0",
    order: 1,

    [theme.breakpoints.up(`sm`)]: {
      order: 3,
      minHeight: "90vh"
    }
  },
  chip: {
    margin: theme.spacing(0.2)
  },
  title: {
    fontFamily: "Quicksand",
    fontWeight: "700",
    fontSize: "8vmin",
    color: colors.background,
    margin: "0"
  },
  profile: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    // justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column"
    },
    alignItems: "center",
    margin: theme.spacing(1, 0)
  },
  avatar: {
    width: "40%",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    },
    height: "auto",
    borderRadius: "50%",
    // border: "3px solid" + colors.background,
    border: "5px solid" + colors.main
    // padding: theme.spacing(0.5, 0.5)
  },
  profileTypo: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: theme.spacing(2, 5),
    [theme.breakpoints.down("sm")]: {
      borderLeft: "5px solid " + colors.background,
      borderRight: "5px solid " + colors.background,
      padding: theme.spacing(5, 5)
    }
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
          size="small"
          color="primary"
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
        <h3 style={{ color: colors.white, margin: "0 0" }}>{title}</h3>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails style={{ backgroundColor: "#232630" }}>
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
        <div className={classes.profile}>
          <Avatar
            alt="Hadi Houssainy"
            src="https://instagram.fbey5-1.fna.fbcdn.net/v/t51.2885-15/e35/61538460_332432414101064_9031629739085302686_n.jpg?_nc_ht=instagram.fbey5-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=6Imh45ivyUoAX9THXdp&oh=1030afe8b257b1a14eaa2cb689303ecd&oe=5EA5AEF9"
            className={classes.avatar}
          />
          <div className={classes.profileTypo}>
            <Typography color="secondary">
              Engineering student at{" "}
              <Link href="http://www.ulfg.ul.edu.lb/" style={{ color: "blue" }}>
                <u>Lebanese University Faculty of Engineering</u>
              </Link>
              .
            </Typography>
            <Typography color="secondary">Freelance Web developer.</Typography>
            <Typography color="secondary">
              Studied at{" "}
              <Link
                href="https://www.freecodecamp.org/"
                style={{ color: colors.main }}
              >
                <u>FreeCodeCamp</u>
              </Link>
              .
            </Typography>
            <Typography color="secondary">
              From{" "}
              <Link
                href="https://goo.gl/maps/oWcHqeaZjwGegqnA8"
                style={{ color: colors.background }}
              >
                <b>Beirut, Lebanon</b>
              </Link>
              .
            </Typography>
          </div>
        </div>
        <h1 className={classes.title}>
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
            <u>nodeJS</u> at age 15, for this reason, I enjoy multi-tasking and
            getting to wear many hats. These have made me gain a lot of
            experience, having worked with Frameworks like <b>React</b> and{" "}
            <b>Express</b>.
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
