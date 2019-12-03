import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { slideTop } from "../../styles/animations";
import { colors } from "../../styles/colors";

export const List = styled.ul`
  display: flex;
  overflow: auto;
  width: 100%;
  background: ${colors.darkGreen};
  min-height: 80px;

  ${props =>
    props.fixed &&
    css`
      left: 0;
      margin: 0 auto;
      padding: 5px;
      position: fixed;
      right: 0;
      top: 0px;
      z-index: 1;
      width: 100%;
    `};
`;

export const Item = styled.li`
  ${slideTop()}

  align-items: center;
  display: flex;
  flex-direction: column;
  height: 65px;
  justify-content: center;
  padding-top: 6px;
  position: relative;
  transition: all 0.5s ease-out;
  width: 60px;
`;

export const Image = styled.img`
  border-radius: 50%;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.05);
  display: flex;
  height: 50px;
  justify-content: center;
  margin: 3px 5px;
  width: 50px;

  ${props =>
    props.color &&
    css`
      border: 3px solid ${props.color};
    `}
`;

export const Text = styled.span`
  color: ${colors.white};
  display: flex;
  font-size: 12px;
  justify-content: center;
`;

export const Title = styled.div`
  color: ${colors.white};
  display: block;
  font-size: 16px;
  margin: auto;
  padding: 0px 10px;
`;

export const FavButton = styled(Link)`
  background-color: ${colors.green};
  border-radius: 50%;
  border: none;
  bottom: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  font-size: 20px;
  margin: 0px;
  padding: 12px;
  position: fixed;
  right: 10px;
  text-decoration: none;
  z-index: 3;

  ${props =>
    props.disabled &&
    css`
      cursor: not-allowed;
      pointer-events: none;
      background-color: gray;
    `}
`;

export const RemoveButton = styled.button`
  background-color: ${colors.green};
  border-radius: 50%;
  border-right: none;
  border: none;
  bottom: 9px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  color: ${colors.white};
  cursor: pointer;
  font-size: 20px;
  height: 20px;
  margin: 0px;
  position: absolute;
  right: 1px;
  width: 20px;
  z-index: 3;
`;
