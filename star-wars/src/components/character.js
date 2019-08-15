import React from 'react';

const Character = (props) => {

    return (
        <div className='character'>
            <h1>{props.character.name}</h1>
            <ul>
                <li>height: {props.character.height}</li>
                <li>mass: {props.character.mass}</li>
                <li>hair_color: {props.character.hair_color}</li>
                <li>skin_color: {props.character.skin_color}</li>
                <li>eye_color: {props.character.eye_color}</li>
                <li>birth_year: {props.character.birth_year}</li>
                <li>gender: {props.character.gender}</li>
            </ul>


        </div>
    )
}
export default Character;