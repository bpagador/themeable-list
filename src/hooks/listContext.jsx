import React, { useContext } from 'react';


export const ListContext = React.createContext();

export const useCharacters = () => {
  const { characters } = useContext(ListContext);
  return characters;
};

export const useToggle = () => {
  const { toggle } = useContext(ListContext);
  return toggle;
};
