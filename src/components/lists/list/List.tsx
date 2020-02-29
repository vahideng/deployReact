import React from "react";
import classes from "./List.module.css";

interface Props {}

const List: React.FC<Props> = () => {
  return <div className={classes.ListMainDiv}></div>;
};

export default List;
