
import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Gallery extends Component {
    constructor () {
      super()
    //   this.state = {
    //     projects: []
    //   }
    }

    componentDidMount () {
      axios.get('/api/users').then(response => {
        this.setState({
          projects: response.data
        })
      })
    }

    render () {
        return (
            <h1>
                hai
            </h1>
        )
    }
}

export default Gallery
