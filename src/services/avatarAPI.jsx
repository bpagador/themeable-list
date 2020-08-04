import React from 'react';

export const fetchCharacters = (page) => {
  return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=20&page=${page}`)
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

// 
