import React from 'react'
import PropTypes from 'prop-types'

function Card(pelicula) {
    let imgDefault = 'https://image.winudf.com/v2/image1/Y29tLnRtZGIub2ZpY2lhbF9zY3JlZW5fMF8xNTg1NjY2Njk2XzA4OQ/screen-0.jpg?fakeurl=1&type=.webp'

    let imgApi = "https://image.tmdb.org/t/p/w500" + pelicula.poster_path

    let imgPelicula = pelicula.poster_path === null ? imgDefault : imgApi

    return (
        <div className='col-12 col-md-6 col-lg-4'>
            <div className="card h-100 bg-danger bg-gradient">
                <img src={imgPelicula} className="card-img-top" alt={pelicula.title}/>
                <div className="card-body">
                    <h5 className="card-title">{pelicula.title}</h5>
                    <p className="card-text">{pelicula.release_date}</p>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    release_date: PropTypes.string
}

export default Card