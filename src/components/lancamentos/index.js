import Carousel from './carousel';
import GetGenre from '../../APi/GetGenre';
import React, { useState, useEffect } from 'react';
// import GetMovie from '../../APi/GetMovie';
import GetUpcomingList from '../../APi/GetUpcomingList';
import './jcss.css';

function Lancamentos() {

  // const [moviesList, setMoviesList] = useState([]);
  const [genreList, setGenreList] = useState([]);
  const [upcomingList, setUpcomingList] = useState([]);

  // useEffect(() => {
  //   async function getMovie() {
  //     const movies = await GetMovie();
  //     setMoviesList(movies.movies.data.results);
  //   }
  //   getMovie();
  // }, []);

  useEffect(() => {
    async function getUpcomingList() {
      const movies = await GetUpcomingList();
      setUpcomingList(movies.movies.data);
      // console.log(movies.movies.data[0].genre_ids);
    }
    getUpcomingList();
  }, []);

  useEffect(() => {
    async function getGenres() {
      const genres = await GetGenre();
      setGenreList(genres.movies.data);
    }
    getGenres();
  }, []);

  function fazString(stringId) {
    let genreName;
    for (let i = 0; i < stringId.length; i++) {
      genreName += idToGenre(stringId[i]);
      genreName += " ";
    }
    return genreName;
  }

  function idToGenre(genreId) {
    let genreName;
    for (let i = 0; i < genreList?.length; i++) {
      if (genreList[i]?.id === genreId) {
        genreName = genreList[i]?.name;
      }
    }
    return genreName;
  }

  return (
    <div className="pos-cabeca">

      <Carousel movieData={upcomingList} idToGenre={idToGenre} fazString={fazString} genres={genreList}></Carousel>

    </div>

  )
}
export default Lancamentos;










  // const [manoo, setMano] = useState([]);
  // useEffect(() => {
  //   async function mano(){
  //     const resultado = await moviesList;
  //     setMano(resultado);
  //   }
  //   mano();
  // }, []);

  //   async function getRandomMovies() {
  //     let movieRand;
  //     for (let i = 0; i < 3; i++) {
  //       let random = Math.floor(Math.random() * (20));
  //       movieRand = moviesList[random];
  //       break;
  //     }
  //     const movies = await GetMovie();
  //     setMoviesList(movies[movieRand]);
  //   };
  // const a = getRandomMovies();