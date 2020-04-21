import React, { CSSProperties } from "react";
import classes from "./LogoutList.module.css";
import Icon from "src/components/assets/icons/icon";
import Paragraphs from "../../assets/typography";
import Line from "src/components/line/Line";
import styles from 'styled-components';
import {Col} from 'react-bootstrap';
const {
  B_18_BLACK,
  R_19_GREY444,
  B_24_BLACK,
  SB_15_BLACK,
  R_19_GREEN_444
} = Paragraphs;


const ColDiv = styles.div `
display:flex;

flex-direction:column;
`;
interface LogoutListProps {
  testId?: string;
  responsive?: boolean;
  width?: string;
  header?: {
    icon?: { name: string; color?: string; iconText: string };
    title?: string;
    titleStyle?: CSSProperties;
    subTitle?: React.ReactNode;
    image?: {
      name?: any;
      alt?: string;
      style?: CSSProperties;
    };
  };
  itemContainerStyle?: CSSProperties;
  list?: {
    leftLabel: {
      contentType?: string;
      styleContent?: CSSProperties;
      value?: string;
      styleValue?: CSSProperties;
    },
    rightLabel:{
      TimeStamp?: string;
      styleTimeStamp?: CSSProperties;
      value?: string;
      styleValue?: CSSProperties;
    },
    middleLabel:{
      content?: string;
      styleContent?: CSSProperties;
    }
  }[];
}

const LogoutList: React.FC<LogoutListProps> = ({
  header,
  itemContainerStyle,
  testId,
  list,
  responsive,
  width,
  
  
}) => {
  let containerCls = classes.Container;
  if (responsive) {
    containerCls = `${containerCls} ${classes.ContainerResponsive}`;
  }
  return (
    <div className={containerCls} id={testId} style={{ width }}>
      {!!header && (
        <div>
          {!!header.title && (
            <div className={classes.ListTitleDiv}>
              <B_24_BLACK
                className={classes.ListTitle}
                style={header.titleStyle ? header.titleStyle : {}}
              >
                {header.title}
              </B_24_BLACK>
              {header.subTitle}
            </div>
          )}

          {!header.image
            ? !!header.icon && (
                <div>
                  <div className={classes.ListIconDiv}>
                    <Icon
                      className={classes.ListIcon}
                      icon={header.icon.name}
                      color={
                        !!header.icon.color ? header.icon.color : "#ff2626"
                      }
                    />
                    <B_18_BLACK>{header.icon.iconText}</B_18_BLACK>
                  </div>
                </div>
              )
            : !!header.image && (
                <div>
                  <div className={classes.ListIconDiv}>
                    <img
                      src={header.image.name}
                      alt={header.image.alt}
                      style={header.image.style}
                    />
                    <B_18_BLACK>{header.icon.iconText}</B_18_BLACK>
                  </div>
                </div>
              )}
        </div>
      )}
      {!!list &&
        list.map((item, index) => {
          return (
            <div
              className={responsive ? classes.ListItemsContainer: classes.ListItemsContainerRes}
              style={itemContainerStyle}
              id={`${testId}-${index}`}
              key={index}
            >
           
              <div className={classes.ListItemsDiv}>
                <ColDiv className={classes.leftlabel}>
                <R_19_GREY444 className={classes.leftLabelTextRes} style={item.leftLabel.styleContent}>{item.leftLabel.contentType}</R_19_GREY444>
                <SB_15_BLACK className={classes.LeftLabel2TextRes}  style={item.leftLabel.styleValue} >{item.leftLabel.value}</SB_15_BLACK>
                <SB_15_BLACK className={classes.RightLabelRes} style={item.rightLabel.styleValue}>{item.rightLabel.value}</SB_15_BLACK>
                </ColDiv>
                <Col className={classes.middleLabelClass}>
                <R_19_GREEN_444 style={item.middleLabel.styleContent} >{item.middleLabel.content} </R_19_GREEN_444>
                </Col>
                <ColDiv className={classes.rightLabel}>
                <R_19_GREY444 className={classes.RightLabelFirst} style={item.rightLabel.styleTimeStamp}>{item.rightLabel.TimeStamp}</R_19_GREY444>
                <SB_15_BLACK style={item.rightLabel.styleValue} className={classes.RightLabel2Res}>{item.rightLabel.value}</SB_15_BLACK>
                <R_19_GREEN_444 style={item.middleLabel.styleContent} className={classes.middleLabelRes}>{item.middleLabel.content}</R_19_GREEN_444>
                </ColDiv>
              </div>
              {list.length !== index+1 && 
              <Line style={{ marginTop: "1rem", marginBottom: "1rem" }} /> }
            </div>
          );
        })}
    </div>
  );
};

export default LogoutList;
