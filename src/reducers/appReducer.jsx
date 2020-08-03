export const initialState = {
  characterList: [],
  toggle: 'light'
};

export default function reducer(state, action) {
  switch(action.type) {
    case 'SET_LIST':
      return { ...state, characterList: action.payload };
    case 'SET_TOGGLE':
      return { ...state, toggle: state.toggle === 'light' ? 'dark' : 'light' };
    default:
      return state;
  }
}
