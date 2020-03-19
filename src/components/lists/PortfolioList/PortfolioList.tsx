import React, { CSSProperties } from "react";
import { Card, Accordion, useAccordionToggle, Col } from "react-bootstrap";

import classes from "./PortfolioList.module.css";
import "react-tabs/style/react-tabs.css";
import Icon from "src/components/assets/icons/icon";

import Paragraphs from "../../assets/typography";
const { SB_13_GREY444 } = Paragraphs;
interface HeaderProps {
  id?: string;
  title: string;
  onClick?: Function;
  style?: CSSProperties;
}

interface Props {
  header?: HeaderProps[];
  testId?: string;
  data?: any;
  minimize?: boolean;
  eventKey?: any;
  content?: string;
}

const CustomToggle: React.FC<Props> = ({ eventKey, content, testId }) => {
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

const PortfolioList: React.FC<Props> = ({ header, data, testId }) => {
  return (
    <Card className={classes.ContainerWhole}>
      <Card.Header className={classes.CardHeader}>
        {header.map((item: HeaderProps, index: number) => {
          return (
            <div className={classes.Header} key={index}>
              <SB_13_GREY444 style={item.style}>{item.title}</SB_13_GREY444>
            </div>
          );
        })}
      </Card.Header>
      <Card.Body className={classes.CardBody}>
        {data.map((item: any, index: any) => {
          const inverted = index % 2 == 0 ? classes.Inverted : "";
          return (
            <Accordion key={index} id={`${testId}-0-${index}`}>
              <Card>
                <Card.Header className={`${classes.HeaderInside} ${inverted}`}>
                  <div
                    style={{ alignItems: "center", height: "5rem" }}
                    className="d-flex"
                  >
                    <Col style={{ paddingLeft: 0 }} md={6}>
                      <CustomToggle
                        eventKey={`${index}`}
                        content={item.leftLabel}
                      />
                    </Col>
                    <Col style={{ paddingLeft: 0 }} md={3}>
                      <SB_13_GREY444>{item.middle.title}</SB_13_GREY444>
                    </Col>
                    <Col style={{ paddingLeft: 0 }} md={3}>
                      <div
                        style={{ whiteSpace: "nowrap", float: "right" }}
                        className="p-2"
                      >
                        <span style={{ color: "#FF2222" }}> - </span>{" "}
                        <span style={{ paddingRight: "4px" }}>
                          {item.rightLabel.prefix}
                        </span>
                        {item.rightLabel.content}
                      </div>
                    </Col>
                  </div>
                </Card.Header>

                {!!item.middle.content &&
                  item.middle.content.map(
                    (item: any, index: string | number | undefined) => {
                      return (
                        <Accordion.Collapse eventKey={`${index}`} key={index}>
                          <Card.Body
                            className={`${classes.CardBodyContent} ${inverted}`}
                          >
                            <div
                              className={classes.LeftBody}
                              id={`${testId}-1-${index}`}
                            >
                              {item.leftLabel}
                            </div>

                            <div
                              className={classes.RightBody}
                              id={`${testId}-2-${index}`}
                            >
                              <div
                                style={{ whiteSpace: "nowrap" }}
                                className="p-2"
                              >
                                {item.rightLabel}
                              </div>
                            </div>
                          </Card.Body>
                        </Accordion.Collapse>
                      );
                    }
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
