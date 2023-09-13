import Card from "react-bootstrap/Card";
import Poster from "../../../assets/posterDefault.jpg";
import "./jcss.css";

function Cards(props) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={"http://image.tmdb.org/t/p/original" + props.movies.poster_path}
        />
        <Card.Body>
          <Card.Title> {props.movies.original_title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
}

function CardsVazios() {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Poster} />
        <Card.Body>
          <Card.Title> Hook </Card.Title>
          <Card.Text>Selecione um Gênero para trocar os cards.</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export { Cards, CardsVazios };
