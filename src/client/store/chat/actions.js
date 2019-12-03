import quotesService from "../../services/quotesService";
import chatUtils from "../../utils/chatUtils";

export const APPEND_MESSAGE = "APPEND_MESSAGE";
export const DELETE_MESSAGES = "DELETE_MESSAGES";
export const FETCH_QUOTE_ERROR = "FETCH_QUOTE_ERROR";
export const SET_ME = "SET_ME";
export const SET_MEMBERS = "SET_MEMBERS";
export const SET_IS_WRITING = "SET_IS_WRITING";
export const UNSET_IS_WRITING = "UNSET_IS_WRITING";

function appendMessage(message) {
  return {
    type: APPEND_MESSAGE,
    message
  };
}

function deleteMessages() {
  return {
    type: DELETE_MESSAGES
  };
}

function fetchQuoteError(error) {
  return {
    type: FETCH_QUOTE_ERROR,
    error
  };
}

function setMe(me) {
  return {
    type: SET_ME,
    me
  };
}

function setMembers(members) {
  return {
    type: SET_MEMBERS,
    members
  };
}

function setIsWriting(name) {
  return {
    type: SET_IS_WRITING,
    name
  };
}

function unsetIsWriting() {
  return {
    type: UNSET_IS_WRITING
  };
}

export const generateRandomMessage = () => async (dispatch, getState) => {
  const { characters, chat } = getState();
  const { me } = chat;
  const randomCharacter = chatUtils.getRandomCharacter(characters.selected);
  const isMine = me && me.id && randomCharacter.id === me.id;

  dispatch(setIsWriting(randomCharacter.name));

  return quotesService
    .getRandomQuote()
    .then(res => {
      const message = {
        character: randomCharacter,
        text: res.quote,
        id: chat.messages.length + Math.random(),
        isMine
      };

      const delay = chatUtils.simulateMessageWritingTime(message.text);

      return new Promise(resolve =>
        setTimeout(() => {
          dispatch(unsetIsWriting());
          dispatch(appendMessage(message));
          resolve(res);
        }, delay)
      );
    })
    .catch(error => {
      dispatch(fetchQuoteError(error));
    });
};

export const initializeChat = selected => dispatch => {
  dispatch(deleteMessages());
  let me = null;
  if (selected.length > 0) {
    [me] = selected;
    dispatch(setMe(me));
  }

  const members = chatUtils.getMembers(selected, me);
  if (me) {
    members.push(`${me.name.split(" ")[0]} (Your Bot)`);
  }
  const data = members.join(", ");

  dispatch(setMembers(data));
};
