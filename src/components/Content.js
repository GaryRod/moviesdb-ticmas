import React, { useEffect, useState } from 'react'
import Card from './Card'

const Content = () => {

    const urlGenres='https://api.themoviedb.org/3/genre/movie/list?api_key=314dd2fd158d1a156815bfda6f2037c3'

    const [genres, setGenres] = useState([])

    useEffect(() => {
        fetch(urlGenres)
            .then(response => response.json())
            .then(data => {setGenres(data.genres)})
    }, [])

    const urlSearch = 'https://api.themoviedb.org/3/search/movie?&api_key=314dd2fd158d1a156815bfda6f2037c3&query='

    const [peliculas, setPeliculas] = useState({list: [], usando: false})
    
    const [keyword, setKeyword] = useState('')

    let largoKeyword = keyword.length === 10 ? 'No puedes escribir más de 10 letras' : ''

    const buscador = e => {
        setKeyword(e.target.value)
            fetch(urlSearch + e.target.value)
            .then(response => response.json())
            .then(data => {setPeliculas(peliculas => ({...peliculas, list: data.results, usando: true}))})
    }



    return (
        <React.Fragment>
            <div className='m-auto col-8 col-md-5 pt-3'>
                <div className="input-group" >
                    <input onChange={buscador} value={keyword} type="search" className="form-control rounded" placeholder="Search" aria-label="Search" maxLength={10} autoFocus aria-describedby="search-addon" />
                </div>
                <p className='text-white'> {largoKeyword} </p>
            </div>
            {
                !peliculas.usando &&
                <div className='container d-flex m-auto'>
                        <p className='m-auto alert alert-warning text-center'>Busca una pelicula</p>
                </div>
            }
            <div className='p-3'>
                {
                    peliculas.usando &&
                    genres.map((genre, i) => {
                        return (
                            <React.Fragment>
                                <div className='bg-warning mt-4 mb-2 rounded'>
                                    <h3 className='text-white ps-3' key={i}> {genre.name} </h3>
                                </div>
                                <div className='container m-auto g-2'>
                                    <div className='row g-2'>
                                        {
                                            peliculas.list?.map((pelicula, i) => {
                                                return (
                                                    <React.Fragment>
                                                        {
                                                            pelicula.genre_ids.map(peliculaGenreId => {
                                                                return peliculaGenreId === genre.id &&
                                                                <Card {...pelicula} key={pelicula.id + genre.id}></Card>
                                                            })
                                                        }
                                                    </React.Fragment>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </React.Fragment>
                        )
                    })
                }
            </div>
        </React.Fragment>
    )
}

export default Content