import React from "react";
import Paragraphs from "../../assets/typography";
import classes from "./ZeroResult.module.css";
import Icon from "src/components/assets/icons/icon";
const { SB_16_GREY444 } = Paragraphs;
interface Props {
  text: string;
}

const ZeroResult: React.FC<Props> = ({ text }) => {
  return (
    <div className={classes.ZeroResultMain}>
      <div className={classes.ZeroResultDiv}>
        <Icon icon="Amy1" size={60} color="#939393" />
        <SB_16_GREY444 className={classes.ZeroResultText}>{text}</SB_16_GREY444>
      </div>
    </div>
  );
};

export default ZeroResult;
