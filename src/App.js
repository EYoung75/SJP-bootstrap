import React, { Component } from 'react';
import './App.scss';
import { Route } from "react-router-dom";
import Navigation from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Locations from "./components/Locations.jsx";
import Forms from "./components/Forms.jsx";

class App extends Component {
  state = {
    collapsed: true
  }

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render() {
    return (
      <div className="App">
        <Navigation {...this.state} toggleNavbar={this.toggleNavbar}/>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About}/>
        <Route path="/services" component={Services}/>
        <Route path="/locations" component={Locations}/>
        <Route path="/forms" component={Forms}/>
      </div>
    )
  }
}

export default App;
