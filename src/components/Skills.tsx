import React from "react";

import Title from "./Title";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((currentTheme: Theme) =>
  createStyles({
    sectionCompetences: {
      paddingTop: "4rem",
      listStyleType: "none",
      [currentTheme.breakpoints.down("md")]: {
        paddingBottom: "1rem",
        paddingTop: "0",
      },
    },

    img: {
      height: "5rem",
      marginBottom: "2rem",
      [currentTheme.breakpoints.down("md")]: {
        marginBottom: "1rem",
      },
    },

    competence: {
      [currentTheme.breakpoints.down("md")]: {
        padding: "2rem",
      },
    },
  })
);

const Skills = () => {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Grid item>
        <Title title="Compétences techniques"></Title>
      </Grid>

      <Grid
        container
        item
        xs={12}
        justify="space-around"
        className={classes.sectionCompetences}
      >
        <Grid item className={classes.competence}>
          <img
            className={classes.img}
            src="../icons/react-icon.png"
            alt="React"
          />
          <Typography
            variant="subtitle1"
            component="h1"
            align="center"
            color="textPrimary"
          >
            React
          </Typography>
        </Grid>

        <Grid item className={classes.competence}>
          <img
            className={classes.img}
            src="../icons/ts-icon.png"
            alt="TypeScript"
          />
          <Typography
            variant="subtitle1"
            component="h1"
            align="center"
            color="textPrimary"
          >
            TypeScript
          </Typography>
        </Grid>

        <Grid item className={classes.competence}>
          <img
            className={classes.img}
            src="../icons/js-icon.png"
            alt="JavaScript"
          />
          <Typography
            variant="subtitle1"
            component="h1"
            align="center"
            color="textPrimary"
          >
            JavaScript
          </Typography>
        </Grid>

        <Grid item className={classes.competence}>
          <img
            className={classes.img}
            src="../icons/gatsby-icon.png"
            alt="Gatsby"
          />
          <Typography
            variant="subtitle1"
            component="h1"
            align="center"
            color="textPrimary"
          >
            Gatsby
          </Typography>
        </Grid>

        <Grid item className={classes.competence}>
          <img className={classes.img} src="../icons/php-icon.png" alt="PHP" />
          <Typography
            variant="subtitle1"
            component="h1"
            align="center"
            color="textPrimary"
          >
            PHP
          </Typography>
        </Grid>

        <Grid item className={classes.competence}>
          <img
            className={classes.img}
            src="../icons/mysql-icon.png"
            alt="MySQL"
          />
          <Typography
            variant="subtitle1"
            component="h1"
            align="center"
            color="textPrimary"
          >
            MySQL
          </Typography>
        </Grid>

        <Grid item className={classes.competence}>
          <img className={classes.img} src="../icons/css-icon.png" alt="CSS" />
          <Typography
            variant="subtitle1"
            component="h1"
            align="center"
            color="textPrimary"
          >
            CSS
          </Typography>
        </Grid>

        <Grid item className={classes.competence}>
          <img
            className={classes.img}
            src="../icons/html-icon.png"
            alt="HTML"
          />
          <Typography
            variant="subtitle1"
            component="h1"
            align="center"
            color="textPrimary"
          >
            HTML
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Skills;
