import React from "react";

import IconLinkedin from "./IconLinkedin";
import IconGithub from "./IconGithub";
import FavButton from "./FavButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((currentTheme: Theme) =>
  createStyles({
    containerFooter: {
      backgroundImage: `url(${"../images/background1.jpg"})`,

      height: "15rem",

      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      backgroundRepeat: "noRepeat",
      backgroundSize: "cover",

      [currentTheme.breakpoints.down("md")]: {
        backgroundAttachment: "scroll",
      },
    },

    sectionButton: {
      margin: "3rem 0",
      [currentTheme.breakpoints.down("md")]: {
        margin: "2rem 0",
      },
    },

    textFooter: {
      backgroundColor: "#111",
      color: "#fff",
      padding: "0.3rem",
      letterSpacing: "0.5rem",
    },
  })
);

const Footer = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.containerFooter} justify="center">
      <Grid
        container
        item
        xs={6}
        md={3}
        justify="space-around"
        alignItems="center"
        className={classes.sectionButton}
      >
        <Grid item>
          <FavButton
            href="mailto:cindylartillot@gmail.com"
            startIcon={<FontAwesomeIcon icon={faEnvelope} />}
            title="Contactez-moi"
          />
        </Grid>

        <Grid item>
          <FavButton
            href="https://www.linkedin.com/in/cindy-olivier-06529bb3/"
            startIcon={<IconLinkedin />}
            title="Mon LinkedIn"
          />
        </Grid>

        <Grid item>
          <FavButton
            href="https://github.com/cindyolivier"
            startIcon={<IconGithub />}
            title="Mon GitHub"
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="h6"
          component="h1"
          align="center"
          className={classes.textFooter}
        >
          © 2021 - Cindy Olivier - développeuse web
        </Typography>
      </Grid>
    </Grid>
  );
};
export default Footer;
