import React from "react";

import Button from "../Button";

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
    add: {
      backgroundColor: "grey",
      width: "300px",
      height: "250px",
    }
  })
);

const DescriptionAdd = () => {
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
              Je m'appelle Cindy OLIVIER, j'ai 28 ans et j'habite à{" "}
              <a
                href="https://www.google.com/maps/place/13790+Rousset/@43.4869388,5.585218,13z/data=!3m1!4b1!4m5!3m4!1s0x12c99b396e38a4b5:0x40819a5fd970020!8m2!3d43.480621!4d5.622019"
                rel="noreferrer"
                target="_blank"
              >
                Rousset
              </a>{" "}
              près de Aix-en-Provence.
              <br />
              Je me suis réorientée dans le développement Web début 2020. J'ai
              fait la formation 3W Academy à Aix-en-Provence, où j'ai appris les
              bases du web avec des langages comme HTML/CSS, MySQL, PHP et
              JavaScript. J'ai également pu faire un stage de 6/7 mois à{" "}
              <a href="https://gojob.com/" rel="noreferrer" target="_blank">
                Gojob
              </a>
              , où j'ai appris le langage TypeScript et la librairie React, qui
              m'ont permis de gagner de l'expérience. <br />
              Par la suite, pendant plusieurs mois, j'ai réalisé une application
              web (React / Gatsby) avec un CMS (Sanity) pour mon premier client,
              pour qu'il puisse avoir une vitrine totalement personnalisé et
              personnalisable par lui-même. Ayant envie d'en apprendre encore
              plus dans ce milieu qui me plait tant, je serais ravie de pouvoir
              travailler à vos côtés et de mettre mes compétences à vos
              services. <br />
              Dans ce Portfolio je vais vous expliquer ce que j'ai réalisé.
              Ayant envie d'en apprendre encore plus dans ce milieu qui me plait
              tant, je suis particulièrement passionnée par le développement en
              langage TypeScript et avec la bibliothèque React.
            </Typography>
          </Grid>
          <Grid item>
            <Button
              startIcon={<FontAwesomeIcon icon={faFilePdf} />}
              href="../documents/CV-2021.pdf"
              title="Voir mon CV"
            />
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          md={2}
          alignContent="space-around"
          justify="center"
        >
          <img
            className={classes.img}
            src="../images/img-profil.jpeg"
            alt="profil"
          />
          
          <div className={classes.add}></div>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default DescriptionAdd;
