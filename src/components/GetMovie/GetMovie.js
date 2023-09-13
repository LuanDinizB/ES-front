import React, {useState, useEffect} from 'react';

import GetMovie from '../../APi/GetMovie';

function Lancamentos(){
    const[movies, setMovies] = useState([]);

    async function GetMovies(){
        const {results} = await GetMovie();
        setMovies(results);
    }

    useEffect(() => {
        GetMovies();
    }, []);

    return (
        <div>           
            {movies.map((movie)=>{
                 <>
                <h1>{movie.original_title}</h1>
                <h3>{movie.overview}</h3>
                </>
            })}

        </div>
    );
}