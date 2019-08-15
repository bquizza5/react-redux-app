import React from 'react';
import Character from './character'
import { connect } from 'react-redux';

import { getCharacter } from '../actions';

const Characters = (props) => {
    return (
        <>
            <button onClick={(e) => {
                e.preventDefault();
                
                props.getCharacter(props.state.nextPage);
                }}>Get Characters</button>
            <div className='characters'>
            
            {props.state.characters.map(character => {
                return <Character key={character.name} character={character} />
            })}
                
            </div>
        </>
    )
}

const mapStateToProps = state => ({
  state: state
});

export default connect(
  mapStateToProps,
  { getCharacter }
)(Characters);