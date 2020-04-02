import React, { CSSProperties } from "react";
import Paragraphs from "../../assets/typography";
import classes from "./StickyFooter.module.css";
import PrimaryButton from "src/components/buttons/primaryButton/PrimaryButton";
import Icon from "src/components/assets/icons/icon";
const { B_17_WHITE, R_17_BLACK } = Paragraphs;

interface Props {
  isOpen: boolean;
  label?: string;
  testId?: string;
  buttonTitle?: string;
  titleStyle?: CSSProperties;
  buttonColor?: any;
  onButtonClick: () => void;
  icon?: { name: string; color: string; size?: number };
  iconText?: string;
}

const StickyFooter = ({
  label,
  isOpen,
  onButtonClick,
  testId,
  buttonTitle,
  titleStyle,
  icon = { name: "Amy1", color: "#A9A9A9", size: 50 },
  iconText
}: Props) => {
  return isOpen ? (
    <div className={classes.MainDiv} id={testId}>
      <div className={classes.LabelDiv}>
        <div className={classes.InnerLabel}>
          <B_17_WHITE>{label}</B_17_WHITE>
        </div>
      </div>
      <div className={classes.ContentDiv}>
        <div className={classes.ContentIcon}>
          <Icon
            icon={icon.name}
            color={icon.color}
            size={icon.size}
            style={{ marginRight: "1.5rem" }}
          />
          <R_17_BLACK>{iconText}</R_17_BLACK>
        </div>

        <PrimaryButton
          onButtonClick={onButtonClick}
          testId={`${testId}-0`}
          title={buttonTitle}
          width={"25rem"}
          titleStyle={titleStyle}
        />
      </div>
    </div>
  ) : (
    <></>
  );
};

export default StickyFooter;
