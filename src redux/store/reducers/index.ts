import { combineReducers } from 'redux'
import todos from './todos'
import goods from './goods'

const rootReducer = combineReducers({
    todos,
    goods
})
export default rootReducer