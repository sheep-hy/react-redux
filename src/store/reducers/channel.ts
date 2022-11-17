import { RootAction } from ".."
type listType = {
    list: { id: number, name: string }[],
    active: number
}
const initState: listType = {
    list: [], // 所有的频道,
    active: 0 // 当前选中的频道的Id
}
function channel(state = initState, action: RootAction) {
    // console.log(action, 1)
    if (action.type === 'channel/init') {
        return { ...state, list: action.data }
    } else if (action.type === 'channel/active') {
        return { ...state, active: action.id }
    }
    return state


}
export default channel