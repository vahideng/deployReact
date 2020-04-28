import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Paragraphs from "../../components/assets/typography";
import styled from "styled-components";
import images from "src/assets";
import Navbar from "src/components/headers/navbar/Navbar";
import NavbarTransparent from "src/components/headers/navbarTransparent/NavbarTransparent";
import TextDropdown from "src/components/inputs/texDropdown/TextDropdown";
import TextButton from "src/components/buttons/textButton/TextButton";
import AmResetPin from "src/components/amResetPin/amResetPin";
import ConfirmNotes from "src/components/confirmNotes/ConfirmNotes";
import Icon from "src/components/assets/icons/icon";
import InputField from "src/components/inputs/inputFields/InputFields";
import ViewRate from "src/components/viewRate/ViewRate";
import ViewRateContainer from "src/components/viewRateContainer/ViewRateContainer";
import PrimaryButton from "src/components/buttons/primaryButton/PrimaryButton";
import TacModal from "src/components/modals/tacModal/TacModal";
import TransactionIconList from "src/components/lists/TransactionIconList/TransactionIconList";
import FormContainer from "src/components/wrappers/formContainer/FormContainer";
import List from "src/components/lists/list/List";
import SelectionTile from "src/components/selections/selectionTile/SelectionTile";
import Box_V2 from "src/components/wrappers/box_V2/Box_V2";
import InputAccordian from "src/components/InputAccordian/InputAccordian";
import AmModal from "src/components/modals/Modal";
import Prompt from "src/components/infographic/prompt/Prompt";
import StickyFooter from "src/components/stickies/stickyFooter/StickyFooter";
import DynamicText from "src/components/assets/typography/DynamicText/DynamicText";
import CenterText from "src/components/assets/typography/CenterText/CenterText";
import ErrorPage from "src/components/ErrorPage/ErrorPage";
import TransactionWithNote from "src/components/TransactionWithNote/TransactionWithNote";
import DetailList from "src/components/lists/DetailList/DetailList";
import IconButtons from "src/components/buttons/iconButtons/IconButtons";
import ListWithSelectionTile from "src/components/ListWithSelectionTile/ListWithSelectionTile";
import RedirectToMobile from "src/components/RedirectToMobile/RedirectToMobile";
import BannerCarousel from "src/components/banners/bannerCarousel/BannerCarousel";

import Logout from "src/components/Logout/Logout";
import StickyTimer from "src/components/modals/stickyTimer/StickyTimer";
const { B_13_ORANGE_463, R_13_GREY444, B_24_BLACK } = Paragraphs;

const Title = styled(B_13_ORANGE_463)`
  text-align: center;
  padding: 5px 0;
  margin: 5px 0;
  border-top: 1px solid #ffa463;
  border-bottom: 1px solid #ffa463;
`;
const CenteredDiv = styled.div`
  display: flex;
  flexdirection: row;
  justify-content: center;
  padding: 2rem 0;
`;
interface Props {}

const Sprint4: React.FC<Props> = () => {
  const [selectedItem, setSelectedOption] = useState("Persian");
  const [sprint1, setSprint1] = useState(false);
  const [sprint2, setSprint2] = useState(false);
  const [sprint3, setSprint3] = useState(false);
  const [sprint4, setSprint4] = useState(false);
  const [selectionTileNum, setSelectionTileNum] = useState(2);
  const [homeRedirect, setHomeRedirect] = useState(false);
  const [linkListClear, setLinkListClear] = useState(false);
  const [linkListInputValue, setLinkListInputValue] = useState("");
  const [selectionTile, setSelectionTile] = useState(2);
  const [stickyFooter, setStickyFooter] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [tacInactive, setTacInactive] = useState(true);
  const [TacModalOpen, setTacModalOpen] = useState(false);
  const [actionBtnStatus, setActionBtnStatus] = useState(true);
  const [SelectionTileNum2, setSelectionTileNum2] = useState(3);
  const [stickyTimer, setStickyTimer] = useState(false);
  const tacClear = false;
  const tacClearActiveStatus = false;

  // const [linkListBtnColor, setLinkListBtnColor] = useState({
  //   top: '#BDBDBD',
  //   bottom: '#BDBDBD',
  // });
  const [rateType, setRateType] = useState("test_value3");
  const [isViewRateModalOpen, setIsViewRateModalOpen] = useState(false);
  if (sprint1 === true) {
    return <Redirect to="/sprint-1" />;
  }

  if (sprint2 === true) {
    return <Redirect to="/sprint-2" />;
  }

  if (sprint3 === true) {
    return <Redirect to="/sprint-3" />;
  }

  if (sprint4 === true) {
    return <Redirect to="/sprint-4" />;
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
          },
        }}
        profile={{
          greeting: "Good Morning",
          name: "Adam Constantine",
          alt: "AVATAR",
          src:
            "https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=935&q=80",
        }}
        rightButtons={[
          {
            iconName: "Time",
            onButtonClick: () => alert("button-1-Clicked"),
          },
          {
            iconName: "Settings",
            onButtonClick: () => alert("button-2-Clicked"),
          },
          {
            iconName: "Share",
            onButtonClick: () => alert("button-3-Clicked"),
          },
        ]}
      />
      <PrimaryButton
        title="Open Responsive StickyTimer"
        onButtonClick={() => {
          setStickyTimer(!stickyTimer);
        }}
      />
      <StickyTimer
        responsive={true}
        testId={"testId"}
        closeTimeoutMS={1000}
        contentLabel="example"
        textBefore="Transaction will expire in"
        onCLoseButtonCLick={() => {
          setStickyTimer(!stickyTimer);
        }}
        modalIsOpen={stickyTimer}
        expirationTime={20}
        expirationText="Seconds"
        text={
          "You will receive an AmSecure notification on your primary registered phone to approve or reject this transaction. Please ensure that you have downloaded/updated the latest version of AmOnline App and have a working internet connection on your phone."
        }
        // children={
        //   <PrimaryButton
        //     title="Open StickyTimer"
        //     onButtonClick={() => {
        //       alert("onButtonClick");
        //     }}
      />
      <Title>Review & Confirm - Responsive</Title>
      <div
        style={{
          margin: "0 auto",
        }}
      >
        <FormContainer
          responsive
          children={
            <List
              responsive
              header={{
                icon: {
                  name: "LOGO",
                  color: "#ff2626",
                  iconText: "Review & Confirm",
                },
              }}
              list={[
                {
                  leftLabel: "To",
                  rightLabel: "Saving Account A",
                  approved: true,
                  details: ["8881019596535 | AmBank"],
                  amount: {
                    content: "Dynamic",
                    styleContent: {},
                    value: "600RM",
                    styleValue: {},
                  },
                },

                {
                  leftLabel: "Date",
                  rightLabel: "Transfer Now",
                  details: ["Today, 5 January 2019"],
                },

                {
                  leftLabel: "From",
                  rightLabel: "Savings Account",
                  details: ["2998202013", "Available Balance: RM 10,301.50"],
                  status: {
                    content: "UNSUCCESSFUL",
                    color: "red",
                  },
                },
              ]}
            />
          }
        />
      </div>
      <Title>List - Responsive</Title>
      <CenteredDiv>
        <List
          responsive
          width="30rem"
          itemContainerStyle={{ padding: 0 }}
          list={[
            {
              leftLabel: "To",
              rightLabel: "Saving Account A",
              details: ["8881019596535 | AmBank"],
            },
            {
              leftLabel: "Amount",
              rightLabel: "RM 500.00",
              details: ["Fees & Charges: RM 0.00"],
            },
            {
              leftLabel: "Date",
              rightLabel: "Transfer Now",
              details: ["Today, 5 January 2019"],
            },
            {
              leftLabel: "Reference",
              rightLabel: "House Rental",
            },
            {
              leftLabel: "From",
              rightLabel: "Savings Account",
              details: ["2998202013", "Available Balance: RM 10,301.50"],
            },
          ]}
        />
      </CenteredDiv>
      <Title>DetailList</Title>
      <div style={{ width: "38.5rem", margin: "0 auto" }}>
        <DetailList
          testId={"testId"}
          titleList={[
            "TitleList Amount is an indicative indicative and to be considered as reference only.",
            "Protected by PIDM up to RM 250,000 for each depositor.",
          ]}
          // title="Title Amount is an indicative value and to be considered as reference only.
          // Protected by PIDM up to RM 250,000 for each depositor."
          list={[
            {
              leftText: "Account Type",
              rightText: "Conventional Fixed Deposit",
            },
            {
              leftText: "Holder Name",
              rightText: "Adam Constantine",
            },
            {
              leftText: "Tenure",
              rightText: "24 Months",
            },
            {
              leftText: "Interest Rate (p.a.)",
              rightText: "4.55%",
            },
            {
              leftText: "Placement Date",
              rightText: "20 Feb 2020",
            },
            {
              leftText: "Maturity Date",
              rightText: "20 Feb 2023",
            },
            {
              leftText: "Interest Payment Instruction",
              rightText: "Auto Renewal",
            },
            {
              leftText: "Currency",
              rightText: "AUD",
            },
            {
              leftText: "Exchange Rate",
              rightText: "0.3545",
            },
            {
              leftText: "Effective Date",
              rightText: "1 Dec 2019",
            },
          ]}
        />
      </div>
      <Title>SelectionTile (Update) & Responsive</Title>
      <CenteredDiv>
        <SelectionTile
          testId={"testId"}
          onTileClick={(item, index) => {
            setSelectionTile(index);
            console.log(item);
            // alert(`${item} with indexOf ${index} clicked`);
          }}
          selected={selectionTile}
          list={[
            {
              iconLabel: "AmBank",
              accountTitle: "accountTitle",
              disable: true,
            },
            {
              iconLabel: "Alliance Bank",
              icon: {
                name: "Announcement",
                size: 32,
                color: "#444444",
              },
            },
            {
              iconLabel: "Other Bank",
              image: images.common.fpxIcon,
              imageStyle: { height: 32, width: 66, marginLeft: 8 },
            },
          ]}
        />
      </CenteredDiv>
      <Title>SelectionTile Responsive</Title>
      <CenteredDiv>
        <SelectionTile
          responsive
          testId={"testId"}
          onTileClick={(item, index) => {
            setSelectionTile(index);
            console.log(item);
            // alert(`${item} with indexOf ${index} clicked`);
          }}
          selected={selectionTile}
          list={[
            {
              iconLabel: "AmBank",
              accountTitle: "accountTitle",
            },
            {
              iconLabel: "Alliance Bank",
              icon: {
                name: "Announcement",
                size: 32,
                color: "#444444",
              },
            },
            {
              iconLabel: "Other Bank",
              image: images.common.fpxIcon,
              imageStyle: { height: 32, width: 66, marginLeft: 8 },
            },
          ]}
        />
      </CenteredDiv>
      <Title>Box_V2 (Update - Responsive)</Title>
      <Box_V2
        responsive={true}
        split={true}
        leftTitle={"Cancel"}
        onLeftButton={() => alert("Cancel")}
        rightTitle={"Login"}
        onRightButton={() => alert("Login")}
        boxChildren={
          <div style={{ padding: "3rem 1.5rem" }}>
            <InputField
              responsive={true}
              notValid={true}
              errorMessage={{
                testId: "testId",
                errorText: "The TAC is incorrect",
                subText: "Please try again.",
              }}
              type="text"
              clearClickHandler={() => alert("clear clicked")}
              clearIcon={true}
              label="Username"
              icon={{ name: "Account-2" }}
              value={""}
              handleChange={(event) => {
                console.log(event.target.value);
              }}
            />
          </div>
        }
      />
      <Title>InputField</Title>
      <div style={{ paddingLeft: "35vw" }}>
        <InputField
          icon={{ name: "RM", color: "#000" }}
          tipChildren={<p>tipChildren</p>}
          label="bottomLabel"
          notValid={false}
          errorMessage={{
            testId: "testId",
            errorText: "The Input Field is wrong",
            subText: "Please try again.",
          }}
          type="text"
          clearClickHandler={() => {}}
          value={""}
          handleChange={(e) => {
            alert(e);
          }}
          bottomLabel="Maximum Daily Limit RM 9,999,999.99"
          // bottomLabelStyle={{ color: "red" }}
        />
      </div>
      <Title>Sticky Footer</Title>
      <div style={{ paddingLeft: "35vw" }}>
        <PrimaryButton
          responsive={true}
          title={"Open Sticky Footer"}
          onButtonClick={() => {
            setStickyFooter(!stickyFooter);
          }}
        />
      </div>
      <StickyFooter
        isOpen={stickyFooter}
        label="Hide Card"
        buttonTitle="Yes, Disable"
        onButtonClick={() => {
          setStickyFooter(!stickyFooter);
        }}
        iconText="Disable online purchases for AmBank Debit Card?"
        iconSubText="Number of transactions edited:"
        iconSubTextNum={8}
        onCloseClick={() => alert("close")}
      />
      <Title>DynamicText</Title>
      <div style={{ paddingLeft: "35vw" }}>
        <DynamicText
          text="You will be redirected to FPX status page in"
          counter={9}
          inlineText="seconds."
        />
      </div>
      <Title>CenterText</Title>
      <div style={{ height: "35vw" }}>
        <CenterText
          mainStyle={{ background: "#eee" }}
          title="You have been logged out"
          detailText="Thank you for banking with AmOnline."
        />
      </div>
      <Title>View Rate Container</Title>
      <PrimaryButton
        onButtonClick={() => {
          setIsViewRateModalOpen(true);
        }}
        title="View Rate"
      />
      <AmModal
        testId="sprint_4_modal_test"
        modalChildren={
          <div style={{ backgroundColor: "#fff", position: "relative" }}>
            <ViewRateContainer
              testId="sprint_4_view_rate_container_test"
              title="View Rate Container Test"
              rateTypeValue={rateType}
              dropdownBackground="white"
              rateTypeList={[
                {
                  value: "test_value1",
                  label: "Conventional Fixed Deposit 1",
                },
                {
                  value: "test_value2testvalue",
                  label: "Conventional Fixed Deposit 2222",
                },
                {
                  value: "test_value3",
                  label: "Conventional Fixed Deposit 3333",
                },
              ]}
              onRateTypeChange={(value: any) => {
                setRateType(value);
              }}
              date="22 Mar 2040"
              ads={[
                [
                  {
                    children: (
                      <BannerCarousel
                        title="Title"
                        subtitle="Subtitle"
                        backgroundImage="https://picsum.photos/320/100"
                        onClick={() => {
                          console.log("click on banner");
                        }}
                      />
                    ),
                  },
                  {
                    children: (
                      <BannerCarousel
                        title="Title"
                        subtitle="Subtitle"
                        backgroundImage="https://picsum.photos/320/100"
                        onClick={() => {
                          console.log("click on banner");
                        }}
                      />
                    ),
                  },
                  {
                    children: (
                      <BannerCarousel
                        title="Title"
                        subtitle="Subtitle"
                        backgroundImage="https://picsum.photos/320/100"
                        onClick={() => {
                          console.log("click on banner");
                        }}
                      />
                    ),
                  },
                  {
                    children: (
                      <BannerCarousel
                        title="Title"
                        subtitle="Subtitle"
                        backgroundImage="https://picsum.photos/320/100"
                        onClick={() => {
                          console.log("click on banner");
                        }}
                      />
                    ),
                  },
                ],
              ]}
              onClose={() => setIsViewRateModalOpen(false)}
              buttonTitle="Place New Deposit"
              onButtonClick={() => {
                window.alert("lead you to do something.");
              }}
              viewRateComponent={
                <ViewRate
                  testId="sprint_4_view_rate"
                  title={{
                    content: "** Rates are subject to change",
                  }}
                  subtitle={{
                    content:
                      "Note: Customer with Reward Code may be entitled additional rate in AmOnline.",
                  }}
                  data={{
                    headers: [
                      {
                        style: {},
                        values: ["Tenure"],
                      },
                      {
                        style: { textAlign: "center", fontWeight: "bold" },
                        values: ["Board Rate", "(% p.a.)"],
                      },
                      {
                        style: { textAlign: "center", fontWeight: "bold" },
                        values: ["AmOnline Rate", "(% p.a.)"],
                      },
                    ],
                    values: [
                      ["1 Month", "2.95", "2.95"],
                      ["2 Month", "2.95", "2.95"],
                      ["3 Month", "2.95", "2.95"],
                      ["4 Month", "3.95", "2.95"],
                      ["5 Month", "2.95", "2.95"],
                      ["6 Month", "2.95", "2.95"],
                      ["7 Month", "6.95", "2.95"],
                    ],
                  }}
                />
              }
              carouselProps={{
                type: "wide",
              }}
            />
          </div>
        }
        modalIsOpen={isViewRateModalOpen}
        onRequestClose={() => {
          setIsViewRateModalOpen(false);
        }}
      />
      <Title>View Rate</Title>
      <CenteredDiv
        style={{
          margin: "0 auto",
        }}
      >
        <ViewRate
          testId="sprint_4_view_rate"
          title={{
            content: "Change some text",
          }}
          subtitle={{
            content: "I am the subtitle",
          }}
          height="30rem"
          data={{
            headers: [
              {
                style: {},
                values: ["First heading"],
              },
              {
                style: { textAlign: "center", fontWeight: "bold" },
                values: ["Board Rate", "second line"],
              },
              {
                style: { textAlign: "center", fontWeight: "bold" },
                values: ["AmOnline Rate", "second line"],
              },
            ],
            values: [
              ["1999 Month", "2.95%", "2.95%"],
              ["2 Month", "2.95%", "2.95%"],
              ["3 Month", "2.95%", "2.95%"],
              ["4 Month", "3.95", "2.95%"],
              ["5 Month", "2.95%", "2.95%"],
              ["6 Month", "2.95%", "2.95%"],
              ["7 Month", "6.95", "2.95%"],
            ],
          }}
        />
      </CenteredDiv>
      <Title>Form Container Responsive</Title>
      <FormContainer
        label="Change Security Image"
        rightLabel={{
          onClick: () => {},
          style: {},
          label: "Remove",
        }}
        children={
          <>
            <CenteredDiv>dsaokdwkao</CenteredDiv>
          </>
        }
      />
      <Title>Confirm Notes</Title>
      <CenteredDiv
        style={{
          margin: 0,
          padding: 0,
        }}
      >
        <ConfirmNotes
          testId="sprint_4_confirm_notes"
          title={{
            content: "Important Notes Notes",
            style: { fontSize: "3rem" },
          }}
          width="40rem"
          body={[
            {
              content:
                "This is not the final confirmation of your payment. Please check with your merchant for final status confirmation.",
              style: {},
            },
            {
              content:
                "Please click on the “Continue with Transaction” button below and do not close the browser until final receipt is displayed",
              style: {},
            },
            {
              content:
                "Please click on the “Continue with Transaction” button below and do not close the browser until final receipt is displayed",
              style: {},
            },
          ]}
        />
      </CenteredDiv>
      <Title>Navbar Transparent</Title>
      <NavbarTransparent
        icon={{
          onIconClick: () => {
            setSprint1(true);
          },
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
              fontSize: 15,
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
              fontSize: 15,
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
              fontSize: 15,
            }}
          />,
          <TextButton
            buttonText="Sprint-4"
            onTextClick={() => {
              setSprint4(true);
            }}
            buttonStyles={{
              color: "#000000",
              fontWeight: 400,
              fontSize: 15,
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
              { label: "中文", value: "中文" },
            ]}
          />,
        ]}
      />
      <Title>Reset Pin</Title>
      <CenteredDiv
        style={{ position: "relative", padding: "5rem 6rem", height: "25rem" }}
      >
        <AmResetPin
          testId="testId"
          keysArray={[5, 8, 1, 0, 4, 6, 2, 9, 3, 7]}
          onEnterClick={() => {
            alert("Enter click");
          }}
          onNumberSelected={(item: any) => {
            alert(item);
          }}
          EnterIcon={{ name: "system-close-grey", size: 15, color: "#000000" }}
          pointerTopVal={50}
          showKeyPad={true}
        />
      </CenteredDiv>
      <Title>Input Accordian</Title>
      <CenteredDiv
        style={{
          margin: "5rem",
          maxWidth: "699px",
        }}
      >
        <InputAccordian
          testId={"testId"}
          data={[
            {
              id: "id-1",
              title: "Transfers",
              defaultActiveContentIndex: "",
              content: [
                {
                  label: "Quick Access Limit", // change Lastname
                  leftIcon: (
                    <Icon icon="Announcement" size={22} color="#444444" />
                  ),
                  bold: true, // chang false
                  onListClick: () => {
                    // window.alert(`clicked on item ${item.label}`);
                    // window.alert(`ITEM NAME:::: ${item.label}`)
                  },
                  expandable: true, // change false
                  expandableContent: (
                    <>
                      <div style={{ padding: 0 }}>
                        <InputField
                          type="text"
                          value="9,99,99,999"
                          notValid={false}
                          handleChange={() => {}}
                          clearClickHandler={() => {}}
                          clearIcon={true}
                          label=""
                          icon={{ name: "Lock" }}
                          errorMessage={{
                            errorText: "something wrong",
                            subText: "detail error",
                          }}
                          {...{
                            type: "text", // change number
                            value: linkListInputValue,
                            notValid: false, // change true
                            handleChange: (e: any) => {
                              // window.alert(`text change: ${e.target.value}`)
                              setLinkListInputValue(e.target.value);
                              setLinkListClear(true);
                            },
                            clearClickHandler: () => {
                              // window.alert(`clear change`)
                              setLinkListInputValue("");
                              setLinkListClear(false);
                            },
                            clearIcon: linkListInputValue
                              ? true
                              : linkListClear, // change false
                            label: "", // change Test Input
                            icon: { name: "Lock" }, // change Amy
                            errorMessage: {
                              errorText: "something wrong",
                              subText: "detail error",
                            },
                          }}
                        />
                        <R_13_GREY444 style={{ marginTop: "12px" }}>
                          Maximum Daily Limit RM 99,99,999
                        </R_13_GREY444>
                      </div>
                    </>
                  ),
                  subtitle: [
                    "RM 250.00",

                    // 'Another line of subtitle'
                  ],
                  leftBorderColor: "red", // change green
                },
                {
                  label: "Own Ambank Account", // change Lastname
                  leftIcon: (
                    <Icon icon="Announcement" size={22} color="#444444" />
                  ),
                  bold: true, // chang false
                  onListClick: () => {
                    // window.alert(`clicked on item ${item.label}`);
                    // window.alert(`ITEM NAME:::: ${item.label}`)
                  },
                  expandable: true, // change false
                  expandableContent: (
                    <>
                      <div style={{ padding: 0 }}>
                        <InputField
                          type="text"
                          value="9,99,99,999"
                          notValid={false}
                          handleChange={() => {}}
                          clearClickHandler={() => {}}
                          clearIcon={true}
                          label=""
                          icon={{ name: "Lock" }}
                          errorMessage={{
                            errorText: "something wrong",
                            subText: "detail error",
                          }}
                          {...{
                            type: "text", // change number
                            value: linkListInputValue,
                            notValid: false, // change true
                            handleChange: (e: any) => {
                              // window.alert(`text change: ${e.target.value}`)
                              setLinkListInputValue(e.target.value);
                              setLinkListClear(true);
                            },
                            clearClickHandler: () => {
                              // window.alert(`clear change`)
                              setLinkListInputValue("");
                              setLinkListClear(false);
                            },
                            clearIcon: linkListInputValue
                              ? true
                              : linkListClear, // change false
                            label: "", // change Test Input
                            icon: { name: "Lock" }, // change Amy
                            errorMessage: {
                              errorText: "something wrong",
                              subText: "detail error",
                            },
                          }}
                        />
                        <R_13_GREY444 style={{ marginTop: "12px" }}>
                          Maximum Daily Limit RM 99,99,999
                        </R_13_GREY444>
                      </div>
                    </>
                  ),
                  subtitle: [
                    "Current Limit RM 5,00,000",

                    // 'Another line of subtitle'
                  ],
                  leftBorderColor: "red", // change green
                },
                {
                  label: "Other Bank Account", // change Lastname
                  leftIcon: (
                    <Icon icon="Announcement" size={22} color="#444444" />
                  ),
                  bold: true, // chang false
                  onListClick: () => {
                    // window.alert(`clicked on item ${item.label}`);
                    // window.alert(`ITEM NAME:::: ${item.label}`)
                  },
                  expandable: true, // change false
                  expandableContent: (
                    <>
                      <div style={{ padding: 0 }}>
                        <InputField
                          type="text"
                          value="9,99,99,999"
                          notValid={false}
                          handleChange={() => {}}
                          clearClickHandler={() => {}}
                          clearIcon={true}
                          label=""
                          icon={{ name: "Lock" }}
                          errorMessage={{
                            errorText: "something wrong",
                            subText: "detail error",
                          }}
                          {...{
                            type: "text", // change number
                            value: linkListInputValue,
                            notValid: false, // change true
                            handleChange: (e: any) => {
                              // window.alert(`text change: ${e.target.value}`)
                              setLinkListInputValue(e.target.value);
                              setLinkListClear(true);
                            },
                            clearClickHandler: () => {
                              // window.alert(`clear change`)
                              setLinkListInputValue("");
                              setLinkListClear(false);
                            },
                            clearIcon: linkListInputValue
                              ? true
                              : linkListClear, // change false
                            label: "", // change Test Input
                            icon: { name: "Lock" }, // change Amy
                            errorMessage: {
                              errorText: "something wrong",
                              subText: "detail error",
                            },
                          }}
                        />
                        <R_13_GREY444 style={{ marginTop: "12px" }}>
                          Maximum Daily Limit RM 99,99,999
                        </R_13_GREY444>
                      </div>
                    </>
                  ),
                  subtitle: [
                    "RM 50,000.00",

                    // 'Another line of subtitle'
                  ],
                  leftBorderColor: "red", // change green
                },
                {
                  label: "IBG/ DuitNow/ QR", // change Lastname
                  leftIcon: (
                    <Icon icon="Announcement" size={22} color="#444444" />
                  ),
                  bold: true, // chang false
                  onListClick: () => {
                    // window.alert(`clicked on item ${item.label}`);
                    // window.alert(`ITEM NAME:::: ${item.label}`)
                  },
                  expandable: true, // change false
                  expandableContent: (
                    <>
                      <div style={{ padding: 0 }}>
                        <InputField
                          type="text"
                          value="9,99,99,999"
                          notValid={false}
                          handleChange={() => {}}
                          clearClickHandler={() => {}}
                          clearIcon={true}
                          label=""
                          icon={{ name: "Lock" }}
                          errorMessage={{
                            errorText: "something wrong",
                            subText: "detail error",
                          }}
                          {...{
                            type: "text", // change number
                            value: linkListInputValue,
                            notValid: false, // change true
                            handleChange: (e: any) => {
                              // window.alert(`text change: ${e.target.value}`)
                              setLinkListInputValue(e.target.value);
                              setLinkListClear(true);
                            },
                            clearClickHandler: () => {
                              // window.alert(`clear change`)
                              setLinkListInputValue("");
                              setLinkListClear(false);
                            },
                            clearIcon: linkListInputValue
                              ? true
                              : linkListClear, // change false
                            label: "", // change Test Input
                            icon: { name: "Lock" }, // change Amy
                            errorMessage: {
                              errorText: "something wrong",
                              subText: "detail error",
                            },
                          }}
                        />
                        <R_13_GREY444 style={{ marginTop: "12px" }}>
                          Maximum Daily Limit RM 99,99,999
                        </R_13_GREY444>
                      </div>
                    </>
                  ),
                  subtitle: [
                    "RM 250.00",

                    // 'Another line of subtitle'
                  ],
                  leftBorderColor: "red", // change green
                },
                {
                  label: "Overseas Account(Remittance)", // change Lastname
                  leftIcon: (
                    <Icon icon="Announcement" size={22} color="#444444" />
                  ),
                  bold: true, // chang false
                  onListClick: () => {
                    // window.alert(`clicked on item ${item.label}`);
                    // window.alert(`ITEM NAME:::: ${item.label}`)
                  },
                  expandable: true, // change false
                  expandableContent: (
                    <>
                      <div style={{ padding: 0 }}>
                        <InputField
                          type="text"
                          value="9,99,99,999"
                          notValid={false}
                          handleChange={() => {}}
                          clearClickHandler={() => {}}
                          clearIcon={true}
                          label=""
                          icon={{ name: "Lock" }}
                          errorMessage={{
                            errorText: "something wrong",
                            subText: "detail error",
                          }}
                          {...{
                            type: "text", // change number
                            value: linkListInputValue,
                            notValid: false, // change true
                            handleChange: (e: any) => {
                              // window.alert(`text change: ${e.target.value}`)
                              setLinkListInputValue(e.target.value);
                              setLinkListClear(true);
                            },
                            clearClickHandler: () => {
                              // window.alert(`clear change`)
                              setLinkListInputValue("");
                              setLinkListClear(false);
                            },
                            clearIcon: linkListInputValue
                              ? true
                              : linkListClear, // change false
                            label: "", // change Test Input
                            icon: { name: "Lock" }, // change Amy
                            errorMessage: {
                              errorText: "something wrong",
                              subText: "detail error",
                            },
                          }}
                        />
                        <R_13_GREY444 style={{ marginTop: "12px" }}>
                          Maximum Daily Limit RM 99,99,999
                        </R_13_GREY444>
                      </div>
                    </>
                  ),
                  subtitle: [
                    "RM 250.00",

                    // 'Another line of subtitle'
                  ],
                  leftBorderColor: "red", // change green
                },
              ],
            },
            {
              id: "id-2",
              title: "Payments",
              content: [
                {
                  label: "Quick Access Limit", // change Lastname
                  leftIcon: (
                    <Icon icon="Announcement" size={22} color="#444444" />
                  ),
                  bold: true, // chang false
                  onListClick: () => {
                    // window.alert(`clicked on item ${item.label}`);
                    // window.alert(`ITEM NAME:::: ${item.label}`)
                  },
                  expandable: true, // change false
                  expandableContent: (
                    <>
                      <div style={{ padding: 0 }}>
                        <InputField
                          type="text"
                          value="9,99,99,999"
                          notValid={false}
                          handleChange={() => {}}
                          clearClickHandler={() => {}}
                          clearIcon={true}
                          label=""
                          icon={{ name: "Lock" }}
                          errorMessage={{
                            errorText: "something wrong",
                            subText: "detail error",
                          }}
                          {...{
                            type: "text", // change number
                            value: linkListInputValue,
                            notValid: false, // change true
                            handleChange: (e: any) => {
                              // window.alert(`text change: ${e.target.value}`)
                              setLinkListInputValue(e.target.value);
                              setLinkListClear(true);
                            },
                            clearClickHandler: () => {
                              // window.alert(`clear change`)
                              setLinkListInputValue("");
                              setLinkListClear(false);
                            },
                            clearIcon: linkListInputValue
                              ? true
                              : linkListClear, // change false
                            label: "", // change Test Input
                            icon: { name: "Lock" }, // change Amy
                            errorMessage: {
                              errorText: "something wrong",
                              subText: "detail error",
                            },
                          }}
                        />
                        <R_13_GREY444 style={{ marginTop: "12px" }}>
                          Maximum Daily Limit RM 99,99,999
                        </R_13_GREY444>
                      </div>
                    </>
                  ),
                  subtitle: [
                    "RM 250.00",

                    // 'Another line of subtitle'
                  ],
                  leftBorderColor: "red", // change green
                },
                {
                  label: "Own Ambank Account", // change Lastname
                  leftIcon: (
                    <Icon icon="Announcement" size={22} color="#444444" />
                  ),
                  bold: true, // chang false
                  onListClick: () => {
                    // window.alert(`clicked on item ${item.label}`);
                    // window.alert(`ITEM NAME:::: ${item.label}`)
                  },
                  expandable: true, // change false
                  expandableContent: (
                    <>
                      <div style={{ padding: 0 }}>
                        <InputField
                          type="text"
                          value="9,99,99,999"
                          notValid={false}
                          handleChange={() => {}}
                          clearClickHandler={() => {}}
                          clearIcon={true}
                          label=""
                          icon={{ name: "Lock" }}
                          errorMessage={{
                            errorText: "something wrong",
                            subText: "detail error",
                          }}
                          {...{
                            type: "text", // change number
                            value: linkListInputValue,
                            notValid: false, // change true
                            handleChange: (e: any) => {
                              // window.alert(`text change: ${e.target.value}`)
                              setLinkListInputValue(e.target.value);
                              setLinkListClear(true);
                            },
                            clearClickHandler: () => {
                              // window.alert(`clear change`)
                              setLinkListInputValue("");
                              setLinkListClear(false);
                            },
                            clearIcon: linkListInputValue
                              ? true
                              : linkListClear, // change false
                            label: "", // change Test Input
                            icon: { name: "Lock" }, // change Amy
                            errorMessage: {
                              errorText: "something wrong",
                              subText: "detail error",
                            },
                          }}
                        />
                        <R_13_GREY444 style={{ marginTop: "12px" }}>
                          Maximum Daily Limit RM 99,99,999
                        </R_13_GREY444>
                      </div>
                    </>
                  ),
                  subtitle: [
                    "Current Limit RM 5,00,000",

                    // 'Another line of subtitle'
                  ],
                  leftBorderColor: "red", // change green
                },
                {
                  label: "Other Bank Account", // change Lastname
                  leftIcon: (
                    <Icon icon="Announcement" size={22} color="#444444" />
                  ),
                  bold: true, // chang false
                  onListClick: () => {
                    // window.alert(`clicked on item ${item.label}`);
                    // window.alert(`ITEM NAME:::: ${item.label}`)
                  },
                  expandable: true, // change false
                  expandableContent: (
                    <>
                      <div style={{ padding: 0 }}>
                        <InputField
                          type="text"
                          value="9,99,99,999"
                          notValid={false}
                          handleChange={() => {}}
                          clearClickHandler={() => {}}
                          clearIcon={true}
                          label=""
                          icon={{ name: "Lock" }}
                          errorMessage={{
                            errorText: "something wrong",
                            subText: "detail error",
                          }}
                          {...{
                            type: "text", // change number
                            value: linkListInputValue,
                            notValid: false, // change true
                            handleChange: (e: any) => {
                              // window.alert(`text change: ${e.target.value}`)
                              setLinkListInputValue(e.target.value);
                              setLinkListClear(true);
                            },
                            clearClickHandler: () => {
                              // window.alert(`clear change`)
                              setLinkListInputValue("");
                              setLinkListClear(false);
                            },
                            clearIcon: linkListInputValue
                              ? true
                              : linkListClear, // change false
                            label: "", // change Test Input
                            icon: { name: "Lock" }, // change Amy
                            errorMessage: {
                              errorText: "something wrong",
                              subText: "detail error",
                            },
                          }}
                        />
                        <R_13_GREY444 style={{ marginTop: "12px" }}>
                          Maximum Daily Limit RM 99,99,999
                        </R_13_GREY444>
                      </div>
                    </>
                  ),
                  subtitle: [
                    "RM 50,000.00",

                    // 'Another line of subtitle'
                  ],
                  leftBorderColor: "red", // change green
                },
                {
                  label: "IBG/ DuitNow/ QR", // change Lastname
                  leftIcon: (
                    <Icon icon="Announcement" size={22} color="#444444" />
                  ),
                  bold: true, // chang false
                  onListClick: () => {
                    // window.alert(`clicked on item ${item.label}`);
                    // window.alert(`ITEM NAME:::: ${item.label}`)
                  },
                  expandable: true, // change false
                  expandableContent: (
                    <>
                      <div style={{ padding: 0 }}>
                        <InputField
                          type="text"
                          value="9,99,99,999"
                          notValid={false}
                          handleChange={() => {}}
                          clearClickHandler={() => {}}
                          clearIcon={true}
                          label=""
                          icon={{ name: "Lock" }}
                          errorMessage={{
                            errorText: "something wrong",
                            subText: "detail error",
                          }}
                          {...{
                            type: "text", // change number
                            value: linkListInputValue,
                            notValid: false, // change true
                            handleChange: (e: any) => {
                              // window.alert(`text change: ${e.target.value}`)
                              setLinkListInputValue(e.target.value);
                              setLinkListClear(true);
                            },
                            clearClickHandler: () => {
                              // window.alert(`clear change`)
                              setLinkListInputValue("");
                              setLinkListClear(false);
                            },
                            clearIcon: linkListInputValue
                              ? true
                              : linkListClear, // change false
                            label: "", // change Test Input
                            icon: { name: "Lock" }, // change Amy
                            errorMessage: {
                              errorText: "something wrong",
                              subText: "detail error",
                            },
                          }}
                        />
                        <R_13_GREY444 style={{ marginTop: "12px" }}>
                          Maximum Daily Limit RM 99,99,999
                        </R_13_GREY444>
                      </div>
                    </>
                  ),
                  subtitle: [
                    "RM 250.00",

                    // 'Another line of subtitle'
                  ],
                  leftBorderColor: "red", // change green
                },
                {
                  label: "Overseas Account(Remittance)", // change Lastname
                  leftIcon: (
                    <Icon icon="Announcement" size={22} color="#444444" />
                  ),
                  bold: true, // chang false
                  onListClick: () => {
                    // window.alert(`clicked on item ${item.label}`);
                    // window.alert(`ITEM NAME:::: ${item.label}`)
                  },
                  expandable: true, // change false
                  expandableContent: (
                    <>
                      <div style={{ padding: 0 }}>
                        <InputField
                          type="text"
                          value="9,99,99,999"
                          notValid={false}
                          handleChange={() => {}}
                          clearClickHandler={() => {}}
                          clearIcon={true}
                          label=""
                          icon={{ name: "Lock" }}
                          errorMessage={{
                            errorText: "something wrong",
                            subText: "detail error",
                          }}
                          {...{
                            type: "text", // change number
                            value: linkListInputValue,
                            notValid: false, // change true
                            handleChange: (e: any) => {
                              // window.alert(`text change: ${e.target.value}`)
                              setLinkListInputValue(e.target.value);
                              setLinkListClear(true);
                            },
                            clearClickHandler: () => {
                              // window.alert(`clear change`)
                              setLinkListInputValue("");
                              setLinkListClear(false);
                            },
                            clearIcon: linkListInputValue
                              ? true
                              : linkListClear, // change false
                            label: "", // change Test Input
                            icon: { name: "Lock" }, // change Amy
                            errorMessage: {
                              errorText: "something wrong",
                              subText: "detail error",
                            },
                          }}
                        />
                        <R_13_GREY444 style={{ marginTop: "12px" }}>
                          Maximum Daily Limit RM 99,99,999
                        </R_13_GREY444>
                      </div>
                    </>
                  ),
                  subtitle: [
                    "RM 250.00",

                    // 'Another line of subtitle'
                  ],
                  leftBorderColor: "red", // change green
                },
              ],
            },
            {
              id: "id-2",
              title: "Investments",
              content: [
                {
                  label: "Quick Access Limit", // change Lastname
                  leftIcon: (
                    <Icon icon="Announcement" size={22} color="#444444" />
                  ),
                  bold: true, // chang false
                  onListClick: () => {
                    // window.alert(`clicked on item ${item.label}`);
                    // window.alert(`ITEM NAME:::: ${item.label}`)
                  },
                  expandable: true, // change false
                  expandableContent: (
                    <>
                      <div style={{ padding: 0 }}>
                        <InputField
                          type="text"
                          value="9,99,99,999"
                          notValid={false}
                          handleChange={() => {}}
                          clearClickHandler={() => {}}
                          clearIcon={true}
                          label=""
                          icon={{ name: "Lock" }}
                          errorMessage={{
                            errorText: "something wrong",
                            subText: "detail error",
                          }}
                          {...{
                            type: "text", // change number
                            value: linkListInputValue,
                            notValid: false, // change true
                            handleChange: (e: any) => {
                              // window.alert(`text change: ${e.target.value}`)
                              setLinkListInputValue(e.target.value);
                              setLinkListClear(true);
                            },
                            clearClickHandler: () => {
                              // window.alert(`clear change`)
                              setLinkListInputValue("");
                              setLinkListClear(false);
                            },
                            clearIcon: linkListInputValue
                              ? true
                              : linkListClear, // change false
                            label: "", // change Test Input
                            icon: { name: "Lock" }, // change Amy
                            errorMessage: {
                              errorText: "something wrong",
                              subText: "detail error",
                            },
                          }}
                        />
                        <R_13_GREY444 style={{ marginTop: "12px" }}>
                          Maximum Daily Limit RM 99,99,999
                        </R_13_GREY444>
                      </div>
                    </>
                  ),
                  subtitle: [
                    "RM 250.00",

                    // 'Another line of subtitle'
                  ],
                  leftBorderColor: "red", // change green
                },
                {
                  label: "Own Ambank Account", // change Lastname
                  leftIcon: (
                    <Icon icon="Announcement" size={22} color="#444444" />
                  ),
                  bold: true, // chang false
                  onListClick: () => {
                    // window.alert(`clicked on item ${item.label}`);
                    // window.alert(`ITEM NAME:::: ${item.label}`)
                  },
                  expandable: true, // change false
                  expandableContent: (
                    <>
                      <div style={{ padding: 0 }}>
                        <InputField
                          type="text"
                          value="9,99,99,999"
                          notValid={false}
                          handleChange={() => {}}
                          clearClickHandler={() => {}}
                          clearIcon={true}
                          label=""
                          icon={{ name: "Lock" }}
                          errorMessage={{
                            errorText: "something wrong",
                            subText: "detail error",
                          }}
                          {...{
                            type: "text", // change number
                            value: linkListInputValue,
                            notValid: false, // change true
                            handleChange: (e: any) => {
                              // window.alert(`text change: ${e.target.value}`)
                              setLinkListInputValue(e.target.value);
                              setLinkListClear(true);
                            },
                            clearClickHandler: () => {
                              // window.alert(`clear change`)
                              setLinkListInputValue("");
                              setLinkListClear(false);
                            },
                            clearIcon: linkListInputValue
                              ? true
                              : linkListClear, // change false
                            label: "", // change Test Input
                            icon: { name: "Lock" }, // change Amy
                            errorMessage: {
                              errorText: "something wrong",
                              subText: "detail error",
                            },
                          }}
                        />
                        <R_13_GREY444 style={{ marginTop: "12px" }}>
                          Maximum Daily Limit RM 99,99,999
                        </R_13_GREY444>
                      </div>
                    </>
                  ),
                  subtitle: [
                    "Current Limit RM 5,00,000",

                    // 'Another line of subtitle'
                  ],
                  leftBorderColor: "red", // change green
                },
                {
                  label: "Other Bank Account", // change Lastname
                  leftIcon: (
                    <Icon icon="Announcement" size={22} color="#444444" />
                  ),
                  bold: true, // chang false
                  onListClick: () => {
                    // window.alert(`clicked on item ${item.label}`);
                    // window.alert(`ITEM NAME:::: ${item.label}`)
                  },
                  expandable: true, // change false
                  expandableContent: (
                    <>
                      <div style={{ padding: 0 }}>
                        <InputField
                          type="text"
                          value="9,99,99,999"
                          notValid={false}
                          handleChange={() => {}}
                          clearClickHandler={() => {}}
                          clearIcon={true}
                          label=""
                          icon={{ name: "Lock" }}
                          errorMessage={{
                            errorText: "something wrong",
                            subText: "detail error",
                          }}
                          {...{
                            type: "text", // change number
                            value: linkListInputValue,
                            notValid: false, // change true
                            handleChange: (e: any) => {
                              // window.alert(`text change: ${e.target.value}`)
                              setLinkListInputValue(e.target.value);
                              setLinkListClear(true);
                            },
                            clearClickHandler: () => {
                              // window.alert(`clear change`)
                              setLinkListInputValue("");
                              setLinkListClear(false);
                            },
                            clearIcon: linkListInputValue
                              ? true
                              : linkListClear, // change false
                            label: "", // change Test Input
                            icon: { name: "Lock" }, // change Amy
                            errorMessage: {
                              errorText: "something wrong",
                              subText: "detail error",
                            },
                          }}
                        />
                        <R_13_GREY444 style={{ marginTop: "12px" }}>
                          Maximum Daily Limit RM 99,99,999
                        </R_13_GREY444>
                      </div>
                    </>
                  ),
                  subtitle: [
                    "RM 50,000.00",

                    // 'Another line of subtitle'
                  ],
                  leftBorderColor: "red", // change green
                },
                {
                  label: "IBG/ DuitNow/ QR", // change Lastname
                  leftIcon: (
                    <Icon icon="Announcement" size={22} color="#444444" />
                  ),
                  bold: true, // chang false
                  onListClick: () => {
                    // window.alert(`clicked on item ${item.label}`);
                    // window.alert(`ITEM NAME:::: ${item.label}`)
                  },
                  expandable: true, // change false
                  expandableContent: (
                    <>
                      <div style={{ padding: 0 }}>
                        <InputField
                          type="text"
                          value="9,99,99,999"
                          notValid={false}
                          handleChange={() => {}}
                          clearClickHandler={() => {}}
                          clearIcon={true}
                          label=""
                          icon={{ name: "Lock" }}
                          errorMessage={{
                            errorText: "something wrong",
                            subText: "detail error",
                          }}
                          {...{
                            type: "text", // change number
                            value: linkListInputValue,
                            notValid: false, // change true
                            handleChange: (e: any) => {
                              // window.alert(`text change: ${e.target.value}`)
                              setLinkListInputValue(e.target.value);
                              setLinkListClear(true);
                            },
                            clearClickHandler: () => {
                              // window.alert(`clear change`)
                              setLinkListInputValue("");
                              setLinkListClear(false);
                            },
                            clearIcon: linkListInputValue
                              ? true
                              : linkListClear, // change false
                            label: "", // change Test Input
                            icon: { name: "Lock" }, // change Amy
                            errorMessage: {
                              errorText: "something wrong",
                              subText: "detail error",
                            },
                          }}
                        />
                        <R_13_GREY444 style={{ marginTop: "12px" }}>
                          Maximum Daily Limit RM 99,99,999
                        </R_13_GREY444>
                      </div>
                    </>
                  ),
                  subtitle: [
                    "RM 250.00",

                    // 'Another line of subtitle'
                  ],
                  leftBorderColor: "red", // change green
                },
                {
                  label: "Overseas Account(Remittance)", // change Lastname
                  leftIcon: (
                    <Icon icon="Announcement" size={22} color="#444444" />
                  ),
                  bold: true, // chang false
                  onListClick: () => {
                    // window.alert(`clicked on item ${item.label}`);
                    // window.alert(`ITEM NAME:::: ${item.label}`)
                  },
                  expandable: true, // change false
                  expandableContent: (
                    <>
                      <div style={{ padding: 0 }}>
                        <InputField
                          type="text"
                          value="9,99,99,999"
                          notValid={false}
                          handleChange={() => {}}
                          clearClickHandler={() => {}}
                          clearIcon={true}
                          label=""
                          icon={{ name: "Lock" }}
                          errorMessage={{
                            errorText: "something wrong",
                            subText: "detail error",
                          }}
                          {...{
                            type: "text", // change number
                            value: linkListInputValue,
                            notValid: false, // change true
                            handleChange: (e: any) => {
                              // window.alert(`text change: ${e.target.value}`)
                              setLinkListInputValue(e.target.value);
                              setLinkListClear(true);
                            },
                            clearClickHandler: () => {
                              // window.alert(`clear change`)
                              setLinkListInputValue("");
                              setLinkListClear(false);
                            },
                            clearIcon: linkListInputValue
                              ? true
                              : linkListClear, // change false
                            label: "", // change Test Input
                            icon: { name: "Lock" }, // change Amy
                            errorMessage: {
                              errorText: "something wrong",
                              subText: "detail error",
                            },
                          }}
                        />
                        <R_13_GREY444 style={{ marginTop: "12px" }}>
                          Maximum Daily Limit RM 99,99,999
                        </R_13_GREY444>
                      </div>
                    </>
                  ),
                  subtitle: [
                    "RM 250.00",

                    // 'Another line of subtitle'
                  ],
                  leftBorderColor: "red", // change green
                },
              ],
            },
            {
              id: "id-2",
              title: "Online Shopping",
              content: [
                {
                  label: "Quick Access Limit", // change Lastname
                  leftIcon: (
                    <Icon icon="Announcement" size={22} color="#444444" />
                  ),
                  bold: true, // chang false
                  onListClick: () => {
                    // window.alert(`clicked on item ${item.label}`);
                    // window.alert(`ITEM NAME:::: ${item.label}`)
                  },
                  expandable: true, // change false
                  expandableContent: (
                    <>
                      <div style={{ padding: 0 }}>
                        <InputField
                          type="text"
                          value="9,99,99,999"
                          notValid={false}
                          handleChange={() => {}}
                          clearClickHandler={() => {}}
                          clearIcon={true}
                          label=""
                          icon={{ name: "Lock" }}
                          errorMessage={{
                            errorText: "something wrong",
                            subText: "detail error",
                          }}
                          {...{
                            type: "text", // change number
                            value: linkListInputValue,
                            notValid: false, // change true
                            handleChange: (e: any) => {
                              // window.alert(`text change: ${e.target.value}`)
                              setLinkListInputValue(e.target.value);
                              setLinkListClear(true);
                            },
                            clearClickHandler: () => {
                              // window.alert(`clear change`)
                              setLinkListInputValue("");
                              setLinkListClear(false);
                            },
                            clearIcon: linkListInputValue
                              ? true
                              : linkListClear, // change false
                            label: "", // change Test Input
                            icon: { name: "Lock" }, // change Amy
                            errorMessage: {
                              errorText: "something wrong",
                              subText: "detail error",
                            },
                          }}
                        />
                        <R_13_GREY444 style={{ marginTop: "12px" }}>
                          Maximum Daily Limit RM 99,99,999
                        </R_13_GREY444>
                      </div>
                    </>
                  ),
                  subtitle: [
                    "RM 250.00",

                    // 'Another line of subtitle'
                  ],
                  leftBorderColor: "red", // change green
                },
                {
                  label: "Own Ambank Account", // change Lastname
                  leftIcon: (
                    <Icon icon="Announcement" size={22} color="#444444" />
                  ),
                  bold: true, // chang false
                  onListClick: () => {
                    // window.alert(`clicked on item ${item.label}`);
                    // window.alert(`ITEM NAME:::: ${item.label}`)
                  },
                  expandable: true, // change false
                  expandableContent: (
                    <>
                      <div style={{ padding: 0 }}>
                        <InputField
                          type="text"
                          value="9,99,99,999"
                          notValid={false}
                          handleChange={() => {}}
                          clearClickHandler={() => {}}
                          clearIcon={true}
                          label=""
                          icon={{ name: "Lock" }}
                          errorMessage={{
                            errorText: "something wrong",
                            subText: "detail error",
                          }}
                          {...{
                            type: "text", // change number
                            value: linkListInputValue,
                            notValid: false, // change true
                            handleChange: (e: any) => {
                              // window.alert(`text change: ${e.target.value}`)
                              setLinkListInputValue(e.target.value);
                              setLinkListClear(true);
                            },
                            clearClickHandler: () => {
                              // window.alert(`clear change`)
                              setLinkListInputValue("");
                              setLinkListClear(false);
                            },
                            clearIcon: linkListInputValue
                              ? true
                              : linkListClear, // change false
                            label: "", // change Test Input
                            icon: { name: "Lock" }, // change Amy
                            errorMessage: {
                              errorText: "something wrong",
                              subText: "detail error",
                            },
                          }}
                        />
                        <R_13_GREY444 style={{ marginTop: "12px" }}>
                          Maximum Daily Limit RM 99,99,999
                        </R_13_GREY444>
                      </div>
                    </>
                  ),
                  subtitle: [
                    "Current Limit RM 5,00,000",

                    // 'Another line of subtitle'
                  ],
                  leftBorderColor: "red", // change green
                },
                {
                  label: "Other Bank Account", // change Lastname
                  leftIcon: (
                    <Icon icon="Announcement" size={22} color="#444444" />
                  ),
                  bold: true, // chang false
                  onListClick: () => {
                    // window.alert(`clicked on item ${item.label}`);
                    // window.alert(`ITEM NAME:::: ${item.label}`)
                  },
                  expandable: true, // change false
                  expandableContent: (
                    <>
                      <div style={{ padding: 0 }}>
                        <InputField
                          type="text"
                          value="9,99,99,999"
                          notValid={false}
                          handleChange={() => {}}
                          clearClickHandler={() => {}}
                          clearIcon={true}
                          label=""
                          icon={{ name: "Lock" }}
                          errorMessage={{
                            errorText: "something wrong",
                            subText: "detail error",
                          }}
                          {...{
                            type: "text", // change number
                            value: linkListInputValue,
                            notValid: false, // change true
                            handleChange: (e: any) => {
                              // window.alert(`text change: ${e.target.value}`)
                              setLinkListInputValue(e.target.value);
                              setLinkListClear(true);
                            },
                            clearClickHandler: () => {
                              // window.alert(`clear change`)
                              setLinkListInputValue("");
                              setLinkListClear(false);
                            },
                            clearIcon: linkListInputValue
                              ? true
                              : linkListClear, // change false
                            label: "", // change Test Input
                            icon: { name: "Lock" }, // change Amy
                            errorMessage: {
                              errorText: "something wrong",
                              subText: "detail error",
                            },
                          }}
                        />
                        <R_13_GREY444 style={{ marginTop: "12px" }}>
                          Maximum Daily Limit RM 99,99,999
                        </R_13_GREY444>
                      </div>
                    </>
                  ),
                  subtitle: [
                    "RM 50,000.00",

                    // 'Another line of subtitle'
                  ],
                  leftBorderColor: "red", // change green
                },
                {
                  label: "IBG/ DuitNow/ QR", // change Lastname
                  leftIcon: (
                    <Icon icon="Announcement" size={22} color="#444444" />
                  ),
                  bold: true, // chang false
                  onListClick: () => {
                    // window.alert(`clicked on item ${item.label}`);
                    // window.alert(`ITEM NAME:::: ${item.label}`)
                  },
                  expandable: true, // change false
                  expandableContent: (
                    <>
                      <div style={{ padding: 0 }}>
                        <InputField
                          type="text"
                          value="9,99,99,999"
                          notValid={false}
                          handleChange={() => {}}
                          clearClickHandler={() => {}}
                          clearIcon={true}
                          label=""
                          icon={{ name: "Lock" }}
                          errorMessage={{
                            errorText: "something wrong",
                            subText: "detail error",
                          }}
                          {...{
                            type: "text", // change number
                            value: linkListInputValue,
                            notValid: false, // change true
                            handleChange: (e: any) => {
                              // window.alert(`text change: ${e.target.value}`)
                              setLinkListInputValue(e.target.value);
                              setLinkListClear(true);
                            },
                            clearClickHandler: () => {
                              // window.alert(`clear change`)
                              setLinkListInputValue("");
                              setLinkListClear(false);
                            },
                            clearIcon: linkListInputValue
                              ? true
                              : linkListClear, // change false
                            label: "", // change Test Input
                            icon: { name: "Lock" }, // change Amy
                            errorMessage: {
                              errorText: "something wrong",
                              subText: "detail error",
                            },
                          }}
                        />
                        <R_13_GREY444 style={{ marginTop: "12px" }}>
                          Maximum Daily Limit RM 99,99,999
                        </R_13_GREY444>
                      </div>
                    </>
                  ),
                  subtitle: [
                    "RM 250.00",

                    // 'Another line of subtitle'
                  ],
                  leftBorderColor: "red", // change green
                },
                {
                  label: "Overseas Account(Remittance)", // change Lastname
                  leftIcon: (
                    <Icon icon="Announcement" size={22} color="#444444" />
                  ),
                  bold: true, // chang false
                  onListClick: () => {
                    // window.alert(`clicked on item ${item.label}`);
                    // window.alert(`ITEM NAME:::: ${item.label}`)
                  },
                  expandable: true, // change false
                  expandableContent: (
                    <>
                      <div style={{ padding: 0 }}>
                        <InputField
                          type="text"
                          value="9,99,99,999"
                          notValid={false}
                          handleChange={() => {}}
                          clearClickHandler={() => {}}
                          clearIcon={true}
                          label=""
                          icon={{ name: "Lock" }}
                          errorMessage={{
                            errorText: "something wrong",
                            subText: "detail error",
                          }}
                          {...{
                            type: "text", // change number
                            value: linkListInputValue,
                            notValid: false, // change true
                            handleChange: (e: any) => {
                              // window.alert(`text change: ${e.target.value}`)
                              setLinkListInputValue(e.target.value);
                              setLinkListClear(true);
                            },
                            clearClickHandler: () => {
                              // window.alert(`clear change`)
                              setLinkListInputValue("");
                              setLinkListClear(false);
                            },
                            clearIcon: linkListInputValue
                              ? true
                              : linkListClear, // change false
                            label: "", // change Test Input
                            icon: { name: "Lock" }, // change Amy
                            errorMessage: {
                              errorText: "something wrong",
                              subText: "detail error",
                            },
                          }}
                        />
                        <R_13_GREY444 style={{ marginTop: "12px" }}>
                          Maximum Daily Limit RM 99,99,999
                        </R_13_GREY444>
                      </div>
                    </>
                  ),
                  subtitle: [
                    "RM 250.00",

                    // 'Another line of subtitle'
                  ],
                  leftBorderColor: "red", // change green
                },
              ],
            },
            {
              id: "id-2",
              title: "FPX Specific Merchant",
              content: [
                {
                  label: "Quick Access Limit", // change Lastname
                  leftIcon: (
                    <Icon icon="Announcement" size={22} color="#444444" />
                  ),
                  bold: true, // chang false
                  onListClick: () => {
                    // window.alert(`clicked on item ${item.label}`);
                    // window.alert(`ITEM NAME:::: ${item.label}`)
                  },
                  expandable: true, // change false
                  expandableContent: (
                    <>
                      <div style={{ padding: 0 }}>
                        <InputField
                          type="text"
                          value="9,99,99,999"
                          notValid={false}
                          handleChange={() => {}}
                          clearClickHandler={() => {}}
                          clearIcon={true}
                          label=""
                          icon={{ name: "Lock" }}
                          errorMessage={{
                            errorText: "something wrong",
                            subText: "detail error",
                          }}
                          {...{
                            type: "text", // change number
                            value: linkListInputValue,
                            notValid: false, // change true
                            handleChange: (e: any) => {
                              // window.alert(`text change: ${e.target.value}`)
                              setLinkListInputValue(e.target.value);
                              setLinkListClear(true);
                            },
                            clearClickHandler: () => {
                              // window.alert(`clear change`)
                              setLinkListInputValue("");
                              setLinkListClear(false);
                            },
                            clearIcon: linkListInputValue
                              ? true
                              : linkListClear, // change false
                            label: "", // change Test Input
                            icon: { name: "Lock" }, // change Amy
                            errorMessage: {
                              errorText: "something wrong",
                              subText: "detail error",
                            },
                          }}
                        />
                        <R_13_GREY444 style={{ marginTop: "12px" }}>
                          Maximum Daily Limit RM 99,99,999
                        </R_13_GREY444>
                      </div>
                    </>
                  ),
                  subtitle: [
                    "RM 250.00",

                    // 'Another line of subtitle'
                  ],
                  leftBorderColor: "red", // change green
                },
                {
                  label: "Own Ambank Account", // change Lastname
                  leftIcon: (
                    <Icon icon="Announcement" size={22} color="#444444" />
                  ),
                  bold: true, // chang false
                  onListClick: () => {
                    // window.alert(`clicked on item ${item.label}`);
                    // window.alert(`ITEM NAME:::: ${item.label}`)
                  },
                  expandable: true, // change false
                  expandableContent: (
                    <>
                      <div style={{ padding: 0 }}>
                        <InputField
                          type="text"
                          value="9,99,99,999"
                          notValid={false}
                          handleChange={() => {}}
                          clearClickHandler={() => {}}
                          clearIcon={true}
                          label=""
                          icon={{ name: "Lock" }}
                          errorMessage={{
                            errorText: "something wrong",
                            subText: "detail error",
                          }}
                          {...{
                            type: "text", // change number
                            value: linkListInputValue,
                            notValid: false, // change true
                            handleChange: (e: any) => {
                              // window.alert(`text change: ${e.target.value}`)
                              setLinkListInputValue(e.target.value);
                              setLinkListClear(true);
                            },
                            clearClickHandler: () => {
                              // window.alert(`clear change`)
                              setLinkListInputValue("");
                              setLinkListClear(false);
                            },
                            clearIcon: linkListInputValue
                              ? true
                              : linkListClear, // change false
                            label: "", // change Test Input
                            icon: { name: "Lock" }, // change Amy
                            errorMessage: {
                              errorText: "something wrong",
                              subText: "detail error",
                            },
                          }}
                        />
                        <R_13_GREY444 style={{ marginTop: "12px" }}>
                          Maximum Daily Limit RM 99,99,999
                        </R_13_GREY444>
                      </div>
                    </>
                  ),
                  subtitle: [
                    "Current Limit RM 5,00,000",

                    // 'Another line of subtitle'
                  ],
                  leftBorderColor: "red", // change green
                },
                {
                  label: "Other Bank Account", // change Lastname
                  leftIcon: (
                    <Icon icon="Announcement" size={22} color="#444444" />
                  ),
                  bold: true, // chang false
                  onListClick: () => {
                    // window.alert(`clicked on item ${item.label}`);
                    // window.alert(`ITEM NAME:::: ${item.label}`)
                  },
                  expandable: true, // change false
                  expandableContent: (
                    <>
                      <div style={{ padding: 0 }}>
                        <InputField
                          type="text"
                          value="9,99,99,999"
                          notValid={false}
                          handleChange={() => {}}
                          clearClickHandler={() => {}}
                          clearIcon={true}
                          label=""
                          icon={{ name: "Lock" }}
                          errorMessage={{
                            errorText: "something wrong",
                            subText: "detail error",
                          }}
                          {...{
                            type: "text", // change number
                            value: linkListInputValue,
                            notValid: false, // change true
                            handleChange: (e: any) => {
                              // window.alert(`text change: ${e.target.value}`)
                              setLinkListInputValue(e.target.value);
                              setLinkListClear(true);
                            },
                            clearClickHandler: () => {
                              // window.alert(`clear change`)
                              setLinkListInputValue("");
                              setLinkListClear(false);
                            },
                            clearIcon: linkListInputValue
                              ? true
                              : linkListClear, // change false
                            label: "", // change Test Input
                            icon: { name: "Lock" }, // change Amy
                            errorMessage: {
                              errorText: "something wrong",
                              subText: "detail error",
                            },
                          }}
                        />
                        <R_13_GREY444 style={{ marginTop: "12px" }}>
                          Maximum Daily Limit RM 99,99,999
                        </R_13_GREY444>
                      </div>
                    </>
                  ),
                  subtitle: [
                    "RM 50,000.00",

                    // 'Another line of subtitle'
                  ],
                  leftBorderColor: "red", // change green
                },
                {
                  label: "IBG/ DuitNow/ QR", // change Lastname
                  leftIcon: (
                    <Icon icon="Announcement" size={22} color="#444444" />
                  ),
                  bold: true, // chang false
                  onListClick: () => {
                    // window.alert(`clicked on item ${item.label}`);
                    // window.alert(`ITEM NAME:::: ${item.label}`)
                  },
                  expandable: true, // change false
                  expandableContent: (
                    <>
                      <div style={{ padding: 0 }}>
                        <InputField
                          type="text"
                          value="9,99,99,999"
                          notValid={false}
                          handleChange={() => {}}
                          clearClickHandler={() => {}}
                          clearIcon={true}
                          label=""
                          icon={{ name: "Lock" }}
                          errorMessage={{
                            errorText: "something wrong",
                            subText: "detail error",
                          }}
                          {...{
                            type: "text", // change number
                            value: linkListInputValue,
                            notValid: false, // change true
                            handleChange: (e: any) => {
                              // window.alert(`text change: ${e.target.value}`)
                              setLinkListInputValue(e.target.value);
                              setLinkListClear(true);
                            },
                            clearClickHandler: () => {
                              // window.alert(`clear change`)
                              setLinkListInputValue("");
                              setLinkListClear(false);
                            },
                            clearIcon: linkListInputValue
                              ? true
                              : linkListClear, // change false
                            label: "", // change Test Input
                            icon: { name: "Lock" }, // change Amy
                            errorMessage: {
                              errorText: "something wrong",
                              subText: "detail error",
                            },
                          }}
                        />
                        <R_13_GREY444 style={{ marginTop: "12px" }}>
                          Maximum Daily Limit RM 99,99,999
                        </R_13_GREY444>
                      </div>
                    </>
                  ),
                  subtitle: [
                    "RM 250.00",

                    // 'Another line of subtitle'
                  ],
                  leftBorderColor: "red", // change green
                },
                {
                  label: "Overseas Account(Remittance)", // change Lastname
                  leftIcon: (
                    <Icon icon="Announcement" size={22} color="#444444" />
                  ),
                  bold: true, // chang false
                  onListClick: () => {
                    // window.alert(`clicked on item ${item.label}`);
                    // window.alert(`ITEM NAME:::: ${item.label}`)
                  },
                  expandable: true, // change false
                  expandableContent: (
                    <>
                      <div style={{ padding: 0 }}>
                        <InputField
                          type="text"
                          value="9,99,99,999"
                          notValid={false}
                          handleChange={() => {}}
                          clearClickHandler={() => {}}
                          clearIcon={true}
                          label=""
                          icon={{ name: "Lock" }}
                          errorMessage={{
                            errorText: "something wrong",
                            subText: "detail error",
                          }}
                          {...{
                            type: "text", // change number
                            value: linkListInputValue,
                            notValid: false, // change true
                            handleChange: (e: any) => {
                              // window.alert(`text change: ${e.target.value}`)
                              setLinkListInputValue(e.target.value);
                              setLinkListClear(true);
                            },
                            clearClickHandler: () => {
                              // window.alert(`clear change`)
                              setLinkListInputValue("");
                              setLinkListClear(false);
                            },
                            clearIcon: linkListInputValue
                              ? true
                              : linkListClear, // change false
                            label: "", // change Test Input
                            icon: { name: "Lock" }, // change Amy
                            errorMessage: {
                              errorText: "something wrong",
                              subText: "detail error",
                            },
                          }}
                        />
                        <R_13_GREY444 style={{ marginTop: "12px" }}>
                          Maximum Daily Limit RM 99,99,999
                        </R_13_GREY444>
                      </div>
                    </>
                  ),
                  subtitle: [
                    "RM 250.00",

                    // 'Another line of subtitle'
                  ],
                  leftBorderColor: "red", // change green
                },
              ],
            },
          ]}
        ></InputAccordian>
      </CenteredDiv>
      <Title>Error Page</Title>
      <div style={{ height: "35vw" }}>
        <ErrorPage
          mainStyle={{ background: "#eee" }}
          responsive={true}
          icon={{ name: "Account", color: "#000000", size: 30 }}
          title="403 Access Denied/Forbidden"
          detailText="Please call our 24-hour Contact Center at 603-2178 8888 for assistance"
        />
      </div>
      <Title>TacModal(Update)-(Ref:Sprint1)</Title>
      <CenteredDiv>
        <TacModal
          onCloseClick={() => {
            alert("Tac Closed");
          }}
          responsive={true}
          maxLength={6}
          clearIcon={inputValue === "" ? tacClear : !tacClear}
          clearClickHandler={() => {
            setInputValue("");
          }}
          inActiveMessage={{
            title: "Your profile is inactive.",
            text: "TAC verification is required to activate your profile.",
          }}
          inActive={tacInactive}
          testId={"testId"}
          onButtonClick={() => {
            setTacInactive(!tacInactive);
          }}
          modalIsOpen={TacModalOpen}
          label={"TAC verification"}
          value={inputValue}
          handleChange={(e: any) => {
            setInputValue(e.target.value);
          }}
          notValid={inputValue === "" ? true : false}
          errorMessage={{
            testId: "testId",
            errorText: "The TAC is incorrect",
            subText: "Please try again.",
          }}
          content="TAC was sent to your registered mobile number (**** 6867)"
          link={{
            text: "Did not receive TAC? Request new",
            onLinkClick: () => {
              alert("Tac link");
            },
          }}
          buttonColor={{
            top: !tacInactive ? "#BDBDBD" : "#FD8585",
            bottom: !tacInactive ? "#BDBDBD" : "#FF2222",
          }}
          buttonTitle={tacInactive ? "Request TAC" : "Continue"}
          activeStatus={tacClearActiveStatus}
          activeStatusChild={
            <div style={{ display: "flex" }}>
              <Prompt
                testId={"testId"}
                iconColor={{ top: "#81D988", bottom: "#5BB362" }}
                icon={{ name: "Tick-1", color: "#ffffff" }}
                text="Your profile is successfully activated."
              />
            </div>
          }
        />

        <PrimaryButton
          title="Open TacModal"
          onButtonClick={() => {
            setTacModalOpen(true);
          }}
        />
      </CenteredDiv>
      <Title>FormContainer Disabled</Title>
      <CenteredDiv>
        <FormContainer
          disabled
          label={"Select your account/card type"}
          showTooltip={false}
          tooltip={
            <div>
              <p style={{ color: "#ffffff" }}>Select your account/card type</p>
            </div>
          }
          children={
            <div style={{ padding: "0 0 0 2rem" }}>
              <SelectionTile
                testId={"testId"}
                onTileClick={(item, index) => {
                  setSelectionTileNum(index);
                  alert(`${item.accountTitle} with indexOf ${index} clicked`);
                }}
                selected={selectionTileNum}
                list={[
                  {
                    accountTitle: "Saving Account A",
                    accountNumber: "RM 2,000.00",
                  },
                  {
                    accountTitle: "Ambank AmMoneyLine AmMoneyLine",
                    accountNumber: "RM 2,000.00",
                  },
                  {
                    accountTitle: "Ambank BonusLink Visa",
                    accountNumber: "RM 2,000.00",
                  },
                  {
                    accountTitle: "Saving Account B",
                    accountNumber: "RM 2,000.00",
                  },
                  {
                    accountTitle: "Saving Account C",
                    accountNumber: "RM 2,000.00",
                  },
                ]}
              />
            </div>
          }
        />
      </CenteredDiv>
      <Title>TransactionIconList(Update)</Title>
      <CenteredDiv>
        <div style={{ width: "57.1875em" }}>
          <TransactionIconList
            testId={"testId"}
            list={[
              {
                date: "Today",
                expandedIndexes: [0],
                transactions: [
                  {
                    icon: "Transfer",
                    iconBgColor: "orange",
                    iconColor: "white",
                    iconSize: 28,
                    label1: "TRANSFER TO",
                    label2: "SEEN OPTICS ",
                    statusLabel: "SUCCESSFUL",
                    statusLabelColor: "#36A03E",
                    changeLabel: "-",
                    changeLabelColor: "#F73C4A",
                    amount: "RM 236.78",
                    actionLabel: "Repeat",
                    actionIcon: "Repeat",
                    onActionButtonClick: () => {
                      alert("Repeat");
                    },
                    details: [
                      {
                        label1: "From Account",
                        value1: "15806389266 - Savings Account A",
                        label2: "Recipient Reference",
                        value2: "May - Rental",
                        actionLabel: "Add to Fav",
                        actionIcon: "Love",
                        onActionButtonClick: () => {
                          alert("Fav");
                          setActionBtnStatus(!actionBtnStatus);
                        },
                      },
                      {
                        label1: "",
                        value1: "",
                        label2: "Other Details",
                        value2: "-",
                        //  actionLabel: 'View Receipt',
                        // actionIcon: ''
                      },
                    ],
                  },
                  {
                    icon: "Transfer",
                    iconBgColor: "blue",
                    iconColor: "white",
                    iconSize: 28,
                    label1: "TRANSFER TO",
                    label2: "SEEN OPTICS ",
                    statusLabel: "SUCCESSFUL",
                    statusLabelColor: "#36A03E",
                    changeLabel: "-",
                    changeLabelColor: "#F73C4A",
                    amount: "RM 236.78",
                    actionLabel: "Repeat",
                    actionIcon: "Repeat",
                    details: [
                      {
                        label1: "From Account",
                        value1: "15806389266 - Savings Account A",
                        label2: "Recipient Reference",
                        value2: "May - Rental",
                        actionLabel: "Add to Fav",
                        actionIcon: "",
                      },
                      {
                        label1: "",
                        value1: "",
                        label2: "Other Details",
                        value2: "-",
                        actionLabel: "View Receipt",
                        actionIcon: "",
                      },
                    ],
                  },
                ],
              },
              {
                date: "12 Jan 2020",
                expandedIndexes: [],
                transactions: [
                  {
                    icon: "Loan",
                    iconBgColor: "red",
                    iconColor: "white",
                    iconSize: 28,
                    label1: "TRANSFER TO",
                    label2: "LOREM IPSUM SIT DOLOR AMET DAMANSARA PERDANA ",
                    statusLabel: "SUCCESSFUL",
                    statusLabelColor: "#36A03E",
                    changeLabel: "+",
                    changeLabelColor: "#36A03E",
                    amount: "RM 1,236.78",
                    actionLabel: "Repeat",
                    actionIcon: "Repeat",
                    details: [
                      {
                        label1: "From Account",
                        value1: "15806389266 - Savings Account A",
                        label2: "Recipient Reference",
                        value2: "May - Rental",
                        actionLabel: "Add to Fav",
                        actionIcon: "",
                      },
                      {
                        label1: "",
                        value1: "",
                        label2: "Other Details",
                        value2: "-",
                        actionLabel: "View Receipt",
                        actionIcon: "",
                      },
                    ],
                  },
                ],
              },
            ]}
            onTransactionClick={(item, sectionIndex, itemIndex) => {
              alert("check : " + item);
              alert(`${sectionIndex} - ${itemIndex}`);
            }}
          />
        </div>
      </CenteredDiv>
      <Title>Form Container disabled state.</Title>
      <CenteredDiv>
        <FormContainer
          disabled
          label={"Select your account/card type"}
          tooltip={
            <div>
              <p style={{ color: "#ffffff" }}>Select your account/card type</p>
            </div>
          }
          children={
            <div style={{ padding: "0 0 0 2rem" }}>
              <SelectionTile
                testId={"testId"}
                onTileClick={(item, index) => {
                  setSelectionTileNum(index);
                  alert(`${item.accountTitle} with indexOf ${index} clicked`);
                }}
                selected={selectionTileNum}
                list={[
                  {
                    accountTitle: "Saving Account A",
                    accountNumber: "RM 2,000.00",
                  },
                  {
                    accountTitle: "Ambank AmMoneyLine AmMoneyLine",
                    accountNumber: "RM 2,000.00",
                  },
                  {
                    accountTitle: "Ambank BonusLink Visa",
                    accountNumber: "RM 2,000.00",
                  },
                  {
                    accountTitle: "Saving Account B",
                    accountNumber: "RM 2,000.00",
                  },
                  {
                    accountTitle: "Saving Account C",
                    accountNumber: "RM 2,000.00",
                  },
                ]}
              />
            </div>
          }
        />
      </CenteredDiv>
      <Title>
        W2W ModalList using (StatusFormContainer , List component ,
        CenterMessage , Primary Button)
      </Title>
      <div
        style={{
          backgroundColor: "#EEEEEE",
          padding: "1.125rem",
          marginTop: 100,
        }}
      >
        <TransactionWithNote
          testId={"testId"}
          responsive
          statusIcon={{
            icon: "Fail",
            iconColor: { top: "#FD8585", bottom: "#FF2222" },
            outerIconColor: "#FFEBEE",
          }}
          formContainerchildren={
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "2rem",
              }}
            >
              <B_24_BLACK style={{ textAlign: "center" }}>
                Transfer Unsuccessful
              </B_24_BLACK>
              <br />
              <p style={{ textAlign: "center" }}>
                Your payment of RM 20.50 to Revenue Harvest Sdn. Bhd. is
                unsuccessful
              </p>
              <p style={{ textAlign: "center" }}>
                Unable to perform this transaction. Please call our Contact
                Centre for assistance.
              </p>
              <List
                itemContainerStyle={{ padding: 0 }}
                list={[
                  {
                    leftLabel: "To",
                    rightLabel: "Saving Account A",
                    details: ["8881019596535 | AmBank"],
                  },
                  {
                    leftLabel: "Amount",
                    rightLabel: "RM 500.00",
                    details: ["Fees & Charges: RM 0.00"],
                  },
                  {
                    leftLabel: "Date",
                    rightLabel: "Transfer Now",
                    details: ["Today, 5 January 2019"],
                  },
                  {
                    leftLabel: "Reference",
                    rightLabel: "House Rental",
                  },
                  {
                    leftLabel: "From",
                    rightLabel: "Savings Account",
                    details: ["2998202013", "Available Balance: RM 10,301.50"],
                  },
                ]}
              />
              <CenteredDiv>
                <IconButtons
                  testId={"testId"}
                  onButtonClick={(item: any, index: any) => {
                    alert(`${item} with index of ${index} clicked`);
                  }}
                  list={[
                    {
                      text: "View Receipt",
                      icon: {
                        name: "Card2",
                      },
                    },
                  ]}
                />
              </CenteredDiv>
            </div>
          }
          confirmNoteswidth={"40rem"}
          confirmNotesTitle={{
            content: "Important Notes",
            style: { fontSize: "2rem" },
          }}
          confirmNotesBody={[
            {
              content:
                "This is not the final confirmation of your payment. Please check with your merchant for final status confirmation.",
              style: {},
            },
            {
              content:
                "Please click on the “Continue with Transaction” button below and do not close the browser until final receipt is displayed",
              style: {},
            },
          ]}
          Btntitle={"Continue With Transaction"}
          // Btnwidth={'22.43rem'}
          onButtonClick={() => alert("check")}
          statusText={" You will be redirected to FPX status page in 9 seconds"}
        />
      </div>
      <Title>ListWithSelectionTile(List,Selection Tile, Primary Buttons)</Title>
      <CenteredDiv style={{ width: "100%", backgroundColor: "#EEEEEE" }}>
        <ListWithSelectionTile
          testId={"testId"}
          responsive
          listchildren={
            <List
              header={{
                icon: {
                  name: "LOGO",
                  color: "#ff2626",
                  iconText: "Review & Confirm",
                },
              }}
              list={[
                {
                  leftLabel: "To",
                  rightLabel: "Revenue Lawrence Haim 140066",
                  details: [],
                },
                {
                  leftLabel: "Reference/Invoice No.",
                  rightLabel: "RT15678965",
                  details: [],
                },
                {
                  leftLabel: "Bill No.",
                  rightLabel: "Alipay Taobao",
                  details: [],
                },
                {
                  leftLabel: "Amount",
                  rightLabel: "RM 20.00",
                },
                {
                  leftLabel: "Effective payment Date",
                  rightLabel: "Today ,5 January 2020",
                  details: [],
                },
              ]}
            />
          }
          tileListLabel={"From which account?"}
          selectionTileList={[
            {
              accountTitle: "Saving Account A",
              accountNumber: "86867678678",
              amount: "RM 10,301.50",
            },
            {
              accountTitle: "Saving Account B",
              accountNumber: "8686665878",
              amount: " RM 11,555.00",
            },
            {
              accountTitle: "Saving Account C",
              accountNumber: "67577678678",
              amount: " RM 55,555.00",
            },
            {
              accountTitle: "Saving Account D",
              accountNumber: "868676787897",
              amount: " RM 33,555.50",
            },
            {
              accountTitle: "Saving Account E",
              accountNumber: "86999678678",
              amount: " RM 245,555.50",
            },
          ]}
          onTileClick={(item, index) => {
            setSelectionTileNum2(index);
            alert(`${item.accountTitle} with indexOf ${index} clicked`);
          }}
          selected={SelectionTileNum2}
          btn1title={"Continue"}
          onButton1Click={() => {
            alert("Button Clicked");
          }}
          btn1width={"20.43rem"}
          btn2title={"cancel"}
          onButton2Click={() => {
            alert("Button Clicked");
          }}
          btn2width={"20.43rem"}
        />
      </CenteredDiv>
      <Title>Redirect to mobile</Title>
      <CenteredDiv style={{ width: "100%", backgroundColor: "#EEEEEE" }}>
        <RedirectToMobile
          backgroundImage={images.common.redirectBg}
          testId="test-id-1"
          logo={{ name: "amonline-white", size: 130 }}
          header={{
            testId: "content",
            title: "Banking Your Way",
            content:
              "There is more in the brand new AmOnline app. Unlock the full banking experience now.",
          }}
          button={{
            testId: "buttonId",
            title: "Download The App Now",
            onButtonClick: () => {
              alert("button clicked");
            },
          }}
          continueWithWeb={{
            content: "Proceed to Desktop Version",
            onClick: () => {
              alert("continue web clicked");
            },
          }}
        />
      </CenteredDiv>
      <div
        style={{
          backgroundColor: "#EEEEEE",
          padding: "1.125rem",
          marginTop: 100,
        }}
      >
        <Title>Logout</Title>
        <Logout
          testId={"testId"}
          responsive
          header={{
            title: "You have successfully logged out.",
            subTitle: "Logged out on Tueday 14/05/2019, 03:06PM",
            statusIcon: {
              image: {
                src: images.common.amyIcon,
                alt: "logo",
              },
              iconColor: { top: "#94EC9B", bottom: "#5BB362" },
              outerIconColor: "#E5FCE6",
            },
          }}
          listChildren={[
            {
              leftLabel: {
                contentType: "TRANSFER TO",
                styleContent: {},
                value: "SEEN OPTICS",
                styleValue: {},
              },
              rightLabel: {
                TimeStamp: "09:53:55AM",
                styleTimeStamp: {},
                value: "RM 236.67",
                styleValue: {},
              },
              middleLabel: {
                content: "SUCCESSFUL",
                styleContent: {},
              },
            },
            {
              leftLabel: {
                contentType: "FPX TO",
                styleContent: {},
                value: "TRANSUNION CONVERSION",
                styleValue: {},
              },
              rightLabel: {
                TimeStamp: "08:48:01AM",
                styleTimeStamp: {},
                value: " RM10,0000.00",
                styleValue: {},
              },
              middleLabel: {
                content: "SUCCESSFUL",
                styleContent: {},
              },
            },
            {
              leftLabel: {
                contentType: "PAY TO LOAN",
                styleContent: {},
                value: "LOREM IPSUM",
                styleValue: {},
              },
              rightLabel: {
                TimeStamp: "08:05:00AM",
                styleTimeStamp: {},
                value: "RM 5420.27",
                styleValue: {},
              },
              middleLabel: {
                content: "SUCCESSFUL",
                styleContent: {},
              },
            },
          ]}
          btntitle="Back to Homepage"
          btnwidth="16.4rem"
          onButtonClick={() => {
            alert("check");
          }}
        />
      </div>
    </div>
  );
};

export default Sprint4;
