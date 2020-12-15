import React from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles((currentTheme: Theme) =>
  createStyles({
    root: {
      textDecoration: "none",
      color: "#fff",
      border: "1px solid black",
      borderRadius: "100%",
      backgroundColor: "black",
      padding: "1rem",

      "&:hover": {
        color: "#fff",
        backgroundColor: currentTheme.palette.secondary.main,
        border: "1px solid #7f9fac",
      },
    },
  })
);

const FavButton = ({
  startIcon,
  href,
}: {
  startIcon: React.ReactNode;
  href: string;
}) => {
  const classes = useStyles();

  return (
    <IconButton
      color="primary"
      className={classes.root}
      href={href}
      target="blank"
    >
      {startIcon}
    </IconButton>
  );
};

export default FavButton;
