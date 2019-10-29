import React from 'react'

import AlbumListItem from './AlbumListItem';
import './Album.css';

export default function Album(props) {


        const album = props.album.map(photo => {
            return (
                <AlbumListItem
                    title={photo.title}
                    img={photo.img}
                    description={photo.description}
                    featured={photo.featured}
                    date={photo.date}
                />
            )
        })
    return <div className="album">{album}</div>
}
