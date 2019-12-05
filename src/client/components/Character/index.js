import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { useVisibleScreen } from '../../hooks/useVisibleScreen';
import { selectCharacter, unselectCharacter } from '../../store/characters/actions';
import { characterType } from '../../types/character';
import chatUtils from '../../utils/chatUtils';
import { Article, ImageHover, Img, ImgWrapper, Title } from './styles';

export const Character = ({ id, image, name, isSelected }) => {
  const dispatch = useDispatch();
  const [show, ref] = useVisibleScreen();

  const toggleSelected = () => {
    if (isSelected) {
      dispatch(unselectCharacter(id));
    } else {
      const color = chatUtils.generateRandomColor();
      const firstName = chatUtils.getFirstName(name);
      const payload = {
        id,
        name,
        image,
        color,
        firstName,
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

Character.propTypes = characterType;
