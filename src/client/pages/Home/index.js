import React from 'react';
import { CharactersContainer } from '../../containers/CharactersContainer';
import { SelectedCharactersContainer } from '../../containers/SelectedCharactersContainer';

export const HomePage = () => {
  return (
    <>
      <SelectedCharactersContainer />
      <CharactersContainer />
    </>
  );
};
