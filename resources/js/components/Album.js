import React from 'react'

export default function Photo(props) {

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

    return <ul>{album}</ul>
}
