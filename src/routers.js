import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from './views/Home/home';
import Technique from './views/Technique/technique';
import Discuss from './views/Discuss/discuss';
import Detail from './views/Detail/detail';
import Continent from './views/Continent/continent';
class Routes extends Component {
    render() {
      return (
        <div className="App">
          <Router>
            <Switch>
              <Route path="/home" component={Home}></Route>
              <Route path="/technique" component={Technique}></Route>
              <Route path="/continent" component={Continent}></Route>
              <Route path="/discuss" component={Discuss}></Route>
              <Route path="/detail/:id" component={Detail}></Route>
              <Redirect from="/" to="/home"></Redirect>
              <Route component={Home}></Route>
            </Switch>
          </Router>
        </div>
      );
    }
  }
  
  export default Routes;