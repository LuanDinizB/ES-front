import React from "react";
import IronMan from "../../../image/iron-man.jpg";

function Card(props) {

  // const {title} = props.listMovie;
  //console.log(props.listMovie.id);
  // function conteudoAdulto(){
  //   if(props.listMovie.adult === "false"){
  //     return "Conteúdo Livre"
  //   }else{
  //     return "Conteúdo para maiores de idade"
  //   }
  // }
  console.log(props.listMovie);

  let title, overview, lancamento, adult, popularity, image = "http://image.tmdb.org/t/p/original";

  if (props.listMovie !== undefined) {
    title = props.listMovie.title;
    overview = props.listMovie.overview;
    lancamento = props.listMovie.release_date;
    adult = props.listMovie.adult + "";
    popularity = props.listMovie.popularity;
    image = image + props.listMovie.poster_path;
  } else {
    title = 'IronMan';
    overview = "Produced by Marvel Studios and distributed by Paramount Pictures,[N 1] it is the first film in the Marvel Cinematic Universe (MCU).";
    lancamento = "2008";
    adult = "False";
    popularity = "700.00"
    image = IronMan;
  }

  return (
    <>
    { title !== "IronMan" ? (
      
        <div class="card" style={{ width: "18rem" }}>
          <img class="card-img-top" src={image} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{overview} </p>
          </div>
          <ul class="list-group list-group-flush">
            <li key="1" class="list-group-item">Lançamento: {lancamento}</li>
            <li key="3" class="list-group-item">Adulto: {adult}</li>
            <li key="2" class="list-group-item">Popularidade: {popularity}</li>
          </ul>

        </div>
      
    ) : (<div></div>)
    }
    </>
    
    );

}

export default Card;