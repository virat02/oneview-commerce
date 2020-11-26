import * as UserConstants from '../constants/UserConstants'

const defaultState = {
    users: [],
    searched_users: [],
    user_posts: [],
    user_name: null,
}

const UserReducer = (state = defaultState, action) => {
    switch (action.type) {
        case UserConstants.GET_ALL_USERS:
            return { ...state, users: action.payload, searched_users: action.payload };

        case UserConstants.GET_ALL_SEARCHED_USERS:
            return { ...state, searched_users: action.searched_users };
        
        case UserConstants.GET_USER_POSTS:
            return { ...state, user_posts: action.payload, user_name: action.user_name};

        default:
            return state;
    }
};

export default UserReducer;