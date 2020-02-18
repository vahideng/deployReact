import React, { Component } from "react";
import Header from "../../components/headers/header/Header";
import TextButtonList from "../../components/buttons/textButtonList/TextButtonList";
import TextButton from "src/components/buttons/textButton/TextButton";
import Logo from "src/components/assets/logo/logo";
import styled from "styled-components";
import images from "src/assets";
import Checkbox from "src/components/inputs/checkBox/checkBox";

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
`;
interface Props {}
interface State {}

class Sprint1 extends Component<Props, State> {
  state = { isCheckboxChecked: false };
  render() {
    const { isCheckboxChecked } = this.state;
    return (
      <>
        <Header
          testId="testId"
          title="good morning"
          subTitle="Banking your way. 
        What would you like
        to do today?"
        />
        <hr />
        <TextButtonList
          testId="testId"
          data={[
            "Terms & Conditions",
            "Privacy Notice",
            "Security Statement",
            "e-Banking Charter",
            "Security Alert"
          ]}
          onTextClick={(text, _index, testId) => {
            alert(
              `${text} with index of ${_index} have been clicked ${testId}`
            );
          }}
          footerText="  Copyright © AmBank (M) Berhad (Company No. 8515-D) All Rights
          Reserved."
        />
        <hr />
        <TextButton
          testId="testId"
          buttonText="Forgot username/password?"
          onTextClick={id => {
            alert(`${id} clicked`);
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

        <Logo
          icon={{ name: "v-conservative", size: 40, color: "black" }}
          testId="testId"
        />
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
        <Logo
          image={{
            src: images.common.sampleLogo,
            width: 200,
            height: 50
          }}
        />
        <hr />
        <Checkbox
          testId="testId"
          isChecked={isCheckboxChecked}
          name="checkBox"
          onCheckClick={(event, testId) => {
            this.setState({
              isCheckboxChecked: !isCheckboxChecked
            });
            console.log(
              `${event.target.checked} ${event.target.name} ${testId}`
            );
          }}
          children={
            <div>
              <p style={{ fontSize: 13 }}>
                I have read and agree to the
                <a
                  href="https://www.ambank.com.my/eng/"
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#ffa463",
                    paddingRight: 5,
                    paddingLeft: 5
                  }}
                >
                  Terms & Conditions
                </a>
                of AmOnline
              </p>
            </div>
          }
        />
        <hr />
      </>
    );
  }
}

export default Sprint1;
