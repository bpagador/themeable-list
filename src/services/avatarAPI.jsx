import React from 'react';
export const fetchCharacters = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
    .then(res => res.json())
    .then((characters) => characters.map(character => {
      return {
        name: character.name,
        pic: character.photoUrl,
        allies: character.allies.map((ally, i) => (
          <li key={i}>
            {ally}
          </li>
        )),
        enemies: character.enemies.map((enemy, i) => (
          <li key={i}>
            {enemy}
          </li>
          
        ))
      };
    }));   
};

// perPage=20?page=${page}
