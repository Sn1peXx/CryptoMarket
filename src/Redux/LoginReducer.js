const SET_USER_DATA = 'login/SET_USER_DATA';
const REMOVE_USER = 'login/REMOVE_USER';


let initialState = {
    email: JSON.parse(localStorage.getItem("user"))[0] ? JSON.parse(localStorage.getItem("user"))[0] : null,
    token: JSON.parse(localStorage.getItem("user"))[1] ? JSON.parse(localStorage.getItem("user"))[1] : null,
    id: JSON.parse(localStorage.getItem("user"))[2] ? JSON.parse(localStorage.getItem("user"))[2] : null,
    isAuth: false
}

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        case REMOVE_USER:
            return {
                ...state,
                ...action.data,
                isAuth: false
            }

        default:
            return state;
    }
}

export const setUser = (email, token, id) => ({type: SET_USER_DATA, data: {email, token, id}});
export const removeUser = (email, token, id) => ({type: REMOVE_USER, data: {email, token, id}});

export const setUserData = (email, token, id) => dispatch => {
    dispatch(setUser(email, token, id));
    const userData = [email, token, id];
    localStorage.setItem('user', JSON.stringify(userData));
}

export const removeUserData = () => dispatch => {
    dispatch(removeUser(null, null, null));
    localStorage.removeItem('user');
}

export default LoginReducer;