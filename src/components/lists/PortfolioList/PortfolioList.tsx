import React, { CSSProperties, ReactNode } from "react";
import { Card, Accordion, useAccordionToggle, Col } from "react-bootstrap";

import classes from "./PortfolioList.module.css";
import "react-tabs/style/react-tabs.css";
import Icon from "src/components/assets/icons/icon";
import styled from "styled-components";

import Paragraphs from "../../assets/typography";
const { SB_13_GREY444 } = Paragraphs;

interface Data {
  leftLabel?: string;
  rightLabel?: string;
  middleLabel?: string;
  expandableLeftLabel?: boolean;
  expandableMiddleLabel?: boolean;
  expandableEightLabel?: boolean;
  leftContent?: ReactNode;
  rightContent?: ReactNode;
  middleContent?: ReactNode;
  borderColor: string;
}

interface Props {
  data: Data[];
  leftHeaderOnClick?: () => void;
  leftHeaderStyle?: CSSProperties;
  leftHeaderTitle: string;
  middleHeaderOnClick?: () => void;
  middleHeaderStyle?: CSSProperties;
  middleHeaderTitle: string;
  rightHeaderOnClick?: () => void;
  rightHeaderStyle?: CSSProperties;
  rightHeaderTitle: string;
  testId?: string;
}

interface ToggleProps {
  eventKey: string;
  content: string;
  testId: string;
}

const CustomToggle: React.FC<ToggleProps> = ({
  eventKey,
  content,
  testId
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
      onClick={e => accordionClickHandler(e)}
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

const PortfolioList: React.FC<Props> = ({
  leftHeaderOnClick,
  leftHeaderStyle,
  leftHeaderTitle,
  middleHeaderOnClick,
  middleHeaderStyle,
  middleHeaderTitle,
  rightHeaderOnClick,
  rightHeaderStyle,
  rightHeaderTitle,
  data,
  testId
}) => {
  return (
    <Card className={classes.ContainerWhole}>
      <Card.Header className={classes.CardHeader}>
        <div className={classes.HeaderLeft}>
          <SB_13_GREY444 style={leftHeaderStyle} onClick={leftHeaderOnClick}>
            {leftHeaderTitle}
          </SB_13_GREY444>
        </div>
        <div className={classes.HeaderMiddle}>
          <SB_13_GREY444
            style={middleHeaderStyle}
            onClick={middleHeaderOnClick}
          >
            {middleHeaderTitle}
          </SB_13_GREY444>
        </div>
        <div className={classes.HeaderRight}>
          <SB_13_GREY444 style={rightHeaderStyle} onClick={rightHeaderOnClick}>
            {rightHeaderTitle}
          </SB_13_GREY444>
        </div>
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

          return (
            <Accordion key={index} id={`${testId}-0-${index}`}>
              <Card className={classes.ContainerWhole}>
                <Card.Header className={`${classes.HeaderInside}`}>
                  <StyledDiv className={inverted}>
                    <Col className={classes.LeftItemHeader} md={6}>
                      <CustomToggle
                        eventKey={`${index}`}
                        testId={testId}
                        content={item.leftLabel}
                      />
                    </Col>
                    <Col className={classes.MiddleItemHeader} md={3}>
                      <SB_13_GREY444>{item.middleLabel}</SB_13_GREY444>
                    </Col>
                    <Col className={classes.RightItemHeader} md={3}>
                      <div
                        style={{ whiteSpace: "nowrap", float: "right" }}
                        className="p-2"
                      >
                        <span style={{ color: "#FF2222" }}> - </span>{" "}
                        <span style={{ paddingRight: "4px" }}>
                          {item.rightLabel}
                        </span>
                        {item.rightLabel}
                      </div>
                    </Col>
                  </StyledDiv>
                </Card.Header>
                {item.leftContent !== undefined && (
                  <Accordion.Collapse eventKey={`${index}`}>
                    <Card.Body className={`${classes.ContentBody} ${inverted}`}>
                      {item.leftContent}
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
export default PortfolioList;
