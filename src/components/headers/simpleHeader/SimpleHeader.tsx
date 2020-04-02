import React, { CSSProperties } from "react";
import classes from "./SimpleHeader.module.css";
import Paragraphs from "../../assets/typography";
const { B_15_BLACK } = Paragraphs;
interface Props {
  testId?: string;
  label: string;
  labelStyle?: CSSProperties;
  headerStyle?: CSSProperties;
}

const SimpleHeader = ({ testId, headerStyle, label, labelStyle }: Props) => {
  return (
    <div
      className={classes.MainDiv}
      style={headerStyle ? headerStyle : {}}
      id={testId}
    >
      <B_15_BLACK style={labelStyle}>{label}</B_15_BLACK>
    </div>
  );
};

export default SimpleHeader;
