import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './pages/landing';
import Login from './pages/login';
import FourOhFour from './pages/404';
import Menu from './pages/menu'

import Market from './pages/Market';

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Landing} />
          <Route path='/login' exact component={Login} />
          <Route path='/menu' exact component={Menu} />
          <Route path="/market" exact component={Market} />
          <Route component={FourOhFour} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
