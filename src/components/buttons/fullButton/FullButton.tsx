import React from "react";
import classes from "./FullButton.module.css";
import Paragraphs from "../../assets/typography";
const { B_15_WHITE } = Paragraphs;
interface Props {
  title?: string;
  titleColor?: string;
  buttonColor?: { top: string; bottom: string };
  onButtonClick?: () => void;
  onLeftButton?: () => void;
  onRightButton?: () => void;
  split?: boolean;
  leftTitle?: string;
  rightTitle?: string;
}

const FullButton: React.FC<Props> = ({
  title = "",
  leftTitle = "",
  rightTitle = "",
  buttonColor,
  titleColor,
  split,
  onButtonClick,
  onLeftButton,
  onRightButton
}) => {
  return (
    <>
      {!split ? (
        <>
          <button
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
        <div className={classes.fullButtonRow}>
          <button
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
            <B_15_WHITE className={classes.leftText}>{leftTitle}</B_15_WHITE>
          </button>
          <button
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
            <B_15_WHITE>{rightTitle}</B_15_WHITE>
          </button>
        </div>
      )}
    </>
  );
};

export default FullButton;
