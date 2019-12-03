import React from "react";
import { CharactersList } from "../../components/CharactersList";
import { SelectedCharacters } from "../../components/SelectedCharacters";

export const HomePage = () => {
  return (
    <>
      <SelectedCharacters />
      <CharactersList />
    </>
  );
};
