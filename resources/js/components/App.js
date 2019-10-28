import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Gallery from './Gallery'

export default function App(props) {
    return (
        <main>
            <Gallery />

        </main>
    )
}


ReactDOM.render(<App />, document.getElementById("app"));
