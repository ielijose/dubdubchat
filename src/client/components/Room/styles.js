import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const RoomContainer = styled.div`
  background-color: ${colors.background};
  display: flex;
  flex-direction: column;
  height: calc(100vh - 60px);
  margin: 0 auto;
  min-height: 190px;
`;

export const Header = styled.div`
  background-color: ${colors.darkGreen};
  min-height: 63px;
  padding: 12px;
`;

export const HeaderTitle = styled.div`
  color: white;
  font-weight: bold;
`;

export const MembersInfo = styled.div`
  color: white;
  font-size: 12px;
  padding-top: 8px;
`;

export const ChatContainer = styled.div`
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  max-height: calc(100vh - 123px);
  min-height: calc(100vh - 123px);
  overflow: auto;
`;
