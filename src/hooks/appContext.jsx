import React, { useContext } from 'react';


export const AppContext = React.createContext();

export const useCharacters = () => {
  const { state } = useContext(AppContext);
  return state.characterList;
};

export const usePageCount = () => {
  const { state } = useContext(AppContext);
  return state.page;
};

export const useToggle = () => {
  const { toggle } = useContext(AppContext);
  return toggle;
};

export const useDispatch = () => {
  const { dispatch } = useContext(AppContext);
  return dispatch;
};
