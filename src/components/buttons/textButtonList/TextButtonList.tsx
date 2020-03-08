import React, { ReactNode } from "react";
import Paragraphs from "../../assets/typography";
import classes from "./TextButtonList.module.css";

const { SB_11_GREY444 } = Paragraphs;
interface Props {
  data?: string[];
  footerText?: string;
  onTextClick: (text: ReactNode, _index: number, testId: string) => void;
  testId?: string;
}

const TextButtonList: React.FC<Props> = props => {
  const { data, footerText, onTextClick, testId } = props;

  return (
    <>
      <div className="container" id={`${testId}-1`}>
        <div className={classes.rowWrapper} id={`${testId}-2`}>
          {!!data &&
            data.map((text: React.ReactNode, _index) => {
              return (
                <SB_11_GREY444
                  id={`${testId}-3`}
                  onClick={() => {
                    onTextClick(text, _index, testId!);
                  }}
                  key={_index}
                  className={classes.separator}
                  style={_index >= data.length - 1 ? { border: 0 } : {}}
                >
                  {text}
                </SB_11_GREY444>
              );
            })}
        </div>
        {!!footerText && (
          <SB_11_GREY444 style={{ textAlign: "center" }} id={`${testId}-4`}>
            {footerText}
          </SB_11_GREY444>
        )}
      </div>
    </>
  );
};

export default TextButtonList;
