import React from "react";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import "./App.css"
import { Route, Link } from 'react-router-dom';
import ListNewsCard from "./ListNewsCard";
import { Home } from "./Home";

class App extends React.Component {
  render() {
    return (
      <div >
        <div class="topnav">
          <li class="active"><Link to="/">Home</Link></li>
        </div>
        <Route exact path="/" component={ListNewsCard} />
      </div>

    );
  }
}

export default App;
