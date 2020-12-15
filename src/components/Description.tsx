// Utiliser les spacing + flex grid pour chaques composants
// Faire un composant bouton
// Faire une composant pour les boutons icons
// Faire le contenu
// Refaire le CV

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import Button from "./Button";

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

    text: {
      lineHeight: "1.75",
    },

    img: {
      borderRadius: "50px",
      width: "14rem",
      height: "auto",
      [currentTheme.breakpoints.down("md")]: {
        marginBottom: "3rem",
        height: "50%",
      },
    },

    resumeButton: {
      borderRadius: "20px",
      textTransform: "none",
      "&:hover": {
        backgroundColor: currentTheme.palette.secondary.main,
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
          <Typography variant="h3" className={classes.title}>
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
            Je m'appelle Cindy OLIVIER, j'ai 27 ans et j'habite à Rousset.
            <br />
            Je me suis réorientée dans le développement il y a 1 an à peu près.
            J'ai fais la formation 3W Academy à Aix-en-Provence, ou j'ai pu
            apprendre différents langages comme HTML/CSS, MySQL, PHP et
            JavaScript. <br />
            J'ai également pu faire un stage de 5 mois à Gojob. Lors de ce stage
            j'ai pu apprendre le langage TypeScript et la librairie React pour
            lesquels j'ai eu un réel coup de coeur. <br />
            Dans ce Portfolio je vais vous expliquer ce que j'ai pu réaliser.
            <br />
            Ayant envie d'en apprendre encore plus dans ce milieu qui me plait
            tant, je me ferais un plaisir de pouvoir évoluer et travailler à vos
            côtés.
          </Typography>
        </Grid>
        <Grid item>
          <Button
            startIcon={<FontAwesomeIcon icon={faFilePdf} />}
            href="../documents/CV-2020.pages"
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
  );
};
export default Description;
