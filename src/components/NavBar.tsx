import React from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      backgroundColor: "#777E78",
      textAlign: "right",
    },
    link: {
      marginRight: "1rem",
      color: "black",
      fontSize: "1rem",
    },
    "& > * + *": {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();
  const preventDefault = (event: React.SyntheticEvent) =>
    event.preventDefault();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.root}>
        <Toolbar className={classes.title}>
          <Typography variant="h6" className={classes.title}>
            <Link
              href="#description"
              onClick={preventDefault}
              className={classes.link}
            >
              À propos
            </Link>
            <Link
              href="#competences"
              onClick={preventDefault}
              className={classes.link}
            >
              Mes compétences
            </Link>
            <Link
              href="#projet"
              onClick={preventDefault}
              className={classes.link}
            >
              Mes projets
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
