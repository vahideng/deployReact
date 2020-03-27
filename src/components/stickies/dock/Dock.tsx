import React, { useState } from "react";
import classes from "./Dock.module.css";
import Tag from "src/components/tags/Tag";
import ActionButtons from "src/components/buttons/actionButtons/ActionButtons";

interface Props {
  onButtonClick: (item: any, index: number) => void;
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
  const [isExpanded, setsIsExpanded] = useState(false);
  return (
    <div
      className={classes.DockMainDiv}
      id={props.testId}
      onMouseEnter={() => setsIsExpanded(!isExpanded)}
      onMouseLeave={() => setsIsExpanded(!isExpanded)}
    >
      {!!props.tagText && (
        <div className={classes.DockTag}>
          <Tag text={props.tagText} testId={`${props.testId}-1`} />
        </div>
      )}
      <div className={classes.DockInnerDiv}>
        <ActionButtons
          list={props.list}
          testId={`${props.testId}-2`}
          onButtonClick={props.onButtonClick}
          expanded={isExpanded}
        />
      </div>
    </div>
  );
};

export default Dock;
