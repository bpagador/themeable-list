export const avatarAPI = (page = 1) => {
  return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=20?page=${page}`)
    .then(res => res.json())
    .then(json => json.characters.map(character => ({
      name: character.name,
      pic: character.photoUrl,
      allies: character.allies,
      enemies: character.enemies
    })));
};
