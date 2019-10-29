
import React, { useEffect, useState } from 'react'
import './User.css'


export default function User(props) {

    console.log("props: ", props)

    return (

    <div className="card">
        <div className="card-body">
            {props.name}
        </div>
    </div>

    )
}
