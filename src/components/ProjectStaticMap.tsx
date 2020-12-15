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
      width: "20rem",
      height: "auto",
      [currentTheme.breakpoints.down("md")]: {
        height: "auto",
      },
    },

    text: {
      lineHeight: "1.75",
      paddingTop: "2rem",
      [currentTheme.breakpoints.down("md")]: {
        paddingTop: "3rem",
      },
    },
  })
);

const ProjectStaticMap = () => {
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
          <Title title="Une carte statique"></Title>
        </Grid>

        <Grid item>
          <Typography
            variant="h5"
            component="h2"
            color="textPrimary"
            align="justify"
            className={classes.text}
          >
            Sur l’application web et mobile de Gojob, il y a des offres
            d’emplois comportant une carte indiquant la localisation de la
            mission concernée.
            <br />
            Cette carte était une carte Google Map dynamique et elle était
            affichée à chaque visite de l'utilisateur, ce qui engendrait un coût
            du service Google très important.
            <br />
            Techniquement, j’ai dû travailler sur l’application web/mobile et
            sur un projet{" "}
            <a
              href="https://storybook.js.org/"
              rel="noreferrer"
              target="_blank"
            >
              Storybook
            </a>{" "}
            permettant d’avoir une bibliothèque de composant réutilisable sur
            les autres projets front-end. Ces projets étaient en React,
            TypeScript et Cordova pour la partie mobile.
            <br />
            Le but était d’optimiser les performances et également les coûts
            pour l’entreprise.
            <ul>
              <li>
                Dans un premier temps, j’ai implémenté une carte Google Map
                Static à l’aide du package{" "}
                <a
                  href="https://www.npmjs.com/package/react-static-google-map"
                  rel="noreferrer"
                  target="_blank"
                >
                  react-static-google-map
                </a>
                , qui permet de diviser les coûts par 3 (
                <a
                  href="https://cloud.google.com/maps-platform/pricing/sheet"
                  rel="noreferrer"
                  target="_blank"
                >
                  voir tarifs
                </a>
                ).
              </li>
              <br />
              <li>
                Pour la deuxième étape, j’ai mis à jour la carte dans le
                composant qui affiche l'offre d'emploi, afin qu’elle ne soit
                rendue uniquement que si l’utilisateur vient à l’afficher sur
                son écran. <br />
                Cela permet de ne pas avoir de coût Google Map si l’utilisateur
                ne fait pas l’action d’aller voir la carte. <br />
                J'ai utilisé la fonctionnalité appelée{" "}
                <a
                  href="https://developer.mozilla.org/fr/docs/Web/API/Intersection_Observer_API"
                  rel="noreferrer"
                  target="_blank"
                >
                  IntersectionObserver
                </a>{" "}
                avec la librairie{" "}
                <a
                  href="https://www.npmjs.com/package/react-intersection-observer"
                  rel="noreferrer"
                  target="_blank"
                >
                  react-intersection-observer
                </a>
                .
              </li>
            </ul>
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={12}
        md={2}
        alignContent="center"
        justify="center"
      >
        <img
          className={classes.img}
          src="../images/staticMap.png"
          alt="staticMap"
        />
      </Grid>
    </Grid>
  );
};
export default ProjectStaticMap;
