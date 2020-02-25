import React from "react";
import Paragraphs from "../../assets/typography";
import classes from "./FixHeader.module.css";
const { SB_15_BLACK, B_48_BLACK } = Paragraphs;
interface Props {
  title: string;
  subTitle: string;
  testId?: string;
}

const Header: React.FC<Props> = props => {
  const { title, subTitle, testId } = props;
  return (
    <div className={classes.main} id={testId}>
      <SB_15_BLACK style={{ textTransform: "uppercase" }}>{title}</SB_15_BLACK>
      <B_48_BLACK>{subTitle}</B_48_BLACK>
    </div>
  );
};

export default Header;
