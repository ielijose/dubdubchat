import PropTypes from 'prop-types';
import React from 'react';
import { characterShape, selectedMapType } from '../../types/character';
import { Character } from '../Character';
import { Loading } from '../Loading';
import { List } from './styles';

export const CharactersList = ({ isLoading, characters, selected }) => {
  const isSelected = id => {
    return selected[id] || false;
  };
  return (
    <List>
      {isLoading && <Loading />}
      {characters.map(character => {
        return (
          <Character key={character.id} isSelected={isSelected(character.id)} {...character} />
        );
      })}
    </List>
  );
};

CharactersList.propTypes = {
  characters: PropTypes.arrayOf(characterShape),
  isLoading: PropTypes.bool.isRequired,
  selected: selectedMapType.isRequired,
};

CharactersList.defaultProps = {
  characters: [],
};
