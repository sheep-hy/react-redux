import axios from "axios"
import { RootAction, RootThunkAction } from "."

export function getChannel(): RootThunkAction {
    // dispatch 是等着异步操作完毕之后，在触发action
    return async (dispatch) => {
        const res = await axios.get('http://geek.itheima.net/v1_0/channels')

        console.log('频道数据', res)
        // 执行同步action，返回的是一个对象
        dispatch(
            {
                type: 'channel/init',
                data: res.data.data.channels
            }
        )
    }
}
export function changeChannel(id: number): RootAction {
    return {
        type: "channel/active",
        id
    }
}
export function getNews(id: number): RootThunkAction {
    return async (dispatch) => {
        const res = await axios.get('http://geek.itheima.net/v1_0/articles?channel_id=' + id + '&timestamp=' + Date.now())
        console.log(res, '文章列表')
        dispatch({
            type: 'newList/init',
            data: res.data.data.results
        })

    }
}