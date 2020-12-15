import React from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((currentTheme: Theme) =>
  createStyles({
    root: {
      padding: "3rem 0",
      backgroundColor: currentTheme.palette.background.paper,
    },

    contentContainer: {
      padding: "0 1rem",
    },
    itemContainer: {
      padding: "3rem 0rem",
    },
  })
);

const SectionContent = ({ children }: { children: React.ReactElement[] }) => {
  const classes = useStyles();

  return (
    <Grid container justify="center" className={classes.root}>
      <Grid
        container
        item
        xs={12}
        md={9}
        xl={7}
        direction="column"
        justify="space-between"
        className={classes.contentContainer}
      >
        {children.map((child) => (
          <Grid item className={classes.itemContainer}>
            {child}
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
export default SectionContent;
