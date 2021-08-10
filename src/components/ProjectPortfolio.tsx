import React from "react";

import Button from "./Button";
import Title from "./Title";
import IconGithub from "./IconGithub";
import portfolioScreen from "../images/portfolioScreen.png";

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

    text: {
      paddingTop: "2rem",
      lineHeight: "1.75",
      [currentTheme.breakpoints.down("md")]: {
        paddingTop: "3rem",
      },
    },
    img: {
      borderRadius: "1rem",
      width: "22rem",
      height: "auto",
      [currentTheme.breakpoints.down("md")]: {
        height: "auto",
        
      },
    },
    icon: {
      paddingTop: "3rem",
    },
  })
);

const ProjectPortfolio = () => {
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
          <Title title="Mon portfolio"></Title>
        </Grid>

        <Grid item>
          <Typography
            variant="h5"
            component="h2"
            color="textPrimary"
            align="justify"
            className={classes.text}
          >
            J'ai réalisé mon portfolio en TypeScript avec React, en me basant
            sur le modèle optimal de base que fournit l'outil officiel CRA (
            <a
              href="https://create-react-app.dev/"
              rel="noreferrer"
              target="_blank"
            >
              Create React App
            </a>
            ), me permettant d’avoir un projet React qui fonctionne.
            <br />
            Pour la librairie graphique, j'ai utilisé{" "}
            <a href="https://material-ui.com/" rel="noreferrer" target="_blank">
              matérial-ui
            </a>{" "}
            et la notion de theming pour rendre mon projet plus maintenable et
            plus évolutif.
          </Typography>
        </Grid>

        <div>
          <Grid item className={classes.icon}>
            <Button
              startIcon={<IconGithub />}
              href="https://github.com/cindyolivier/portfolio"
              title="GitHub"
            />
          </Grid>
        </div>
      </Grid>
      <Grid
      container
      item
      xs={12}
      md={2}
      alignContent="center"
      justify="center"
    >
      <img className={classes.img} src={portfolioScreen} alt="AjcourtageSite" />
    </Grid>
    </Grid>
  );
};
export default ProjectPortfolio;
