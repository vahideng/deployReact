import React, { CSSProperties } from "react";
import Paragraphs from "../../assets/typography";
import Icon from "src/components/assets/icons/icon";

const { B_16_BLACK } = Paragraphs;

interface Props {
  testId?: string;
  buttonText: string;
  onButtonClick: () => void;
  componentStyle?:CSSProperties;
  iconStyle?:CSSProperties;
  iconSize?:number;
}

const BackButton: React.FC<Props> = ({ buttonText, onButtonClick, testId,iconStyle,componentStyle,iconSize }) => {
  return (
    <div
      id={testId}
      className="container row"
      onClick={onButtonClick}
      style={componentStyle ? componentStyle : { cursor: "pointer",alignItems:'center' }}
    >
      <Icon
        icon="left"
        color="#000000"
        size={iconSize ? iconSize : 25}
        style={!!iconStyle ? iconStyle : { marginRight: '0.5rem', marginLeft: -7 , display :'block'}}
      />
      <B_16_BLACK>{buttonText}</B_16_BLACK>
    </div>
  );
};

export default BackButton;
