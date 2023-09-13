import React from "react";
import Icon from "../../../image/pexels.jpg";
import Icon2 from "../../../image/pexels2.jpg";
import Icon3 from "../../../image/pexels3.jpg";

import Carousel from 'react-bootstrap/Carousel';

import "./style.css";

function Carousels(props) {

    let image = "http://image.tmdb.org/t/p/w500";
console.log(props.listMovie);



    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image + props.listMovie[0].backdrop_path}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>{props.listMovie[0].title}</h3>
                    <p>{props.listMovie[0].overview}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image + props.listMovie[1].backdrop_path}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>{props.listMovie[1].title}</h3>
                    <p>{props.listMovie[1].overview}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image + props.listMovie[2].backdrop_path}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>{props.listMovie[2].title}</h3>
                    <p>{props.listMovie[2].overview}</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carousels;