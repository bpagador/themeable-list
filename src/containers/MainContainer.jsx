import React from 'react';
import { useCharacters, usePageCount } from '../hooks/appContext';
import CharacterList from '../components/Characters/CharacterList';
import PageButtons from '../components/Pagination/PageButtons';



const MainContainer = () => {
  const characters = useCharacters();
  const page = usePageCount();

  return (
    <>
      <PageButtons page={page} />
      <CharacterList characters={characters} />
    </>
  );
};

export default MainContainer;
