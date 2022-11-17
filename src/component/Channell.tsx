import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getChannel, changeChannel } from '../store/action'
import { RootState } from '../store'

export default function Channel() {
    const dispatch = useDispatch<any>()
    useEffect(() => {
        dispatch(getChannel())
    }, [dispatch])

    // 从redux中获取数据
    const { active, list } = useSelector((state: RootState) => state.channel)
    console.log(list, 11)
    const handleChanne=(id:number)=>{
        // console.log(id)
        dispatch(changeChannel(id))

    }
    return (
        <ul className="catagtory">
            {
                list.map((y) => (
                    <li className={y.id === active ? 'select' : ''} key={y.id} onClick={()=>handleChanne(y.id)}>{y.name}</li>))
            }
            {/* <li className="select">开发者资讯</li>
            <li>测试开发</li> */}
        </ul>
    )
}