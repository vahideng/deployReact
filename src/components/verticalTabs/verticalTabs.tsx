import React from "react";
import { Tab, Row, Col, Nav } from "react-bootstrap";
import VerticalTabs from "src/components/selections/verticalTabSelection/verticalTabSelection";

import classes from "./verticalTab.module.css";
import "react-tabs/style/react-tabs.css";

interface Props {
  data: any;
  minimize: boolean;
}
const verticalTabs: React.FC<Props> = ({ data, minimize }) => (
  <Tab.Container id="verticalTabs" defaultActiveKey={1}>
    <Row className={classes.WholeWrapper}>
      <Col className={classes.LeftChild} sm={minimize ? 1 : 3}>
        <Nav variant="pills" className={`${classes.Container} flex-column `}>
          {!!data &&
            data.map((item: any, index: number) => {
              return (
                <Nav.Item key={index} className={`${classes.Wrapper}`}>
                  <Nav.Link eventKey={index} className={`${classes.NavLink}`}>
                    <VerticalTabs
                      selected={item.selected}
                      onTileClick={() => item.onClick(index)}
                      icon={{ name: item.icon.name, color: item.icon.color }}
                      accountTitle={`${minimize ? '' : item.accountTitle}`}
                    />
                  </Nav.Link>
                </Nav.Item>
              );
            })}
        </Nav>
      </Col>
      <Col sm={minimize ? 11 : 9}>
        <Tab.Content>
          {!!data &&
            data.map((_item: any, index: number) => {
              return <Tab.Pane eventKey={index}>{_item.children}</Tab.Pane>;
            })}
        </Tab.Content>
      </Col>
    </Row>
  </Tab.Container>
);
export default verticalTabs;
