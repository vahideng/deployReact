import React from "react";
import StatusIcon from "src/components/assets/icons/statusIcon/StatusIcon";
import Paragraphs from "../../assets/typography";
import classes from "./Prompt.module.css";
const { B_17_BLACK } = Paragraphs;
interface Props {
  testId?: string;
  text: string;
  iconColor?: { top?: string; bottom?: string };
  outerIconColor?: string;
  icon?: { name?: string; color?: string; size?: number };
  image?: { src: string; alt?: string };
  outerRoundSize?: number | string;
  innerRoundSize?: number | string;
  small?: boolean;
}

const Prompt: React.FC<Props> = ({
  iconColor,
  image,
  testId,
  icon,
  text,
  outerIconColor,
  outerRoundSize,
  innerRoundSize,
  small,
}) => {
  return (
    <div className={classes.promptRow} id={testId}>
      <StatusIcon
        outerRoundSize={outerRoundSize}
        innerRoundSize={innerRoundSize}
        iconColor={{ top: iconColor.top, bottom: iconColor.bottom }}
        icon={icon}
        image={image}
        outerIconColor={outerIconColor}
        small={small}
      />
      <B_17_BLACK className={classes.promptText}>{text}</B_17_BLACK>
    </div>
  );
};

export default Prompt;
