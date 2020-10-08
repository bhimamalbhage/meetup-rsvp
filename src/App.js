import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/layout/Navbar";
import UserForm from "./components/pages/UserForm";
import Users from "./components/pages/Users";
import User from "./components/pages/User";
import Report from './components/pages/Report'

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/register' component={UserForm} />
          <Route exact path='/users' component={Users} />
          <Route exact path='/user/:id' component={User} />
          <Route exact path='/report' component={Report} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
