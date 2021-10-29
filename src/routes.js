import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./css/main.css";
import Main from "./pages/main/Main";
import Alcateia from "./pages/main/Alcateia";
import Jornadas from "./pages/main/Jornadas";
import Lobos from "./pages/main/Lobos";
import Contato from "./pages/main/Contato";
import Digital from "./pages/main/Digital";

import { DataProvider } from "./data/pageData";

function Routes() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={Main} />
          <Route exact path={"/jornadas"} component={Jornadas} />
          <Route exact path={"/alcateia"} component={Alcateia} />
          <Route exact path={"/digital-builders"} component={Digital} />
          <Route exact path={"/lobos"} component={Lobos} />
          <Route exact path={"/contato"} component={Contato} />
        </Switch>
      </BrowserRouter>
    </DataProvider>
  );
}

export default Routes;
