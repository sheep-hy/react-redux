import React from 'react'
import { useHistory } from 'react-router-dom'
import NewList from '../component/NewList'
import Channel from '../component/Channell'

function Home() {
    // const history=useHistory()
    // const jump=()=>{
    //       history.push('./login')
    // }
    // return (<div>Home111111
    //     <button onClick={jump}>按钮跳转login</button>

    // </div>)
    return (<div>
        <Channel />
        <NewList />
    </div>)
}

export default Home