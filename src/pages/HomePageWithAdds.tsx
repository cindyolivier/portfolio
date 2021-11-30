
import React from "react";

import { ThemeProvider } from "@material-ui/core";
import {
  faDumbbell,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";

import HomeAdd from "../components/content_with_adds/HomeAdd";
import DescriptionAdd from "../components/content_with_adds/DescriptionAdd";
import SectionContent from "../components/SectionContent";
import Skills from "../components/Skills";
import ToolsAdd from "../components/content_with_adds/ToolsAdd";
import ProjectPokemon from "../components/ProjectPokemon";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";
import ProjectStaticMapAdd from "../components/content_with_adds/ProjectStaticMapAdd";
import ProjectGraphicCard from "../components/ProjectGraphicCard";
import currentTheme from "../currentTheme";
import ProjectPortfolio from "../components/ProjectPortfolio";
import AjcourtageAdd from "../components/content_with_adds/AjcourtageAdd";

function HomePageAdd() {
  return ( 
    <div>
      <ThemeProvider theme={currentTheme}>
        <HomeAdd />
        <DescriptionAdd />
        <SectionTitle icon={faDumbbell} title="Mes compétences" />
        <SectionContent>
          <Skills />
          <ToolsAdd />
        </SectionContent>
        <SectionTitle icon={faProjectDiagram} title="Mes projets" />
        <SectionContent>
          <AjcourtageAdd />
          <ProjectPortfolio />
          <ProjectGraphicCard />
          <ProjectStaticMapAdd />
          <ProjectPokemon />
        </SectionContent>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default HomePageAdd;
