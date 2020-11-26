import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import UsersComponent from './components/UsersComponent'
import UserPostContainer from './containers/UserPostContainer';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Route exact path={"/"} component={UsersComponent} />
        <Route exact path={"/home"} component={UsersComponent} />
        <Route exact path={"/user/:userId/posts"} component={UserPostContainer} />
      </div>
    );
  }
}