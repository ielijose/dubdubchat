import React from "react";
import { Logo } from "../Logo";

import { GlobalStyle } from "../../styles/global";

export const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Logo />
      {children}
    </>
  );
};
