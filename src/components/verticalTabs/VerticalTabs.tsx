import React, { useState } from "react";
import { Tab, Nav } from "react-bootstrap";
import VerticalTabSelection from "src/components/selections/verticalTabSelection/VerticalTabSelection";
import Paragraphs from "../assets/typography";
import classes from "./VerticalTab.module.css";
import "react-tabs/style/react-tabs.css";
const { SB_16_WHITE, B_32_WHITE } = Paragraphs;
interface Props {
  testId?: string;
  selectedBorderColor?: string;
  data: any;
  minimize: boolean;
}
const VerticalTabs: React.FC<Props> = ({
  data,
  minimize,
  selectedBorderColor,
  testId
}) => {
  const [defaultActiveKey, setDefaultActiveKey] = useState(0);
  const lastIndex = data.length - 1;
  React.useEffect(() => {
    if (data) {
      data.map((item: any, index: number) => {
        if (item.selected) {
          setDefaultActiveKey(index);
        }
      });
    }
  });

  return (
    <Tab.Container
      id={`verticalTabs ${testId}`}
      defaultActiveKey={defaultActiveKey}
    >
      <div className={classes.WholeWrapper}>
        <div className={classes.LeftChild}>
          <Nav variant="pills" className={`${classes.Container} flex-column `}>
            {!!data &&
              data.map((item: any, index: number) => {
                return (
                  <Nav.Item key={index} className={`${classes.Wrapper}`}>
                    <Nav.Link eventKey={index} className={`${classes.NavLink}`}>
                      <VerticalTabSelection
                        selected={item.selected}
                        onTileClick={() => item.onClick(index)}
                        icon={{ name: item.icon.name, color: item.icon.color }}
                        accountTitle={`${minimize ? "" : item.accountTitle}`}
                        tabStyle={
                          item.selected
                            ? {
                                borderRightColor: selectedBorderColor
                                  ? selectedBorderColor
                                  : "#ff2626",
                                borderBottom:
                                  index == lastIndex
                                    ? "1px solid transparent"
                                    : "1px solid #dedede"
                              }
                            : {
                                borderBottom:
                                  index == lastIndex
                                    ? "1px solid transparent"
                                    : "1px solid #dedede"
                              }
                        }
                      />
                    </Nav.Link>
                  </Nav.Item>
                );
              })}
          </Nav>
        </div>
        <div
          style={{ backgroundColor: "#dedede", height: "100%", width: 1 }}
        ></div>
        <div className={classes.RightChild}>
          <Tab.Content>
            {!!data &&
              data.map((_item: any, index: number) => {
                return (
                  <Tab.Pane eventKey={index} id={`${testId}-1`}>
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
        </div>
      </div>
    </Tab.Container>
  );
};

export default VerticalTabs;
