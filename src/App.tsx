import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';

import HomePage from "./Pages/home";

import './Styles/Pages/App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
