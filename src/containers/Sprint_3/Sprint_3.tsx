import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Paragraphs from "../../components/assets/typography";
import styled from "styled-components";
import Navbar from "src/components/headers/navbar/Navbar";
import NavbarTransparent from "src/components/headers/navbarTransparent/NavbarTransparent";
import TextDropdown from "src/components/inputs/texDropdown/TextDropdown";
import TextButton from "src/components/buttons/textButton/TextButton";
import TextWithDetails from "src/components/infographic/textWithDetails/TextWithDetails";
import ArrayCheckBox from "src/components/arrayCheckBox/ArrayCheckBox";
import LabelToolTip from "src/components/labelToolTip/LabelToolTip";
import LabeledIcon from "src/components/assets/icons/labeledIcon/LabeledIcon";
import images from "src/assets";
import List from "src/components/lists/list/List";
import FormContainer from "src/components/wrappers/formContainer/FormContainer";
import SettingModalCenter from "src/components/modals/settingModalCenter/SettingModalCenter";
import StatusFormContainer from "src/components/wrappers/statusFormContainer/StatusFormContainer";
import PrimaryButton from "src/components/buttons/primaryButton/PrimaryButton";

const { B_13_ORANGE_463, R_12_WHITE, B_14_WHITE } = Paragraphs;
const Title = styled(B_13_ORANGE_463)`
  text-align: center;
  padding: 5px 0;
  margin: 5px 0;
  border-top: 1px solid #ffa463;
  border-bottom: 1px solid #ffa463;
`;
interface Props {}

const Sprint3: React.FC<Props> = () => {
  const [selectedItem, setSelectedOption] = useState("Persian");
  const [sprint1, setSprint1] = useState(false);
  const [sprint2, setSprint2] = useState(false);
  const [sprint3, setSprint3] = useState(false);
  const [homeRedirect, setHomeRedirect] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [settingsModalOpen, setSettingsModalOpen] = useState(false);
  if (sprint1 === true) {
    return <Redirect to="/sprint-1" />;
  }

  if (sprint2 === true) {
    return <Redirect to="/sprint-2" />;
  }

  if (sprint3 === true) {
    return <Redirect to="/sprint-3" />;
  }

  if (homeRedirect === true) {
    return <Redirect to="/" />;
  }

  const handleCheckBox = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };

  const checkBoxData = [
    {
      title: "Indah",
      content: ["Biller Code: 68502", "0"],
      isCheckboxChecked: isCheckboxChecked,
      name: "checkBox",
      onCheckClick: handleCheckBox
    },
    {
      title: "Kojadi",
      content: ["Biller Code: 68502", "1"],
      isCheckboxChecked: isCheckboxChecked,
      name: "checkBox",
      onCheckClick: handleCheckBox
    },
    {
      title: "Indah",
      content: ["Biller Code: 68502", "2"],
      isCheckboxChecked: isCheckboxChecked,
      name: "checkBox",
      onCheckClick: handleCheckBox
    },
    {
      title: "Indah",
      content: ["Biller Code: 68502", "3"],
      isCheckboxChecked: isCheckboxChecked,
      name: "checkBox",
      onCheckClick: handleCheckBox
    },
    {
      title: "Astro",
      content: ["Biller Code: 68502", "4"],
      isCheckboxChecked: isCheckboxChecked,
      name: "checkBox",
      onCheckClick: handleCheckBox
    },
    {
      title: "Syabas",
      content: ["Biller Code: 68502", "5"],
      isCheckboxChecked: isCheckboxChecked,
      name: "checkBox",
      onCheckClick: handleCheckBox
    },
    {
      title: "Petronas",
      content: ["Biller Code: 68502", "6"],
      isCheckboxChecked: isCheckboxChecked,
      name: "checkBox",
      onCheckClick: handleCheckBox
    },
    {
      title: "Time",
      content: ["Biller Code: 68502", "7"],
      isCheckboxChecked: isCheckboxChecked,
      name: "checkBox",
      onCheckClick: handleCheckBox
    },
    {
      title: "UNIFI",
      content: ["Biller Code: 68502", "8"],
      isCheckboxChecked: isCheckboxChecked,
      name: "checkBox",
      onCheckClick: handleCheckBox
    },
    {
      title: "TNB",
      content: ["Biller Code: 68502", "9"],
      isCheckboxChecked: isCheckboxChecked,
      name: "checkBox",
      onCheckClick: handleCheckBox
    },
    {
      title: "Petronas",
      content: ["Biller Code: 68502", "10"],
      isCheckboxChecked: isCheckboxChecked,
      name: "checkBox",
      onCheckClick: handleCheckBox
    },
    {
      title: "Time",
      content: ["Biller Code: 68502", "11"],
      isCheckboxChecked: isCheckboxChecked,
      name: "checkBox",
      onCheckClick: handleCheckBox
    },
    {
      title: "UNIFI",
      content: ["Biller Code: 68502", "12"],
      isCheckboxChecked: isCheckboxChecked,
      name: "checkBox",
      onCheckClick: handleCheckBox
    },
    {
      title: "TNB",
      content: ["Biller Code: 68502", "13"],
      isCheckboxChecked: isCheckboxChecked,
      name: "checkBox",
      onCheckClick: handleCheckBox
    }
  ];

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
          <TextButton
            buttonText="Sprint-3"
            onTextClick={() => {
              setSprint3(true);
            }}
            buttonStyles={{
              color: "#000000",
              fontWeight: 400,
              fontSize: 15
            }}
          />,
          <TextDropdown
            // menuIsOpen
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
      <Title>Text With Details</Title>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <TextWithDetails
          title="Insurance"
          titleStyle={{ fontSize: "1.5rem" }}
          content={["Bill Account No.: 51T0409A0690279989"]}
          contentStyle={{ fontSize: "0.9375rem" }}
        />

        <TextWithDetails
          title="Indah"
          content={[
            "Bill Account No.: 51T0409A0690279989",
            "Ref-1: 65432145432"
          ]}
        />
      </div>
      <Title>ArrayCheckbox</Title>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <ArrayCheckBox
          data={checkBoxData}
          title={`Jompay (${checkBoxData.length})`}
          testId="testId"
        />
      </div>
      <Title>Label Tool Tip</Title>
      <div style={{ padding: "0 25%" }}>
        <LabelToolTip
          label="Portfolio Comparison"
          tooltipData={{
            testId: "101",
            tipChildren: (
              <div>
                <B_14_WHITE>Tips</B_14_WHITE>
                <R_12_WHITE>
                  Accumulation of fund’s market value based on current NAV.
                  Current value is an indicative value and is to be considered
                  as reference only.
                </R_12_WHITE>
              </div>
            )
          }}
        />
        <br />
        <LabelToolTip
          spaceBetween={true}
          label="Select your proffered account to send and received money"
          labelStyle={{ color: "#444444", fontWeight: 400 }}
          tooltipData={{
            testId: "101",
            tipChildren: (
              <div>
                <B_13_ORANGE_463>Try one</B_13_ORANGE_463>
                <R_12_WHITE>test</R_12_WHITE>
              </div>
            )
          }}
        />
      </div>
      <Title>
        PayBillList using (FormContainer and List component)and Line
      </Title>
      <div
        style={{
          margin: "0 auto",
          padding: 4,
          width: "50%"
        }}
      >
        <FormContainer
          children={
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
                  approved: true,
                  details: ["8881019596535 | AmBank"],
                  amount: "RM 500"
                },

                {
                  leftLabel: "Date",
                  rightLabel: "Transfer Now",
                  details: ["Today, 5 January 2019"]
                },

                {
                  leftLabel: "From",
                  rightLabel: "Savings Account",
                  details: ["2998202013", "Available Balance: RM 10,301.50"],
                  status: {
                    content: "UNSUCCESSFUL",
                    color: "red"
                  }
                }
              ]}
            />
          }
        />
      </div>
      <Title>PaymentBox (Using FormContainer component)</Title>

      <div
        style={{
          margin: "0 auto",
          padding: 4,
          width: "50%"
        }}
      >
        <br />
        <FormContainer
          label="Biller 1 of 3"
          rightLabel={{ label: "Remove", onClick: () => alert("asd") }}
          children={
            <div style={{ padding: "2rem" }}>
              <TextWithDetails
                title="Insurance"
                content={["Ref No.: 123456"]}
              />
            </div>
          }
        />

        <br />
      </div>
      <Title>TextWithIcon (using LabeledIcon component)</Title>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: 20
        }}
      >
        <LabeledIcon
          leftLabel="Powered by"
          leftLabelStyle={{ fontWeight: 700 }}
          imageIcon={{ src: images.common.JomPay1, size: 40 }}
        />
      </div>
      <Title>SettingModalCenter</Title>
      <PrimaryButton
        title="Open Settings Modal"
        onButtonClick={() => setSettingsModalOpen(true)}
      />
      <SettingModalCenter
        onRequestClose={() => setSettingsModalOpen(false)}
        testId={"testId"}
        modalIsOpen={settingsModalOpen}
        modalChildren={
          <StatusFormContainer
            statusIcon={{
              iconColor: { top: "#DCEAEA", bottom: "#7FA2A2" },
              image: {
                src: images.common.amyIcon,
                alt: "logo"
              },
              outerIconColor: "#EAF4F4"
            }}
            children={
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "0rem 2rem"
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "1rem"
                  }}
                >
                  <TextWithDetails
                    title="Forgotten your username and password?"
                    content={[
                      "If you have forgotten your username and/or password, you can change them in AmOnline"
                    ]}
                    contentStyle={{ marginBottom: "1rem" }}
                  />
                  <TextWithDetails
                    title="Need more assistance?"
                    direction="row"
                    content={["We're here to help. Get in touch with us"]}
                    contentStyle={{ marginBottom: "1rem" }}
                  />
                  <div style={{ marginBottom: "1rem" }}>
                    <LabeledIcon
                      rightLabel="+603 2178 8888"
                      rightLabelStyle={{
                        fontWeight: 700,
                        fontSize: "0.93rem"
                      }}
                      icon={{
                        name: "Call",
                        color: "#FF2626",
                        size: 28
                      }}
                    />
                  </div>
                  <LabeledIcon
                    rightLabel="customercare@ambankgroup.com"
                    rightLabelStyle={{ fontWeight: 700, fontSize: "0.93rem" }}
                    icon={{
                      name: "Inbox",
                      color: "#FF2626",
                      size: 28
                    }}
                  />
                </div>
                <div style={{ marginTop: "1rem", marginBottom: "3rem" }}>
                  <PrimaryButton
                    title="Close"
                    onButtonClick={() => {
                      setSettingsModalOpen(false);
                    }}
                  />
                </div>
              </div>
            }
          />
        }
      />
    </div>
  );
};

export default Sprint3;
