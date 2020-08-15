import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './pages/landing';
import Login from './pages/login';
import FourOhFour from './pages/404';

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Landing} />
          <Route path='/login' exact component={Login} />
          <Route component={FourOhFour} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
