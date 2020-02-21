import React from "react";
import classes from "./PrimaryButton.module.css";
import Paragraphs from "../../assets/typography";
import Icon from "src/components/assets/icons/icon";
const { B_15_WHITE } = Paragraphs;
interface Props {
  title?: string;
  titleColor?: string;
  buttonColor?: any;
  width?: number;
  onButtonClick: () => void;
  small?: boolean;
  icon?: { name: string; color: string };
}

const PrimaryButton: React.FC<Props> = ({
  title = "",
  buttonColor,
  titleColor,
  width,
  onButtonClick,
  small,
  icon = { name: "", color: "" }
}) => {
  return !small ? (
    <div>
      <button
        onClick={onButtonClick}
        className={classes.PrimaryButton}
        style={
          !!buttonColor || width
            ? {
                background: `linear-gradient(180deg, ${buttonColor.top} 0%,  ${buttonColor.bottom} 100%)`,
                width: width
              }
            : {}
        }
      >
        <B_15_WHITE style={titleColor ? { color: titleColor } : {}}>
          {title}
        </B_15_WHITE>
      </button>
    </div>
  ) : (
    <>
      <div>
        <button
          onClick={onButtonClick}
          className={classes.PrimaryButtonSmall}
          style={
            !!buttonColor || width
              ? {
                  background: `linear-gradient(180deg, ${buttonColor.top} 0%,  ${buttonColor.bottom} 100%)`,
                  width: width
                }
              : {}
          }
        >
          <Icon
            icon={icon.name ? icon.name : "Download"}
            color={icon.color}
            size={15}
          />
        </button>
      </div>
    </>
  );
};

export default PrimaryButton;
