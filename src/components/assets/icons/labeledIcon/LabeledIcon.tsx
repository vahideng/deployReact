import React, { CSSProperties } from "react";
import Icon from "../icon";
import Paragraphs from "../../typography";
import classes from "./LabeledIcon.module.css";
const { R_13_BLACK, B_16_BLACK } = Paragraphs;
interface Props {
  testId?: string;
  leftLabel?: string;
  leftLabelStyle?: CSSProperties;
  rightLabel?: string;
  rightLabelStyle?: CSSProperties;
  imageIcon?: { src: string; size?: number; alt?: string };
  icon?: {
    name: string;
    size?: number;
    color?: string;
  };
}

const LabeledIcon: React.FC<Props> = ({
  icon = {},
  imageIcon = {},
  leftLabel,
  leftLabelStyle,
  rightLabel,
  rightLabelStyle,
  testId,
}) => {
  return (
    <div id={testId}>
      <div className={classes.LabeledIconRow} id={`${testId}-0`}>
        {!!leftLabel && (
          <R_13_BLACK className={classes.LabeledIconImg} style={leftLabelStyle}>
            {leftLabel}
          </R_13_BLACK>
        )}
        {!!imageIcon && (
          <img
            src={imageIcon.src}
            width={imageIcon.size ? imageIcon.size : 100}
            alt={!!imageIcon ? imageIcon.alt : "Logo"}
          />
        )}
        {!!icon && (
          <div className={classes.LabeledIconRow}>
            <Icon
              icon={!!icon.name ? icon.name : ""}
              size={!!icon.size ? icon.size : 30}
              color={icon.color}
            />
          </div>
        )}
        {!!rightLabel && (
          <B_16_BLACK
            className={classes.LabeledIconIcon}
            style={rightLabelStyle}
          >
            {rightLabel}
          </B_16_BLACK>
        )}
      </div>
    </div>
  );
};

export default LabeledIcon;
