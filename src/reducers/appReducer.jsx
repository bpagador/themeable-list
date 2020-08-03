export const initialState = {
  characterList: [],
  page: 1,
  toggle: 'light'
};

export default function reducer(state, action) {
  switch(action.type) {
    case 'SET_LIST':
      return { ...state, characterList: action.payload };
    case 'SET_PAGE':
      return { ...state, page: action.payload };
    case 'SET_TOGGLE':
      return { ...state, toggle: state.toggle === 'light' ? 'dark' : 'light' };
    default:
      return state;
  }
}
