import React from "react";
import { BodyLeft, BodyStyles } from "./BodyStyles";
import BodyRight from "./BodyRight";

function Body() {
  return (
    <BodyStyles id="home">
      <BodyLeft>Haii its left</BodyLeft>
      <BodyRight />
    </BodyStyles>
  );
}

export default Body;
