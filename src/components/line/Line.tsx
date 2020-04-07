import React, { CSSProperties } from "react";
import styled from "styled-components";

interface Props {
  style?: CSSProperties;
  testId?: string;
}

const Line: React.FC<Props> = ({ style, testId }: Props) => {
  const Line = styled.div`
    border-bottom: 1px solid #dedede;
  `;
  return <Line id={`${testId}`} style={style} />;
};

export default Line;
