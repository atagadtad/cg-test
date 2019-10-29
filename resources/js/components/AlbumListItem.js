import React from 'react'

export default function AlbumListItem(props) {

    console.log("props from AlbumList: ", props)

    return (
        <li>

            <div className="card bg-dark text-white">

                <img className="card-img-top" src={props.img} alt="Card image cap"/>
                <div className="card-img-overlay">
                    <h5 className="card-title">{props.title}</h5>
                </div>

                <div className="card-body .bg-light">

                    <p className="card-text">{props.description}</p>
                    <p class="card-text"><small class="text-muted">{props.date}</small></p>
                    <img src="/open-iconic/svg/icon-name.svg" alt="icon name"/>


                </div>
            </div>


        </li>
    )
}


// <div class="card bg-primary text-white text-center p-3">
// <blockquote class="blockquote mb-0">
//   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
//   <footer class="blockquote-footer">
//     <small>
//       Someone famous in <cite title="Source Title">Source Title</cite>
//     </small>
//   </footer>
// </blockquote>
// </div>
