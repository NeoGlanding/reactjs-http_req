import React, {useState} from 'react'
import ContainerMov from './ContainerMov'
import './Fetch.css'

function Fetch() {
    const [movies, setMovies] = useState([]);
    const dummy_mov = [
        {
            id: 1,
            title: 'Eko Sutoyo',
            opening: 'Nama saya eko'
        },
        {
            id: 2,
            title: 'Engkos Koswara',
            opening: 'Ah teu ngartos urang'
        }
    ] 

    const fetchMovies = () => {
        fetch('https://swapi.dev/api/starships')
            .then(response => response.json())
            .then(data => {
                const movies = data.results.map((el, i) => {
                    return {
                        id: i,
                        title: el.name,
                        opening: el.manufacturer
                    }
                });
                setMovies(movies);
            })
    }

    return (
        <React.Fragment>
            <button onClick={fetchMovies}>Fetch</button>
            <div className="fetch-container">
                {movies.map(el => <ContainerMov key={el.id} title={el.title} opening={el.opening} />)}
            </div>
        </React.Fragment>
    )
}

export default Fetch
