import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

import Login from './views/Login'


import AnimatedPageTransition from './components/AnimatedPageTransition';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <AnimatedPageTransition>
              <Login />
            </AnimatedPageTransition>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
