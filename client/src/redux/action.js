import axios from "axios"


export const GET_USERS = "GET_USERS";

export const getUsers = () => {
    return async function(dispatch) {
        const apiData = await axios.get("http://localhost:3002/users");

        const users = apiData.data;
        dispatch({type: GET_USERS, payload: users})
    }
}