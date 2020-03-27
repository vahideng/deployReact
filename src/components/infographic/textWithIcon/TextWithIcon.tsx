import React, { CSSProperties } from "react";
import Paragraphs from "../../assets/typography";
import classes from "./TextWithIcon.module.css";
import { Row } from "react-bootstrap";
import Icon from "src/components/assets/icons/icon";

const { B_13_BLACK } = Paragraphs;
interface Props {
  icon?: string;
  iconColor?: string;
  iconSize?: number;
  image?: string;
  imageStyle?: CSSProperties;
  testId?: string;
  title: string;
  titleStyle?: CSSProperties;
}

const TextWithIcon: React.FC<Props> = ({
  icon,
  iconColor,
  iconSize,
  image,
  imageStyle,
  testId,
  title,
  titleStyle
}) => {
  const defaultIconColor = iconColor !== undefined ? iconColor : "#000";
  const defaultIconSize = iconSize !== undefined ? iconSize : 20;

  return (
    <Row className={classes.Row} id={testId}>
      <B_13_BLACK className={classes.Title} style={titleStyle}>
        {title}
      </B_13_BLACK>
      {icon === undefined ? null : (
        <Icon icon={icon} color={defaultIconColor} size={defaultIconSize} />
      )}
      {image === undefined ? null : <img src={image} style={imageStyle} />}
    </Row>
  );
};

export default TextWithIcon;
