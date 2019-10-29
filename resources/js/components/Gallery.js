
import axios from 'axios'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Gallery(props) {

    useEffect(() => {
        axios.get('http://localhost:8000/api/users/1')
        .then(res => {
            console.log(res.data)
        })
    }, [])

    return (
        <main>

        <h1>
            hello
        </h1>
        </main>
    )
}
