import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './pages/landing';
import Login from './pages/login';
import FourOhFour from './pages/404';
import Menu from './pages/menu'

import Market from './pages/Market';
import Shop from './pages/Shop';
import Guide from "./pages/guide";
import Why from "./pages/why";
import Collaboration from "./pages/Collaboration";
import Learn from "./pages/Learn";
import About from './pages/About';
import Updates from "./pages/Updates";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Landing} />
          <Route path='/login' exact component={Login} />
          <Route path='/menu' exact component={Menu} />
          <Route path="/market" exact component={Market} />
          <Route path="/market/shop" exact component={Shop} />
          <Route path="/market/guide" exact component={Guide} />
          <Route path="/market/why" exact component={Why} />
          <Route path="/market/collaboration" exact component={Collaboration} />
          <Route path="/market/learn" exact component={Learn} />
          <Route path="/market/about" exact component={About} />
          <Route path="/market/updates" exact component={Updates} />
          <Route component={FourOhFour} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
