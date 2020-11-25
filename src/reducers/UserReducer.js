import * as UserConstants from '../constants/UserConstants'

const defaultState = {
    users: [],
}

const UserReducer = (state = defaultState, action) => {
    switch (action.type) {
        case UserConstants.GET_ALL_USERS:
            return { ...state, users: action.payload };

        default:
            return state;
    }
};

export default UserReducer;