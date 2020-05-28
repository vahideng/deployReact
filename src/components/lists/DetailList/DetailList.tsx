import React, { ReactNode } from "react";
import classes from "./DetailList.module.css";
import Paragraphs from "../../assets/typography";
import Tooltip from "src/components/tooltip/Tooltip";
const { R_15_BLACK, B_15_BLACK, B_11_GREY393 } = Paragraphs;
interface Props {
  testId?: string;
  title?: string;
  titleList?: string[];
  onBlur?: () => void;
  list?: {
    leftText: string;
    rightText: string;
    tipChildren?: ReactNode;
    showTooltip?: boolean;
    onTooltipClicked?: () => void;
  }[];
}

const DetailList: React.FC<Props> = ({ list, title, testId, titleList, onBlur }) => {
  return (
    <div className={classes.DetailListMainDiv} id={testId}>
      {title ? (
        <div className={classes.DetailListTitle}>
          <B_11_GREY393 id={classes.title}>{title}</B_11_GREY393>
        </div>
      ) : (
        titleList && (
          <div className={classes.DetailListTitle}>
            {titleList.map((t, index) => {
              return (
                <B_11_GREY393
                  key={index}
                  id={classes.title}
                  className={classes.ListTitle}
                >
                  {t}
                </B_11_GREY393>
              );
            })}
          </div>
        )
      )}

      {!!list &&
        list.map((item, index) => {
          return (
            <div
              key={index}
              className={classes.DetailListRows}
              id={`${testId}-${index}`}
            >
              <R_15_BLACK>{item.leftText}</R_15_BLACK>
              <div>
                <div className={classes.DetailListTool}>
                  <B_15_BLACK>{item.rightText}</B_15_BLACK>

                  {!!item.tipChildren && (
                    <div
                      className={classes.DetailListToolIcon}
                      id={`${testId}-0${index}`}
                    >
                      <Tooltip
                      onBlur ={onBlur}
                        showTooltip={item.showTooltip}
                        onTooltipClicked={item.onTooltipClicked}
                        tipChildren={item.tipChildren}
                        testId={testId}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default DetailList;
