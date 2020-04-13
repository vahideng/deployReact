import React, {CSSProperties} from 'react';
import classes from './ErrorPage.module.css';
import Paragraphs from '../assets/typography';
import Icon from '../assets/icons/icon';
const { R_15_BLACK } = Paragraphs;
interface ErrorPageProps {
  testId?: string;
  title: string;
  mainStyle?: CSSProperties;
  titleStyle?: CSSProperties;
  detailText?: string;
  detailTextStyle?: CSSProperties; 
  imageIcon?: { src: string; size?: number; alt?: string };
  icon?: {
    name: string;
    size?: number;
    color?: string;
  };
  responsive?:boolean;
}

const ErrorPage: React.FC<ErrorPageProps> = ({
  mainStyle,
  title,
  titleStyle,
  detailText,
  detailTextStyle,
  testId,
  icon,
  imageIcon,
  responsive
}) => {
    const { innerDiv,Wrapper,logo,innerDivRes } = classes;
    const innerDivStyle = responsive ? innerDivRes : innerDiv;
   
  return (
         <div className={Wrapper} style={mainStyle} id={testId}>
      <div className={innerDivStyle}>
        <div className={logo}>
        {!!icon && (
          <Icon
            icon={!!icon.name ? icon.name : ""}
            size={!!icon.size ? icon.size : 30}
            color={icon.color}
          />
      )}
      {!!imageIcon && (
          <img
            src={imageIcon.src}
            width={imageIcon.size ? imageIcon.size : 100}
            alt={!!imageIcon ? imageIcon.alt : "Logo"}
          />
      )}
        </div>
        <R_15_BLACK style={titleStyle}>{title}</R_15_BLACK>
        {detailText && (
          <R_15_BLACK style={detailTextStyle}>
            {detailText}
          </R_15_BLACK>
        )}
      </div>
       </div>
  );
};

ErrorPage.defaultProps= {
  responsive:false,
}

export default ErrorPage;