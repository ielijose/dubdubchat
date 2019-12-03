import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { useVisibleScreen } from "../../hooks/useVisibleScreen";
import {
  selectCharacter,
  unselectCharacter
} from "../../store/characters/actions";
import { Article, ImageHover, Img, ImgWrapper, Title } from "./styles";

export const Character = ({ id, image, name, isSelected }) => {
  const dispatch = useDispatch();
  const [show, ref] = useVisibleScreen();

  const toggleSelected = () => {
    if (isSelected) {
      dispatch(unselectCharacter(id));
    } else {
      const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`; // TODO: Create Util
      const firstName = name.split(" ")[0];
      const payload = {
        id,
        name,
        image,
        color,
        firstName
      };
      dispatch(selectCharacter(payload));
    }
  };

  return (
    <Article ref={ref}>
      {show && (
        <Fragment key="key">
          <ImgWrapper selected={isSelected} onClick={toggleSelected}>
            <Img src={image} />
            <ImageHover />
          </ImgWrapper>
          <Title> {name}</Title>
        </Fragment>
      )}
    </Article>
  );
};
