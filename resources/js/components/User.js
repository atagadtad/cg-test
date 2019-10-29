
import React from 'react'
import './User.css'
import Octicon from '@primer/octicons-react'


export default function User(props) {

    return (

    <div id="user-card" className="card">
        <div>
            <div className="container no-gutters">
                <div className="container-item">
                    <img id="profile-pic" className="img" src={props.profile_picture} alt="Card image cap"></img>
                </div>
                <div className="container-item">
                    <div className="card-block px-2">
                        <h6 id="user-name" className="card-title">{props.name}</h6>
                        <h6 id="bio-title" className="card-title text-muted">Bio</h6>
                        <p id="bio" className="card-text">{props.bio}</p>

                    </div>

                </div>
                <div className="container-item" id='contact'>
                    <div>
                    <h6 className="card-title text-muted contact-title">Email</h6>
                    <p className="contact-info">{props.email}</p>
                    </div>

                    <div>
                    <h6 className="card-title text-muted contact-title">Phone</h6>
                    <p className="contact-info">{props.phone_number}</p>
                    </div>
                </div>

            </div>
        </div>

    </div>

    )
}
