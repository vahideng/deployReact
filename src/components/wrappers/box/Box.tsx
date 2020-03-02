import React from "react";
import classes from "./Box.module.css";
import AMTabs from "src/components/buttons/tabs/Tabs";
import FullButton from "src/components/buttons/fullButton/FullButton";
interface Props {
  content: any;
  fullButton?: boolean;
  onSelect?: any;
  tabIndex?: number;

  title?: string;
  titleColor?: string;
  buttonColor?: any;
  onButtonClick?: () => void;
  onLeftButton?: () => void;
  onRightButton?: () => void;
  split?: boolean;
  leftTitle?: string;
  rightTitle?: string;
}

const Box: React.FC<Props> = ({
  content,
  tabIndex,
  onSelect,
  split,
  title,
  titleColor,
  onButtonClick,
  onLeftButton,
  leftTitle,
  rightTitle,
  onRightButton,
  buttonColor
}) => {
  return (
    <div className={classes.BoxMainDiv}>
      <div className={classes.Container}>
        <AMTabs
          onSelect={onSelect}
          defaultIndex={tabIndex}
          titles={["Login", "Security", "Contact Us"]}
          contents={content}
        />
      </div>

      <div className={classes.Wrapper}>
        <FullButton
          title={title}
          split={split}
          onButtonClick={() => (onButtonClick ? onButtonClick() : null)}
          onRightButton={() => (onRightButton ? onRightButton() : null)}
          onLeftButton={() => (onLeftButton ? onLeftButton() : null)}
          titleColor={titleColor}
          leftTitle={leftTitle}
          rightTitle={rightTitle}
          buttonColor={buttonColor}
        />
      </div>
    </div>
  );
};

export default Box;
