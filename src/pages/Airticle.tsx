import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
type detailType = {
    title: string
}
function Detail() {
    const [art, setAir] = useState<detailType>({} as detailType)
    const params = useParams<{ id: string }>()
    useEffect(() => {
        async function getAirDetail() {
            const res = await axios.get('http://geek.itheima.net/v1_0/articles/' + params.id)
            console.log(res, '详情')
            setAir(res.data.data)
        }
        getAirDetail()
        // async function getArticle() {
        //     const res = await axios.get('http://geek.itheima.net/v1_0/articles/' + params.id)
        //     console.log(res)
        //     // setArticle(res.data.data)
        // }
        // getArticle()
    }, [params.id])

    return (
        <div>
            详情页面11
            {params.id}
            <div>{art.title}</div>
        </div>
    )
}

export default Detail