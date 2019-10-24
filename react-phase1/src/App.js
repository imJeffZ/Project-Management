import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';

import Login from './login/Login';
// import Signup from './Signup';

class App extends React.Component {
  render () {
    return (
      <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login}/>
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
