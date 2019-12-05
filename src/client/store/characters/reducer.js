import {
  FETCH_CHARACTERS_LOADING,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_ERROR,
  SELECT_CHARACTER,
  UNSELECT_CHARACTER,
  SET_PAGE_NUMBER,
} from './actions';

const initialState = {
  page: 1,
  loading: false,
  characters: [],
  selected: [],
  selectedMap: {},
  error: null,
  hasMore: true,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CHARACTERS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        loading: false,
        characters: [...state.characters, ...action.characters],
        hasMore: action.hasMore,
      };

    case FETCH_CHARACTERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case SELECT_CHARACTER:
      return {
        ...state,
        selected: [...state.selected, action.character],
        selectedMap: {
          ...state.selectedMap,
          [action.character.id]: true,
        },
      };

    case UNSELECT_CHARACTER:
      return {
        ...state,
        selected: [...state.selected.filter(c => c.id !== action.id)],
        selectedMap: {
          ...state.selectedMap,
          [action.id]: false,
        },
      };

    case SET_PAGE_NUMBER:
      return {
        ...state,
        page: action.page,
      };

    default:
      return state;
  }
}

export default reducer;
