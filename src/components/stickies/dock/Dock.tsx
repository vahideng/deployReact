import React from "react";
import classes from "./Dock.module.css";
import Tag from "src/components/tags/Tag";
import ActionButtons from "src/components/buttons/actionButtons/ActionButtons";

interface Props {
  tagText?: string;
  list: {
    name: string;
    color: string;
    backgroundColor: { top: string; bottom: string };
    text?: string;
  }[];
}

const Dock: React.FC<Props> = props => {
  return (
    <div>
      {!!props.tagText && (
        <div className={classes.DockTag}>
          <Tag text={props.tagText} />
        </div>
      )}
      <div className={classes.DockMainDiv}>
        <div className={classes.DockInnerDiv}>
          <ActionButtons list={props.list} />
        </div>
      </div>
    </div>
  );
};

export default Dock;
