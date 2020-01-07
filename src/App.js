import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
import Login_Register from "./components/Login_Register/Login_Register"
import ItemList from "./components/ItemList/ItemList";
import AddItemForm from "./components/AddItemForm/AddItemForm";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login_Register} />
        <PrivateRoute path="/item-list" component={ItemList} />
        <PrivateRoute path="/item-form" component={AddItemForm} />
      </Switch>
   
    </div>
  );
}

export default App;
