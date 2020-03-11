import React from "react";
import classes from "./FloatingButton.module.css";
import Icon from "../../assets/icons/icon";

interface Props {
  testId?: string;
  darkButton?: boolean;
  onButtonClick?: () => void;
}

const FloatingButton: React.FC<Props> = ({
  darkButton,
  onButtonClick,
  testId
}) => {
  return (
    <div
      id={testId}
      onClick={onButtonClick}
      className={classes.FloatingButtonMain}
      style={{ backgroundColor: !!darkButton ? "#ffffff" : "#444444" }}
    >
      <Icon
        icon={"Path"}
        color={!!darkButton ? "#444444" : "#ffffff"}
        size={22}
      />
    </div>
  );
};

export default FloatingButton;
