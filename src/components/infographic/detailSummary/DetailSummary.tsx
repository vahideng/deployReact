import React from "react";
import Paragraphs from "../../assets/typography";
import StatusIcon from "src/components/assets/icons/statusIcon/StatusIcon";
import classes from "./DetailSummary.module.css";
const {
  B_13_GREY393,
  B_16_BLACK,
  B_13_BLACK,
  R_13_BLACK,
  B_13_ORANGE_463
} = Paragraphs;
interface Props {
  testId?: string;
  mainTitle?: string;
  logoTitle?: string;
  detailTitle?: string;
  detail?: string;
  link?: { text: string; src: string };
  iconColor?: { top: string; bottom: string };
  icon?: { name: string; color: string };
  image?: { src: string; alt?: string };
}

const DetailSummary: React.FC<Props> = ({
  testId,
  mainTitle,
  logoTitle,
  detailTitle,
  detail,
  link,
  iconColor,
  icon,
  image
}) => {
  return (
    <div id={testId}>
      <div className={classes.dsMainTitle}>
        <B_13_GREY393>{mainTitle}</B_13_GREY393>
      </div>
      <div className={classes.dsMainLogoDiv}>
        <B_16_BLACK>{logoTitle}</B_16_BLACK>
        <div className={classes.dsIconRow}>
          <div className={classes.dsIconTitle}>
            <StatusIcon iconColor={iconColor} icon={icon} image={image} />
          </div>

          <div>
            <B_13_BLACK>{detailTitle}</B_13_BLACK>
            <R_13_BLACK className={classes.dsDetail}>{detail}</R_13_BLACK>
            <B_13_ORANGE_463
              className={classes.dsLink}
              onClick={() => {
                alert("link clicked");
              }}
            >
              {link?.text}
            </B_13_ORANGE_463>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSummary;
