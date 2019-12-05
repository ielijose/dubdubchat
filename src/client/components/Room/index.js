import PropTypes from 'prop-types';
import React from 'react';
import { messageShape } from '../../types/message';
import { refType } from '../../types/ref';
import { Message } from '../Message';
import { ChatContainer, Header, HeaderTitle, MembersInfo, RoomContainer } from './styles';

export const Room = props => {
  const { info, messages, containerRef, endRef } = props;
  return (
    <RoomContainer>
      <Header>
        <HeaderTitle>Wubba lubba dub dub!</HeaderTitle>
        <MembersInfo>{info}</MembersInfo>
      </Header>
      <ChatContainer ref={containerRef}>
        {messages.map(message => {
          return <Message key={message.id} {...message} />;
        })}
        <div ref={endRef} />
      </ChatContainer>
    </RoomContainer>
  );
};

Room.propTypes = {
  info: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(messageShape).isRequired,
  containerRef: refType.isRequired,
  endRef: refType.isRequired,
};
