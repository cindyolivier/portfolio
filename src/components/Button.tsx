import React from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Button as MuiButton } from "@material-ui/core";

const useStyles = makeStyles((currentTheme: Theme) =>
  createStyles({
    root: {
      textTransform: "none",
      borderRadius: "2rem",
      "&:hover": {
        backgroundColor: currentTheme.palette.secondary.main,
      },
    },
  })
);

const Button = ({
  startIcon,
  title,
  href,
}: {
  startIcon: React.ReactNode;
  title: string;
  href: string;
}) => {
  const classes = useStyles();

  return (
    <MuiButton
      variant="contained"
      color="primary"
      className={classes.root}
      href={href}
      startIcon={startIcon}
      target="blank"
    >
      {title}
    </MuiButton>
  );
};

export default Button;
