import * as ActionTypes from './ActionTypes';
import axios from 'axios';

export const loginUser = (user) => (dispatch) => {
    const loginUrl = 'http://todolist-arjun.herokuapp.com/login';
    console.log('reached action state');
    axios.post(loginUrl,user)
    .then((res)=>{
        console.log(res);
        alert(res.data.message);
        console.log('auth-token',res.headers)//.auth-token)
        //localStorage.setItem('auth-token',res.headers);
        //dispatch(userLogged(res.data.body));
    })
}

export const checkLoginStatus = () => {
    if(localStorage.getItem('auth-token') != null)
    return false

    if(localStorage.getItem('auth-token') === null)
    return true;
}