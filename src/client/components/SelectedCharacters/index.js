import React, { useEffect, useState, useRef } from "react";
import { FaArrowRight, FaTimesCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { unselectCharacter } from "../../store/characters/actions";
import {
  FavButton,
  Image,
  Item,
  List,
  RemoveButton,
  Text,
  Title
} from "./styles";

export const SelectedCharacters = () => {
  const [showFixed, setShowFixed] = useState(false);
  const dispatch = useDispatch();
  const { selected } = useSelector(state => state.characters);

  const lastItemRef = useRef(null);
  const listRef = useRef(null);

  const scrollToRight = () => {
    if (lastItemRef.current) {
      listRef.current.scrollTo(lastItemRef.current.offsetLeft, 0);
    }
  };

  useEffect(() => {
    const onScroll = () => {
      const newShowFixed = window.scrollY > 150;
      if (showFixed !== newShowFixed) {
        setShowFixed(newShowFixed);
      }
    };

    document.addEventListener("scroll", onScroll);

    scrollToRight();

    return () => document.removeEventListener("scroll", onScroll);
  }, [showFixed]);

  const unselect = id => {
    dispatch(unselectCharacter(id));
  };

  useEffect(() => {
    scrollToRight();
  }, [selected]);

  const renderList = fixed => (
    <>
      <List fixed={fixed} ref={listRef}>
        {selected.length === 0 && (
          <Title>Please, select members to start a chat.</Title>
        )}
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
        <div ref={lastItemRef} />
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
