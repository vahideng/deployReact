import React from "react";
import Paragraphs from "../../assets/typography";
import Icon from "src/components/assets/icons/icon";
import classes from "./DescriptionButton.module.css";
const { B_15_BLACK } = Paragraphs;

interface Props {
  onButtonClick: (item: any, index: number) => void;
  testId?: string;
  list: {
    disabled?: boolean;
    title: string;
    amount?: string;
    icon?: { name?: string; color?: string };
  }[];
}

const DescriptionButton: React.FC<Props> = ({
  list,
  onButtonClick,
  testId
}) => {
  return (
    <div id={testId}>
      {list.map((item, index) => {
        return (
          <div
            style={item.disabled ? { pointerEvents: "none", opacity: 0.5 } : {}}
            id={`${testId}-${index}`}
            key={index}
            className={classes.DescriptionButtonRow}
            onClick={() => onButtonClick(item, index)}
          >
            <B_15_BLACK>{item.title}</B_15_BLACK>
            <div className={classes.DescriptionButtonAmount}>
              {!!item.icon && (
                <Icon
                  style={{ marginRight: 11,display:'block' }}
                  icon={!!item.icon.name ? item.icon.name : "Alert"}
                  size={20}
                  
                  color={!!item.icon.color ? item.icon.color : "#ff2626"}
                />
              )}
              {!!item.amount && (
                <B_15_BLACK className={classes.DescriptionAmount}>
                  {item.amount}
                </B_15_BLACK>
              )}
              <Icon icon={"Right1"} size={25} color={"#000000"} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DescriptionButton;
