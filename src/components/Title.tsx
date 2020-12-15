import React from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((currentTheme: Theme) =>
  createStyles({
    root: {
      borderBottom: "0.1rem solid",
      paddingBottom: "1rem",
      [currentTheme.breakpoints.down("md")]: {
        textAlign: "center",
      },
    },
  })
);

const Title = ({ title }: { title: string }) => {
  const classes = useStyles();

  return (
    <Typography
      variant="h3"
      component="h1"
      align="center"
      className={classes.root}
    >
      {title}
    </Typography>
  );
};

export default Title;
