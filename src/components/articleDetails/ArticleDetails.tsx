import React from "react";
import classes from "./ArticleDetails.module.css";
import Paragraphs from "../assets/typography";

const { SB_32_BLACK, SB_22_BLACK, R_15_GREY444, SB_17_BLACK } = Paragraphs;

interface Props {
  testId: string;
  mainTitle: string;
  onArticleClick: (item: any, index: number) => void;
  data: {
    highlighted?: Boolean;
    title: string;
    content?: string;
    clickable?: boolean
  }[];
}
const ArticleDetails: React.FC<Props> = ({
  testId,
  mainTitle,
  data,
  onArticleClick,
  
}) => {
  return (
    <>
      <div id={testId}>
        <div className={classes.adMainTitle}>
          <SB_32_BLACK>{mainTitle}</SB_32_BLACK>
        </div>
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className={classes.adData}
              onClick={ item.clickable ? () => {
                onArticleClick(item, index)
              }:  null}
            >
              <div className={classes.Container}>
                {item.highlighted ? (
                  <SB_22_BLACK className={classes.adTitle}>
                    {item.title}
                  </SB_22_BLACK>
                ) : (
                  <SB_17_BLACK className={classes.adTitle}>
                    {item.title}
                  </SB_17_BLACK>
                )}
                {item.content ? (
                  <R_15_GREY444 className={classes.adContent}>
                    {item.content}
                  </R_15_GREY444>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ArticleDetails;
