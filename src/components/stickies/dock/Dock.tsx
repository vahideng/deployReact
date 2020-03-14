import React from "react";
import classes from "./Dock.module.css";
import Tag from "src/components/tags/Tag";
import ActionButtons from "src/components/buttons/actionButtons/ActionButtons";
import images from "src/assets";

interface Props {
  testId?: string;
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
    <div id={props.testId}>
      {!!props.tagText && (
        <div className={classes.DockTag}>
          <Tag
            text={props.tagText}
            testId={`${props.testId}-1`}
            image={{ src: images.common.amyIcon }}
          />
        </div>
      )}
      <div className={classes.DockMainDiv}>
        <div className={classes.DockInnerDiv}>
          <ActionButtons list={props.list} testId={`${props.testId}-2`} />
        </div>
      </div>
    </div>
  );
};

export default Dock;
