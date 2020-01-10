import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  Grid,
  makeStyles,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  CircularProgress
} from "@material-ui/core";
import colors from "./colors";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: colors.white,
    padding: theme.spacing(1, 2),
    flexGrow: 1,
    width: "100vw"
  },
  title: {
    fontFamily: "Quicksand",
    fontWeight: "700",
    fontSize: "8vmin",
    color: colors.background,
    margin: "0 0"
  },
  colored: {
    color: colors.main
  },
  main: {
    color: colors.background,
    width: "100%"
  },
  card: {
    color: colors.white,
    backgroundColor: colors.background,
    maxwidth: "275px",
    width: "275px",
    margin: theme.spacing(0.5, 0.5),
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: theme.spacing(0.5, 0)
    },
    minHeight: "200px"
  },
  skeleton: {
    height: "140px",
    width: "100%",
    backgroundColor: colors.main
    // // background:
    //   "linear-gradient(111deg, rgba(51,55,69,1) 0%, rgba(20,175,94,1) 22%, rgba(0,255,111,1) 40%)"
  }
}));

const Projects = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      await axios
        .get("https://api.github.com/users/0haD0/repos")
        .then(res => {
          setData(res.data);
          setIsLoading(false);
        })
        .catch(error => {
          setIsLoading(false);
          setIsError(false);
        });
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <CircularProgress color="secondary" />
        </div>
      ) : isError ? (
        <h1>Error</h1>
      ) : (
        <Grid
          container
          spacing={1}
          alignItems="flex-start"
          style={{ width: "100%", minHeight: "90vh" }}
        >
          {data.map((item, i) => (
            // <Grid container item xs style={{ maxHeight: "150px" }}>
            <Card className={classes.card} key={i}>
              <div className={classes.skeleton}></div>
              <CardContent>
                <Typography variant="h4">{item.name}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" href={item.html_url}>
                  View Project
                </Button>
              </CardActions>
            </Card>
            // </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};
export default function Works() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <h3 className={classes.title}>
          Works<span className={classes.colored}>.</span>
        </h3>
        <Grid item xs={12} container direction="row" className={classes.main}>
          <Projects />
        </Grid>
      </Grid>
    </div>
  );
}
