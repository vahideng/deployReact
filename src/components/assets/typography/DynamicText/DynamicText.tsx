import React, { CSSProperties } from "react";
import Paragraphs from "../";
const { R_15_BLACK } = Paragraphs;
interface Props {
  testId?: string;
  text: string;
  textStyle?: CSSProperties;
  inlineText: string;
  inlineTextStyle?: CSSProperties;
  counter?: number | string;
}

const DynamicText = ({
  text,
  textStyle,
  inlineText,
  inlineTextStyle,
  counter,
  testId
}: Props) => {
  return (
    <>
      <R_15_BLACK style={textStyle} id={testId}>
        {text}
        <strong style={inlineTextStyle}>
          {" "}
          {counter} {inlineText}
        </strong>
      </R_15_BLACK>
    </>
  );
};

export default DynamicText;
