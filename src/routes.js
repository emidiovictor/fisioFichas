import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import { CreateFicha } from "./pages/fichas/createFicha";
import Fichas from "./pages/fichas/fichas";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/fichas" exact component={Fichas} />
        <Route path="/fichas/new" component={CreateFicha} />
      </Switch>
    </BrowserRouter>
  );
};
