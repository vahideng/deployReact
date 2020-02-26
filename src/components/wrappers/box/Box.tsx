import React from "react";
import classes from "./Box.module.css";

interface Props {
  children: any;
}

const Box: React.FC<Props> = ({ children }) => {
  return <div className={classes.BoxMainDiv}>{children}</div>;
};

export default Box;
