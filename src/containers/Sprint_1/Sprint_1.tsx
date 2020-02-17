import React, { ReactElement } from "react";
import Header from "../../components/headers/header/Header";
import TextButtonList from "../../components/buttons/textButtonList/TextButtonList";
import TextButton from "src/components/buttons/textButton/TextButton";
import Logo from "src/components/assets/logo/logo";
import styled from "styled-components";
const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
`;
interface Props {}

function Sprint_1({}: Props): ReactElement {
  return (
    <>
      <Header
        title="good morning"
        subTitle="Banking your way. 
        What would you like
        to do today?"
      />
      <hr />
      <TextButtonList
        data={[
          "Terms & Conditions",
          "Privacy Notice",
          "Security Statement",
          "e-Banking Charter",
          "Security Alert"
        ]}
        onTextClick={(text, _index) => {
          alert(`${text} with index of ${_index} have been clicked`);
        }}
        footerText="  Copyright © AmBank (M) Berhad (Company No. 8515-D) All Rights
          Reserved."
      />
      <hr />
      <TextButton
        buttonText="Forgot username/password?"
        onTextClick={() => {
          alert(`clicked`);
        }}
      />
      <CenteredDiv>
        <TextButton
          buttonText="FAQ"
          onTextClick={() => {
            alert(`clicked`);
          }}
          buttonStyles={{
            color: "#000000",
            fontWeight: 400,
            fontSize: 15
          }}
        />
      </CenteredDiv>
      <hr />

      <Logo icon={{ name: "v-conservative", size: 40, color: "black" }} />
      <CenteredDiv>
        <Logo
          image={{
            src:
              "https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3289&q=80",
            width: 100,
            height: 50
          }}
        />
      </CenteredDiv>
      <hr />
    </>
  );
}

export default Sprint_1;
