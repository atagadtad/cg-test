
import React, { useEffect, useState } from 'react'
import './User.css'


export default function User(props) {

    console.log("props: ", props)

    return (

    <div className="card">
        <div className="row no-gutters">
            <div className="col-auto">
                <img id="profile-pic" className="img-fluid" src={props.profile_picture} alt="Card image cap"></img>
            </div>
            <div className="col">
                <div className="card-block px-2">
                    <h5 className="card-title">{props.name}</h5>

                    <p className="card-text">{props.bio}</p>

                </div>

            </div>

        </div>

    </div>

    )
}
