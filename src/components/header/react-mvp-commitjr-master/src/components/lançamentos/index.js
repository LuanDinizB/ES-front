import React, { useState, useEffect } from "react";
import Carousel from "./carousel/index.js";
import "./style.css"
import GETAllMovie from "../../APIs/GETAllMovie.js";

function Lançamentos() {

  let [listMovie, setListMovie] = useState([]);


  useEffect(() => {
    async function fetchfuncLoadMovie() {
      const movie = await GETAllMovie();
      setListMovie(movie.movies.data.results);
      console.log(listMovie)
    }
    fetchfuncLoadMovie()
  }, [])



  // useEffect(() => {
  //   console.log(listMovie.movies)
  // }, [listMovie])

  return (
    <>
      {console.log(listMovie)}
      <div id="here" class="contain-lançamentos">
      
        <h1 class="section-1" style={{ textAlign: "center", paddingTop: "30px", color: "#696969" }}> Lançamentos </h1>
        
        {
        listMovie.length > 0 && (

          <Carousel listMovie={listMovie} />
        
          )
        }
        
      </div>
    </>
  );
}

export default Lançamentos;