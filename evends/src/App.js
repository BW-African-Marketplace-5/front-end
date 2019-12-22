import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";

import Login_Register from "./components/Login_Register"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login_Register} />
      </Switch>
   
    </div>
  );
}

export default App;
