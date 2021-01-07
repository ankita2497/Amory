import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "./MediaQuery.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Story from "./pages/Story";
import ContactNav from "./pages/ContactNav";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Greeting from "./components/Greeting";
import Details from "./components/Details";
import {DataProvider } from "./global/DataProvider";
function App() {
  return (
    <DataProvider>
      <div className="App">
       <Router>
        <Greeting/>
        <Navbar/>
            <Switch>
              <Route path="/amory" exact component={Home} />
            <Route path="/Shop" exact component={Shop} />
            <Route path="/Shop/:id" exact component={Details} />
              <Route
                path="/Story"
                exact
                component={Story}
              />
              <Route path="/Contact" exact component={ContactNav} />
              <Route path="/Cart" exact component={Cart} />
              {/* <Route path="*" component={Error} /> */}
            </Switch>
          </Router>
       </div>
    </DataProvider>
  );
}

export default App;
