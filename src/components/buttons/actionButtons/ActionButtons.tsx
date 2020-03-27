import React from "react";
import classes from "./ActionButtons.module.css";
import Icon from "src/components/assets/icons/icon";
import Paragraphs from "../../assets/typography";
const { SB_11_WHITE } = Paragraphs;
interface Props {
  onButtonClick: (item: any, index: number) => void;
  testId?: string;
  list: {
    name: string;
    color?: string;
    backgroundColor: { top: string; bottom: string };
    text?: string;
  }[];
  expanded?: boolean;
}

const ActionButtons: React.FC<Props> = ({
  list,
  testId,
  onButtonClick,
  expanded
}) => {
  return (
    <div className={classes.ActionButtonsMain} id={testId}>
      <>
        {!!list &&
          list.map((item, index) => {
            return (
              <div key={index} id={`${testId}-${index}`}>
                <div
                  className={classes.ActionButtonsIcon}
                  style={
                    expanded
                      ? {
                          width: "2.81rem",
                          height: "2.81rem",
                          marginTop: "1.6rem",
                          borderRadius: "1.06rem",
                          background: `linear-gradient(180deg, ${item.backgroundColor.top} 0%,  ${item.backgroundColor.bottom} 100%)`
                        }
                      : {
                          background: `linear-gradient(180deg, ${item.backgroundColor.top} 0%,  ${item.backgroundColor.bottom} 100%)`
                        }
                  }
                  onClick={() => {
                    onButtonClick(item, index);
                  }}
                >
                  <Icon icon={item.name} size={20} color={item.color} />
                </div>

                <div className={classes.ActionButtonsWidth}>
                  {!!item.text && expanded && (
                    <SB_11_WHITE
                      className={classes.ActionButtonsText}
                      style={{}}
                    >
                      {item.text}
                    </SB_11_WHITE>
                  )}
                </div>
              </div>
            );
          })}
      </>
    </div>
  );
};

export default ActionButtons;
