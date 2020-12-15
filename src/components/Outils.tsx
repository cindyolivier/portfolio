// comment faire pour enlever l'espace entre les images en responsive
// comment ajouter une couleur
// comment ajouter la police en typographie

import React from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((currentTheme: Theme) =>
  createStyles({
    root: {
      backgroundColor: currentTheme.palette.background.paper,
    },

    title: {
      borderBottom: "1px solid",
      paddingBottom: "1rem",
      [currentTheme.breakpoints.down("md")]: {
        textAlign: "center",
      },
    },

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
  })
);

const CompetencesTechniques = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="space-around"
      alignItems="center"
      direction="column"
      className={classes.root}
    >
      <Grid item>
        <Typography variant="h3" className={classes.title}>
          Outils
        </Typography>
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
    </Grid>
  );
};
export default CompetencesTechniques;
