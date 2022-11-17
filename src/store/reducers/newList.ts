import { RootAction } from ".."
type State = {
    list: {
        art_id: string;
        title: string;
        aut_id: string;
        comm_count: number;
        pubdate: string;
        aut_name: string;
        is_top: number;
        cover: {
            type: number;
            images: string[];
        };
    }[]
}
const initState: State = {
    list: [],
}
// { id: 2, name: "睡觉", isDone: false }

function newList(state = initState, action: RootAction) {
    if (action.type === 'newList/init') {
        return { ...state, list: action.data }
    }
    return state

}
export default newList