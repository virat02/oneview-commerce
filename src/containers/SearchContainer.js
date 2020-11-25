import { connect } from "react-redux";
import SearchComponent from "../components/SearchComponent";
import * as UserActions from "../actions/UserActions";

const stateToPropertyMapper = state => ({
    all_users: state.UserReducer.users,
    search_keyword: state.UserReducer.search_keyword
});

const dispatcherToPropsMapper = dispatch => ({
    searchUsers: (search_keyword, users) => UserActions.searchUsers(dispatch, search_keyword, users),
});

const SearchContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(SearchComponent);

export default SearchContainer;