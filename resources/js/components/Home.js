
import axios from 'axios'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./Home.css";

    // const background = {
    //     backgroundImage: 'url(' + 'http://localhost:8000/storage/img/landscape1.jpeg' + ')',
    //     // filter: 'blur(8px)',
    // }

export default function Home(props) {

    useEffect(() => {
        axios.get('http://localhost:8000/api/users/1')
        .then(res => {
            console.log(res.data)
        })
    }, [])

    return (

    <div className="bg-image">HAI</div>

    )
}
