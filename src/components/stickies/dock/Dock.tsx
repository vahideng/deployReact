import React from "react";
import classes from "./Dock.module.css";
import Tag from "src/components/tags/Tag";
import ActionButtons from "src/components/buttons/actionButtons/ActionButtons";

interface Props {
  list: {
    name: string;
    color: string;
    backgroundColor: { top: string; bottom: string };
    text: string;
  }[];
}

const Dock: React.FC<Props> = props => {
  return (
    <div>
      <div className={classes.DockTag}>
        <Tag text="How may I help you?" />
      </div>
      <div className={classes.DockMainDiv}>
        <div className={classes.DockInnerDiv}>
          <ActionButtons list={props.list} />
        </div>
      </div>
    </div>
  );
};

export default Dock;
