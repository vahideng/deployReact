import React from "react";
import classes from "./ShadowWrapper.module.css";

interface Props {}

const ShadowWrapper: React.FC<Props> = () => {
  return <div className={classes.ShadowWrapper}></div>;
};

export default ShadowWrapper;
