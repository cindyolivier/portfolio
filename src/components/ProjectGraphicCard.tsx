import React from "react";

import Title from "./Title";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((currentTheme: Theme) =>
  createStyles({
    sectionProject: {
      [currentTheme.breakpoints.down("md")]: {
        padding: "1rem",
        paddingBottom: "5rem",
      },
    },

    img: {
      borderRadius: "1rem",
      width: "12rem",
      height: "auto",
      [currentTheme.breakpoints.down("md")]: {
        height: "100%",
      },
    },

    titleImg: {
      margin: "3rem 0 1rem 0",
      fontStyle: "italic",
    },

    text: {
      paddingTop: "2rem",
      lineHeight: "1.75",
      [currentTheme.breakpoints.down("md")]: {
        paddingTop: "3rem",
      },
    },
  })
);

const ProjectGraphicCard = () => {
  const classes = useStyles();

  return (
    <Grid container justify="space-between">
      <Grid
        container
        item
        xs={12}
        md={5}
        justify="space-around"
        alignItems="center"
        direction="column"
        className={classes.sectionProject}
      >
        <Grid item>
          <Title title="Page en accord avec une charte graphique"></Title>
        </Grid>

        <Grid item>
          <Typography
            variant="h5"
            component="h2"
            color="textPrimary"
            align="justify"
            className={classes.text}
          >
            Dans la suite de mon stage à Gojob, j’ai dû travailler sur la page
            permettant d’afficher une offre d’emploi afin d’implémenter une
            nouvelle charte graphique fournis par l’UX Designer sur{" "}
            <a
              href="https://www.invisionapp.com/"
              rel="noreferrer"
              target="_blank"
            >
              InVison
            </a>
            .<br />
            Le but était de rendre l’expérience de l'utilisateur plus lisible et
            agréable. <br />
            Techniquement, j’ai donc dû travailler à nouveau sur l’application
            web/mobile et sur le{" "}
            <a
              href="https://storybook.js.org/"
              rel="noreferrer"
              target="_blank"
            >
              Storybook
            </a>
            . <br />
            La plus grosse complexité de cette tâche était de prendre
            connaissance du code déjà existant et de faire mes modifications
            tout en respectant le code déjà crée et les pratiques mises en
            place.
          </Typography>
        </Grid>
      </Grid>

      <Grid container justify="center" xs={12} md={3}>
        <Grid item>
          <Typography
            variant="subtitle1"
            component="h2"
            className={classes.titleImg}
          >
            Ancienne charte
          </Typography>
        </Grid>

        <Grid container justify="space-between">
          <Grid
            container
            item
            xs={12}
            md={1}
            alignContent="center"
            justify="center"
          >
            <img
              className={classes.img}
              src="../images/oldScreenshot2.jpeg"
              alt="newDesignPage1"
            />
          </Grid>

          <Grid
            container
            item
            xs={12}
            md={1}
            alignContent="center"
            justify="center"
          >
            <img
              className={classes.img}
              src="../images/oldScreenshot1.jpeg"
              alt="newDesignPage2"
            />
          </Grid>
        </Grid>

        <Grid item>
          <Typography
            variant="subtitle1"
            component="h2"
            className={classes.titleImg}
          >
            Nouvelle charte
          </Typography>
        </Grid>

        <Grid container justify="space-between">
          <Grid
            container
            item
            xs={12}
            md={1}
            alignContent="center"
            justify="center"
          >
            <img
              className={classes.img}
              src="../images/newScreenshot1.jpeg"
              alt="newDesignPage2"
            />
          </Grid>

          <Grid
            container
            item
            xs={12}
            md={1}
            alignContent="center"
            justify="center"
          >
            <img
              className={classes.img}
              src="../images/newScreenshot2.jpeg"
              alt="newDesignPage2"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default ProjectGraphicCard;
