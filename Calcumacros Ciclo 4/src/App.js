import React from 'react';
import Home from "./components/home-v1";
import { HashRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    
    <HashRouter basename="/">
    <div>
    <Switch>
          <Route exact path="/" component={Home} />
    </Switch>
    </div>
  </HashRouter>
 
  );
}

export default App;
