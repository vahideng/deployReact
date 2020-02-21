import React, { Component } from "react";
import Header from "../../components/headers/header/Header";
import TextButtonList from "../../components/buttons/textButtonList/TextButtonList";
import TextButton from "src/components/buttons/textButton/TextButton";
import Logo from "src/components/assets/logo/Logo";
import styled from "styled-components";
import images from "src/assets";
import Checkbox from "src/components/inputs/checkBox/CheckBox";
import Tabs from "src/components/buttons/tabs/Tabs";
import FooterLogo from "src/components/headers/footerLogo/FooterLogo";
import BannerHero from "src/components/banners/bannerHero/BannerHero";
import BackButton from "src/components/buttons/backButton/BackButton";
import StickyTimer from "src/components/headers/stickyTimer/StickyTimer";
import Profile from "src/components/headers/profile/Profile";
import StatusIcon from "src/components/assets/icons/statusIcon/StatusIcon";
import DetailSummary from "src/components/infographic/detailSummary/DetailSummary";
import Prompt from "src/components/infographic/prompt/Prompt";
import PrimaryButton from "src/components/buttons/primaryButton/PrimaryButton";
import FullButton from "src/components/buttons/fullButton/FullButton";
import InlineMessage from "src/components/infographic/inlineMessage/InlineMessage";

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const RowDiv = styled.div`
  display: flex;
  flex-direction: "row";
`;
interface Props {}
interface State {}

class Sprint1 extends Component<Props, State> {
  state = { isCheckboxChecked: false };
  render() {
    const { isCheckboxChecked } = this.state;
    return (
      <>
        <CenteredDiv>
          <InlineMessage
            errorText="The TAC is incorrect"
            subText="Please try again."
          />
        </CenteredDiv>
        <hr />
        <div>
          <PrimaryButton
            title="Load More"
            onButtonClick={() => {
              alert("Button Clicked");
            }}
          />
          <PrimaryButton
            onButtonClick={() => {
              alert("Button Clicked");
            }}
            title="Continue"
            titleColor="#000000"
            buttonColor={{ top: "#BDBDBD", bottom: "#BDBDBD" }}
          />
          <PrimaryButton
            small={true}
            onButtonClick={() => {
              alert("Button Clicked");
            }}
          />

          <div style={{ paddingTop: 5 }}>
            <PrimaryButton
              onButtonClick={() => {
                alert("Button Clicked");
              }}
              width={"70vw"}
              title="Continue"
              titleColor="#000000"
              buttonColor={{ top: "#BDBDBD", bottom: "#BDBDBD" }}
            />
          </div>
          <FullButton
            title="Login"
            onButtonClick={() => {
              alert("Button Clicked");
            }}
          />
          <div style={{ paddingTop: 5 }}>
            <FullButton
              split
              leftTitle="No"
              rightTitle="Yes"
              onRightButton={() => {
                alert("Right Button Clicked");
              }}
              onLeftButton={() => {
                alert("Left Button Clicked");
              }}
            />
          </div>
        </div>
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

        <Logo icon={{ name: "QR", size: 40, color: "black" }} testId="testId" />
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
            alert(`${event.target.checked} ${event.target.name} ${testId}`);
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
        <Tabs titles={["test", "test"]} selected={1} />
        <hr />
        <FooterLogo
          onLogoClick={(logo, index) => {
            alert(`${logo.src}<=-link  id-=>${logo.id} index-=>${index}`);
          }}
          logos={[
            {
              src:
                "https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3289&q=80",
              id: "idTest-0"
            },
            {
              src:
                "https://images.unsplash.com/photo-1554463529-e27854014799?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
              id: "idTest-1"
            },
            {
              src:
                "https://images.unsplash.com/photo-1554463529-e27854014799?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
              id: "idTest-2"
            },
            {
              src:
                "https://images.unsplash.com/photo-1522827130596-971a53beeadc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
              id: "idTest-3"
            },
            {
              src:
                "https://images.unsplash.com/photo-1554463529-e27854014799?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
              id: "idTest-4"
            },
            {
              src:
                "https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3289&q=80",
              id: "idTest-5"
            },
            {
              src:
                "https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3289&q=80",
              id: "idTest-6"
            },
            {
              src:
                "https://images.unsplash.com/photo-1522827130596-971a53beeadc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
              id: "idTest-7"
            },
            {
              src:
                "https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
              id: "idTest-8"
            },
            {
              src:
                "https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3289&q=80",
              id: "idTest-9"
            },
            {
              src: images.common.sampleLogo,
              id: "idTest-10"
            },
            {
              src:
                "https://images.unsplash.com/photo-1557053964-937650b63311?ixlib=rb-1.2.1&auto=format&fit=crop&w=2359&q=80",
              id: "idTest-11"
            },
            {
              src:
                "https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3289&q=80",
              id: "idTest-12"
            },
            {
              src:
                "https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3289&q=80",
              id: "idTest-13"
            },
            {
              src:
                "https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3289&q=80",
              id: "idTest-14"
            },
            {
              src:
                "https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3289&q=80",
              id: "idTest-15"
            }
          ]}
        />
        <hr />
        <BannerHero />
        <hr />

        <BackButton
          buttonText="Forgot Username/Password"
          onButtonClick={() => {
            alert("BackButton clicked");
          }}
        />
        <hr />
        <StickyTimer />
        <hr />
        <Profile
          greeting="Good Morning"
          name="Adam Constantine"
          alt="AVATAR"
          src={
            "https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=935&q=80"
          }
        />
        <hr />
        <RowDiv>
          <StatusIcon icon={{ name: "Tick-1" }} />
          <StatusIcon
            iconColor={{ top: "#FD8585", bottom: "#FF2222" }}
            icon={{ name: "Fail", color: "#ff3" }}
          />
          <StatusIcon
            iconColor={{ top: "#FD8585", bottom: "#FF2222" }}
            image={{
              src:
                "https://images.unsplash.com/photo-1516876902004-79f4bd1cb0dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"
            }}
          />
          <StatusIcon
            iconColor={{ top: "#FD8585", bottom: "#FF2222" }}
            image={{
              src: images.common.amyIcon,
              alt: "logo"
            }}
          />
        </RowDiv>
        <hr />
        <Prompt
          iconColor={{ top: "#DCEAEA", bottom: "#7FA2A2" }}
          icon={{ name: "Tick-1", color: "#ffffff" }}
          text="Your profile is successfully activated."
        />
        <hr />
        <DetailSummary
          mainTitle="Protected by PIDM up to RM 250,000 for each depositor"
          logoTitle="Account Insights"
          iconColor={{ top: "#FD8585", bottom: "#FF2222" }}
          image={{
            src: images.common.amyIcon,
            alt: "logo"
          }}
          detailTitle="Looking Good"
          detail="Your lowest balance for this month is RM 10,000.00 Keep it up so you can earn the 3-month FD/TD-i prevailing interest/profit rate."
          linkText="How does this work?"
          onLinkClick={() => {
            alert("link clicked");
          }}
        />
        <hr />
      </>
    );
  }
}

export default Sprint1;
