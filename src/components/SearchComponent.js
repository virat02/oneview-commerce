import React, { Component } from 'react';

export default class SearchComponent extends Component {
    render() {
        return (
            <input id="user-search" type="text" placeholder="Search" onChange= {(e) => 
                this.props.searchUsers(e.target.value, this.props.all_users)
            } />
        )
    }
}