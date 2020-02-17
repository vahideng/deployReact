import React, { ReactNode } from "react";
import Paragraphs from "../../assets/typography";
import "./TextButtonList.scss";

const { SB_11_GREY444 } = Paragraphs;
interface Props {
  data?: string[];
  footerText?: string;
  onTextClick: (text: ReactNode, _index: number) => void;
}

const TextButtonList: React.FC<Props> = props => {
  const { data, footerText, onTextClick } = props;

  return (
    <>
      <div className="container">
        <div className="rowWrapper">
          {!!data &&
            data.map((text: React.ReactNode, _index) => {
              return (
                <SB_11_GREY444
                  onClick={() => {
                    onTextClick(text, _index);
                  }}
                  key={_index}
                  className="separator"
                  style={_index >= data.length - 1 ? { border: 0 } : {}}
                >
                  {text}
                </SB_11_GREY444>
              );
            })}
        </div>
        {!!footerText && (
          <SB_11_GREY444 style={{ textAlign: "center" }}>
            {footerText}
          </SB_11_GREY444>
        )}
      </div>
    </>
  );
};

export default TextButtonList;
