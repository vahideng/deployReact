import React from "react";

import classes from "./SecondBanner.module.css";
import Paragraphs from "../../assets/typography";
import LocalImages from "src/components/assets/images";

const { B_32_BLACK, B_15_ORANGE } = Paragraphs;

interface IItem {
  content: string;
  hoverColorContent?: string;
  hoverColorTitle?: string;
  image?: string;
  onClick?: () => void;
  title: string;
  video?: string;
}
interface Props {
  data: IItem[];
  linkOnClick: () => void;
  linkText: string;
  testId?: string;
  title: string;
}

const SecondBanner: React.FC<Props> = ({
  data,
  linkOnClick,
  linkText,
  testId,
  title
}: Props) => {
  return (
    <div id={`${testId}`}>
      <B_32_BLACK style={{ paddingBottom: "2rem" }}>{title}</B_32_BLACK>
      {data.map(item => (
        <div className={classes.Container} onClick={item.onClick}>
          <div className={classes.Overlay}>
            <div className={classes.ImageOverlay}></div>
            {item.video ? (
              <div className={classes.ImageContainer}>
                <div className={classes.PlayVideoContainer}>
                  <img
                    className={classes.PlayVideo}
                    src={LocalImages.common.playVideo}
                  />
                </div>
                <img className={classes.ImageContainer} src={item.video} />
              </div>
            ) : (
              <img className={classes.ImageContainer} src={item.image} />
            )}
            <div className={classes.Details}>
              <p className={classes.Title}>{item.title}</p>
              <p className={classes.Content}>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
      <B_15_ORANGE onClick={linkOnClick}>{linkText}</B_15_ORANGE>
    </div>
  );
};

export default SecondBanner;
