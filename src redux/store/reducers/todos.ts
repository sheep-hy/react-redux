const initState = [
    { id: 1, name: "吃饭", isDone: true },
    { id: 2, name: "睡觉", isDone: false }
]
function todos(state = initState, action: any) {
    console.log(state, 1)
    console.log(action, 2)
    return state

}
export default todos