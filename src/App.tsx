import React from "react";

import { ThemeProvider } from "@material-ui/core";

import Home from "./components/Home";
import Description from "./components/Description";
import CompetencesTechniques from "./components/CompetencesTechniques";
import Outils from "./components/Outils";
import ProjetPokemon from "./components/ProjetPokemon";
import Footer from "./components/Footer";
import SectionTitle from "./components/SectionTitle";
import ProjetStaticMap from "./components/ProjetStaticMap";
import ProjetGraphicCard from "./components/ProjetGraphicCard";
import currentTheme from "./currentTheme";
import {
  faDumbbell,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";
import ProjetPortfolio from "./components/ProjetPortfolio";

function App() {
  return (
    <div>
      <ThemeProvider theme={currentTheme}>
        <Home />
        <Description />
        <SectionTitle icon={faDumbbell} title="Mes compétences" />
        <CompetencesTechniques />
        <Outils />
        <SectionTitle icon={faProjectDiagram} title="Mes projets" />
        <ProjetPortfolio />
        <ProjetPokemon />
        <ProjetStaticMap />
        <ProjetGraphicCard />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
