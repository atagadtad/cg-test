import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Gallery from './Gallery';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
            <Header />
            <Switch>
              <Route exact path='/' component={Gallery} />
            </Switch>
            </BrowserRouter>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
