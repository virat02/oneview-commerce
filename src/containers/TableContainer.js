import { connect } from "react-redux";
import TableComponent from "../components/TableComponent";

const stateToPropertyMapper = state => ({});

export const dispatcherToPropsMapper = dispatch => ({});

const TableContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(TableComponent);

export default TableContainer;