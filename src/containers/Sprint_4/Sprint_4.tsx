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


import SelectionTile from "src/components/selections/selectionTile/SelectionTile";
import Box_V2 from "src/components/wrappers/box_V2/Box_V2";
import InputAccordian from "src/components/InputAccordian/InputAccordian";
import AmModal from "src/components/modals/Modal";

import StickyFooter from "src/components/stickies/stickyFooter/StickyFooter";
import DynamicText from "src/components/assets/typography/DynamicText/DynamicText";
import CenterText from "src/components/assets/typography/CenterText/CenterText";
import ErrorPage from "src/components/ErrorPage/ErrorPage";

import DetailList from "src/components/lists/DetailList/DetailList";
const { B_13_ORANGE_463, R_13_GREY444 } = Paragraphs;

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

  padding: 2rem 0;
`;
interface Props {}

const Sprint3: React.FC<Props> = () => {
  const [selectedItem, setSelectedOption] = useState("Persian");
  const [sprint1, setSprint1] = useState(false);
  const [sprint2, setSprint2] = useState(false);
  const [sprint3, setSprint3] = useState(false);
  const [sprint4, setSprint4] = useState(false);
  const [homeRedirect, setHomeRedirect] = useState(false);
  const [linkListClear, setLinkListClear] = useState(false);
  const [linkListInputValue, setLinkListInputValue] = useState("");
  const [selectionTile, setSelectionTile] = useState(2);
  const [stickyFooter, setStickyFooter] = useState(false);
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
      <Title>DetailList</Title>
      <div style={{ width: "38.5rem", margin: "0 auto" }}>
        <DetailList
          testId={"testId"}
          title={[
            "*RM Amount is an indicative value and to be considered as reference only.",
            "Protected by PIDM up to RM 250,000 for each depositor."
          ]}
          // title="*RM Amount is an indicative value and to be considered as reference only.
          // Protected by PIDM up to RM 250,000 for each depositor."
          list={[
            {
              leftText: "Account Type",
              rightText: "Conventional Fixed Deposit"
            },
            {
              leftText: "Holder Name",
              rightText: "Adam Constantine"
            },
            {
              leftText: "Tenure",
              rightText: "24 Months"
            },
            {
              leftText: "Interest Rate (p.a.)",
              rightText: "4.55%"
            },
            {
              leftText: "Placement Date",
              rightText: "20 Feb 2020"
            },
            {
              leftText: "Maturity Date",
              rightText: "20 Feb 2023"
            },
            {
              leftText: "Interest Payment Instruction",
              rightText: "Auto Renewal"
            },
            {
              leftText: "Currency",
              rightText: "AUD"
            },
            {
              leftText: "Exchange Rate",
              rightText: "0.3545"
            },
            {
              leftText: "Effective Date",
              rightText: "1 Dec 2019"
            }
          ]}
        />
      </div>
      <Title>SelectionTile (Update)</Title>
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
              iconLabel: "AmBank"
            },
            {
              iconLabel: "Alliance Bank",
              icon: {
                name: "Announcement",
                size: 32,
                color: "#444444"
              }
            },
            {
              iconLabel: "Other Bank",
              image: images.common.fpxIcon,
              imageStyle: { height: 32, width: 66, marginLeft: 8 }
            }
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
                subText: "Please try again."
              }}
              type="text"
              clearClickHandler={() => alert("clear clicked")}
              clearIcon={true}
              label="Username"
              icon={{ name: "Account-2" }}
              value={""}
              handleChange={event => {
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
            subText: "Please try again."
          }}
          type="text"
          clearClickHandler={() => {}}
          value={""}
          handleChange={e => {
            alert(e);
          }}
          bottomLabel="Maximum Daily Limit RM 9,999,999.99"
          // bottomLabelStyle={{ color: "red" }}
        />
      </div>
      <Title>Sticky Footer</Title>
      <div style={{ paddingLeft: "35vw" }}>
        <PrimaryButton
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
        iconSubTextNum={5}
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
              title="View Rate Container"
              rateTypeValue={rateType}
              rateTypeList={[
                {
                  value: "test_value",
                  label: "Conventional Fixed Deposit 1"
                },
                {
                  value: "test_value2",
                  label: "Conventional Fixed Deposit 2"
                },
                {
                  value: "test_value3",
                  label: "Conventional Fixed Deposit 3"
                }
              ]}
              onRateTypeChange={(value: any) => {
                setRateType(value);
              }}
              date="11 Mar 2020"
              ads={[
                [
                  {
                    children: (
                      <img src={require("src/assets/images/slider.png")} />
                    )
                  },
                  {
                    children: (
                      <img src={require("src/assets/images/slider.png")} />
                    )
                  },
                  {
                    children: (
                      <img src={require("src/assets/images/slider.png")} />
                    )
                  },
                  {
                    children: (
                      <img src={require("src/assets/images/slider.png")} />
                    )
                  }
                ]
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
                    content: "** Rates are subject to change"
                  }}
                  subtitle={{
                    content:
                      "Note: Customer with Reward Code may be entitled additional rate in AmOnline."
                  }}
                  data={{
                    headers: [
                      {
                        style: {},
                        values: ["Tenure"]
                      },
                      {
                        style: { textAlign: "center", fontWeight: "bold" },
                        values: ["Board Rate", "(% p.a.)"]
                      },
                      {
                        style: { textAlign: "center", fontWeight: "bold" },
                        values: ["AmOnline Rate", "(% p.a.)"]
                      }
                    ],
                    values: [
                      ["1 Month", "2.95", "2.95"],
                      ["2 Month", "2.95", "2.95"],
                      ["3 Month", "2.95", "2.95"],
                      ["4 Month", "3.95", "2.95"],
                      ["5 Month", "2.95", "2.95"],
                      ["6 Month", "2.95", "2.95"],
                      ["7 Month", "6.95", "2.95"]
                    ]
                  }}
                />
              }
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
            content: "** Rates are subject to change"
          }}
          subtitle={{
            content:
              "Note: Customer with Reward Code may be entitled additional rate in AmOnline."
          }}
          data={{
            headers: [
              {
                style: {},
                values: ["Tenure"]
              },
              {
                style: { textAlign: "center", fontWeight: "bold" },
                values: ["Board Rate", "(% p.a.)"]
              },
              {
                style: { textAlign: "center", fontWeight: "bold" },
                values: ["AmOnline Rate", "(% p.a.)"]
              }
            ],
            values: [
              ["1 Month", "2.95", "2.95"],
              ["2 Month", "2.95", "2.95"],
              ["3 Month", "2.95", "2.95"],
              ["4 Month", "3.95", "2.95"],
              ["5 Month", "2.95", "2.95"],
              ["6 Month", "2.95", "2.95"],
              ["7 Month", "6.95", "2.95"]
            ]
          }}
        />
      </CenteredDiv>
      <Title>Confirm Notes</Title>
      <CenteredDiv
        style={{
          margin: 0,
          padding: 0
        }}
      >
        <ConfirmNotes
          testId="sprint_4_confirm_notes"
          title={{
            content: "Important Notes",
            style: { fontSize: "2rem" }
          }}
          width="40rem"
          responsive
          body={[
            {
              content:
                "This is not the final confirmation of your payment. Please check with your merchant for final status confirmation.",
              style: {}
            },
            {
              content:
                "Please click on the “Continue with Transaction” button below and do not close the browser until final receipt is displayed",
              style: {}
            }
          ]}
        />
      </CenteredDiv>
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
          <TextButton
            buttonText="Sprint-4"
            onTextClick={() => {
              setSprint4(true);
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
        />
      </CenteredDiv>

      <Title>Input Accordian</Title>
      <CenteredDiv
        style={{
          margin: "5rem",
          maxWidth: "699px"
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
                            subText: "detail error"
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
                              subText: "detail error"
                            }
                          }}
                        />
                        <R_13_GREY444 style={{ marginTop: "12px" }}>
                          Maximum Daily Limit RM 99,99,999
                        </R_13_GREY444>
                      </div>
                    </>
                  ),
                  subtitle: [
                    "RM 250.00"

                    // 'Another line of subtitle'
                  ],
                  leftBorderColor: "red" // change green
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
                            subText: "detail error"
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
                              subText: "detail error"
                            }
                          }}
                        />
                        <R_13_GREY444 style={{ marginTop: "12px" }}>
                          Maximum Daily Limit RM 99,99,999
                        </R_13_GREY444>
                      </div>
                    </>
                  ),
                  subtitle: [
                    "Current Limit RM 5,00,000"

                    // 'Another line of subtitle'
                  ],
                  leftBorderColor: "red" // change green
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
                            subText: "detail error"
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
                              subText: "detail error"
                            }
                          }}
                        />
                        <R_13_GREY444 style={{ marginTop: "12px" }}>
                          Maximum Daily Limit RM 99,99,999
                        </R_13_GREY444>
                      </div>
                    </>
                  ),
                  subtitle: [
                    "RM 50,000.00"

                    // 'Another line of subtitle'
                  ],
                  leftBorderColor: "red" // change green
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
                            subText: "detail error"
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
                              subText: "detail error"
                            }
                          }}
                        />
                        <R_13_GREY444 style={{ marginTop: "12px" }}>
                          Maximum Daily Limit RM 99,99,999
                        </R_13_GREY444>
                      </div>
                    </>
                  ),
                  subtitle: [
                    "RM 250.00"

                    // 'Another line of subtitle'
                  ],
                  leftBorderColor: "red" // change green
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
                            subText: "detail error"
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
                              subText: "detail error"
                            }
                          }}
                        />
                        <R_13_GREY444 style={{ marginTop: "12px" }}>
                          Maximum Daily Limit RM 99,99,999
                        </R_13_GREY444>
                      </div>
                    </>
                  ),
                  subtitle: [
                    "RM 250.00"

                    // 'Another line of subtitle'
                  ],
                  leftBorderColor: "red" // change green
                }
              ]
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
                            subText: "detail error"
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
                              subText: "detail error"
                            }
                          }}
                        />
                        <R_13_GREY444 style={{ marginTop: "12px" }}>
                          Maximum Daily Limit RM 99,99,999
                        </R_13_GREY444>
                      </div>
                    </>
                  ),
                  subtitle: [
                    "RM 250.00"

                    // 'Another line of subtitle'
                  ],
                  leftBorderColor: "red" // change green
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
                            subText: "detail error"
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
                              subText: "detail error"
                            }
                          }}
                        />
                        <R_13_GREY444 style={{ marginTop: "12px" }}>
                          Maximum Daily Limit RM 99,99,999
                        </R_13_GREY444>
                      </div>
                    </>
                  ),
                  subtitle: [
                    "Current Limit RM 5,00,000"

                    // 'Another line of subtitle'
                  ],
                  leftBorderColor: "red" // change green
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
                            subText: "detail error"
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
                              subText: "detail error"
                            }
                          }}
                        />
                        <R_13_GREY444 style={{ marginTop: "12px" }}>
                          Maximum Daily Limit RM 99,99,999
                        </R_13_GREY444>
                      </div>
                    </>
                  ),
                  subtitle: [
                    "RM 50,000.00"

                    // 'Another line of subtitle'
                  ],
                  leftBorderColor: "red" // change green
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
                            subText: "detail error"
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
                              subText: "detail error"
                            }
                          }}
                        />
                        <R_13_GREY444 style={{ marginTop: "12px" }}>
                          Maximum Daily Limit RM 99,99,999
                        </R_13_GREY444>
                      </div>
                    </>
                  ),
                  subtitle: [
                    "RM 250.00"

                    // 'Another line of subtitle'
                  ],
                  leftBorderColor: "red" // change green
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
                            subText: "detail error"
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
                              subText: "detail error"
                            }
                          }}
                        />
                        <R_13_GREY444 style={{ marginTop: "12px" }}>
                          Maximum Daily Limit RM 99,99,999
                        </R_13_GREY444>
                      </div>
                    </>
                  ),
                  subtitle: [
                    "RM 250.00"

                    // 'Another line of subtitle'
                  ],
                  leftBorderColor: "red" // change green
                }
              ]
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
                            subText: "detail error"
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
                              subText: "detail error"
                            }
                          }}
                        />
                        <R_13_GREY444 style={{ marginTop: "12px" }}>
                          Maximum Daily Limit RM 99,99,999
                        </R_13_GREY444>
                      </div>
                    </>
                  ),
                  subtitle: [
                    "RM 250.00"

                    // 'Another line of subtitle'
                  ],
                  leftBorderColor: "red" // change green
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
                            subText: "detail error"
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
                              subText: "detail error"
                            }
                          }}
                        />
                        <R_13_GREY444 style={{ marginTop: "12px" }}>
                          Maximum Daily Limit RM 99,99,999
                        </R_13_GREY444>
                      </div>
                    </>
                  ),
                  subtitle: [
                    "Current Limit RM 5,00,000"

                    // 'Another line of subtitle'
                  ],
                  leftBorderColor: "red" // change green
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
                            subText: "detail error"
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
                              subText: "detail error"
                            }
                          }}
                        />
                        <R_13_GREY444 style={{ marginTop: "12px" }}>
                          Maximum Daily Limit RM 99,99,999
                        </R_13_GREY444>
                      </div>
                    </>
                  ),
                  subtitle: [
                    "RM 50,000.00"

                    // 'Another line of subtitle'
                  ],
                  leftBorderColor: "red" // change green
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
                            subText: "detail error"
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
                              subText: "detail error"
                            }
                          }}
                        />
                        <R_13_GREY444 style={{ marginTop: "12px" }}>
                          Maximum Daily Limit RM 99,99,999
                        </R_13_GREY444>
                      </div>
                    </>
                  ),
                  subtitle: [
                    "RM 250.00"

                    // 'Another line of subtitle'
                  ],
                  leftBorderColor: "red" // change green
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
                            subText: "detail error"
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
                              subText: "detail error"
                            }
                          }}
                        />
                        <R_13_GREY444 style={{ marginTop: "12px" }}>
                          Maximum Daily Limit RM 99,99,999
                        </R_13_GREY444>
                      </div>
                    </>
                  ),
                  subtitle: [
                    "RM 250.00"

                    // 'Another line of subtitle'
                  ],
                  leftBorderColor: "red" // change green
                }
              ]
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
                            subText: "detail error"
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
                              subText: "detail error"
                            }
                          }}
                        />
                        <R_13_GREY444 style={{ marginTop: "12px" }}>
                          Maximum Daily Limit RM 99,99,999
                        </R_13_GREY444>
                      </div>
                    </>
                  ),
                  subtitle: [
                    "RM 250.00"

                    // 'Another line of subtitle'
                  ],
                  leftBorderColor: "red" // change green
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
                            subText: "detail error"
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
                              subText: "detail error"
                            }
                          }}
                        />
                        <R_13_GREY444 style={{ marginTop: "12px" }}>
                          Maximum Daily Limit RM 99,99,999
                        </R_13_GREY444>
                      </div>
                    </>
                  ),
                  subtitle: [
                    "Current Limit RM 5,00,000"

                    // 'Another line of subtitle'
                  ],
                  leftBorderColor: "red" // change green
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
                            subText: "detail error"
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
                              subText: "detail error"
                            }
                          }}
                        />
                        <R_13_GREY444 style={{ marginTop: "12px" }}>
                          Maximum Daily Limit RM 99,99,999
                        </R_13_GREY444>
                      </div>
                    </>
                  ),
                  subtitle: [
                    "RM 50,000.00"

                    // 'Another line of subtitle'
                  ],
                  leftBorderColor: "red" // change green
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
                            subText: "detail error"
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
                              subText: "detail error"
                            }
                          }}
                        />
                        <R_13_GREY444 style={{ marginTop: "12px" }}>
                          Maximum Daily Limit RM 99,99,999
                        </R_13_GREY444>
                      </div>
                    </>
                  ),
                  subtitle: [
                    "RM 250.00"

                    // 'Another line of subtitle'
                  ],
                  leftBorderColor: "red" // change green
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
                            subText: "detail error"
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
                              subText: "detail error"
                            }
                          }}
                        />
                        <R_13_GREY444 style={{ marginTop: "12px" }}>
                          Maximum Daily Limit RM 99,99,999
                        </R_13_GREY444>
                      </div>
                    </>
                  ),
                  subtitle: [
                    "RM 250.00"

                    // 'Another line of subtitle'
                  ],
                  leftBorderColor: "red" // change green
                }
              ]
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
                            subText: "detail error"
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
                              subText: "detail error"
                            }
                          }}
                        />
                        <R_13_GREY444 style={{ marginTop: "12px" }}>
                          Maximum Daily Limit RM 99,99,999
                        </R_13_GREY444>
                      </div>
                    </>
                  ),
                  subtitle: [
                    "RM 250.00"

                    // 'Another line of subtitle'
                  ],
                  leftBorderColor: "red" // change green
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
                            subText: "detail error"
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
                              subText: "detail error"
                            }
                          }}
                        />
                        <R_13_GREY444 style={{ marginTop: "12px" }}>
                          Maximum Daily Limit RM 99,99,999
                        </R_13_GREY444>
                      </div>
                    </>
                  ),
                  subtitle: [
                    "Current Limit RM 5,00,000"

                    // 'Another line of subtitle'
                  ],
                  leftBorderColor: "red" // change green
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
                            subText: "detail error"
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
                              subText: "detail error"
                            }
                          }}
                        />
                        <R_13_GREY444 style={{ marginTop: "12px" }}>
                          Maximum Daily Limit RM 99,99,999
                        </R_13_GREY444>
                      </div>
                    </>
                  ),
                  subtitle: [
                    "RM 50,000.00"

                    // 'Another line of subtitle'
                  ],
                  leftBorderColor: "red" // change green
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
                            subText: "detail error"
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
                              subText: "detail error"
                            }
                          }}
                        />
                        <R_13_GREY444 style={{ marginTop: "12px" }}>
                          Maximum Daily Limit RM 99,99,999
                        </R_13_GREY444>
                      </div>
                    </>
                  ),
                  subtitle: [
                    "RM 250.00"

                    // 'Another line of subtitle'
                  ],
                  leftBorderColor: "red" // change green
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
                            subText: "detail error"
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
                              subText: "detail error"
                            }
                          }}
                        />
                        <R_13_GREY444 style={{ marginTop: "12px" }}>
                          Maximum Daily Limit RM 99,99,999
                        </R_13_GREY444>
                      </div>
                    </>
                  ),
                  subtitle: [
                    "RM 250.00"

                    // 'Another line of subtitle'
                  ],
                  leftBorderColor: "red" // change green
                }
              ]
            }
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
   
    </div>
  );
};

export default Sprint3;
