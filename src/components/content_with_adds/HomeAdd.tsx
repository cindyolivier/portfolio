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
      padding: "1.4rem",
      letterSpacing: "0.6rem",
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
    add: {
      width: "728px",
      height: "90px",
      backgroundColor: "grey",
    },
  })
);

const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.add}>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6397764351388531"
          crossOrigin="anonymous"
        ></script>
      </div>
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
            Développeuse web front-end
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
