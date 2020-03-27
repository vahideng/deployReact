import React from "react";
import { Card, Accordion, useAccordionToggle, Col, Row } from "react-bootstrap";

import classes from "./TransactionList.module.css";
import "react-tabs/style/react-tabs.css";
import Paragraphs from "../../components/assets/typography";

import Icon from "../assets/icons/icon";
const { SB_13_BLACK } = Paragraphs;
interface Props {
  testId?: string;
  data?: any;
  minimize?: boolean;
  eventKey?: any;
  content?: string;
  title?: string;
  showIcon?: boolean;
}

const CustomToggle: React.FC<Props> = ({
  eventKey,
  content,
  testId,
  showIcon
}) => {
  const decoratedOnClick = useAccordionToggle(eventKey, () => null);
  const [isOpen, setIsOpen] = React.useState(false);

  const accordianClickHandler = (e: any) => {
    decoratedOnClick(e);
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={classes.Content}
      onClick={e => accordianClickHandler(e)}
      id={testId}
    >
      {content}
      {showIcon ? (
        isOpen ? (
          <span className={classes.TransListIcon}>
            <Icon icon="arrowUp" size={12} color="#444444" />
          </span>
        ) : (
          <span className={classes.TransListIcon}>
            <Icon icon="arrowDown" size={12} color="#444444" />
          </span>
        )
      ) : null}
    </div>
  );
};

const TransactionList: React.FC<Props> = ({ title, data, testId }) => {
  return (
    <Card className={classes.ContainerWhole}>
      <Card.Header className={classes.CardHeader}>{title}</Card.Header>
      <Card.Body className={classes.CardBody}>
        {data.map((item: any, index: any) => {
          return (
            <Accordion key={index} id={`${testId}-0-${index}`}>
              <Card>
                <Card.Header className={classes.HeaderInside}>
                  <div
                    style={{ alignItems: "center", height: "50px" }}
                    className="d-flex"
                  >
                    <Col
                      style={{ paddingLeft: 0, paddingRight: 32, margin: 0 }}
                      md={3}
                    >
                      {item.leftLabel}
                    </Col>
                    <Col
                      style={{ paddingLeft: 0, paddingRight: 0, margin: 0 }}
                      md={6}
                    >
                      <CustomToggle
                        eventKey={`${index}`}
                        content={item.middle.title}
                        showIcon={item.flag || item.middle.content}
                      />
                    </Col>
                    <Col
                      style={{ paddingLeft: 32, paddingRight: 0, margin: 0 }}
                      md={3}
                    >
                      <div
                        style={{
                          whiteSpace: "nowrap",
                          float: "right",
                          padding: 0,
                          fontWeight: 900
                        }}
                      >
                        <span
                          style={{
                            marginRight: "-5px"
                          }}
                        >
                          <Icon
                            icon={item.rightLabel.iconName}
                            color={item.rightLabel.iconColor}
                            size={30}
                          />
                        </span>
                        <span style={{ paddingRight: "4px" }}>
                          {item.rightLabel.prefix}
                        </span>
                        {item.rightLabel.content}
                      </div>
                    </Col>
                  </div>
                </Card.Header>
                <Accordion.Collapse eventKey={`${index}`} key={index}>
                  <Card.Body className={classes.CardBodyContent}>
                    {item.flag ? (
                      <SB_13_BLACK
                        className={classes.FlagText}
                        style={{
                          color: `${item.flag.color}`,
                          paddingTop: "0px"
                        }}
                      >
                        {" "}
                        {item.flag.text}{" "}
                      </SB_13_BLACK>
                    ) : null}

                    {!!item.middle.content &&
                      item.middle.content.map((_item: any, _index: any) => {
                        console.log(_item, "item");

                        return (
                          <Row className={classes.RowContainer}>
                            <div
                              className={classes.LeftBody}
                              id={`${testId}-1-${index}`}
                            >
                              {_item.leftLabel}
                            </div>
                            <div
                              className={classes.RightBody}
                              id={`${testId}-2-${index}`}
                            >
                              <div style={{ whiteSpace: "nowrap" }}>
                                {_item.rightLabel}
                              </div>
                            </div>
                          </Row>
                        );
                      })}
                    {/* <div
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
                            </div> */}
                  </Card.Body>
                </Accordion.Collapse>

                {/* {!!item.middle.content &&
                  item.middle.content.map(
                    (item: any, index: string | number | undefined) => {
                      return (
                        
                      );
                    }
                  )} */}
              </Card>
            </Accordion>
          );
        })}
      </Card.Body>
    </Card>
  );
};
export default TransactionList;
