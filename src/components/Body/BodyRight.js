import React, { useState } from "react";
import {
  BodyRightDiv,
  BodyRightTitle,
  BodyRightTitleItem,
  BodyRightTitleWrapper,
  BodyRightWrapper,
  RightForm,
  RightFormWrapper,
  RightInput,
} from "./BodyStyles";

function BodyRight() {
  const [ask, setAsk] = useState("");

  return (
    <BodyRightDiv>
      <BodyRightWrapper>
        <div className="right-intro">Hello, I am</div>
        <div className="right-name">Lovelyo Yeremia</div>
        <BodyRightTitle>
          <BodyRightTitleWrapper>
            <BodyRightTitleItem>Undergradute Student</BodyRightTitleItem>
            <BodyRightTitleItem>Web Developer</BodyRightTitleItem>
            <BodyRightTitleItem>Machine Learning Developer</BodyRightTitleItem>
            <BodyRightTitleItem>Producer</BodyRightTitleItem>
          </BodyRightTitleWrapper>
        </BodyRightTitle>
      </BodyRightWrapper>
      <RightFormWrapper>
        <div className="form-title">Ask anything about him</div>
        <RightForm>
          <label>Lovelyo's Assistant</label>
          <RightInput
            placeholder="Type your question"
            value=""
            onChange={(e) => setAsk(e.target.value)}
          />
        </RightForm>
      </RightFormWrapper>
    </BodyRightDiv>
  );
}

export default BodyRight;
