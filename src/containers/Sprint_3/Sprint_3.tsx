import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Paragraphs from "../../components/assets/typography";
import styled from "styled-components";
import Navbar from "src/components/headers/navbar/Navbar";
import NavbarTransparent from "src/components/headers/navbarTransparent/NavbarTransparent";
import TextDropdown from "src/components/inputs/texDropdown/TextDropdown";
import TextButton from "src/components/buttons/textButton/TextButton";
import SettingModalCenter from "src/components/modals/settingModalCenter/SettingModalCenter";
import FullButton from "src/components/buttons/fullButton/FullButton";
import BottomModal from "src/components/modals/bottomModal/BottomModal";
import SettingSummary from "src/components/infographic/settingSummary/SettingSummary";
import StatusFormContainer from "src/components/wrappers/statusFormContainer/StatusFormContainer";
import PrimaryButton from "src/components/buttons/primaryButton/PrimaryButton";
import TextWithDetails from "src/components/infographic/textWithDetails/TextWithDetails";
import ArrayCheckBox from "src/components/arrayCheckBox/ArrayCheckBox";
import LabelToolTip from "src/components/labelToolTip/LabelToolTip";
import PayBillList from "src/components/PayBillList/PayBillList";
// import { colors } from "react-select/src/theme";

const {
  B_13_ORANGE_463,
  B_15_BLACK,
  R_12_WHITE,
  B_14_WHITE,
  B_14_BLACK
} = Paragraphs;
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
  const [settingModalCenter, setSettingModalCenter] = useState(false);
  const [settingModal, setSettingModal] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <LabelToolTip
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
            ),

            spaceBetween: "4rem"
          }}
          label={<B_14_BLACK> Portfolio Comparison</B_14_BLACK>}
        />
        <br />
        <LabelToolTip
          tooltipData={{
            testId: "101",
            tipChildren: (
              <div>
                <B_13_ORANGE_463>Try one</B_13_ORANGE_463>
                <R_12_WHITE>test</R_12_WHITE>
              </div>
            ),
            spaceBetween: "10%",
            color: "red"
          }}
          label={
            <B_15_BLACK>
              {"Select your preffered account to send and received money"}
            </B_15_BLACK>
          }
        />
      </div>
      <Title>PayBillList and Line</Title>
      <div
        style={{
          margin: "0 auto",
          padding: 4,
          width: "50%"
        }}
      >
        <br />
        <PayBillList
          title="Review & Confirm"
          content={[
            {
              label: "To",
              title: "Kojadi",
              titleIcon: "accent-tick",
              subtitle: ["Sub1", "Sub2"],
              amount: "RM 500"
            },
            {
              label: "Date",
              title: "Pay Now",
              subtitle: ["Sub1", "Sub2"]
            },
            {
              label: "From",
              title: "Savings",
              subtitle: ["Sub1", "Sub2"],
              status: {
                content: "UNSUCCESSFUL",
                color: "red"
              }
            }
          ]}
        />
        <br />
      </div>
    </div>
  );
};

export default Sprint3;
