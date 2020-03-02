import React from "react";
import { Card, Accordion, useAccordionToggle, Col } from "react-bootstrap";

import classes from "./transactionList.module.css";
import "react-tabs/style/react-tabs.css";
import arrowUp from "../../components/assets/common/arrowUp.svg";
import arrowDown from "../../components/assets/common/arrowDown.svg";

interface Props {
  data?: any;
  minimize?: boolean;
  eventKey?: any;
  content?: string;
  title?: string;
}

const CustomToggle: React.FC<Props> = ({ eventKey, content }) => {
  const decoratedOnClick = useAccordionToggle(eventKey, () => null);
  const [isOpen, setIsOpen] = React.useState(false);

  const accordianClickHandler = (e: any) => {
    decoratedOnClick(e);
    setIsOpen(!isOpen);
  };
  return (
    <div className={classes.Content} onClick={e => accordianClickHandler(e)}>
      {content}

      {isOpen ? (
        <img src={arrowUp} alt="arrowUp" />
      ) : (
        <img src={arrowDown} alt="arrowUp" />
      )}
    </div>
  );
};

const transactionList: React.FC<Props> = ({ title, data }) => {
  return (
    <Card className={classes.ContainerWhole}>
      <Card.Header className={classes.CardHeader}>{title}</Card.Header>
      <Card.Body className={classes.CardBody}>
        {data.map((item: any, index: any) => {
          return (
            <Accordion>
              <Card>
                <Card.Header className={classes.HeaderInside}>
                  <div
                    style={{ alignItems: "center", height: "50px" }}
                    className="d-flex"
                  >
                    <Col style={{ paddingLeft: 0 }} md={3}>
                      {item.leftLabel}
                    </Col>
                    <Col style={{ paddingLeft: 0 }} md={6}>
                      <CustomToggle
                        eventKey={`${index}`}
                        content={item.middle.title}
                      />
                    </Col>
                    <Col style={{ paddingLeft: 0 }} md={3}>
                      <div
                        style={{ whiteSpace: "nowrap", float: "right" }}
                        className="p-2 "
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
                  item.middle.content.map((item: any) => {
                    return (
                      <Accordion.Collapse eventKey={`${index}`}>
                        <Card.Body className={classes.CardBodyContent}>
                          <div className={classes.LeftBody}>
                            {item.leftLabel}
                          </div>

                          <div className={classes.RightBody}>
                            <div
                              style={{ whiteSpace: "nowrap" }}
                              className="p-2 "
                            >
                              {item.rightLabel}
                            </div>
                          </div>
                        </Card.Body>
                      </Accordion.Collapse>
                    );
                  })}
              </Card>
            </Accordion>
          );
        })}
      </Card.Body>
    </Card>
  );
};
export default transactionList;
