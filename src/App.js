import React, { Component } from 'react';
import {Switch,Route,HashRouter} from 'react-router-dom';
import './resources/styles/style.css';
import Women from './components/Women';
import Men from './components/Men';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <main className="main_wrapper">
          <Switch>
              <Route exact component={Women} path="/"/>
              <Route exact component={Men} path="/men"/>
          </Switch>
        </main>
      </HashRouter>
    );
  }
}

export default App;
