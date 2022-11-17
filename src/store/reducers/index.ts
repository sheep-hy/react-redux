import { combineReducers } from 'redux'
import newList from './newList'
import channel from './channel'

const rootReducer = combineReducers({
    newList,
    channel
})
export default rootReducer