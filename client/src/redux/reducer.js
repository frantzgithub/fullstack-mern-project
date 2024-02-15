import { GET_USERS } from "./action";

const initialState = {
    users: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {...state, users: action.payload}
        case "ADD_USERS":
            return {...state, users: [...state.users, action.payload]}
        default:
            return {...state};
    }
};

export default rootReducer;