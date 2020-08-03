import React, { useContext } from 'react';


export const AppContext = React.createContext();

export const useCharacters = () => {
  const { characters } = useContext(AppContext);
  return characters;
};

export const useToggle = () => {
  const { toggle } = useContext(AppContext);
  return toggle;
};
