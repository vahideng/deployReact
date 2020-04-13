import React, { ReactNode } from "react";
import classes from "./Box_V2.module.css";
import AMTabs from "src/components/buttons/tabs/Tabs";
import FullButton from "src/components/buttons/fullButton/FullButton";
interface Props {
  responsive?: boolean;
  content?: ReactNode[];
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
  boxChildren?: ReactNode;
}

const Box_V2: React.FC<Props> = ({
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
  onRightButton,
  buttonColor,
  boxChildren,
  responsive
}) => {
  return (
    <div
      className={responsive ? classes.BoxMainDivFlexible : classes.BoxMainDiv}
    >
      {!!content && (
        <div className={classes.Container}>
          <AMTabs
            onSelect={onSelect}
            defaultIndex={tabIndex}
            titles={tabTitles ? tabTitles : []}
            contents={content ? content : []}
          />
        </div>
      )}
      {!!boxChildren && <div>{boxChildren}</div>}
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

export default Box_V2;
