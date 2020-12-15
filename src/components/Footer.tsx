import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import IconLinkedin from "./IconLinkedin";
import IconGithub from "./IconGithub";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import FavButton from "./FavButton";

const useStyles = makeStyles((currentTheme: Theme) =>
  createStyles({
    containerFooter: {
      backgroundImage: `url(${"../images/background1.jpg"})`,

      height: "200px",

      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      backgroundRepeat: "noRepeat",
      backgroundSize: "cover",

      [currentTheme.breakpoints.down("md")]: {
        height: "230px",
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
      padding: "5px",
      letterSpacing: "5px",
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
          />
        </Grid>

        <Grid item>
          <FavButton
            href="https://www.linkedin.com/in/cindy-olivier-06529bb3/"
            startIcon={<IconLinkedin />}
          />
        </Grid>

        <Grid item>
          <FavButton
            href="https://github.com/cindyolivier"
            startIcon={<IconGithub />}
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" align="center" className={classes.textFooter}>
          © 2020 - Cindy Olivier - développeuse web junior
        </Typography>
      </Grid>
    </Grid>
  );
};
export default Footer;
