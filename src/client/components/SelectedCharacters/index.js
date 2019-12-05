import PropTypes from 'prop-types';
import React from 'react';
import { FaArrowRight, FaTimesCircle } from 'react-icons/fa';
import { refType } from '../../types/ref';
import { FavButton, Image, Item, List, RemoveButton, Text, Title } from './styles';
import { selectedListType } from '../../types/character';

export const SelectedCharacters = props => {
  const { showFixed, selected, containerRef, endRef, unselect } = props;

  const renderList = (fixed = false) => (
    <>
      <List fixed={fixed} ref={containerRef}>
        {selected.length === 0 && <Title>Please, select members to start a chat.</Title>}
        {selected.map(c => {
          return (
            <Item key={c.id}>
              <Image color={c.color} title={c.name} src={c.image} />
              <Text>{c.firstName}</Text>
              <RemoveButton onClick={() => unselect(c.id)}>
                <FaTimesCircle />
              </RemoveButton>
            </Item>
          );
        })}
        <div ref={endRef} />
      </List>
      <FavButton to="/chat" disabled={selected.length === 0}>
        <FaArrowRight />
      </FavButton>
    </>
  );

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};

SelectedCharacters.propTypes = {
  containerRef: refType.isRequired,
  endRef: refType.isRequired,
  selected: selectedListType.isRequired,
  showFixed: PropTypes.bool.isRequired,
  unselect: PropTypes.func.isRequired,
};
