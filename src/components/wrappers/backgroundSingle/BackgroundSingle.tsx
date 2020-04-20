import React, { ReactNode, CSSProperties } from "react";
import classes from "./BackgroundSingle.module.css";

interface Props {
  testId?: string;
  image?: string;
  children?: ReactNode;
  style?: CSSProperties;
}

const BackgroundSingle: React.FC<Props> = ({
  image,
  children,
  style,
  testId,
}) => {
  return (
    <div
      id={testId}
      className={classes.BackgroundSingleMain}
      style={
        style
          ? { ...style, backgroundImage: `url(${image})` }
          : {
              backgroundImage: `url(${image})`,
            }
      }
    >
      <div>{children}</div>
    </div>
  );
};

export default BackgroundSingle;
