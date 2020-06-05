import { createStore, combineReducers, applyMiddleware } from 'redux'
import  thunk  from 'redux-thunk'
import { logger } from 'redux-logger'
import { loginData  } from './login'

export const configureStore = () => {
    const store = createStore(combineReducers({
        loginData: loginData 
    }),applyMiddleware(thunk, logger));

    return store;
}