// 定义并导出store
import { createStore } from 'redux'
import reducer from './reducers'
// 调试工具
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(reducer, composeWithDevTools())
export type RootState = ReturnType<typeof store.getState >

export default store