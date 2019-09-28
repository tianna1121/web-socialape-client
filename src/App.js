import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

// * Pages
import home from "./pages/home";
import signup from "./pages/signup";
import login from "./pages/login";

// * Components
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/login" component={login} />
          <Route exact path="/signup" component={signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
