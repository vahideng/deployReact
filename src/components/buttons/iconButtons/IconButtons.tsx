import React from "react";
import Paragraphs from "../../assets/typography";
import classes from "./IconButtons.module.css";
import Icon from "src/components/assets/icons/icon";
const { B_14_BLACK, B_13_BLACK, R_13_GREY444 } = Paragraphs;
interface Props {
  onButtonClick: (item: React.ReactNode, index: number) => void;
  testId?: string;
  label?: string;
  selected?: number;
  list: {
    text?: string;
    icon: {
      name: string;
      size?: number;
      color?: string;
    };
  }[];
  removeBorder?: boolean;
}

const IconButtons: React.FC<Props> = ({
  label,
  list,
  selected,
  onButtonClick,
  testId,
  removeBorder,
}) => {
  return (
    <div id={testId}>
      <B_14_BLACK className={classes.IconButtonsLabel}>{label}</B_14_BLACK>
      <div className={classes.IconButtonsRow}>
        {list.map((item, index) => {
          return (
            <div
              id={`${testId}-0${index}`}
              // className={classes.IconButtonsWrapper}
              style={{ marginRight: index === list.length - 1 ? 0 : '2rem' }}
              key={index}
              onClick={() => onButtonClick(item, index)}
            >
              <div className={`${classes.IconButtonsIcon}`}>
                <Icon
                  icon={item.icon.name}
                  size={!!item.icon.size ? item.icon.size : 30}
                  color={!!item.icon.color ? item.icon.color : "#ff2626"}
                />
                {!removeBorder && (
                  <div
                    className={
                      selected === index
                        ? `${classes.selectedBtn} ${classes.Btn}`
                        : classes.Btn
                    }
                  ></div>
                )}
              </div>
              <div className={classes.TextWrapper}>
                {selected === index ? (
                  <B_13_BLACK className={classes.IconButtonsText}>
                    {item.text}
                  </B_13_BLACK>
                ) : (
                  <R_13_GREY444 className={classes.IconButtonsText}>
                    {item.text}
                  </R_13_GREY444>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IconButtons;
