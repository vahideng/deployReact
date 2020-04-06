import React, { CSSProperties } from "react";
import classes from "./barCode.module.css";

interface Props {
  style?: CSSProperties;
  imgSrc: any;
  testId?: string;
}

const barCode: React.FC<Props> = ({
  style,
  imgSrc,
  testId,
}: Props) => {
  return (
    <div id={`${testId}`} className={classes.Container} style={style}>
        <img src={imgSrc} />
    </div>
  );
};

export default barCode;
