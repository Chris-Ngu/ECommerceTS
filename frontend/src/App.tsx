import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from "./Pages/Home/home";
import CollectionPage from "./Pages/Collection/collection";

import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/collection" exact component={CollectionPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
