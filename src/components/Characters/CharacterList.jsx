import React from 'react';
import PropTypes from 'prop-types';

const CharacterList = ({ characters }) => {
  const listElement = characters.map((character, i) => {
    return (
      <li key={i}>
        <img src={character.pic}/>
        <h2>{character.name}</h2>

        <h4>Allies:</h4>
        <ul>{character.allies}</ul>
        
        <h4>Enemies:</h4>
        <ul>{character.enemies}</ul>

      </li>
    );
  });

  return (
    <ul>
      {listElement}
    </ul>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export default CharacterList;



