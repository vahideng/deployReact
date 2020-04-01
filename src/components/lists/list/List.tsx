import React, { CSSProperties } from "react";
import classes from "./List.module.css";
import Icon from "src/components/assets/icons/icon";
import Paragraphs from "../../assets/typography";

const { B_18_BLACK, R_13_GREY444, B_15_BLACK, B_24_BLACK } = Paragraphs;
interface Props {
  testId?: string;
  header?: {
    icon?: { name: string; color?: string; iconText: string };
    title?: string;
    titleStyle?: CSSProperties;
    subTitle?: React.ReactNode;
  };
  list?: {
    leftLabel: string;
    rightLabel?: string;
    approved?: boolean;
    details?: string[];
  }[];
}

const List: React.FC<Props> = ({ header, testId, list }) => {
  return (
    <div id={testId}>
      {!!header && (
        <div>
          {!!header.title && (
            <div className={classes.ListTitleDiv}>
              <B_24_BLACK
                className={classes.ListTitle}
                style={header.titleStyle ? header.titleStyle : {}}
              >
                {header.title}
              </B_24_BLACK>
              {header.subTitle}
            </div>
          )}
          {!!header.icon && (
            <div>
              <div className={classes.ListIconDiv}>
                <Icon
                  className={classes.ListIcon}
                  icon={header.icon.name}
                  color={!!header.icon.color ? header.icon.color : "#ff2626"}
                />
                <B_18_BLACK>{header.icon.iconText}</B_18_BLACK>
              </div>
            </div>
          )}
        </div>
      )}
      {!!list &&
        list.map((item, index) => {
          return (
            <div
              key={index}
              className={classes.ListItemsDiv}
              id={`${testId}-${index}`}
            >
              <R_13_GREY444>{item.leftLabel}</R_13_GREY444>
              <div>
                <B_15_BLACK className={classes.ListTextRight}>
                  {item.approved && (
                    <span className={classes.ListTextRightIcon}>
                      <Icon icon="accent-tick" size={13} />
                    </span>
                  )}

                  {item.rightLabel}
                </B_15_BLACK>

                {!!item.details &&
                  item.details.map((detail, index) => {
                    return (
                      <R_13_GREY444
                        className={classes.ListTextRight}
                        key={index}
                        id={`${testId}-0-${index}`}
                      >
                        {detail}
                      </R_13_GREY444>
                    );
                  })}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default List;
