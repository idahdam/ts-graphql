import React from "react";
import "./App.css";
import { Navbar } from "./components";
import { Switch, Route } from "react-router-dom";
import { Home, Missions, Rocket } from "./pages";

function App(): JSX.Element {
  return (
    <div className="App">
      <Navbar />
      <h1>SpaceX Data</h1>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/missions" exact component={Missions} />
        <Route path="/rockets" exact component={Rocket} />
      </Switch>
    </div>
  );
}

export default App;
