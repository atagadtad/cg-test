import React from 'react'

import './AlbumListItem.css'
import Octicon, { Heart, PrimitiveDot, PrimitiveDotStroke } from '@primer/octicons-react'

export default function AlbumListItem(props) {


    return (
        <div className="albumlist-item">

            <div className="card bg-dark text-white">

                <img className="card-img-top" src={props.img} alt="Card image cap"/>

                <div className="card-img-overlay">
                    <h6 id="photo-title" className="card-title">{props.title}</h6>
                </div>

                <div id="card-bottom" className="card-body">

                        <p id="photo-description" className="card-text container-item">{props.description}</p>

                    <div className="date-liked-container">
                        {props.featured === 1 ?  <Octicon icon={Heart}/> : <Octicon icon={PrimitiveDotStroke} size="small"/>}
                        <p className="card-text container-item"><small id="date" className="text-muted">{props.date}</small></p>
                    </div>

                </div>
            </div>
        </div>
    )
}
