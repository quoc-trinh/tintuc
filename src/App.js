import React from "react";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Nav from "./Nav";
import {Home} from "./Home";

import "./App.css"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import ListNewsCard from "./ListNewsCard";

class App extends React.Component {
  render() {
    return (
      // <div >
      //   <div class="topnav">
      //     <li class="active"><Link to="/">Home</Link></li>
      //     <li ><Link to="/topics">All</Link></li>
      //     <li ><Link to="/about">About</Link></li>
      //   </div>
      //   <Route exact path="/" render={() => (<h2> HomePage </h2>)} />
      //   <Route path="/about" component={Main} />
      //   <Route path="/topics" component={ListNewsCard} />
      // </div>
      <BrowserRouter>
      <div className="app">
        <Nav/>
        <Route render={({ location }) => {
          const { pathname, key } = location;

          return (
            <TransitionGroup component={null}>
              <Transition
                key={key}
                appear={true}
                timeout={{enter: 750, exit: 150}}
              >
                <Switch location={location}>
                  <Route exact path="/" component={ListNewsCard}/>
                  <Route path="/author" component={ListNewsCard} />
                  <Route path="/about" component={ListNewsCard} />
                </Switch>
              </Transition>
            </TransitionGroup>
          )
        }}/>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
