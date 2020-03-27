import React, { CSSProperties } from "react";
import styled from "styled-components";

interface Props {
  color?: string;
  height?: number;
  width?: number;
  style?: CSSProperties;
  testId?: string;
}

const Line: React.FC<Props> = ({
  color,
  height,
  width,
  style,
  testId
}: Props) => {
  const backgroundColor = color !== undefined ? color : "#DEDEDE";
  const lineHeight = height !== undefined ? height : "1px";
  const lineWidth = width !== undefined ? width : "100%";
  const Line = styled.div`
    background-color: ${backgroundColor};
    height: ${lineHeight};
    width: ${lineWidth};
  `;
  return <Line id={`${testId}`} style={style} />;
};

export default Line;
