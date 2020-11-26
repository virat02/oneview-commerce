import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Table from 'react-bootstrap/Table'

export default class TableComponent extends Component {

    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        return (
            <div className="container-fluid">
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Company</th>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        this.props.users.map(user =>
                            <tr key={ user.id } onClick={() => 
                                this.props.getUserPosts(user.id, user.name)
                            }>
                                <td>{ user.name }</td>
                                <td>{ user.email }</td>
                                <td>{ user.address.city }</td>
                                <td>{ user.company.name }</td>
                            </tr>
                        )
                    }
                    </tbody>
                </Table>
            </div>
        )
    }
}