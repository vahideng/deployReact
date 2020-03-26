import React from "react";
import classes from "./FullButton.module.css";
import Paragraphs from "../../assets/typography";
import { CSSProperties } from "styled-components";
const { B_15_WHITE } = Paragraphs;
interface Props {
  testId?: string;
  title?: string;
  titleColor?: string;
  buttonColor?: { top: string; bottom: string };
  onButtonClick?: () => void;
  onLeftButton?: () => void;
  onRightButton?: () => void;
  split?: boolean;
  leftTitle?: string;
  rightTitle?: string;
  leftTitleStyle?: CSSProperties;
  rightTitleStyle?: CSSProperties;
}

const FullButton: React.FC<Props> = ({
  title = "",
  leftTitle = "",
  rightTitle = "",
  leftTitleStyle,
  rightTitleStyle,
  buttonColor,
  titleColor,
  split,
  onButtonClick,
  onLeftButton,
  onRightButton,
  testId
}) => {
  return (
    <>
      {!split ? (
        <>
          <button
            id={`${testId}`}
            onClick={onButtonClick}
            className={classes.FullButton}
            style={
              !!buttonColor
                ? {
                    background: `linear-gradient(180deg, ${buttonColor.top} 0%,  ${buttonColor.bottom} 100%)`
                  }
                : {}
            }
          >
            <B_15_WHITE style={titleColor ? { color: titleColor } : {}}>
              {title}
            </B_15_WHITE>
          </button>
        </>
      ) : (
        <div className={classes.fullButtonRow} id={`${testId}-0`}>
          <button
            id={`${testId}-1`}
            onClick={onLeftButton}
            className={`${classes.fullButtonSplit} ${classes.fullButtonLeft}`}
            style={
              !!buttonColor
                ? {
                    background: `linear-gradient(180deg, ${buttonColor.top} 0%,  ${buttonColor.bottom} 100%)`
                  }
                : {}
            }
          >
            <B_15_WHITE
              style={leftTitleStyle ? leftTitleStyle : { color: "#ff2626" }}
              className={classes.leftText}
            >
              {leftTitle}
            </B_15_WHITE>
          </button>
          <button
            id={`${testId}-2`}
            onClick={onRightButton}
            className={`${classes.fullButtonSplit} ${classes.fullButtonRight}`}
            style={
              !!buttonColor
                ? {
                    background: `linear-gradient(180deg, ${buttonColor.top} 0%,  ${buttonColor.bottom} 100%)`
                  }
                : {}
            }
          >
            <B_15_WHITE style={rightTitleStyle}>{rightTitle}</B_15_WHITE>
          </button>
        </div>
      )}
    </>
  );
};

export default FullButton;
