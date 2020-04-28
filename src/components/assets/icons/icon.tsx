import React, { CSSProperties } from "react";
import IcomoonReact from "icomoon-react";
import iconSet from "./iconSVG";

const Icon: React.FC<{
  testId?: string;
  color?: string;
  size?: number;
  icon?: string;
  className?: string;
  style?: CSSProperties;
}> = ({ testId, color, size = 50, icon, className = "", style }) => {
  return (
    <span id={testId}>
      <IcomoonReact
        className={className}
        iconSet={iconSet}
        color={color}
        size={size}
        icon={icon!}
        style={!!style? style : {display : 'block'}}
      />
    </span>
  );
};

export default Icon;
