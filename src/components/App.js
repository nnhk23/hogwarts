import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogsContainer from './HogsContainer'
// import HelloWorld from "./HelloWorld";

class App extends Component {

  state={
    display: false
  }

  unhideComponent = () => {
    this.setState({display: !this.state.display})
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <HogsContainer unhideComponent={this.unhideComponent} hogs={hogs}/>
      </div>
    );
  }
}

export default App;
