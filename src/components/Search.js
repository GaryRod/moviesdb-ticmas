import React, {useRef} from 'react'
import PropTypes from 'prop-types'

function Search({buscador}) {
    let keyword = useRef()

    let largoKeyword = keyword.current?.value.length === 10 ? 'No puedes escribir más de 10 letras' : ''

    return (
        <div className='m-auto col-8 col-md-5 pt-3'>
                <div className="input-group" >
                    <input onChange={buscador} ref={keyword} type="search" className="form-control rounded" placeholder="Search" aria-label="Search" maxLength={10} autoFocus aria-describedby="search-addon" />
                </div>
                <p className='text-white'> {largoKeyword} </p>
        </div>
    )
}

Search.propTypes = {
    buscador: PropTypes.func
}

export default Search