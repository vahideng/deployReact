import React, { CSSProperties } from "react";
import Icon from "src/components/assets/icons/icon";
import classes from "./HeaderWithIcons.module.css";
import Paragraphs from "../../assets/typography";
const { B_15_BLACK } = Paragraphs;
interface Props {
  testId?: string;
  leftIcon?: { name: string; color?: string; size?: number };
  rightIcon?: {
    name: string;
    color?: string;
    size?: number;
  };
  onIconClick: () => void;
  image?: { src: string; size?: number; alt?: string };
  label: string;
  labelStyle?: CSSProperties;
  headerStyle?: CSSProperties;
}

const HeaderWithIcons = ({
  testId,
  headerStyle,
  leftIcon,
  rightIcon = { name: "Fail-2", color: "#000000", size: 15 },
  onIconClick,
  image,
  label,
  labelStyle
}: Props) => {
  return (
    <div
      className={classes.MainDiv}
      style={headerStyle ? headerStyle : {}}
      id={testId}
    >
      <div className={classes.LeftDiv}>
        <div className={classes.IconDiv}>
          {!!leftIcon && (
            <Icon
              icon={leftIcon.name}
              color={leftIcon.color}
              size={leftIcon.size}
            />
          )}
          {!!image && (
            <img
              src={image.src}
              width={image.size ? image.size : 40}
              alt={!!image ? image.alt : "Logo"}
            />
          )}
        </div>
        <B_15_BLACK style={labelStyle}>{label}</B_15_BLACK>
      </div>
      {!!rightIcon && (
        <div
          className={classes.RightIconDiv}
          onClick={onIconClick}
          id={`${testId}-0`}
        >
          <Icon
            icon={rightIcon.name}
            color={rightIcon.color}
            size={rightIcon.size}
          />
        </div>
      )}
    </div>
  );
};

export default HeaderWithIcons;
