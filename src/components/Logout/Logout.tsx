import React from 'react';
import classes from './Logout.module.css';
import Paragraphs from '../assets/typography';
import StatusIcon from "src/components/assets/icons/statusIcon/StatusIcon";
import Icon from "src/components/assets/icons/icon";
import LogoutList from '../lists/LogoutList/LogoutList';
import { CSSProperties } from 'styled-components';
import PrimaryButton from '../buttons/primaryButton/PrimaryButton';
const { B_24_BLACK } = Paragraphs;
interface LogoutProps {
  testId: string;
  responsive?:boolean;
  btntitle:string;
  btnwidth?:string;
  onButtonClick: () => void;
  header?: {
    statusIcon?: {
      testId?: string;
      iconColor: {
        top: string;
        bottom: string;
      };
      outerIconColor: string;
      icon?: any;
      image?: any;
    };
    title?: string;
    titleStyle?: CSSProperties;
    subTitle?: string;
  };
  listChildren: {
    leftLabel:{
      contentType:string;
      styleContent?:CSSProperties,
      value:string,
      styleValue?:CSSProperties;
    },
    rightLabel: {
      TimeStamp: string,
      styleTimeStamp?:CSSProperties,
      value:string,
      styleValue?:CSSProperties
    },
    middleLabel:{
      content : string,
      styleContent?:CSSProperties,
    }
  }[];
}


const Logout: React.FC<LogoutProps> = ({
  testId,
  responsive,
  listChildren,
  header,
  onButtonClick,
  btntitle,
  btnwidth,

}) => {
  let containerCls = classes.StatusFormContainerCurve;
  let IconWidth =  "36.31rem";
  let BtnWidth = btnwidth;
  if (responsive) {
    containerCls = `${classes.StatusFormContainerCurve} ${classes.StatusFormContainerCurveResponive}`
    IconWidth = '100%';

  } 

  const {statusIcon,title,subTitle} = header;

  return (

<div id={testId} className={classes.StatusFormContainerMain}>
      
      {!!statusIcon && (
        <>
          <span className={classes.StatusFormContainerStatusIcon}>
            <StatusIcon
              outerIconColor={statusIcon.outerIconColor}
              testId={statusIcon.testId}
              icon={!!statusIcon ? statusIcon.icon : ""}
              iconColor={{
                top: statusIcon.iconColor.top,
                bottom: statusIcon.iconColor.bottom
              }}
              image={!!statusIcon ? statusIcon.image : ""}
            />
          </span>
        </>
      )}
      <div className={containerCls} id={testId}>
        <span>
          <Icon
            icon="popup-curve"
            color={"#FFFFFF"}
            size={58}
            style={{
              width: IconWidth,
          
            }}
          />
        </span>
        <div className={classes.StatusFormContainerContent}>
          
        <B_24_BLACK className={classes.headerTitle} style={header.titleStyle}>
            {title}
      </B_24_BLACK>
      <br />
                <p className={classes.subContent}>
                 {subTitle}
                </p>     
        <LogoutList
                  itemContainerStyle={{ padding: 0 }}
                  responsive={responsive}
                  list={listChildren}
                />
        </div>
        <div className={classes.btnClass}>
          <PrimaryButton
            onButtonClick={onButtonClick}
            title={btntitle}
            responsive
            width={BtnWidth}
          />
      </div>

      </div>
    </div>
  );
};

export default Logout;

Logout.defaultProps ={
  responsive : false
}

