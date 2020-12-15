import React from "react";

import Button from "./Button";
import IconGithub from "./IconGithub";
import IconNetlify from "./IconNetlify";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((currentTheme: Theme) =>
  createStyles({
    root: {
      padding: "2rem 0",
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
      paddingTop: "2rem",
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

const ProjetPortfolio = () => {
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
            Mon Portfolio
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
            J'ai réalisé mon portfolio en TypeScript avec la librairie React et
            avec le package matérial-ui.
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
    </Grid>
  );
};
export default ProjetPortfolio;
