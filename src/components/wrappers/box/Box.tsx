import React from "react";
import classes from "./Box.module.css";
import AMTabs from "src/components/buttons/tabs/Tabs";
import FullButton from "src/components/buttons/fullButton/FullButton";
interface Props {
  content: any;
  fullButton?: boolean;
  onSelect?: any;
  splitButton?: boolean;

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
  fullButton,
  onSelect,
  splitButton,
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
          defaultIndex={1}
          titles={["Login", "Security", "Contact Us"]}
          contents={content}
        />
      </div>

      {fullButton && !splitButton ? (
        <div className={classes.Wrapper}>
          <FullButton
            title={title}
            onButtonClick={() => (onButtonClick ? onButtonClick() : null)}
            buttonColor={buttonColor}
            titleColor={titleColor}
          />
        </div>
      ) : null}

      {splitButton && !fullButton ? (
        <div className={classes.Wrapper}>
          <FullButton
            split={true}
            onButtonClick={() => (onButtonClick ? onButtonClick() : null)}
            onRightButton={() => (onRightButton ? onRightButton() : null)}
            onLeftButton={() => (onLeftButton ? onLeftButton() : null)}
            titleColor={titleColor}
            leftTitle={leftTitle}
            rightTitle={rightTitle}
            buttonColor={buttonColor}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Box;
