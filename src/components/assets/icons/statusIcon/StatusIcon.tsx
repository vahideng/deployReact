import React from "react";
import classes from "./StatusIcon.module.css";
import Icon from "../icon";

interface Props {
  testId?: string;
  iconColor?: { top?: string; bottom?: string };
  outerIconColor?: string;
  icon?: { name?: string; color?: string; size?: number };
  image?: { src: string; alt?: string };
  outerRoundSize?: number | string;
  innerRoundSize?: number | string;
  small?: boolean;
}

const StatusIcon: React.FC<Props> = ({
  iconColor,
  icon = { name: "" },
  image,
  testId,
  outerIconColor,
  outerRoundSize,
  innerRoundSize,
  small,
}) => {
  let outer: {} = !!outerRoundSize && {
    width: outerRoundSize,
    height: outerRoundSize,
  };
  let inner: {} = !!innerRoundSize && {
    width: innerRoundSize,
    height: innerRoundSize,
  };
  if (small) {
    outer = {
      width: "5rem",
      height: "5rem",
    };
    inner = !!small && {
      width: "3.625rem",
      height: "3.625rem",
    };
  }

  let icSize = !!icon && icon.size;
  let iconSize = (!!icSize && icSize) || (!!small && 30) || 46;

  return (
    <>
      <div
        id={!!testId ? testId : ""}
        className={classes.outerRound}
        style={{
          ...outer,
          backgroundColor: outerIconColor
            ? outerIconColor
            : `${iconColor.top}70`,
        }}
      >
        <div
          className={classes.innerRound}
          style={
            !!iconColor
              ? {
                ...inner,
                background: `linear-gradient(180deg, ${iconColor.top} 0%,  ${iconColor.bottom} 100%)`,
              }
              : {
                ...inner,
              }
          }
        >
          {!!icon && !image && (
            <Icon
              icon={icon.name || "Tick-1"}
              color={icon.color || "#ffffff"}
              size={iconSize}
            />
          )}
          {!!image && !icon.name && (
            <img src={image.src} alt={image.alt ? image.alt : "Logo"} />
          )}
        </div>
      </div>
    </>
  );
};

export default StatusIcon;
