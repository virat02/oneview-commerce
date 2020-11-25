import axios from 'axios'

import * as UserConstants from "../constants/UserConstants"
import * as ErrorConstants from "../constants/ErrorConstants"

const baseURL = "https://jsonplaceholder.typicode.com";

export const getUsers = async dispatch => {
    try {
        const response = await axios.get(baseURL + "/users")
                                
        dispatch({
            type: UserConstants.GET_ALL_USERS,
            payload: response.data,
        })
    }
    catch(e) {
        dispatch({
            type: ErrorConstants.GET_ALL_USERS_ERROR,
            message: "Couldn't get all users. Please try again!"
        })
    }
}

export const searchUsers = (dispatch, search_keyword, all_users) => {
    let searched_users = (search_keyword !== '') ? 
        all_users.filter(user => (user.name.toLowerCase()).includes(search_keyword.toLowerCase())) : all_users;
    
    dispatch({
        type: UserConstants.GET_ALL_SEARCHED_USERS,
        searched_users: searched_users,
    })
}