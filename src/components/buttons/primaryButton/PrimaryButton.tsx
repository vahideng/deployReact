import React, { CSSProperties } from "react";
import classes from "./PrimaryButton.module.css";
import Paragraphs from "../../assets/typography";
import Icon from "src/components/assets/icons/icon";
const { B_15_WHITE } = Paragraphs;
interface Props {
  testId?: string;
  title?: string;
  titleColor?: string;
  titleStyle?: CSSProperties;
  buttonColor?: { top: string; bottom: string };
  height?: number | string;
  width?: number | string;
  onButtonClick: () => void;
  small?: boolean;
  icon?: { name: string; color: string; size?: number };
  shadowed?: boolean;
  responsive?:boolean;
}

const PrimaryButton: React.FC<Props> = ({
  testId,
  title = "",
  buttonColor,
  titleColor,
  height,
  width,
  onButtonClick,
  small,
  icon = { name: "", color: "" },
  shadowed,
  titleStyle,
  responsive
}) => {
  const primaryButton = [classes.PrimaryButton];
    if (responsive) {
      primaryButton.push(classes.fluid);
  }

  return !small ? (
    <div id={testId} className={responsive && classes.fluid}>
      <button
        id={`${testId}-0`}
        onClick={onButtonClick}
        className={primaryButton.join(" ")}
        
        style={
          buttonColor
            ? {
                background: `linear-gradient(180deg, ${buttonColor.top} 0%,  ${buttonColor.bottom} 100%)`,
                height: height,
                minWidth: width ? width : "14rem",
                boxShadow: shadowed
                  ? "0px 4px 9px rgba(0, 0, 0, 0.140925)"
                  : "",
              }
            : { minWidth: width ? width : "14rem" }
        }
      >
        <div className={classes.IconDiv}>
          {icon && (
            <Icon
              icon={icon.name}
              className={classes.Icon}
              color={icon.color}
              size={icon.size ? icon.size : 30}
            />
          )}
          <B_15_WHITE
            style={
              titleStyle ? titleStyle : { color: titleColor ? titleColor : "" }
            }
          >
            {title}
          </B_15_WHITE>
        </div>
      </button>
    </div>
  ) : (
    <div id={`${testId}-1`}>
      <button
        id={testId}
        onClick={onButtonClick}
        className={classes.PrimaryButtonSmall}
        style={
          !!buttonColor || width
            ? {
                background: `linear-gradient(180deg, ${buttonColor.top} 0%,  ${buttonColor.bottom} 100%)`,
                width: width,
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
  );
};

PrimaryButton.defaultProps = {
  responsive : false,
}

export default PrimaryButton;
