import React from 'react';
import { useCharacters } from '../hooks/appContext';
import CharacterList from '../components/Characters/CharacterList';


const MainContainer = () => {
  const characters = useCharacters();

  return (
    <>
      <CharacterList characters={characters} />
    </>
  );
};

export default MainContainer;
