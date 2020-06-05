import * as ActionTypes from './ActionTypes';

export const loginData = (state = {
    isLogged: false,
    uid: null,
},action) => {
    switch(action.type){
        case ActionTypes.LOGIN_USER:
            return {...state, isLogged: true, uid: action.payload}
        
        case ActionTypes.LOGOUT_USER:
            return {...state, isLogged: false, uid: null , message: 'Logged Out Succesfully!'}

        default:
            return state;
    }
} 