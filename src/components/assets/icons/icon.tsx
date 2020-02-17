import React from "react";
import IcomoonReact from "icomoon-react";
import iconSet from "./iconSVG";

const Icon: React.FC<{
  color?: string;
  size?: number;
  icon?: string;
  className?: string;
}> = ({ color = "#ff2626", size = 50, icon = "amyIcon", className = "" }) => {
  return (
    <IcomoonReact
      className={className}
      iconSet={iconSet}
      color={color}
      size={size}
      icon={icon}
    />
  );
};

export default Icon;
