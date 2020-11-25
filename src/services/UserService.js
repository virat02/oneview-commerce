import axios from 'axios'
const baseURL = "https://jsonplaceholder.typicode.com";

export const getUsers = async () => {
    await axios.get(baseURL + "/users")
};
