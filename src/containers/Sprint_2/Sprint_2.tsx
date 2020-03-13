import React, { useState } from "react";
import Paragraphs from "../../components/assets/typography";
import styled from "styled-components";
import Navbar from "src/components/headers/navbar/Navbar";
import BannerHero from "src/components/banners/bannerHero/BannerHero";
import TransactionLimitList from "src/components/lists/TransactionLimitList/TransactionLimitList";
import BoxContent from "src/components/boxContent/BoxContent";
// import images from "../../assets";

import { Redirect } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import NavbarTransparent from "src/components/headers/navbarTransparent/NavbarTransparent";
import TextDropdown from "src/components/inputs/texDropdown/TextDropdown";
import TextButton from "src/components/buttons/textButton/TextButton";
import List from "src/components/lists/list/List";
import SettingModalCenter from "src/components/modals/settingModalCenter/SettingModalCenter";
import FullButton from "src/components/buttons/fullButton/FullButton";
import BottomModal from "src/components/modals/bottomModal/BottomModal";
import SettingSummary from "src/components/infographic/settingSummary/SettingSummary";
import StatusFormContainer from "src/components/wrappers/statusFormContainer/StatusFormContainer";
import PrimaryButton from "src/components/buttons/primaryButton/PrimaryButton";

const { B_13_ORANGE_463 } = Paragraphs;
const Title = styled(B_13_ORANGE_463)`
  text-align: center;
  padding: 5px 0;
  margin: 5px 0;
  border-top: 1px solid #ffa463;
  border-bottom: 1px solid #ffa463;
`;
interface Props {}

const Sprint2: React.FC<Props> = () => {
  const [selectedItem, setSelectedOption] = useState("Persian");
  const [sprint1, setSprint1] = useState(false);
  const [sprint2, setSprint2] = useState(false);
  const [homeRedirect, setHomeRedirect] = useState(false);
  const [settingModalCenter, setSettingModalCenter] = useState(false);
  const [settingModal, setSettingModal] = useState(false);
  if (sprint1 === true) {
    return <Redirect to="/sprint-1" />;
  }
  if (sprint2 === true) {
    return <Redirect to="/sprint-2" />;
  }

  if (homeRedirect === true) {
    return <Redirect to="/" />;
  }

  return (
    <div style={{ paddingTop: 100 }}>
      <Navbar
        icon={{
          onIconClick: () => {
            setHomeRedirect(true);
          }
        }}
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
            onButtonClick: () => alert("button-1-Clicked")
          },
          {
            iconName: "Settings",
            onButtonClick: () => alert("button-2-Clicked")
          },
          {
            iconName: "Share",
            onButtonClick: () => alert("button-3-Clicked")
          }
        ]}
      />
      <Title>BottomModal</Title>
      <div style={{ padding: ".5rem 30%", background: "#f5f5f5" }}>
        <FullButton
          split
          leftTitle="Open BottomModal"
          rightTitle="Open SettingModalCenter"
          onLeftButton={() => {
            setSettingModal(!settingModal);
          }}
          onRightButton={() => {
            setSettingModalCenter(!settingModalCenter);
          }}
        />
      </div>

      <BottomModal
        testId={"testId"}
        modalIsOpen={settingModal}
        modalChildren={
          <SettingSummary
            icon={{ name: "Tick-1" }}
            iconColor={{ top: "#94EC9B", bottom: "#5BB362" }}
            detailTitle="Successfully Activated"
            detail="Your account has been activated successfully."
          />
        }
      />
      <Title>SettingModalCenter</Title>

      <SettingModalCenter
        testId={"testId"}
        modalIsOpen={settingModalCenter}
        modalChildren={
          <StatusFormContainer
            statusIcon={{
              icon: "Tick-1",
              iconColor: { top: "#94EC9B", bottom: "#5BB362" },
              outerIconColor: "#E5FCE6"
            }}
            children={
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "2rem"
                }}
              >
                <p style={{ textAlign: "center" }}>
                  The amount entered exceeds the transaction limit set in your
                  settings. Would you like to change your limit now?
                </p>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                    padding: "1rem 0"
                  }}
                >
                  <PrimaryButton
                    title="No, thanks"
                    onButtonClick={() => {
                      alert("Button Clicked");
                    }}
                  />
                  <PrimaryButton
                    onButtonClick={() => {
                      alert("Button Clicked");
                    }}
                    title="Change Limit"
                    titleColor="#000000"
                    buttonColor={{ top: "#F6F6F3", bottom: "#EAE9E3" }}
                  />
                </div>
              </div>
            }
          />
        }
      />
      <Title>Navbar Transparent</Title>
      <NavbarTransparent
        icon={{
          onIconClick: () => {
            setSprint1(true);
          }
        }}
        rightButtons={[
          <TextButton
            buttonText="Sprint-1"
            onTextClick={() => {
              setSprint1(true);
            }}
            buttonStyles={{
              color: "#000000",
              fontWeight: 400,
              fontSize: 15
            }}
          />,
          <TextButton
            buttonText="Sprint-2"
            onTextClick={() => {
              setSprint2(true);
            }}
            buttonStyles={{
              color: "#000000",
              fontWeight: 400,
              fontSize: 15
            }}
          />,
          <TextDropdown
            menuIsOpen
            defaultValue={"Persian"}
            handleChange={(selectedOption: any) => {
              setSelectedOption(selectedOption);
              console.log(`Option:`, selectedOption);
            }}
            selectedOption={selectedItem}
            placeHolder={"English"}
            options={[
              { label: "English", value: "english" },
              { label: "Malay", value: "malay" },
              { label: "Persian", value: "persian" },
              { label: "中文", value: "中文" }
            ]}
          />
        ]}
      />
      <Title>List</Title>
      <List
        header={{
          icon: {
            name: "LOGO",
            color: "#ff2626",
            iconText: "Review & Confirm"
          }
        }}
        list={[
          {
            leftLabel: "To",
            rightLabel: "Saving Account A",
            details: ["8881019596535 | AmBank"]
          },
          {
            leftLabel: "Amount",
            rightLabel: "RM 500.00",
            approved: true,
            details: ["Fees & Charges: RM 0.00"]
          },
          {
            leftLabel: "Date",
            rightLabel: "Transfer Now",
            details: ["Today, 5 January 2019"]
          },
          {
            leftLabel: "Reference",
            rightLabel: "House Rental"
          },
          {
            leftLabel: "From",
            rightLabel: "Savings Account",
            details: ["2998202013", "Available Balance: RM 10,301.50"]
          }
        ]}
      />
      <Title>BannerHero</Title>
      <BannerHero
        buttonClick={() => {
          alert("Clicked");
        }}
        buttonText="Learn More"
        content="Total of RM2.5 Million to be won. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab."
        label="Hero Promotion"
        leftImage="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1390&q=80"
        showButton={true}
        testId="testId"
        title="Grand Prize RM 1 Million Cash"
      />
      <Title>BoxContent</Title>
      <Row>
        <Col
          xs={0}
          md={7}
          style={{ backgroundColor: "#FAFAFA", padding: "0" }}
        />
        <Col xs={12} md={5} style={{ padding: "0" }}>
          <BoxContent
            content={[
              {
                title: "Phone Scam",
                content:
                  "Never respond to phone calls asking for your sensitive banking information.",
                icon: "Call"
              },
              {
                title: "SMS Scam",
                content:
                  "Never respond to SMS-es informing you have won a contest/reward that you did not participate in",
                icon: "Inbox"
              },
              {
                title: "Malware",
                content: "Never “jailbreak” or “root” your smart phones.",
                icon: "Hold"
              },
              {
                title: "Email Scam",
                content:
                  "Never click website links from unknown and suspicious senders",
                icon: "Target"
              }
            ]}
            tag="Security Alerts"
            testId="testId"
            title="Always be vigilant against scam threats."
            link={{ label: "Learn more", url: "#" }}
          />
        </Col>
      </Row>
      <Title>Transaction Limit List</Title>
      <Row
        style={{
          background: "#FFFFFF",
          boxShadow: "0px 2px 7px rgba(0, 0, 0, 0.123279)",
          borderRadius: "20px 20px 0px 0px",
          margin: "24px 20% auto"
        }}
      >
        <Col
          sm={3}
          style={{
            borderRight: "1px solid #DEDEDE",
            padding: "0"
          }}
        ></Col>
        <Col sm={9} style={{ padding: "0" }}>
          <TransactionLimitList
            list={[
              {
                label: "Transfers",
                onClick: () => alert("click")
              },
              {
                label: "Payments",
                onClick: () => alert("click")
              },
              {
                label: "Investments",
                onClick: () => alert("click")
              },
              {
                label: "Online Shopping",
                onClick: () => alert("click")
              },
              {
                label: "FPX Specific Merchant",
                onClick: () => alert("click")
              }
            ]}
            testId="testId"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Sprint2;
