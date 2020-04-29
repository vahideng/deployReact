import React from "react";
import classes from "./StatusIcon.module.css";
import Icon from "../icon";

interface Props {
  testId?: string;
  iconColor?: any;
  outerIconColor?: string;
  icon?: any;
  image?: any;
  outerRoundSize?:any;
  innerRoundSize?:any;
  iconSize?:number;
}

const StatusIcon: React.FC<Props> = ({
  iconColor,
  icon,
  image,
  testId,
  outerIconColor,
  outerRoundSize,
  innerRoundSize,
  iconSize
}) => {
    let outer:{} = !!outerRoundSize && {width:outerRoundSize,height:outerRoundSize};
    let inner:{} = !!innerRoundSize && {width:innerRoundSize,height:innerRoundSize};
  return (
    <>
      <div
        id={!!testId ? testId : ""}
        className={classes.outerRound}
        style={
          {
          ...outer,  
          backgroundColor: outerIconColor
            ? outerIconColor
            : `${iconColor.top}70`,
            borderRadius : !!outerRoundSize ? outerRoundSize/2 : '3.125rem',
        }
      }
      >
        <div
          className={classes.innerRound}
          style={
            !!iconColor
              ? {
                ...inner,
              background: `linear-gradient(180deg, ${iconColor.top} 0%,  ${iconColor.bottom} 100%)`,
              borderRadius : !!innerRoundSize ? innerRoundSize/2 : '2.31rem',
            
                }
              : {
                ...inner,
                borderRadius : !!innerRoundSize ? innerRoundSize/2 : '2.31rem'
              }
              
          }
        >
          {!!icon && (
            <Icon
              icon={icon.name ? icon.name : "Tick-1"}
              color={icon.color ? icon.color : "#ffffff"}
              size={!!iconSize ? iconSize :26}
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
