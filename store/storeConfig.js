import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import userReducer from './reducer/user'
import postReducer from './reducer/post'
import thunk from 'redux-thunk'

const reducers = combineReducers({
    user: userReducer,
    posts: postReducer,
})

const storeConfig = () => {
    return createStore(reducers, compose(applyMiddleware(thunk)))
}

export default storeConfig