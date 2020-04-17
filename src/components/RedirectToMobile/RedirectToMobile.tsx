import React, { CSSProperties } from 'react';
import classes from './RedirectToMobile.module.css';
// import { Card, Col } from 'react-bootstrap';
// import Icon from 'src/components/assets/icons/icon';
import Paragraphs from '../../components/assets/typography';
import images from "src/assets";
import Icon from "src/components/assets/icons/icon";
import PrimaryButton from "src/components/buttons/primaryButton/PrimaryButton";
const { SB_32_BLACK, SB_15_BLACK, B_13_ORANGE_463 } = Paragraphs;

interface RedirectToMobileProps {
  testId: string,
  header?: {
    content?: string;
    contentStyle?: CSSProperties;
    testId: string;
    title: string;
    titleStyle?: CSSProperties},
    logo?: {
      name?: string
      color?: string
      size?: number
    },
    button:{ 
      testId: string;
      title: string;
      titleColor?: string;
      buttonColor?: any;
      height?: number | string;
      width?: number | string;
      onButtonClick: () => void;
      small?: boolean;
      icon?: { name: string; color: string };
    },
    backgroundImage ?: any;
    continueWithWeb ?:{
      content: string;
      contentStyle?: any;
      onClick: any
    }
    gradient?: boolean;
}

const RedirectToMobile: React.FC<RedirectToMobileProps> = ({
  testId,
  logo,
  header,
  button,
  backgroundImage = images.common.redirectBg,
  continueWithWeb, 
  gradient = true
}) => {
  return (
    <div id={testId} className={classes.MainContainer} style={{ backgroundImage: `url(${backgroundImage})`}}>
       <Icon
        icon={logo.name ? logo.name : "LOGO"}
        color={logo.color ? logo.color : "#ff2626"}
        size={logo.size ? logo.size : 130}
        className={classes.logo}
      />
      <div className={classes.TitleText} id={header.testId}>
        <SB_32_BLACK style={header.titleStyle}>{header.title}</SB_32_BLACK>
      </div>
      <div className={classes.Desc} id={`${header.testId}-desc`}>
        <SB_15_BLACK style={header.contentStyle}>{header.content}</SB_15_BLACK>
      </div>
      <PrimaryButton
        testId={button.testId}
        onButtonClick={button.onButtonClick}
        responsive
        title={button.title}
        titleColor={button.titleColor}
        buttonColor={button.buttonColor}
        height={button.height}
        width={button.width}
        small={button.small}
        icon={button.icon}
      />
      {continueWithWeb && <div className={classes.bottomAlign}>
        <B_13_ORANGE_463 onClick={continueWithWeb.onClick} style={continueWithWeb.contentStyle}>{continueWithWeb.content}</B_13_ORANGE_463>
      </div>}
      {gradient && <div className={classes.overlay}></div>}
    </div>
  );
};


export default RedirectToMobile;
