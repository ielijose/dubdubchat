import apiService from "../../services/apiService";

export const FETCH_CHARACTERS_LOADING = "FETCH_CHARACTERS_LOADING";
export const FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS";
export const FETCH_CHARACTERS_ERROR = "FETCH_CHARACTERS_ERROR";
export const SELECT_CHARACTER = "SELECT_CHARACTER";
export const UNSELECT_CHARACTER = "UNSELECT_CHARACTER";
export const SET_PAGE_NUMBER = "SET_PAGE_NUMBER";

function fetchCharactersLoading() {
  return {
    type: FETCH_CHARACTERS_LOADING
  };
}

function fetchCharactersSuccess({ characters, hasMore }) {
  return {
    type: FETCH_CHARACTERS_SUCCESS,
    characters,
    hasMore
  };
}

function fetchCharactersError(error) {
  return {
    type: FETCH_CHARACTERS_ERROR,
    error
  };
}

function setPageNumber(page) {
  return {
    type: SET_PAGE_NUMBER,
    page
  };
}

export function selectCharacter(character) {
  return {
    type: SELECT_CHARACTER,
    character
  };
}

export function unselectCharacter(id) {
  return {
    type: UNSELECT_CHARACTER,
    id
  };
}

export function fetchCharacters(page) {
  return dispatch => {
    dispatch(fetchCharactersLoading());
    apiService
      .getCharactersByPage(page)
      .then(res => {
        const payload = {
          characters: res.results,
          hasMore: page < res.info.pages
        };
        dispatch(fetchCharactersSuccess(payload));
        dispatch(setPageNumber(page));
      })
      .catch(error => {
        dispatch(fetchCharactersError(error));
      });
  };
}
