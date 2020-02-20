import React from "react";
import IcomoonReact from "icomoon-react";
import iconSet from "./iconSVG";

const Icon: React.FC<{
  color?: string;
  size?: number;
  icon?: string;
  className?: string;
  style?: {};
}> = ({
  color = "#ffffff",
  size = 50,
  icon = "amyIcon",
  className = "",
  style = {}
}) => {
  return (
    <IcomoonReact
      className={className}
      iconSet={iconSet}
      color={color}
      size={size}
      icon={icon}
      style={style}
    />
  );
};

export default Icon;
