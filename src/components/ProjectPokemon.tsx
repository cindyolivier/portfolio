import React from "react";

import PokemonCard from "../images/pokemonCard.png";
import Button from "./Button";
import Title from "./Title";
import IconGithub from "./IconGithub";
import IconNetlify from "./IconNetlify";

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
      width: "18rem",
      height: "auto",
      [currentTheme.breakpoints.down("md")]: {
        height: "100%",
      },
    },

    text: {
      lineHeight: "1.75",
      paddingTop: "3rem",
      [currentTheme.breakpoints.down("md")]: {
        paddingTop: "3rem",
      },
    },

    button: {
      display: "flex",
    },

    icon: {
      padding: "3rem 1rem 0 1rem",
    },
  })
);

const ProjectPokemon = () => {
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
          <Title title="La carte pokémon"></Title>
        </Grid>

        <Grid item>
          <Typography
            variant="h5"
            component="h2"
            color="textPrimary"
            align="justify"
            className={classes.text}
          >
            Pour le début de mon stage à Gojob, j’ai commencé par
            l’apprentissage du langage TypeScript et de la librairie React à
            travers une petite application React, afin d’afficher une carte
            dynamique pokémon.
            <br /> Pour la rendre dynamique, j'ai du faire appel à un serveur
            API REST (
            <a href="https://pokeapi.co/" rel="noreferrer" target="_blank">
              PokéAPI
            </a>
            ) pour pouvoir avoir accès aux différentes données de chaque
            pokémon.
            <br />
            Pour réaliser ce projet j'ai dû faire du functional component ce qui
            m'a permis d’utiliser des hooks tel que useState et useEffect. Pour
            les requêtes API j'ai utilisé{" "}
            <a
              href="https://www.npmjs.com/package/axios"
              rel="noreferrer"
              target="_blank"
            >
              axios
            </a>{" "}
            .
            <br />
            J’ai également utilisé le package {""}
            <a
              href="https://styled-components.com/"
              rel="noreferrer"
              target="_blank"
            >
              styled-component
            </a>{" "}
            pour le CSS in JS.
          </Typography>
        </Grid>

        <div className={classes.button}>
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
              href="https://pokemoncard-cindy.netlify.app"
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
export default ProjectPokemon;
