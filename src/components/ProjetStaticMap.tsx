import React from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((currentTheme: Theme) =>
  createStyles({
    root: {
      paddingTop: "5rem",
      backgroundColor: currentTheme.palette.background.paper,
    },

    sectionProjet: {
      [currentTheme.breakpoints.down("md")]: {
        padding: "1rem",
        paddingBottom: "5rem",
      },
    },

    img: {
      borderRadius: "20px",
      width: "20rem",
      height: "auto",
      [currentTheme.breakpoints.down("md")]: {
        height: "100%",
      },
    },

    title: {
      borderBottom: "1px solid",
      paddingBottom: "1rem",
      [currentTheme.breakpoints.down("md")]: {
        textAlign: "center",
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

const ProjetStaticMap = () => {
  const classes = useStyles();

  return (
    <Grid container justify="space-around" className={classes.root}>
      <Grid
        container
        item
        xs={12}
        md={4}
        justify="space-around"
        alignItems="center"
        direction="column"
        className={classes.sectionProjet}
      >
        <Grid item>
          <Typography variant="h3" align="center" className={classes.title}>
            Une carte statique
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
            <li>
              Toujours pendant mon stage, après quelques mois, on a commencé à
              me donner des features à faire. Comme là par exemple ou l'on m'a
              demandé de faire d'une carte dynamique une carte statique. J'ai du
              lors de cette feature utilisé la librairie
              react-static-google-map, j'ai également crée un nouveau cercle de
              localisation avec une fonction d'algorithme.
            </li>
            <br />
            <li>
              Dans une nouvelle feature, afin d'optimiser les performances et
              les couts pour l'entreprise, on m'a demander d'afficher la carte
              statique uniquement lorsqu'elle est visible sur la page. Pour ce
              faire, j'ai utilisé la fonctionnalitée appelée
              IntersectionObserver avec la librairie
              react-intersection-observer.
            </li>
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
export default ProjetStaticMap;
