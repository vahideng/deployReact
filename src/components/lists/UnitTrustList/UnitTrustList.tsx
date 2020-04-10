import React, { CSSProperties, ReactNode } from "react";
import { Card, Accordion, useAccordionToggle, Col } from "react-bootstrap";
import TooltipDropdown from "src/components/tooltipDropdown/TooltipDropdown";
import classes from "./UnitTrustList.module.css";
import "react-tabs/style/react-tabs.css";
import Icon from "src/components/assets/icons/icon";
import styled from "styled-components";

import Paragraphs from "../../assets/typography";

const { SB_13_GREY444 } = Paragraphs;

interface Data {
  borderColor: string;
  expandableLeft?: boolean;
  expandableMiddle?: boolean;
  leftContent?: ReactNode;
  leftLabel?: string;
  middleContent?: ReactNode;
  middleLabel?: string;
  rightLabel: {
    type: "profit" | "loss";
    percentage: string;
    amount: string;
  };
  rightButtons?: {
    icon: string;
    text: string;
    onClick?: () => void;
  }[];
}

interface HeaderProps {
  icon?: string;
  id?: string;
  onArrowClick?: () => void;
  arrowDownBold?: boolean;
  arrowUpBold: boolean;
  style?: CSSProperties;
  textStyle?: CSSProperties;
  title: string;
}

interface Props {
  data: Data[];
  header: HeaderProps[];
  testId?: string;
}

interface ToggleProps {
  content: string;
  eventKey: string;
  testId: string;
}

const CustomToggle: React.FC<ToggleProps> = ({
  content,
  eventKey,
  testId,
}: ToggleProps) => {
  const decoratedOnClick = useAccordionToggle(eventKey, () => null);
  const [isOpen, setIsOpen] = React.useState(false);

  const accordionClickHandler = (e: any) => {
    decoratedOnClick(e);
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={classes.Content}
      onClick={(e) => accordionClickHandler(e)}
      id={testId}
    >
      {content}

      {isOpen ? (
        <span className={classes.TransListIcon}>
          <Icon icon="arrowUp" size={14} />
        </span>
      ) : (
          <span className={classes.TransListIcon}>
            <Icon icon="arrowDown" size={14} />
          </span>
        )}
    </div>
  );
};

const UnitTrustList: React.FC<Props> = ({ data, header, testId }) => {
  return (
    <Card className={classes.ContainerWhole} id={`${testId}`}>
      <Card.Header className={classes.CardHeader}>
        {header.map((item: HeaderProps, index: number) => {
          return (
            <div
              className={classes[`Header${index}`]}
              key={index}
              style={item.style}
            >
              <div className={classes.Header}>
                <SB_13_GREY444 style={item.textStyle}>
                  {item.title}
                </SB_13_GREY444>
                <div className={classes.HeaderIcon}>
                  <div style={{ position: "relative" }}>
                    <div
                      onClick={item.onArrowClick}
                      className={classes.BothIcon}
                    >
                      <div className={classes.ArrowDown}>
                        {item.arrowDownBold ? (
                          <Icon icon="arrowDown" size={12} color="black" />
                        ) : (
                            <Icon icon="arrowDown" size={12} color="gray" />
                          )}
                      </div>
                      <div className={classes.ArrowUp}>
                        {item.arrowUpBold ? (
                          <Icon icon="arrowUp" size={12} color="black" />
                        ) : (
                            <Icon icon="arrowUp" size={12} color="gray" />
                          )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Card.Header>
      <Card.Body className={classes.CardBody}>
        {data.map((item: Data, index: number) => {
          const inverted = index % 2 == 0 ? classes.Inverted : "";
          const StyledDiv = styled.div`
            display: flex;
            flex-direction: row;
            align-items: center;
            border-left: 0.375rem ${item.borderColor} solid;
            height: 5rem;
            padding-left: 1.125rem;
            padding-right: 1.5rem;
          `;

          const profitOrLoss = (
            <span
              style={{
                color: item.rightLabel.type === "loss" ? "#FF2222" : "#36A03E",
              }}
            >
              {item.rightLabel.type === "loss" ? "-" : "+"}
            </span>
          );

          return (
            <Accordion
              key={index}
              id={`${testId}-${index}`}
              style={{ zIndex: 1 }}
            >
              <Card className={classes.ContainerWhole}>
                <Card.Header className={classes.HeaderInside}>
                  <StyledDiv className={inverted}>
                    <Col className={classes.LeftItemContainer}>
                      {item.expandableLeft === true ? (
                        <CustomToggle
                          eventKey={`left-${index}`}
                          testId={testId}
                          content={item.leftLabel}
                        />
                      ) : (
                          <SB_13_GREY444>{item.leftLabel}</SB_13_GREY444>
                        )}
                    </Col>
                    <Col className={classes.MiddleItemContainer}>
                      {item.expandableMiddle === true ? (
                        <CustomToggle
                          eventKey={`middle-${index}`}
                          testId={testId}
                          content={item.middleLabel}
                        />
                      ) : (
                          <SB_13_GREY444>{item.middleLabel}</SB_13_GREY444>
                        )}
                      <br />
                    </Col>
                    <Col className={classes.RightItemContainer}>
                      <div>
                        <div className={classes.RightLabel}>
                          ({profitOrLoss} {item.rightLabel.percentage})
                        </div>
                        <div className={classes.RightLabel}>
                          {item.rightLabel.amount}
                        </div>
                      </div>
                      {
                        item.rightButtons &&
                        <div
                          className={classes.RightItemDotsContainer}
                          style={{ zIndex: 9 }}
                        >
                          <TooltipDropdown
                            iconButtons={item.rightButtons}
                          />
                        </div>
                      }
                    </Col>
                  </StyledDiv>
                </Card.Header>
                {item.leftContent !== undefined && (
                  <Accordion.Collapse eventKey={`left-${index}`}>
                    <Card.Body className={`${classes.ContentBody} ${inverted}`}>
                      {item.leftContent}
                    </Card.Body>
                  </Accordion.Collapse>
                )}
                {item.middleContent !== undefined && (
                  <Accordion.Collapse eventKey={`middle-${index}`}>
                    <Card.Body className={`${classes.ContentBody} ${inverted}`}>
                      {item.middleContent}
                    </Card.Body>
                  </Accordion.Collapse>
                )}
              </Card>
            </Accordion>
          );
        })}
      </Card.Body>
    </Card>
  );
};
export default UnitTrustList;
