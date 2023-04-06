import axios from "axios";
import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./userType"

const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
};

const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
};

const fetchUserFailure = (error) => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
};

export const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchUserRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                const users = response.data.map((user) => {
                    const { id, name, username, phone } = user;
                    return {
                        id,
                        name,
                        username,
                        phone
                    }
                });
                dispatch(fetchUserSuccess(users));
            })
            .catch((error) => dispatch(fetchUserFailure(error.msg)));
    }
}