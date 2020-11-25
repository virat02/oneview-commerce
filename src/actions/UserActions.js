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