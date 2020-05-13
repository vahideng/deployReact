import React from "react";
import Paragraphs from "../../assets/typography";
import StatusIcon from "src/components/assets/icons/statusIcon/StatusIcon";
import classes from "./SettingSummary.module.css";

const { B_17_BLACK, R_17_BLACK } = Paragraphs;
interface Props {
  testId?: string;
  detailTitle?: string;
  detail?: string;
  iconColor?: { top: string; bottom: string };
  outerIconColor?: string;
  icon?: { name?: string; color?: string; size?: number };
  image?: { src: string; alt?: string };
  outerRoundSize?: number | string;
  innerRoundSize?: number | string;
}

const SettingSummary: React.FC<Props> = ({
  testId,
  detailTitle,
  detail,
  iconColor,
  icon,
  image,
  outerIconColor,
  outerRoundSize,
  innerRoundSize,
}) => {
  return (
    <div id={testId}>
      <div className={classes.stMainTitle}></div>
      <div className={classes.stMainLogoDiv}>
        <div className={classes.stIconRow}>
          <div className={classes.stIconTitle}>
            <StatusIcon
              iconColor={iconColor}
              icon={icon}
              image={image}
              outerIconColor={outerIconColor}
              outerRoundSize={outerRoundSize}
              innerRoundSize={innerRoundSize}
            />
          </div>

          <div className={classes.stIconDetail}>
            <B_17_BLACK>{detailTitle}</B_17_BLACK>
            <R_17_BLACK className={classes.stDetail}>{detail}</R_17_BLACK>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingSummary;
