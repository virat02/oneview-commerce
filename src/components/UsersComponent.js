import React, { Component } from 'react';

import TableContainer from '../containers/TableContainer';
import SearchContainer from '../containers/SearchContainer';

export default class UsersComponent extends Component {
    render() {
        return (
            <div>
                <SearchContainer />
                <TableContainer />
            </div>
        )
    }
}