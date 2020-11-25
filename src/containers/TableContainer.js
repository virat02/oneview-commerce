import { connect } from "react-redux";
import TableComponent from "../components/TableComponent";
import * as UserActions from "../actions/UserActions";

const stateToPropertyMapper = state => ({
    users: state.UserReducer.users
});

const dispatcherToPropsMapper = dispatch => ({
    getUsers: () => UserActions.getUsers(dispatch),
});

const TableContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(TableComponent);

export default TableContainer;