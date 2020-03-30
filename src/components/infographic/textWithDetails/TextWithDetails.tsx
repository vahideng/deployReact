import React, { CSSProperties } from "react";
import Paragraphs from "../../assets/typography";
import styled from "styled-components";

const { B_15_BLACK, R_15_BLACK } = Paragraphs;
interface Props {
  content?: string[];
  contentStyle?: CSSProperties;
  direction?: "row" | "column";
  testId?: string;
  title: string;
  titleStyle?: CSSProperties;
}

const TextWithDetails: React.FC<Props> = ({
  content,
  contentStyle,
  direction,
  testId,
  title,
  titleStyle
}) => {
  const paddingLeft = direction === "row" ? { paddingLeft: "0.25rem" } : {};
  const defaultDirection = direction !== undefined ? direction : "column";
  const MainDiv = styled.div`
    display: flex;
    flex-direction: ${defaultDirection};
  `;

  return (
    <MainDiv id={testId}>
      <B_15_BLACK style={titleStyle}>{title}</B_15_BLACK>
      {content === undefined ? null : (
        <R_15_BLACK style={{ ...paddingLeft, ...contentStyle }}>
          {content}
        </R_15_BLACK>
      )}
    </MainDiv>
  );
};

export default TextWithDetails;
