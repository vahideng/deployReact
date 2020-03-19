import React from "react";
import Paragraphs from "../../assets/typography";
import classes from "./Header.module.css";
const { SB_15_BLACK, B_48_BLACK } = Paragraphs;
interface Props {
  title: string;
  subTitle: string;
  testId?: string;
  textColor?: string;
}

const Header: React.FC<Props> = props => {
  const { title, subTitle, testId, textColor } = props;
  return (
    <div className={classes.main} id={testId}>
      <div className={`col-md-12 ${classes.Title}`}>
        <SB_15_BLACK
          style={{
            textTransform: "uppercase",
            color: textColor ? textColor : "#000000"
          }}
        >
          {title}
        </SB_15_BLACK>
      </div>
      <div className={`col-md-12`}>
        <B_48_BLACK
          style={{
            color: textColor ? textColor : "#000000"
          }}
          className={classes.subTitle}
        >
          {subTitle}
        </B_48_BLACK>
      </div>
    </div>
  );
};

export default Header;
