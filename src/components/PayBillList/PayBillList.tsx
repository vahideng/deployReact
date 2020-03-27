import React, { CSSProperties, Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import Paragraphs from "../assets/typography";
import classes from "./PayBillList.module.css";
import Icon from "../assets/icons/icon";
import Line from "../line/Line";

const { B_14_BLACK, B_18_BLACK, R_13_GREY444 } = Paragraphs;

interface IContent {
  amount?: string;
  label: string;
  status?: {
    content: string;
    color: string;
  };
  subtitle: string[];
  title: string;
  titleIcon?: string;
}

interface Props {
  content: IContent[];
  icon?: {
    name?: string;
    color?: string;
    size?: number;
  };
  showIcon?: boolean;
  style?: CSSProperties;
  testId?: string;
  title: string;
}

const PayBillList: React.FC<Props> = ({
  content,
  icon,
  showIcon,
  style,
  testId,
  title
}: Props) => {
  const isIconValid = icon !== undefined;

  return (
    <div id={`${testId}`} className={classes.Container} style={style}>
      <Row className={classes.TitleContainer}>
        {showIcon === true ? null : (
          <Icon
            icon={isIconValid && icon.name !== undefined ? icon.name : "LOGO"}
            color={
              isIconValid && icon.color !== undefined ? icon.color : "#FF0006"
            }
            size={isIconValid && icon.size !== undefined ? icon.size : 27}
          />
        )}

        <B_18_BLACK className={classes.Title}>{title}</B_18_BLACK>
      </Row>
      {content.map((item: IContent, index: number) => {
        return (
          <Fragment>
            <Line style={{ marginTop: "1rem", marginBottom: "1rem" }} />
            <Row className={classes.ItemContainer} key={index}>
              <Col className={classes.ItemLeftContent}>
                <R_13_GREY444>{item.label}</R_13_GREY444>
              </Col>
              <Col className={classes.ItemRightContent}>
                <Row className={classes.ItemTitleContainer}>
                  {item.titleIcon === undefined ? null : (
                    <Icon icon={item.titleIcon} size={15} />
                  )}
                  <B_14_BLACK className={classes.ItemTitle}>
                    {item.title}
                  </B_14_BLACK>
                </Row>
                {item.subtitle.map((subtitle: string, index: number) => (
                  <R_13_GREY444 className={classes.Subtitle} key={index}>
                    {subtitle}
                  </R_13_GREY444>
                ))}
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
              </Col>
            </Row>
          </Fragment>
        );
      })}
    </div>
  );
};

export default PayBillList;
