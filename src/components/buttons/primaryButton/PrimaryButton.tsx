import React from "react";
import classes from "./PrimaryButton.module.css";
import Paragraphs from "../../assets/typography";
import Icon from "src/components/assets/icons/icon";
const { B_15_WHITE } = Paragraphs;
interface Props {
  testId?: string;
  title?: string;
  titleColor?: string;
  buttonColor?: any;
  width?: number | string;
  onButtonClick: () => void;
  small?: boolean;
  icon?: { name: string; color: string };
}

const PrimaryButton: React.FC<Props> = ({
  testId,
  title = "",
  buttonColor,
  titleColor,
  width,
  onButtonClick,
  small,
  icon = { name: "", color: "" },
}) => {
  const buttonBg = !!buttonColor
    ? `linear-gradient(180deg, ${buttonColor.top} 0%,  ${buttonColor.bottom} 100%)`
    : "";
  return !small ? (
    <div id={testId}>
      <button
        id={`${testId}-0`}
        onClick={onButtonClick}
        className={classes.PrimaryButton}
        style={{ background: buttonBg, width: width }}
      >
        <B_15_WHITE style={titleColor ? { color: titleColor } : {}}>
          {title}
        </B_15_WHITE>
      </button>
    </div>
  ) : (
    <div id={`${testId}-1`}>
      <button
        id={testId}
        onClick={onButtonClick}
        className={classes.PrimaryButtonSmall}
        style={{ background: buttonBg, width: width }}
      >
        <Icon
          icon={icon.name ? icon.name : "Download"}
          color={icon.color}
          size={15}
        />
      </button>
    </div>
  );
};

export default PrimaryButton;
