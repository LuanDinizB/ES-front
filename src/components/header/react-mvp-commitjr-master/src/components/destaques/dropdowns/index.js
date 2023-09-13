import React, { useState, useEffect } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { getGenre } from "../../../APIs/GETGenre";
import Movies from "../../../APIs/GETMovie";
import Cards from "../cards/index";
import Destaques from "../index"
import "./style.css"


function DropDown(props) {
    //this.conteudoTag = document.getElementById("#aa1");

    // const[valor, setValor] = useState();
    
    //const [genreId, setGenreId] = useState([]);
   

    const [genreValue,setGenreValue]=useState('Gênero');
    
    const handleSelect=(e)=>{
        console.log(e);
       setGenreValue(e)
       //funcEncontrarGenero1();
       //console.log("to aqui");
    }

    useEffect(() =>{
        props.funcEncontrarGenero(genreValue);
    }, [genreValue]);

    

    

    return (
        <div>
            <Dropdown  onSelect={handleSelect}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {genreValue}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {props.listGenres.map(genre => <Dropdown.Item id={genre.id} eventKey={genre.name}>
                        {genre.name}</Dropdown.Item>)}
                
                
                 { /*<Dropdown.Item id='a1' onClick={funcEncontrarGenero1} href="#/action-1">Action</Dropdown.Item>
                     <Dropdown.Item id='2' href="#/action-2">Adventure</Dropdown.Item>
                     <Dropdown.Item id='3' href="#/action-3">Animation</Dropdown.Item>*/}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default DropDown;