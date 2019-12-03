import {
  APPEND_MESSAGE,
  DELETE_MESSAGES,
  FETCH_QUOTE_ERROR,
  SET_ME,
  SET_MEMBERS,
  SET_IS_WRITING,
  UNSET_IS_WRITING
} from "./actions";

const initialState = {
  me: {},
  members: "",
  isWriting: null,
  messages: [],
  error: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case APPEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.message]
      };

    case DELETE_MESSAGES:
      return {
        ...state,
        messages: []
      };

    case SET_IS_WRITING:
      return {
        ...state,
        isWriting: action.name
      };

    case UNSET_IS_WRITING:
      return {
        ...state,
        isWriting: null
      };
    case FETCH_QUOTE_ERROR:
      return {
        ...state,
        error: action.error
      };

    case SET_ME:
      return {
        ...state,
        me: action.me
      };

    case SET_MEMBERS:
      return {
        ...state,
        members: action.members
      };

    default:
      return state;
  }
}

export default reducer;
