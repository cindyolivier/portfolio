import React from "react";

// import Button from "./Button";
import Title from "../Title";
// import AjCourtageSite from "../../images/ajcourtageSite.png";

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

    icon: {
      paddingTop: "3rem",
    },

    img: {
      borderRadius: "1rem",
      width: "22rem",
      height: "auto",
      [currentTheme.breakpoints.down("md")]: {
        height: "auto",
      },
    },
    add: {
      width: "160px",
      height: "600px",
      backgroundColor: "grey",
    },
  })
);

const AjcourtageAdd = () => {
  const classes = useStyles();

  return (
    <Grid container justify="space-between">
      <Grid
        container
        item
        xs={12}
        md={2}
        alignContent="center"
        justify="center"
      >
        <div className={classes.add}>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6397764351388531"
            crossOrigin="anonymous"
          ></script>
        </div>
      </Grid>

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
          <Title title="AJ Courtage"></Title>
        </Grid>

        <Grid item>
          <Typography
            variant="h5"
            component="h2"
            color="textPrimary"
            align="justify"
            className={classes.text}
          >
            J'ai réalisé pour mon client une application web en TypeScript avec
            React avec le générateur de site dynamique{" "}
            <a
              href="https://www.gatsbyjs.com/"
              rel="noreferrer"
              target="_blank"
            >
              Gatsby
            </a>
            . Lors de ce projet j'ai crée un CMS from scratch avec{" "}
            <a href="https://www.sanity.io/" rel="noreferrer" target="_blank">
              Sanity
            </a>{" "}
            pour que mon client puisse, avec facilité d'utilisation associée à
            la possibilité, de personnaliser son site. Je l'ai également déployé
            sur{" "}
            <a href="https://www.netlify.com/" rel="noreferrer" target="_blank">
              Netlify
            </a>
            .
          </Typography>
        </Grid>

        {/* <div className={classes.button}>
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
      </div> */}
      </Grid>
      {/* <Grid
        container
        item
        xs={12}
        md={2}
        alignContent="center"
        justify="center"
      >
        <img className={classes.img} src={AjCourtageSite} alt="AjcourtageSite" />
      </Grid> */}
    </Grid>
  );
};
export default AjcourtageAdd;
