import React, { Component } from 'react';
import Store from './stores/store'
import { Provider } from 'react-redux'

import TableContainer from './containers/TableContainer';
import SearchContainer from './containers/SearchContainer';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <div className="container-fluid">
          <SearchContainer />
          <TableContainer />  
        </div>
      </Provider>
    );
  }
}