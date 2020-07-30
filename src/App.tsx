import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Landing from './pages/landing';
import Login from './pages/login';


const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path='/' exact component={Landing} />
        <Route path='/login' exact component={Login} />
      </BrowserRouter>
    </div>
  );
}

export default App;
