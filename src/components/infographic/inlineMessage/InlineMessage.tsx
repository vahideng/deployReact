import React from "react";

import Paragraphs from "../../assets/typography";
import classes from "./InlineMessage.module.css";
const { B_13_RED_626, R_13_BLACK } = Paragraphs;
interface Props {
  testId?: string;
  errorText: string;
  subText: string;
}

const InlineMessage: React.FC<Props> = ({ errorText, subText, testId }) => {
  return (
    <div className={classes.InlineMessageDiv} id={testId}>
      <B_13_RED_626>{errorText}</B_13_RED_626>
      <R_13_BLACK>{subText}</R_13_BLACK>
    </div>
  );
};

export default InlineMessage;
