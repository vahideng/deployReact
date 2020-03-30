import React from "react";
import classes from "./List.module.css";
import Icon from "src/components/assets/icons/icon";
import Paragraphs from "../../assets/typography";
import Line from "src/components/line/Line";
import { Row } from "react-bootstrap";
import { CSSProperties } from "styled-components";

const {
  B_18_BLACK,
  R_13_GREY444,
  B_13_ORANGE_463,
  B_15_BLACK,
  B_24_BLACK,
  B_14_BLACK
} = Paragraphs;
interface Props {
  testId?: string;
  header?: {
    icon?: { name: string; color?: string; iconText: string };
    title?: string;
    subTitle?: React.ReactNode;
  };
  list?: {
    leftLabel: string;
    rightLabel?: string;
    approved?: boolean;
    details?: string[];
    amount?: string;
    status?: {
      content: string;
      color: string;
    };
    bottomText?: {
      content: string;
      onClick?: () => void;
      style?: CSSProperties;
    };
  }[];
}

const List: React.FC<Props> = ({ header, testId, list }) => {
  return (
    <div id={testId}>
      {!!header && (
        <div>
          {!!header.title && (
            <div className={classes.ListTitleDiv}>
              <B_24_BLACK className={classes.ListTitle}>
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
              className={classes.ListItemsContainer}
              id={`${testId}-${index}`}
              key={index}
            >
              <Line style={{ marginTop: "1rem", marginBottom: "1rem" }} />
              <div className={classes.ListItemsDiv}>
                <R_13_GREY444>{item.leftLabel}</R_13_GREY444>
                <div className={classes.ListItemRightContent}>
                  <Row className={classes.ItemTitleContainer}>
                    {item.approved && (
                      <span className={classes.ListTextRightIcon}>
                        <Icon icon="accent-tick" size={13} />
                      </span>
                    )}
                    <B_15_BLACK>{item.rightLabel}</B_15_BLACK>
                  </Row>

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
                  {item.amount === undefined ? null : (
                    <Row className={classes.AmountContainer}>
                      <R_13_GREY444>Amount:</R_13_GREY444>
                      <B_14_BLACK className={classes.Amount}>
                        {item.amount}
                      </B_14_BLACK>
                    </Row>
                  )}
                  {item.status === undefined ? null : (
                    <R_13_GREY444 style={{ color: item.status.color }}>
                      {item.status.content}
                    </R_13_GREY444>
                  )}
                  {item.bottomText === undefined ? null : (
                    <B_13_ORANGE_463
                      className={classes.BottomText}
                      onClick={item.bottomText.onClick}
                      style={item.bottomText.style}
                    >
                      {item.bottomText.content}
                    </B_13_ORANGE_463>
                  )}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default List;
