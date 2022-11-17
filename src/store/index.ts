// 定义并导出store
import thunk from 'redux-thunk'
// const {thunkMiddleware} = require('redux-thunk')
import { ThunkAction } from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
// 调试工具
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export type RootState = ReturnType<typeof store.getState>
export type RootAction = { type: 'channel/init', data: [] } |{ type: 'channel/active', id: number }|{ type: 'newList/init', data: [] } 

// 类型参数1：ReturnType 用于指定函数的返回值类型 void
// 类型参数2： 指定RootState的类型
// 类型参数3： 指定额外的参数类型，一般为unkonwn或者any
// 类型参数4： 用于指定dispatch的Action类型
export type RootThunkAction = ThunkAction<void, RootState, unknown, RootAction>

export default store