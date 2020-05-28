import React, { CSSProperties } from "react";
import classes from "./Box.module.css";
import AMTabs from "src/components/buttons/tabs/Tabs";
import FullButton from "src/components/buttons/fullButton/FullButton";
interface Props {
  responsive?: boolean;
  content: any;
  fullButton?: boolean;
  onSelect?: any;
  tabTitles?: string[];
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
  leftTitleStyle?: CSSProperties;
  rightTitleStyle?: CSSProperties;
}

const Box: React.FC<Props> = ({
  content,
  tabIndex,
  onSelect,
  tabTitles,
  split,
  title,
  titleColor,
  onButtonClick,
  onLeftButton,
  leftTitle,
  rightTitle,
  leftTitleStyle,
  rightTitleStyle,
  onRightButton,
  buttonColor,
  responsive,
}) => {
  let containerCls = classes.BoxMainDiv;
  if (responsive) {
    containerCls = `${containerCls} ${classes.BoxMainDivFlexible}`;
  }
  return (
    <div className={containerCls}>
      <div className={classes.Container}>
        <AMTabs
          onSelect={onSelect}
          defaultIndex={tabIndex}
          titles={tabTitles ? tabTitles : []}
          contents={content}
          titlesStyle={{ borderBottomColor: "transparent" }}
          smallTab
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
          leftTitleStyle={leftTitleStyle}
          rightTitleStyle={rightTitleStyle}
        />
      </div>
    </div>
  );
};

export default Box;
