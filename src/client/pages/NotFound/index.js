import React from "react";
import MrMeeseeks from "../../assets/images/meeseeks.jpg";
import { Div, Img, TextContainer, Text } from "./styles";

export const NotFoundPage = () => {
  return (
    <Div>
      <Img alt="404" src={MrMeeseeks} />
      <TextContainer>
        <Text> Mr. Meeseeks did not find the page! </Text>
      </TextContainer>
    </Div>
  );
};
