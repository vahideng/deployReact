import React, { ReactNode } from "react";
import classes from "./DetailList.module.css";
import Paragraphs from "../../assets/typography";
import Tooltip from "src/components/tooltip/Tooltip";
const { B_13_GREY393, R_15_BLACK, B_15_BLACK } = Paragraphs;
interface Props {
  testId?: string;
  title?: string;
  list?: {
    leftText: string;
    rightText: string;
    tipChildren?: ReactNode;
  }[];
}

const DetailList: React.FC<Props> = ({ list, title, testId }) => {
  return (
    <div className={classes.DetailListMainDiv} id={testId}>
      {!!title && (
        <div className={classes.DetailListTitle}>
          <B_13_GREY393 id={classes.title}>{title}</B_13_GREY393>
        </div>
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
                      <Tooltip tipChildren={item.tipChildren} testId={testId} />
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
