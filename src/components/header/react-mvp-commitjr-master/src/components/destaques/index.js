import React, { useState, useEffect } from "react";
import GetMovie from "../../APIs/GETMovie.js";
import MyDropDrown from "./dropdowns";
import Card from "./cards/index.js";
import "./style.css"
import { getGenre } from "../../APIs/GETGenre";
import Movies from "../../APIs/GETMovie"

function Destaques(props) {

    const [listGenres, setListGenres] = useState([]);
    let [listMovie, setListMovie] = useState([]);

    useEffect(() => {
        async function fetchGenre() {
            const genres = await getGenre();
            setListGenres(genres.genres.data.genres);
        }
        fetchGenre();
    }, []);

    useEffect(() => {
        console.log(listMovie);
        console.log(listGenres);
    }, [listMovie]);



    async function funcEncontrarGenero(value) {
        let genreId;
        for (let i = 0; i < listGenres.length; i++) {
            console.log(value);
            console.log("2");
            console.log("2");
            console.log("2");
            console.log("2");
            console.log("2");
            console.log("2");
            console.log("2");
            console.log("2");
            console.log("2");
            console.log("2");
            if (listGenres[i].name === value) {
                genreId = parseInt(listGenres[i].id);
                break;
            }
        }
        let movieList = await Movies(genreId);

        movieList = movieList.movies.data.sort(function (a, b) {
            return a.popularity > b.popularity ? -1 : a.popularity < b.popularity ? 1 : 0;
        });

        setListMovie(movieList);
    }


    return (


        <div>

            <div id="here1" className="contain-destaques">

                <h1 className="section-1" style={{ textAlign: "center" }}> Destaques </h1>
                <MyDropDrown funcEncontrarGenero={funcEncontrarGenero} listGenres={listGenres} />
                {listMovie.length > 0 ? (

                    <div className="contain-card">
                        {console.log("1")}
                        <Card id="card-1" listMovie={listMovie[0]} />
                        <Card id="card-2" listMovie={listMovie[1]} />
                        <Card id="card-3" listMovie={listMovie[2]} />
                        <Card id="card-4" listMovie={listMovie[3]} />

                    </div>

                ) : (<div></div>)
                }
            </div>
        </div>


    );
}

export default Destaques;