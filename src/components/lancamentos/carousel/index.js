import Carousel from 'react-bootstrap/Carousel'
import TextareaAutosize from '@mui/core/TextareaAutosize';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import 'bootstrap/dist/css/bootstrap.min.css';
import './jcss.css';

function CarouselDefault(props) {

  // async function troca(){    
  //   for (let i = 0; i < 3; i++) {
  //     let american_date = await props.movieData[i]?.release_date;
  //     let dataBrasileira = american_date.split('-').reverse().join('/');
  //     props.movieData[i].release_date = dataBrasileira; 
  //   }
  // }  

  return (
    <>
    { console.log(props.idToGenre(props.movieData[0]?.genre_ids[1]))}
    { console.log(props.movieData[0])}
        

      <Carousel>
        <Carousel.Item >
          <div className="data">
            < div className="movie-title" >
              {props.movieData[0]?.title}
            </div>
            <div className="overview">
              <TextareaAutosize className=" textarea"
                maxRows={4}
                defaultValue={props.movieData[0]?.overview}
                style={{ width: 500, height: 150 }}
              />
            </div>
            <div className="original-title">
              <strong>Titulo Original:</strong> {props.movieData[0]?.original_title}
            </div>
            <div className="genres">
              <strong>Gêneros:</strong> {props.idToGenre(props.movieData[0]?.genre_ids[0]) +", " +props.idToGenre(props.movieData[0]?.genre_ids[1])} 
            </div>
            <div className="date">
              <strong>Data de estreia:</strong> {props.movieData[0]?.release_date}
            </div>
            <div className="adult-content">
              <strong>Conteúdo adulto:</strong> {props.movieData[0]?.adult ? "Sim" : "Não"}
            </div>
            <div className="rating">
              <Stack spacing={3}>
                <Rating name="stars" value={props.movieData[0]?.vote_average / 2} precision={0.1} />
              </Stack>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item >
          <div class="video">
            <iframe
              width="650"
              height="384"
              // src={`https://www.youtube.com/embed/ZPbet917GKA`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
          <div className="data">
            < div className="movie-title" >
              {props.movieData[1]?.title}
            </div>

            <div className="overview">
              <TextareaAutosize className=" textarea"
                maxRows={4}
                defaultValue={props.movieData[0]?.overview}
                style={{ width: 500, height: 150 }}
              />
            </div>
            <div className="original-title">
              <strong>Titulo Original:</strong> {props.movieData[1]?.original_title}
            </div>
            <div className="genres">
              <strong>Gêneros:</strong> {props.idToGenre(props.movieData[0]?.genre_ids[1]) +", " +props.idToGenre(props.movieData[1]?.genre_ids[1])}
            </div>
            <div className="date">
              <strong>Data de estreia:</strong> {props.movieData[1]?.release_date}
            </div>
            <div className="adult-content">
              <strong>Conteúdo adulto:</strong> {props.movieData[1]?.adult ? "Sim" : "Não"}
            </div>
            <div className="how-long">
              <strong>Duração:</strong> {"00:00"}
            </div>
            <div className="rating">
              <Stack spacing={3}>
                <Rating name="stars" value={props.movieData[1]?.vote_average / 2} precision={0.1} />
              </Stack>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item >
          <div class="video">
            <iframe
              width="650"
              height="384"
              src={`https://www.youtube.com/embed/_kRFIn6bNwQ`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
          <div className="data">
            < div className="movie-title" >
              {props.movieData[2]?.title}
            </div>

            <div className="overview">
              <TextareaAutosize className=" textarea"
                maxRows={4}
                defaultValue={props.movieData[0]?.overview}
                style={{ width: 500, height: 150 }}
              />
            </div>
            <div className="original-title">
              <strong>Titulo Original:</strong> {props.movieData[2]?.original_title}
            </div>
            <div className="genres">
              <strong>Gêneros:</strong> {props.idToGenre(props.movieData[2]?.genre_ids[0]) +", " +props.idToGenre(props.movieData[2]?.genre_ids[1])}
            </div>
            <div className="date">
              <strong>Data de estreia:</strong> {props.movieData[2]?.release_date}
            </div>
            <div className="adult-content">
              <strong>Conteúdo adulto:</strong> {props.movieData[2]?.adult ? "Sim" : "Não"}
            </div>
            <div className="how-long">
              <strong>Duração:</strong> {"00:00"}
            </div>
            <div className="rating">
              <Stack spacing={3}>
                <Rating name="stars" value={props.movieData[0]?.vote_average / 2} precision={0.1} />
              </Stack>
            </div>
          </div>
        </Carousel.Item>



      </Carousel>

    </>
  )
};


export default CarouselDefault;
