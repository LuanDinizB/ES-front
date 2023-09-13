import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import './jcss.css';

export default function Drowpown(props) {

  const [value, setValue] = useState('Gêneros');

  const handleSelect=(e)=>{
    setValue(e)
  }

  useEffect(() => {
    props.idParaGenero(value);
  }, [value]);



  return (
    <>
      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
         {value}
        </Dropdown.Toggle>
        <Dropdown.Menu>    
          {props.genres.map(function(genre) {
            return (<Dropdown.Item eventKey={genre.name}>{genre.name}</Dropdown.Item>)
          })
         }
           <Dropdown.Item eventKey="Feijas">Feijas</Dropdown.Item>         
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
};