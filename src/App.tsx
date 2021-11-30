import React from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import HomePageWithAdds from "./pages/HomePageWithAdds";

function App() {
  return ( // TO HOME PAGE AND USE REACT ROUTER APP WITH SWITCH AND ROUTES
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<HomePage />}>
          </Route>
          <Route path="add" element={<HomePageWithAdds />}>
          </Route>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
