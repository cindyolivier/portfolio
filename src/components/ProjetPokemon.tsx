import React from "react";
import PokemonCard from "../images/pokemonCard.png";

import Button from "./Button";
import IconGithub from "./IconGithub";
import IconNetlify from "./IconNetlify";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((currentTheme: Theme) =>
  createStyles({
    root: {
      padding: "5rem 0",
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

    text: {
      lineHeight: "1.75",
      [currentTheme.breakpoints.down("md")]: {
        paddingTop: "3rem",
      },
    },

    title: {
      borderBottom: "1px solid",
      paddingBottom: "1rem",
      [currentTheme.breakpoints.down("md")]: {
        textAlign: "center",
      },
    },

    icon: {
      paddingTop: "3rem",
    },
  })
);

const ProjetPokemon = () => {
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
            La carte pokémon
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
            Lors de mon stage à Gojob j'ai pu réaliser une carte pokémon
            dynamique dans mon apprentissage de React et TypeScript. <br />
            J'ai du faire appel à un serveur API, et j'ai utilisé le package
            style-component pour le CSS de ce projet.
          </Typography>
        </Grid>

        <div>
          <Grid item className={classes.icon}>
            <Button
              startIcon={<IconGithub />}
              href="https://github.com/cindyolivier/Pokemon"
              title="GitHub"
            />
          </Grid>

          <Grid item className={classes.icon}>
            <Button
              startIcon={<IconNetlify />}
              href="https://condescending-montalcini-e0a923.netlify.app/"
              title="Netlify"
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
        <img className={classes.img} src={PokemonCard} alt="PokemonCard" />
      </Grid>
    </Grid>
  );
};
export default ProjetPokemon;
