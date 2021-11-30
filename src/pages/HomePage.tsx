import React from "react";

import {
  createStyles,
  Grid,
  makeStyles,
  Theme,
  ThemeProvider,
} from "@material-ui/core";
import {
  faDumbbell,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";

import Home from "../components/Home";
import Description from "../components/Description";
import SectionContent from "../components/SectionContent";
import Skills from "../components/Skills";
import Tools from "../components/Tools";
import ProjectPokemon from "../components/ProjectPokemon";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";
import ProjectStaticMap from "../components/ProjectStaticMap";
import ProjectGraphicCard from "../components/ProjectGraphicCard";
import currentTheme from "../currentTheme";
import ProjectPortfolio from "../components/ProjectPortfolio";
import Ajcourtage from "../components/Ajcourtage";
import { Link } from "react-router-dom";

const useStyles = makeStyles((currentTheme: Theme) =>
  createStyles({
    containerLink: {
      backgroundColor: "#111",
    },
    linkToAdds: {
      width: "100%",
      color: "white",
    },
  })
);

function App() {
  const classes = useStyles();

  return (
    <div>
      <ThemeProvider theme={currentTheme}>
        <Home />
        <Description />
        <SectionTitle icon={faDumbbell} title="Mes compétences" />
        <SectionContent>
          <Skills />
          <Tools />
        </SectionContent>
        <SectionTitle icon={faProjectDiagram} title="Mes projets" />
        <SectionContent>
          <Ajcourtage />
          <ProjectPortfolio />
          <ProjectGraphicCard />
          <ProjectStaticMap />
          <ProjectPokemon />
        </SectionContent>
        <Footer />
        <Grid xs={12} className={classes.containerLink}>
          <Link to="add" className={classes.linkToAdds}>
            Go with Home Page with adds
          </Link>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
