import React from "react";
import Paragraphs from "../../assets/typography";
import classes from "./NavigationButtons.module.css";
import Icon from "src/components/assets/icons/icon";
const { R_13_GREY444 } = Paragraphs;
interface Props {
  leftButtonDisable?: boolean;
  onLeftButtonPress: () => void;
  rightButtonDisable?: boolean;
  onRightButtonPress: () => void;
  label: string;
}

const NavigationButtons: React.FC<Props> = ({
  leftButtonDisable,
  onLeftButtonPress,
  rightButtonDisable,
  onRightButtonPress,
  label
}) => {
  return (
    <>
      <div className={classes.NavigationButtonsContainer} >
        <div
          className={classes.NavigationButtonLeft}
          style={{
            backgroundColor: leftButtonDisable ? "#c4c4c4" : " #FF2626",
            pointerEvents: leftButtonDisable ? 'none' : 'all'
          }}
          onClick={onLeftButtonPress && onLeftButtonPress}>
          <Icon
            icon={"left"}
            color={"#ffffff"}
            size={18}
          />
        </div>
        <div className={classes.NavigationButtonLabel}>
          <R_13_GREY444>{label}</R_13_GREY444>
        </div>
        <div
          className={classes.NavigationButtonRight}
          style={{
            backgroundColor: rightButtonDisable ? "#c4c4c4" : " #FF2626",
            pointerEvents: rightButtonDisable ? 'none' : 'all'
          }}
          onClick={onRightButtonPress && onRightButtonPress}>
          <Icon
            icon={"Right1"}
            color={"#ffffff"}
            size={18}
          />
        </div>
      </div>
    </>
  );
};

export default NavigationButtons;
