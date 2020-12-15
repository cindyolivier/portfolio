import React from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles((currentTheme: Theme) =>
  createStyles({
    root: {
      textDecoration: "none",
      color: "#fff",
      border: "0.1rem solid black",
      borderRadius: "100%",
      backgroundColor: "black",
      padding: "1rem",

      "&:hover": {
        color: "#fff",
        backgroundColor: currentTheme.palette.secondary.main,
        border: "0.1rem solid #7f9fac",
      },
    },
  })
);

const FavButton = ({
  startIcon,
  href,
  title,
}: {
  startIcon: React.ReactNode;
  href: string;
  title: string;
}) => {
  const classes = useStyles();

  return (
    <IconButton
      color="primary"
      className={classes.root}
      href={href}
      target="blank"
      title={title}
      aria-label={title}
    >
      {startIcon}
    </IconButton>
  );
};

export default FavButton;
