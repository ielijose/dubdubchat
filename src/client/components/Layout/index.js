import PropTypes from 'prop-types';
import React from 'react';
import { GlobalStyle } from '../../styles/global';
import { Logo } from '../Logo';

export const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Logo />
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
