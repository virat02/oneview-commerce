import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'

export default class TableComponent extends Component {
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
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Larry</td>
                        <td>Bird</td>
                        <td>@twitter</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}