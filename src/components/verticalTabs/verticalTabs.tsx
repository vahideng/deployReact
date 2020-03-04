import React from "react";
import { Tab, Row, Col, Nav } from "react-bootstrap";
import VerticalTabs from "src/components/selections/verticalTabSelection/verticalTabSelection";
import Paragraphs from "../assets/typography";
import classes from "./verticalTab.module.css";
import "react-tabs/style/react-tabs.css";
const { SB_16_WHITE, B_32_WHITE } = Paragraphs;
interface Props {
  selectedBorderColor?: string;
  data: any;
  minimize: boolean;
}
const verticalTabs: React.FC<Props> = ({
  data,
  minimize,
  selectedBorderColor
}) => (
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
                      selectedBorderColor={selectedBorderColor}
                      onTileClick={() => item.onClick(index)}
                      icon={{ name: item.icon.name, color: item.icon.color }}
                      accountTitle={`${minimize ? "" : item.accountTitle}`}
                    />
                  </Nav.Link>
                </Nav.Item>
              );
            })}
        </Nav>
      </Col>
      <Col sm={minimize ? 11 : 9} className={classes.RightChild}>
        <Tab.Content>
          {!!data &&
            data.map((_item: any, index: number) => {
              return (
                <Tab.Pane eventKey={index}>
                  {!!_item.bgImage && (
                    <div
                      style={{
                        backgroundImage: `url(${
                          !!_item.bgImage ? _item.bgImage.background : ""
                        })`
                      }}
                      className={classes.RightChildBG}
                    >
                      <SB_16_WHITE>{_item.bgImage.title}</SB_16_WHITE>
                      <B_32_WHITE>{_item.bgImage.subTitle}</B_32_WHITE>
                    </div>
                  )}
                  {_item.children}
                </Tab.Pane>
              );
            })}
        </Tab.Content>
      </Col>
    </Row>
  </Tab.Container>
);
export default verticalTabs;
