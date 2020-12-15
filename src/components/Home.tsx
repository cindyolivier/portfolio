import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((currentTheme: Theme) =>
  createStyles({
    containerText: {
      backgroundColor: "#111",
      opacity: 0.8,
      height: "fit-content",
    },

    title: {
      padding: "18px",
      letterSpacing: "10px",
    },

    root: {
      backgroundImage: `url(${"../images/background1.jpg"})`,

      height: "100vh",

      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      backgroundRepeat: "noRepeat",
      backgroundSize: "cover",
      [currentTheme.breakpoints.down("md")]: {
        backgroundAttachment: "scroll",
      },
    },
  })
);

const Home = () => {
  const classes = useStyles();
  // const animation = "w3-animate-zoom"; //Problème de className : l'effet ne s'affiche pas

  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12} className={classes.containerText}>
        <Typography
          variant="h4"
          component="h1"
          color="textSecondary"
          align="center"
          className={classes.title}
        >
          Cindy Olivier
        </Typography>
        <Typography
          variant="h4"
          component="h1"
          color="textSecondary"
          align="center"
          className={classes.title}
        >
          <FontAwesomeIcon icon={faCode} />
        </Typography>
        <Typography
          variant="h4"
          component="h1"
          color="textSecondary"
          align="center"
          className={classes.title}
        >
          Développeuse web junior front-end
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Home;