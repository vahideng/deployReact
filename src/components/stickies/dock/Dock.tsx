import React, { useState, useEffect } from "react";
import classes from "./Dock.module.css";
import Tag from "src/components/tags/Tag";
import ActionButtons from "src/components/buttons/actionButtons/ActionButtons";

import images from "src/assets";
interface Props {
  onButtonClick: (item: any, index: number) => void;
  testId?: string;
  tagText?: string;
  isExpanded?: boolean;
  list: {
    name: string;
    color: string;
    backgroundColor: { top: string; bottom: string };
    text?: string;
  }[];
}

const Dock: React.FC<Props> = (props) => {
  const [isExpanded, setsIsExpanded] = useState(props.isExpanded);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY) {
        setsIsExpanded(false);
      }
    });
  });
  return (
    <div
      className={classes.DockMainDiv}
      id={props.testId}
      onMouseEnter={() => setsIsExpanded(true)}
      onMouseLeave={() => setsIsExpanded(false)}
    >
      {!!props.tagText && (
        <div
          className={classes.DockTag}
          style={{ opacity: isExpanded ? 1 : 0 }}
        >
          <Tag
            text={props.tagText}
            testId={`${props.testId}-1`}
            styles={{ minHeight: "3.12rem" }}
            image={{ src: images.common.amyIcon }}
          />
        </div>
      )}
      <div
        className={
          isExpanded
            ? `${classes.DockInnerDiv} ${classes.InnerDivExpand}`
            : classes.DockInnerDiv
        }
      >
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
