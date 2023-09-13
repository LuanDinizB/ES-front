import React from 'react';
import './jcss.css';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Dots from 'react-carousel-dots';

function Slider() {
    return (
        <section className="main-slider">
            <div className={"slides"}>
                <div className="movie-video" >
                    <iframe
                        width="616"
                        height="384"
                        src={`https://www.youtube.com/embed/_fGbqxCIL60`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                    />
                </div>

                < div className="movie-title" >
                    <h1>{"Nome do Filme"}</h1>
                </div>

                < div className="movie-synopsis" >
                    <TextareaAutosize className="textarea"
                        maxRows={7}
                        disabled
                        defaultValue="Synopsis: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam est nulla, vulputate ac mollis in, semper eu massa. Ut ut massa nibh. Pellentesque est tellus, mattis varius metus quis, pellentesque euismod risus. Nullam lacinia ligula sit amet tellus eleifend, eget tincidunt neque fringilla. Mauris sem orci, dictum id ligula in, pellentesque elementum dui. Nunc vestibulum sem nec nisi ultrices aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam est nulla, vulputate ac mollis in, semper eu massa. Ut ut massa nibh. Pellentesque est tellus, mattis varius metus quis, pellentesque euismod risus. Nullam lacinia ligula sit amet tellus eleifend, eget tincidunt neque fringilla. Mauris sem orci, dictum id ligula in, pellentesque elementum dui. Nunc vestibulum sem nec nisi ultrices aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam est nulla, vulputate ac mollis in, semper eu massa. Ut ut massa nibh. Pellentesque est tellus, mattis varius metus quis, pellentesque euismod risus. Nullam lacinia ligula sit amet tellus eleifend, eget tincidunt neque fringilla. Mauris sem orci, dictum id ligula in, pellentesque elementum dui. Nunc vestibulum sem nec nisi ultrices aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam est nulla, vulputate ac mollis in, semper eu massa. Ut ut massa nibh. Pellentesque est tellus, mattis varius metus quis, pellentesque euismod risus. Nullam lacinia ligula sit amet tellus eleifend, eget tincidunt neque fringilla. Mauris sem orci, dictum id ligula in, pellentesque elementum dui. Nunc vestibulum sem nec nisi ultrices aliquet. "
                        style={{ width: 1030 }}
                    />
                </div>

                < div className="movie-original-tile" >
                    <strong>
                        Original Title:
                    </strong>
                    {" Title"}
                </div>

                < div className="movie-genres" >
                    <strong>
                        Genre:
                    </strong>
                    {" Genre 1 | Genre 2"}
                </div>

                < div className="movie-premiere" >
                    <strong>
                        Premiere:
                    </strong>
                    {" DD/MM/AAAA"}
                </div>

                < div className="movie-adult-question" >
                    <strong>
                        Adult content:
                    </strong>
                    {" Yes/No"}
                </div>

                < div className="movie-time" >
                    <strong>
                        Duration:
                    </strong>
                    {" {X}h {YY}m"}
                </div>

                <div className="avaliation" >
                    <Stack spacing={1}>
                        <Rating name="stars" value={3} readOnly />
                    </Stack>
                </div>
            </div>
        </section>
    )
}

export default Slider;