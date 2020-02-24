import React, { Component } from "react";
import Paragraphs from "../../components/assets/typography";
import Header from "../../components/headers/header/Header";
import TextButtonList from "../../components/buttons/textButtonList/TextButtonList";
import TextButton from "src/components/buttons/textButton/TextButton";
import Logo from "src/components/assets/logo/Logo";
import styled from "styled-components";
import images from "src/assets";
import Checkbox from "src/components/inputs/checkBox/CheckBox";
import AMTabs from "src/components/buttons/tabs/Tabs";
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
import LabeledIcon from "src/components/assets/icons/labeledIcon/LabeledIcon";
import NavBar from "src/components/headers/navbar/Navbar";
import ZeroResult from "src/components/infographic/zeroResault/ZeroResult";
import PieChart from "src/components/pies/PieChart";
import AmModal from "src/components/modal/Modal";
import InputField from "src/components/inputs/checkBox/inputFields/InputFields";
import IconButtons from "src/components/buttons/iconButtons/IconButtons";
const { B_13_ORANGE_463 } = Paragraphs;
const Title = styled(B_13_ORANGE_463)`
  text-align: center;
  padding: 5px 0;
  margin: 5px 0;
  border-top: 1px solid #ffa463;
  border-bottom: 1px solid #ffa463;
`;
const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const RowDiv = styled.div`
  display: flex;
  flex-direction: "row";
`;
interface Props {}
interface State {
  isCheckboxChecked: boolean;
  hidden: boolean;
  inputValue: string;
}

class Sprint1 extends Component<Props, State> {
  state = { isCheckboxChecked: false, hidden: true, inputValue: "" };
  render() {
    const { isCheckboxChecked, hidden, inputValue } = this.state;
    return (
      <>
        <Title>IconButtons</Title>
        <IconButtons
          selected={3}
          label="Transfer To"
          list={[
            {
              text: "Account",
              icon: {
                name: "Account"
              }
            },
            {
              text: "Card2",
              icon: {
                name: "Card2"
              }
            },
            {
              text: "Account",
              icon: {
                name: "Account"
              }
            },
            {
              text: "Card2",
              icon: {
                name: "Card2"
              }
            },
            {
              text: "Account",
              icon: {
                name: "Account"
              }
            }
          ]}
        />
        <Title>InputField</Title>
        <InputField
          type="text"
          label="input label"
          icon={{ name: "Bill" }}
          value={inputValue}
          handleChange={event => {
            this.setState({
              inputValue: event.target.value
            });
          }}
        />
        <InputField
          type="text"
          label="input label"
          autoFocus
          value={inputValue}
          handleChange={event => {
            this.setState({
              inputValue: event.target.value
            });
          }}
        />
        <InputField
          type="text"
          label="input label"
          icon={{ name: "Account-2" }}
          value={inputValue}
          handleChange={event => {
            this.setState({
              inputValue: event.target.value
            });
          }}
        />
        <InputField
          value={inputValue}
          handleChange={event => {
            this.setState({
              inputValue: event.target.value
            });
            console.log(inputValue);
          }}
          isSecure
          type={!!hidden ? "password" : "text"}
          label="input label"
          icon={{ name: "Account-2" }}
          onSecureClick={() => {
            this.setState({
              hidden: !hidden
            });
          }}
        />

        <Title>AMTabs</Title>
        <AMTabs />
        <Title>PieChart</Title>
        <PieChart />

        <Title>ZeroResult</Title>
        <ZeroResult
          text={`We can’t seem to find any result for 
          “Damansara Heights”`}
        />

        <Title>NavBar</Title>

        <NavBar
          icon={{ name: "Investment" }}
          profile={{
            greeting: "Good Morning",
            name: "Adam Constantine",
            alt: "AVATAR",
            src:
              "https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=935&q=80"
          }}
          rightButtons={[
            {
              iconName: "Time",
              link: ""
            },
            {
              iconName: "Settings",
              link: ""
            },
            {
              iconName: "Share",
              link: ""
            }
          ]}
        />

        <Title>LabeledIcon</Title>
        <LabeledIcon
          leftLabel="Powered by"
          imageIcon={{ src: images.common.sampleLogo, size: 100 }}
        />
        <LabeledIcon
          rightLabel="AmBank"
          icon={{ name: "Account", color: "#000000", size: 30 }}
        />

        <Title>InlineMessage</Title>

        <CenteredDiv>
          <InlineMessage
            errorText="The TAC is incorrect"
            subText="Please try again."
          />
        </CenteredDiv>

        <Title>PrimaryButton</Title>

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

          <Title>FullButton</Title>
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
        <Title>Header</Title>
        <Header
          testId="testId"
          title="good morning"
          subTitle="Banking your way. 
          What would you like
          to do today?"
        />

        <Title>TextButtonList</Title>
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

        <Title>TextButton</Title>
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

        <Title>Logo</Title>
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

        <Title>Checkbox</Title>
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

        <Title>AMTabs</Title>
        <AMTabs />

        <Title>FooterLogo</Title>
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

        <Title>BannerHero</Title>
        <BannerHero />

        <Title>BackButton</Title>
        <BackButton
          buttonText="Forgot Username/Password"
          onButtonClick={() => {
            alert("BackButton clicked");
          }}
        />

        <Title>StickyTimer</Title>
        <StickyTimer />

        <Title>Profile</Title>
        <Profile
          greeting="Good Morning"
          name="Adam Constantine"
          alt="AVATAR"
          src={
            "https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=935&q=80"
          }
        />

        <Title>StatusIcon</Title>

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

        <Title>Prompt</Title>
        <Prompt
          iconColor={{ top: "#DCEAEA", bottom: "#7FA2A2" }}
          icon={{ name: "Tick-1", color: "#ffffff" }}
          text="Your profile is successfully activated."
        />

        <Title>DetailSummary</Title>
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

        <AmModal />
      </>
    );
  }
}

export default Sprint1;
