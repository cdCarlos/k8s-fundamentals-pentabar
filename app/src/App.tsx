import "./App.scss";

import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { AppBarComponent } from "./components/Header/AppBar/AppBar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      borderRadius: 0,
      height: "100vh",
    },
  })
);

export function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBarComponent></AppBarComponent>
      <CssBaseline />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <p>
              POD ID: <b>{process.env.REACT_APP_POD_NAME || "Unknown"}</b>
            </p>
            <p>
              POD IP: <b>{process.env.REACT_APP_POD_IP || "Unknown"}</b>
            </p>
            <p>
              POD Namespace:{" "}
              <b>{process.env.REACT_APP_POD_NAMESPACE || "Unknown"}</b>
            </p>
            <p>
              Node Name: <b>{process.env.REACT_APP_NODE_NAME || "Unknown"}</b>
            </p>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
