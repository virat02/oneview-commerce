import { connect } from "react-redux";
import UserPostComponent from "../components/UserPostComponent";

const stateToPropertyMapper = state => ({
    posts: state.UserReducer.user_posts,
    user_name: state.UserReducer.user_name,
});

const dispatcherToPropsMapper = dispatch => ({});

const UserPostContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(UserPostComponent);

export default UserPostContainer;