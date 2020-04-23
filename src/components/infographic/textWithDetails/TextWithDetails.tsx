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
  image?: { src?: string; imageStyle?: CSSProperties };
}

const TextWithDetails: React.FC<Props> = ({
  content,
  contentStyle,
  direction,
  testId,
  title,
  titleStyle,
  image,
}) => {
  const paddingLeft = direction === "row" ? { paddingLeft: "0.25rem" } : {};
  const defaultDirection = direction !== undefined ? direction : "column";
  const MainDiv = styled.div`
    display: flex;
    flex-direction: ${defaultDirection};
  `;
  const Wrapper = styled.div`
    display: flex;
    align-items: center;
  `;
  const Image = styled.img`
    margin-right: 1.5rem;
    width: 5.31rem;
    height: 3.25rem;
  `;
  return (
    <Wrapper>
      {image && (
        <Image src={image.src ? image.src : ""} style={image.imageStyle} />
      )}
      <MainDiv id={testId}>
        <B_15_BLACK style={{ marginBottom: '4px', ...titleStyle }}>{title}</B_15_BLACK>
        {content === undefined
          ? null
          : content.map((item, index) => {
              return (
                <R_15_BLACK
                  style={{ ...paddingLeft, ...contentStyle }}
                  key={index}
                >
                  {item}
                </R_15_BLACK>
              );
            })}
      </MainDiv>
    </Wrapper>
  );
};

export default TextWithDetails;
