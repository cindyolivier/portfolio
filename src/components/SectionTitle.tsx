import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const useStyles = makeStyles((currentTheme: Theme) =>
  createStyles({
    root: {
      backgroundImage: `url(${"../images/background1.jpg"})`,

      height: "180px",

      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "relative",
      [currentTheme.breakpoints.down("md")]: {
        height: "210px",
        backgroundAttachment: "scroll",
      },
    },

    title: {
      backgroundColor: "#111",
      color: "#fff",
      padding: "18px",
      letterSpacing: "10px",
      opacity: 0.9,
    },
  })
);

const SectionTitle = ({ icon, title }: { icon: IconProp; title: string }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid item xs={11} md={5}>
        <Typography
          variant="h4"
          component="h1"
          color="textPrimary"
          align="center"
          className={classes.title}
        >
          <FontAwesomeIcon icon={icon} /> {title}
        </Typography>
      </Grid>
    </Grid>
  );
};
export default SectionTitle;
