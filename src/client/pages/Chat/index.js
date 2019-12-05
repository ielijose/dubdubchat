import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Room } from '../../components/Room';
import { generateRandomMessage, initializeChat } from '../../store/chat/actions';

export const ChatPage = () => {
  const dispatch = useDispatch();
  const { selected } = useSelector(state => state.characters);

  useEffect(() => {
    if (selected.length > 0) {
      dispatch(initializeChat(selected));
    }
  }, []);

  const { messages, members, isWriting } = useSelector(state => state.chat);
  const [delay, setDelay] = useState(1000);
  const isRunning = selected.length > 0;

  const endRef = useRef(null);
  const containerRef = useRef(null);

  const scrollToBottom = () => {
    if (endRef.current) {
      containerRef.current.scrollTo(0, endRef.current.offsetTop);
    }
  };

  const MIN_DELAY = 2000;
  const MAX_DELAY = 5000 - MIN_DELAY;

  useEffect(() => {
    if (!isRunning) {
      return () => {};
    }
    let isSubscribed = true;

    const timer = setTimeout(async () => {
      if (isSubscribed) {
        await dispatch(generateRandomMessage());
        scrollToBottom();
        setDelay(Math.floor(Math.random() * MAX_DELAY) + MIN_DELAY);
      }
    }, delay);
    return () => {
      isSubscribed = false;
      clearTimeout(timer);
    };
  }, [delay]);

  const membersOrWhoIsWriting = () => {
    if (isWriting) {
      return `${isWriting} is writing a message...`;
    }
    return members;
  };
  const info = membersOrWhoIsWriting();
  return <Room info={info} messages={messages} containerRef={containerRef} endRef={endRef} />;
};
