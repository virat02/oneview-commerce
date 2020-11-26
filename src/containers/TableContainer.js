import { connect } from "react-redux";
import TableComponent from "../components/TableComponent";
import * as UserActions from "../actions/UserActions";

const stateToPropertyMapper = state => ({
    users: state.UserReducer.searched_users,
});

const dispatcherToPropsMapper = dispatch => ({
    getUsers: () => UserActions.getUsers(dispatch),
    getUserPosts: (userId, user_name) => UserActions.getUserPosts(dispatch, userId, user_name),
});

const TableContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(TableComponent);

export default TableContainer;