
import React from 'react'
import './User.css'


export default function User(props) {

    // console.log("props: ", props)

    return (

    <div className="card">
        <div className="row no-gutters">
            <div className="col-auto">
                <img id="profile-pic" className="img-fluid" src={props.profile_picture} alt="Card image cap"></img>
            </div>
            <div className="col">
                <div className="card-block px-2">
                    <h6 className="card-title">{props.name}</h6>
                    <h6 className="card-title">Bio</h6>
                    <p id="bio" className="card-text">{props.bio}</p>

                </div>

            </div>
            <div id="conact-info" className="col">
                <h6 className="card-title">Email</h6>
                <p>{props.email}</p>
                <h6 className="card-title">Phone</h6>
                <p>{props.phone_number}</p>
            </div>

        </div>

    </div>

    )
}
