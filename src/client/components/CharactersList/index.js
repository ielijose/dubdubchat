import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../../store/characters/actions";
import { Character } from "../Character";
import { Loading } from "../Loading";
import { List } from "./styles";

export const CharactersList = () => {
  const dispatch = useDispatch();

  const { characters, hasMore, loading, selectedMap, page } = useSelector(
    state => state.characters
  );

  useEffect(() => {
    if (characters.length === 0) {
      dispatch(fetchCharacters(page));
    }
  }, []);

  const listener = () => {
    const container = document.getElementById("app");
    const wh = window.scrollY + window.innerHeight;
    const ch = container.clientHeight + container.offsetTop;
    const isBottom = wh - ch === 0;
    if (isBottom && hasMore && !loading) {
      dispatch(fetchCharacters(page + 1));
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  const isSelected = id => {
    return selectedMap[id] || false;
  };

  return (
    <List>
      {loading && <Loading />}
      {characters.map(character => {
        return (
          <Character
            key={character.id}
            isSelected={isSelected(character.id)}
            {...character}
          />
        );
      })}
    </List>
  );
};
