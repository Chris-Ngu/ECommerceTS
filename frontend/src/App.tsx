import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './pages/landing';
import Login from './pages/login';
import FourOhFour from './pages/404';
import Menu from './pages/menu'

import Market from './pages/market/Market';
import Shop from './pages/market/Shop';
import Guide from "./pages/market/guide";
import Why from "./pages/market/why";
import Collaboration from "./pages/market/Collaboration";
import Learn from "./pages/market/Learn";
import About from './pages/market/About';
import Updates from "./pages/market/Updates";
import SwitchGuide from "./pages/market/switch";
import Polls from "./pages/market/polls";
import Terms from "./pages/market/terms";
import Faqs from "./pages/market/faqs";
import Reviews from "./pages/market/reviews";

import KeyboardListing from './pages/market/KeyboardListing';

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
          <Route path="/market/switchguide" exact component={SwitchGuide}/>
          <Route path="/market/polls" exact component={Polls}/>
          <Route path="/market/terms" exact component={Terms}/>
          <Route path="/market/faqs" exact component={Faqs}/>
          <Route path="/market/reviews" exact component={Reviews}/>
          <Route path="market/shop/:keyboardid" component={KeyboardListing} />
          <Route component={FourOhFour} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
