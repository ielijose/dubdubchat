import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  generateRandomMessage,
  initializeChat
} from "../../store/chat/actions";
import {
  ChatContainer,
  Header,
  HeaderTitle,
  MembersInfo,
  Room
} from "./styles";
import { Message } from "../Message";

export const ChatRoom = () => {
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

  const containerBottomRef = useRef(null);
  const chatContainerRef = useRef(null);

  const scrollToBottom = () => {
    if (containerBottomRef.current) {
      chatContainerRef.current.scrollTo(
        0,
        containerBottomRef.current.offsetTop
      );
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

  return (
    <Room>
      <Header>
        <HeaderTitle>Wubba lubba dub dub!</HeaderTitle>
        <MembersInfo>{membersOrWhoIsWriting()}</MembersInfo>
      </Header>
      <ChatContainer ref={chatContainerRef}>
        {messages.map(message => {
          return <Message key={message.id} {...message} />;
        })}
        <div ref={containerBottomRef} />
      </ChatContainer>
    </Room>
  );
};
