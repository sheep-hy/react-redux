import React from 'react'
import { getNews } from '../store/action'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootAction, RootState } from '../store'
import avater from '../yjx.jpg'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

export default function NewList() {
    const dispatch = useDispatch<any>()
    const id = useSelector((state: RootState) => state.channel.active)
    useEffect(() => {
        dispatch(getNews(id))
    }, [dispatch, id])// 当id变化时 就会触发回调 拉取新的数据

    const list = useSelector((state: RootState) => state.newList.list)
    const history = useHistory()
    const jumpDetail = (id: string) => {
        history.push(`/detail/${id}`)
    }
    return (
        <div className="list">
            {
                list.map((item) => (
                    <div className="article_item" key={item.art_id} onClick={() => jumpDetail(item.art_id)}>
                        <h3 className="van-ellipsis">{item.title}</h3>
                        <div className="img_box">
                            <img src={item.cover.type ? item.cover.images[0] : avater} className="w100" alt="" />
                        </div>
                        <div className="info_box">
                            <span>{item.aut_name}</span>
                            <span>{item.comm_count}评论</span>
                            <span>{item.pubdate}</span>
                        </div>
                    </div>
                ))
            }
            {/* <div className="article_item" >
                <h3 className="van-ellipsis">猪是什么品种</h3>
                <div className="img_box">
                    <img src='s' className="w100" alt="" />
                </div>
                <div className="info_box">
                    <span>灿灿是只猪</span>
                    <span>斤斤计较-评论</span>
                    <span>2022.22.22</span>
                </div>
            </div> */}
        </div >
    )
}