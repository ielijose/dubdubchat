import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SelectedCharacters } from '../../components/SelectedCharacters';
import { unselectCharacter } from '../../store/characters/actions';

export const SelectedCharactersContainer = () => {
  const [showFixed, setShowFixed] = useState(false);
  const dispatch = useDispatch();
  const { selected } = useSelector(state => state.characters);

  const endRef = useRef(null);
  const containerRef = useRef(null);

  const scrollToRight = () => {
    if (endRef.current) {
      containerRef.current.scrollTo(endRef.current.offsetLeft, 0);
    }
  };

  useEffect(() => {
    const onScroll = () => {
      const newShowFixed = window.scrollY > 150;
      if (showFixed !== newShowFixed) {
        setShowFixed(newShowFixed);
      }
    };

    document.addEventListener('scroll', onScroll);

    scrollToRight();

    return () => document.removeEventListener('scroll', onScroll);
  }, [showFixed]);

  const unselect = id => {
    dispatch(unselectCharacter(id));
  };

  useEffect(() => {
    scrollToRight();
  }, [selected]);

  return (
    <SelectedCharacters
      containerRef={containerRef}
      endRef={endRef}
      selected={selected}
      showFixed={showFixed}
      unselect={unselect}
    />
  );
};
