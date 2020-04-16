import React, { CSSProperties, ReactNode } from "react";
import { Row, Col } from "react-bootstrap";
import classes from "./DashboardCart.module.css";
import "react-tabs/style/react-tabs.css";
import Paragraphs from "../assets/typography";
import Icon from "../assets/icons/icon";
import Tooltip from "../tooltip/Tooltip";
const { R_18_GREY444, R_13_BLACK, R_11_GREY969, R_13_GREY393 } = Paragraphs;

interface SideLabel {
  content: string;
  contentStyle?: CSSProperties;
  title?: string;
  titleStyle?: CSSProperties;
  type?: "profit" | "loss";
}
interface Content {
  leftSide: SideLabel;
  rightSide: SideLabel;
}

interface Props {
  containerStyle?: CSSProperties;
  data?: Content[];
  footerLabel?: string;
  footerLabelStyle?: CSSProperties;
  description: string;
  descriptionRightLabel?: {
    type: "profit" | "loss";
    percentage: string;
  };
  onClickContainer?: () => void;
  subtitle: {
    icon?: string;
    content: string;
    style?: CSSProperties;
  };
  testId?: string;
  tipChildren?: ReactNode;
  title: string;
  titleStyle?: CSSProperties;
  tooltip?: boolean;
}

const DashboardCart: React.FC<Props> = ({
  containerStyle,
  data,
  footerLabel,
  footerLabelStyle,
  description,
  descriptionRightLabel,
  onClickContainer,
  subtitle,
  testId,
  tipChildren,
  title,
  tooltip,
}) => {
  const ProfitOrLoss = (type: "loss" | "profit" | undefined) => {
    if (type === "loss") {
      return <span style={{ color: "#FF2222" }}>-</span>;
    }
    if (type === "profit") {
      return <span style={{ color: "#36A03E" }}>+</span>;
    }
    return null;
  };

  const cursorPointer =
    onClickContainer !== undefined ? classes.CursorPointer : "";

  return (
    <div
      id={`${testId}`}
      className={`${classes.Container} ${cursorPointer}`}
      style={containerStyle}
      onClick={onClickContainer}
    >
      <section>
        <R_18_GREY444>{title}</R_18_GREY444>
        <Row className={classes.Subtitle}>
          {subtitle.icon !== undefined ? (
            <Icon icon={subtitle.icon} size={20} />
          ) : null}
          <R_13_BLACK style={subtitle.style}>{subtitle.content}</R_13_BLACK>
        </Row>
        <div
          className={classes.Description}
          style={!data ? { padding: 0 } : {}}
        >
          {description} ({ProfitOrLoss(descriptionRightLabel.type)}
          {descriptionRightLabel.percentage})
        </div>

        {!!data &&
          data.map((item: Content, index: number) => {
            return (
              <Row className={classes.Content} key={index}>
                <Col className={classes.ContentContainer}>
                  <R_13_GREY393 style={item.leftSide.titleStyle}>
                    {item.leftSide.title}
                  </R_13_GREY393>
                  <div
                    className={classes.ContentItem}
                    style={item.leftSide.contentStyle}
                  >
                    {ProfitOrLoss(item.leftSide.type)}
                    {` `}
                    {item.leftSide.content}
                  </div>
                </Col>
                <Col className={classes.ContentContainer}>
                  <R_13_GREY393 style={item.rightSide.titleStyle}>
                    {item.rightSide.title}
                  </R_13_GREY393>
                  <div
                    className={classes.ContentItem}
                    style={item.rightSide.contentStyle}
                  >
                    {ProfitOrLoss(item.rightSide.type)}
                    {` `}
                    {item.rightSide.content}
                  </div>
                </Col>
              </Row>
            );
          })}
        {footerLabel && (
          <Row className={classes.FooterContainer}>
            <R_11_GREY969
              className={classes.FooterLabel}
              style={footerLabelStyle}
            >
              {footerLabel}
            </R_11_GREY969>
            {tooltip === true && tipChildren !== undefined && (
              <Tooltip tipChildren={tipChildren} tipSize={18} />
            )}
          </Row>
        )}
      </section>

      <Icon icon="Right1" size={28} />
    </div>
  );
};
export default DashboardCart;
