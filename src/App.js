import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/Home'
import Services from './pages/Services'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'


function App() {
  return (
    <Router>
      <div className="App" style={{ position: 'relative', overflow: "hidden" }}>
        <div style={{ position: 'absolute'}}>
          {/* <Particles height="100vh" width="100vw" params={particlesConfig} /> */}
        </div>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" exact component={Services} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Signup} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
