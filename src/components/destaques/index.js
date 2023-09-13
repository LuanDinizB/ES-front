import React, { useState, useEffect } from 'react';
import GetMovieByGenre from '../../APi/GetMovieByGenre';
import GetGenre from '../../APi/GetGenre';
import './jcss.css';
import {Cards, CardsVazios} from './cards';

import 'bootstrap/dist/css/bootstrap.min.css';
import Selecao from '../../components/destaques/selecao';

function Destaques() {

    const [genreList, setGenreList] = useState([]);
    const [moviesList, setMoviesList] = useState([]);

    useEffect(() => {
        async function getGenres() {
            const genres = await GetGenre();
            setGenreList(genres.movies.data);
        }
        getGenres();
    }, []);



    async function idParaGenero(genreName) {
        let genreId;
        for (let i = 0; i < genreList.length; i++) {
            if (genreList[i].name === genreName) {
                let random = Math.floor(Math.random() * (20));
                genreId = parseInt(genreList[random].id);
                break;
            }
        }
        const movies = await GetMovieByGenre(genreId);
       // console.log(movies.movies.data);
        setMoviesList(movies.movies.data);

    };

    return (
        <div>
            <h1 class="titulos">Destaques </h1>
            <Selecao class="botao" idParaGenero={idParaGenero} genres={genreList}></Selecao>

            {moviesList.length > 0 ? (
                <div class="cards">
                    <Cards class='card1' movies={moviesList[0]}></Cards>
                    <Cards class='card2' movies={moviesList[1]}></Cards>
                    <Cards class='card3' movies={moviesList[2]}></Cards>
                    <Cards class='card4' movies={moviesList[3]}></Cards>
                </div>
            ) : (<div class="cards">
                <CardsVazios></CardsVazios>
                <CardsVazios></CardsVazios>
                <CardsVazios></CardsVazios>
                <CardsVazios></CardsVazios>
            </div>)
            }
        </div>
    )
}




export { Destaques };