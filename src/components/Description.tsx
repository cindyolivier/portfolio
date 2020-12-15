import React from "react";

import Button from "./Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((currentTheme: Theme) =>
  createStyles({
    root: {
      padding: "5rem 0",
      backgroundColor: currentTheme.palette.background.paper,
      [currentTheme.breakpoints.down("md")]: {
        flexDirection: "column-reverse",
        alignItems: "center",
      },
    },

    largeSize: {
      [currentTheme.breakpoints.up("xl")]: {
        width: "60%",
        margin: "auto",
        padding: "3rem 0 3rem 0",
      },
    },

    text: {
      lineHeight: "1.75",
    },

    img: {
      borderRadius: "3rem",
      width: "14rem",
      height: "auto",
      [currentTheme.breakpoints.down("md")]: {
        marginTop: "5rem",
        height: "auto",
      },
      [currentTheme.breakpoints.down("xs")]: {
        marginTop: "5rem",
        height: "80%",
      },
    },

    title: {
      [currentTheme.breakpoints.down("md")]: {
        textAlign: "center",
      },
    },
  })
);

const Description = () => {
  const classes = useStyles();

  return (
    <Grid container justify="space-around" className={classes.root}>
      <Grid container justify="space-around" className={classes.largeSize}>
        <Grid
          container
          item
          xs={12}
          md={6}
          justify="space-around"
          alignItems="center"
          direction="column"
          spacing={5}
        >
          <Grid item>
            <Typography variant="h3" component="h1" className={classes.title}>
              À propos de moi
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h5"
              component="h2"
              color="textPrimary"
              align="justify"
              className={classes.text}
            >
              Je m'appelle Cindy OLIVIER, j'ai 27 ans et j'habite à{" "}
              <a
                href="https://www.google.com/maps/place/13790+Rousset/@43.4869388,5.585218,13z/data=!3m1!4b1!4m5!3m4!1s0x12c99b396e38a4b5:0x40819a5fd970020!8m2!3d43.480621!4d5.622019"
                rel="noreferrer"
                target="_blank"
              >
                Rousset
              </a>{" "}
              près de Aix-en-Provence.
              <br />
              Je me suis réorientée dans le développement vers printemps 2020.
              J'ai fait la formation 3W Academy à Aix-en-Provence, ou j'ai
              appris différents langages comme HTML/CSS, MySQL, PHP et
              JavaScript. <br />
              J'ai également pu faire un stage de 5 mois à{" "}
              <a href="https://gojob.com/" rel="noreferrer" target="_blank">
                Gojob
              </a>
              . Lors de ce stage j'ai appris le langage TypeScript et la
              librairie React pour lesquels j'ai eu un réel coup de coeur.{" "}
              <br />
              Dans ce Portfolio je vais vous expliquer ce que j'ai réalisé.
              <br />
              Ayant envie d'en apprendre encore plus dans ce milieu qui me plait
              tant, je suis particulièrement passionnée par le développement en
              langage TypeScript et avec la bibliothèque React.
            </Typography>
          </Grid>
          <Grid item>
            <Button
              startIcon={<FontAwesomeIcon icon={faFilePdf} />}
              href="../documents/CV-2020.pdf"
              title="Voir mon CV"
            />
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
            src="../images/img-profil.jpeg"
            alt="profil"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Description;
