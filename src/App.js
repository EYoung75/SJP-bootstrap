import React, { Component } from 'react';
import './App.scss';
import Navigation from "./components/Navbar.jsx";

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
      </div>
    )
  }
}

export default App;
