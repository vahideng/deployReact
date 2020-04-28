import React from "react";
import Icon from "src/components/assets/icons/icon";
import iconSets from "../../components/assets/icons/iconSVG";
import Paragraphs from "../../components/assets/typography";
import styled from "styled-components";
const { B_11_GREY393 } = Paragraphs;

const MainDiv = styled.div`
  display: flex;
  height: 10rem;
  align-items: center;
  overflow: auto;
  white-space: nowrap;
  padding: 0 1rem;
`;
const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0.3rem;
  min-width: 5rem;
  height: 5rem;
  margin: 0.3rem;
  border: 1px solid #dedede;
  border-radius: 50%;
  &:nth-child(even) {
    background: #fff;
  }
  &:nth-child(odd) {
    background: #e1e1e1;
  }
`;

const IconTest = () => {
  const icons = iconSets.icons;

  return (
    <MainDiv>
      {icons.map((icon, index) => {
        return (
          <Icons>
            <Icon icon={icon.properties.name} key={index} size={30} />

            <B_11_GREY393>{icon.properties.name} </B_11_GREY393>
          </Icons>
        );
      })}
      <Icon />
    </MainDiv>
  );
};

export default IconTest;
