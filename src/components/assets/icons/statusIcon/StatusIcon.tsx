import React from "react";
import classes from "./StatusIcon.module.css";
import Icon from "../icon";

interface Props {
  iconColor?: { top: string; bottom: string };
  icon?: { name: string; color: string };
  imageIcon?: object;
  image?: { src: string; alt?: string };
}

const StatusIcon: React.FC<Props> = ({ iconColor, icon, image }) => {
  return (
    <>
      <div
        className={classes.outerRound}
        style={!!iconColor ? { background: `${iconColor.top}70` } : {}}
      >
        <div
          className={classes.innerRound}
          style={
            !!iconColor
              ? {
                  background: `linear-gradient(180deg, ${iconColor.top} 0%,  ${iconColor.bottom} 100%)`
                }
              : {}
          }
        >
          {!!icon && (
            <Icon
              icon={icon?.name ? icon.name : "Tick-1"}
              color={icon?.color ? icon.color : "#ffffff"}
              size={40}
            />
          )}
          {!!image && (
            <img src={image.src} alt={image.alt ? image.alt : "Logo"} />
          )}
        </div>
      </div>
    </>
  );
};

export default StatusIcon;
