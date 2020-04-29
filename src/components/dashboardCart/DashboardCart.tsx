import React, { ReactNode, CSSProperties } from "react";
import { Row, Col } from "react-bootstrap";
import classes from "./DashboardCart.module.css";
import "react-tabs/style/react-tabs.css";
import Paragraphs from "../assets/typography";
import Icon from "../assets/icons/icon";
import Tooltip from "../tooltip/Tooltip";
const { R_18_GREY444, R_13_BLACK, R_11_GREY969, R_13_GREY393 } = Paragraphs;

interface SideLabel {
  content?: string;
  contentStyle?: CSSProperties;
  title?: string;
  titleStyle?: CSSProperties;
  type?: "profit" | "loss";
}
declare type listItem = {
  selected?: boolean;
  testId?: string;
  title?: string;
  tipChildren?: ReactNode;
  titleStyle?: CSSProperties;
  onTooltipClicked?: () => void;
  showTooltip?: boolean;
  tooltip?: boolean;
  containerStyle?: CSSProperties;
  data?: {
    leftSide?: SideLabel;
    rightSide?: SideLabel;
  }[];
  footerLabel?: string;
  footerLabelStyle?: CSSProperties;
  description?: string;
  descriptionRightLabel?: {
    type?: "profit" | "loss";
    percentage?: string;
  };
  onClickContainer?: () => void;
  subtitle: {
    icon?: string;
    content: string;
    style?: CSSProperties;
  };
};
interface Props {
  cartList?: listItem[];
}

const DashboardCart = (props: Props) => {
  const ProfitOrLoss = (type: "loss" | "profit" | undefined) => {
    if (type === "loss") {
      return <span style={{ color: "#FF2222" }}>-</span>;
    }
    if (type === "profit") {
      return <span style={{ color: "#36A03E" }}>+</span>;
    }
    return null;
  };

  return (
    <>
      {!!props.cartList &&
        props.cartList.map((cart, index: number) => {
          return (
            <div
              key={index}
              id={`${cart.testId}`}
              className={`${classes.Container} ${!cart.selected &&
                classes.notSelected}`}
              style={cart.containerStyle}
              onClick={cart.onClickContainer}
            >
              <section>
                <R_18_GREY444>{cart.title}</R_18_GREY444>
                <div className={classes.Subtitle}>
                  {cart.subtitle.icon && (
                    <Icon
                      icon={cart.subtitle.icon}
                      size={25}
                      style={{ marginLeft: -4 }}
                    />
                  )}
                  <R_13_BLACK style={cart.subtitle.style}>
                    {cart.subtitle.content}
                  </R_13_BLACK>
                </div>
                <div
                  className={classes.Description}
                  style={!cart.data ? { padding: 0 } : {}}
                >
                  {cart.description} (
                  {ProfitOrLoss(cart.descriptionRightLabel.type)}
                  {cart.descriptionRightLabel.percentage})
                </div>

                {!!cart.data &&
                  cart.data.map((item: any, index: number) => {
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
                {cart.footerLabel && (
                  <Row className={classes.FooterContainer}>
                    <R_11_GREY969
                      className={classes.FooterLabel}
                      style={cart.footerLabelStyle}
                    >
                      {cart.footerLabel}
                    </R_11_GREY969>
                    {cart.tooltip === true &&
                      cart.tipChildren !== undefined && (
                        <Tooltip
                          showTooltip={cart.showTooltip}
                          onTooltipClicked={cart.onTooltipClicked}
                          tipChildren={cart.tipChildren}
                          tipSize={18}
                        />
                      )}
                  </Row>
                )}
              </section>
              <span className={classes.chevron}>
                <Icon icon="Right1" size={28} />
              </span>
            </div>
          );
        })}
    </>
  );
};

export default DashboardCart;
