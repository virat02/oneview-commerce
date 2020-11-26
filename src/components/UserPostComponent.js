import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'

export default class UserPostComponent extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h3>{this.props.user_name}'s Posts:</h3>
                <Table bordered>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        this.props.posts.map(post =>
                            <tr key={ post.id }>
                                <td>{ post.title }</td>
                                <td>{ post.body }</td>
                            </tr>
                        )
                    }
                    </tbody>
                </Table>
            </div>
        )
    }
}