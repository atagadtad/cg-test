import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import User from './User';
import Photo from './Photo';

import './App.css'


export default function App(props) {
    const [user, setUser] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/users/1')
        .then(res => {
            setUser(res.data)
        })
    }, [])

    let imgUrl = "http://localhost:8000/storage/img/landscape1.jpeg"

    return (

    <main className="container">
        <div className="app" style={{backgroundImage: `url(${imgUrl})`}}></div>

        <div>

            <User
            name={user.name}
            email={user.email}
            bio={user.bio}
            profile_picture={user.profile_picture}
            phone_number={user.phone_number}/>


            <Photo />

        </div>





    </main>
    )
}


ReactDOM.render(<App />, document.getElementById("app"));
