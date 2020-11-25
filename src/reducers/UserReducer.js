import * as UserConstants from '../constants/UserConstants'

const defaultState = {
    users: [],
    searched_users: [],
}

const UserReducer = (state = defaultState, action) => {
    switch (action.type) {
        case UserConstants.GET_ALL_USERS:
            return { ...state, users: action.payload, searched_users: action.payload };

        case UserConstants.GET_ALL_SEARCHED_USERS:
            return { ...state, searched_users: action.searched_users };
            
        default:
            return state;
    }
};

export default UserReducer;