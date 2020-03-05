import React from "react";
import classes from "./BackgroundSingle.module.css";

interface Props {
  image?: string;
  rightButtons?: any;
  children?: any;
}

const BackgroundSingle: React.FC<Props> = ({ image, children }) => {
  return (
    <div
      className={classes.BackgroundSingleMain}
      style={{
        backgroundImage: `url(${image})`
      }}
    >
      <div className={classes.BackgroundSingleChild}>{children}</div>
    </div>
  );
};

export default BackgroundSingle;
