import React from "react";

import { ThemeProvider } from "@material-ui/core";
import {
  faDumbbell,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";

import Home from "./components/Home";
import Description from "./components/Description";
import SectionContent from "./components/SectionContent";
import Skills from "./components/Skills";
import Tools from "./components/Tools";
import ProjectPokemon from "./components/ProjectPokemon";
import Footer from "./components/Footer";
import SectionTitle from "./components/SectionTitle";
import ProjectStaticMap from "./components/ProjectStaticMap";
import ProjectGraphicCard from "./components/ProjectGraphicCard";
import currentTheme from "./currentTheme";
import ProjectPortfolio from "./components/ProjectPortfolio";
import Ajcourtage from "./components/Ajcourtage";

function App() {
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
      </ThemeProvider>
    </div>
  );
}

export default App;
