import styled, { css } from "styled-components";

export const MessageItem = styled.div`
  background-color: #fefefe;
  border-radius: 4px;
  display: flex;
  flex-wrap: nowrap;
  padding: 3px;
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 5px;
  min-height: 50px;

  ${props =>
    props.isMine
      ? css`
          justify-content: flex-end;
          ${MessageItem} {
            background-color: #e1fec6;
          }
        `
      : css`
          justify-content: flex-start;
        `}
`;

export const AvatarContainer = styled.div`
  align-items: center;
  display: flex;
  flex-basis: 40px;
  justify-content: center;
  padding: 2px 4px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  height: 30px;
  width: 30px;
`;

export const DataContainer = styled.div`
  border-radius: 4px;
  max-width: calc(100vw - 100px);
  min-width: 100px;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-basis: auto;
  font-size: 12px;
  font-weight: bold;

  ${props =>
    props.color &&
    css`
      color: ${props.color};
    `}
`;

export const MessageText = styled.div`
  font-size: 14px;
  word-wrap: break-word;
`;
