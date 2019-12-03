import React from "react";

import {
  Avatar,
  AvatarContainer,
  ContactInfo,
  DataContainer,
  MessageText,
  MessageContainer,
  MessageItem
} from "./styles";

export const Message = ({ id, isMine, character, text }) => {
  return (
    <MessageContainer isMine={isMine} key={id}>
      <MessageItem>
        <AvatarContainer>
          <Avatar src={character.image} />
        </AvatarContainer>
        <DataContainer>
          <ContactInfo color={character.color}>{character.name}</ContactInfo>
          <MessageText>{text}</MessageText>
        </DataContainer>
      </MessageItem>
    </MessageContainer>
  );
};
