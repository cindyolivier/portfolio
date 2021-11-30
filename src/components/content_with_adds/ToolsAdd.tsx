import React from "react";

import Title from "../Title";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((currentTheme: Theme) =>
  createStyles({
    sectionOutils: {
      padding: "4rem 0",
      listStyleType: "none",
      [currentTheme.breakpoints.down("md")]: {
        paddingTop: "1rem",
        paddingBottom: "1rem",
      },
    },

    img: {
      height: "5rem",
      marginBottom: "2rem",
      [currentTheme.breakpoints.down("md")]: {
        marginBottom: "1rem",
      },
    },

    outil: {
      [currentTheme.breakpoints.down("md")]: {
        padding: "2rem",
      },
    },
    add: {
      backgroundColor: "grey",
      width: "250px",
      height: "50px",
    }
  })
);

const ToolsAdd = () => {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Grid item>
        <Title title="Outils"></Title>
      </Grid>

      <Grid
        container
        item
        xs={12}
        justify="space-around"
        className={classes.sectionOutils}
      >
        <Grid item className={classes.outil}>
          <img
            className={classes.img}
            src="../icons/vscode-icon.png"
            alt="vsCode"
          />
          <Typography
            variant="subtitle1"
            component="h1"
            align="center"
            color="textPrimary"
          >
            VsCode
          </Typography>
        </Grid>

        <Grid item className={classes.outil}>
          <img
            className={classes.img}
            src="../icons/netlify-icon.png"
            alt="Netlify"
          />
          <Typography
            variant="subtitle1"
            component="h1"
            align="center"
            color="textPrimary"
          >
            Netlify
          </Typography>
        </Grid>

        <Grid item className={classes.outil}>
          <img className={classes.img} src="../icons/git-icon.png" alt="Git" />
          <Typography
            variant="subtitle1"
            component="h1"
            align="center"
            color="textPrimary"
          >
            Git
          </Typography>
        </Grid>

        <Grid item className={classes.outil}>
          <img
            className={classes.img}
            src="../icons/gitLab-icon.png"
            alt="GitLab"
          />
          <Typography
            variant="subtitle1"
            component="h1"
            align="center"
            color="textPrimary"
          >
            GitLab
          </Typography>
        </Grid>
      </Grid>
      <div className={classes.add}></div>
    </Grid>
  );
};
export default ToolsAdd;
