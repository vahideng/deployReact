import React from "react";
import StatusIcon from "src/components/assets/icons/statusIcon/StatusIcon";
import Paragraphs from "../../assets/typography";
import classes from "./Prompt.module.css";
const { R_15_BLACK } = Paragraphs;
interface Props {
  testId?: string;
  text: string;
  iconColor?: any;
  outerIconColor?: string;
  icon: any;
  image?: any;
}

const Prompt: React.FC<Props> = ({
  iconColor,
  image,
  testId,
  icon,
  text,
  outerIconColor
}) => {
  return (
    <div className={classes.promptRow} id={testId}>
      <StatusIcon
        iconColor={{ top: iconColor.top, bottom: iconColor.bottom }}
        icon={icon}
        image={image}
        outerIconColor={outerIconColor}
      />
      <R_15_BLACK className={classes.promptText}>{text}</R_15_BLACK>
    </div>
  );
};

export default Prompt;
