import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'


export default function App(props) {

    let imgUrl = "http://localhost:8000/storage/img/landscape1.jpeg"
    return (
        <>
    <div className="app" style={{backgroundImage: `url(${imgUrl})`}}></div>
    <h1>
        HELLO
    </h1>
</>
    )
}


ReactDOM.render(<App />, document.getElementById("app"));
