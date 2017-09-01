import { combineReducers } from 'redux'
import user from './userReducer'
import bar from './barReducer'

const reducers = combineReducers({
    user,
    bar
})

export default reducers