import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../hooks/appContext';
import reducer, { initialState } from '../reducers/appReducer';
import { useEffect } from 'react';
import { fetchCharacters } from '../services/avatarAPI';

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchCharacters(state.page)
      .then(characterList => dispatch({ type: 'SET_LIST', payload: characterList }));
  }, [state.page]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node
};


export default AppProvider;

