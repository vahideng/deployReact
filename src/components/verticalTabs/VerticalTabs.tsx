import React, { useState, useEffect, CSSProperties } from "react";
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
  defaultIndex?: number;
  tabWidth?: string;
  tabHeight ?: string;
  WrapperStyle ?: CSSProperties;
}
const VerticalTabs: React.FC<Props> = ({
  data,
  minimize,
  selectedBorderColor,
  testId,
  defaultIndex,
  tabWidth,
  tabHeight,
  WrapperStyle
}) => {
  const [defaultActiveKey, setDefaultActiveKey] = useState(
    defaultIndex ? defaultIndex : 0
  );
  const lastIndex = data.length - 1;
  useEffect(() => {
    if (data) {
      data.map((item: any, index: number) => {
        if (item.selected) {
          setDefaultActiveKey(index);
        }
      });
    }
  });

  const customStyle = (index: number, borderRight: boolean) => ({
    borderBottom:
      index == lastIndex ? "1px solid transparent" : "1px solid #dedede",
    width: minimize ? "6rem" : tabWidth ? tabWidth : "14.68rem",
    borderRightColor: borderRight
      ? selectedBorderColor
        ? selectedBorderColor
        : "#ff2626"
      : "",
  });

  

  return (
    <Tab.Container
      id={`verticalTabs ${testId}`}
      defaultActiveKey={defaultActiveKey}
    >
      <div  style={WrapperStyle} className={classes.WholeWrapper}>
        <div className={classes.LeftChild}>
          <Nav variant="pills" className={`${classes.Container} flex-column `}>
            {!!data &&
              data.map((item: any, index: number) => {
                return (
                  <Nav.Item key={index}  style={tabHeight  && { height :tabHeight }} className={`${classes.Wrapper}`}>
                    <Nav.Link eventKey={index} className={`${classes.NavLink}`}>
                      <VerticalTabSelection
                      
                        selected={item.selected}
                        onTileClick={() => item.onClick(index)}
                        icon={{
                          name: item.icon.name,
                          color: item.icon.color,
                          size: item.icon.size,
                        }}
                        accountTitle={`${minimize ? "" : item.accountTitle}`}
                        accountTitle2={`${minimize ? "" : item.accountTitle2 ? item.accountTitle2 : "" }`}
                        tabStyle={customStyle(index, item.selected)}
                      />
                    </Nav.Link>
                  </Nav.Item>
                );
              })}
          </Nav>
        </div>
        <div className={classes.verticalLine}></div>
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
                          })`,
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
