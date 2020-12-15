import React from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((currentTheme: Theme) =>
  createStyles({
    root: {
      padding: "7rem 0",
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
      width: "15rem",
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
  })
);

const ProjetGraphicCard = () => {
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
            Page en accord avec une carte graphique
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
            quis, omnis, reiciendis tenetur, nihil facere nisi non facilis rem
            fuga velit perspiciatis. Ipsum quidem voluptates est molestias,
            quibusdam aspernatur autem.
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
            dolorum itaque praesentium, quibusdam eaque hic officia ex quidem
            tenetur eveniet voluptatem vel nobis aperiam laborum tempore numquam
            non veniam molestiae?
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={12}
        md={2}
        alignContent="center"
        justify="center"
      >
        <img
          className={classes.img}
          src="../images/newDesignPage1.png"
          alt="newDesignPage1"
        />
      </Grid>

      <Grid
        container
        item
        xs={12}
        md={2}
        alignContent="center"
        justify="center"
      >
        <img
          className={classes.img}
          src="../images/newDesignPage2.png"
          alt="newDesignPage2"
        />
      </Grid>
    </Grid>
  );
};
export default ProjetGraphicCard;
