import React, { CSSProperties, ReactNode } from "react";
import Paragraphs from "../";
import classes from "./CenterText.module.css";
const { B_24_BLACK, R_15_BLACK } = Paragraphs;
interface Props {
  testId?: string;
  title: string;
  mainStyle?: CSSProperties;
  titleStyle?: CSSProperties;
  detailText?: string;
  detailTextStyle?: CSSProperties;
  children ?: ReactNode
}

const CenterText = ({
  mainStyle,
  title,
  titleStyle,
  detailText,
  detailTextStyle,
  testId,
  children
}: Props) => {
  return (
    <div className={classes.Wrapper} style={mainStyle} id={testId}>
      <div className={classes.innerDiv}>
        <B_24_BLACK style={titleStyle}>{title}</B_24_BLACK>
        {detailText && (
          <R_15_BLACK style={detailTextStyle} className={classes.details}>
            {detailText}
          </R_15_BLACK>
        )}
        {children}
      </div>
    </div>
  );
};

export default CenterText;
