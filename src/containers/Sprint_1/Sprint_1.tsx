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
import FooterLogo from "src/components/stickies/footerLogo/FooterLogo";
import BannerHero from "src/components/banners/bannerHero/BannerHero";
import BackButton from "src/components/buttons/backButton/BackButton";
// import StickyTimer from "src/components/headers/stickyTimer/StickyTimer";
import Profile from "src/components/headers/profile/Profile";
import StatusIcon from "src/components/assets/icons/statusIcon/StatusIcon";
import DetailSummary from "src/components/infographic/detailSummary/DetailSummary";
import Prompt from "src/components/infographic/prompt/Prompt";
import PrimaryButton from "src/components/buttons/primaryButton/PrimaryButton";
import FullButton from "src/components/buttons/fullButton/FullButton";
import InlineMessage from "src/components/infographic/inlineMessage/InlineMessage";
import LabeledIcon from "src/components/assets/icons/labeledIcon/LabeledIcon";
import ZeroResult from "src/components/infographic/zeroResault/ZeroResult";
import PieChart from "src/components/pies/PieChart";
// import AmModal from "src/components/modals/Modal";
import InputField from "src/components/inputs/checkBox/inputFields/InputFields";
import IconButtons from "src/components/buttons/iconButtons/IconButtons";
import DescriptionButton from "src/components/buttons/descriptionButton/DescriptionButton";
import SelectionTile from "src/components/selections/selectionTile/SelectionTile";
import DetailList from "src/components/lists/DetailList/DetailList";
import DetailListMonthly from "src/components/lists/DetailListMonthly/DetailListMonthly";
import Tooltip from "src/components/tooltip/Tooltip";
import Navbar from "src/components/headers/navbar/Navbar";
import VerticalTab from "src/components/verticalTabs/verticalTabs";
// import TacModal from "src/components/tacModal/tacModal";
import TacModal from "src/components/modals/tacModal/TacModal";

import Tag from "src/components/tags/Tag";
import Dock from "src/components/stickies/dock/Dock";
import SecureImage from "src/components/secureImage/SecureImage";
import FormContainer from "src/components/wrappers/formContainer/FormContainer";
import FormContainerCurved from "src/components/wrappers/formContainerCurved/FormContainerCurved";
import List from "src/components/lists/list/List";
import LinkList from "src/components/lists/linkList/LinkList";
// import ActionButtons from "src/components/buttons/actionButtons/ActionButtons";
const { B_13_ORANGE_463, B_14_WHITE, R_11_WHITE } = Paragraphs;
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
  padding-top: 5rem;
`;
const RowDiv = styled.div`
  display: flex;
  flex-direction: "row";
`;
interface Props {}
interface State {
  // isCheckboxChecked: boolean;
  hidden: boolean;
  inputValue: string;
  SelectionTileNum: number;
  SelectionTileNum1: number;
  SelectionTileNum2: number;
  IconButtonsNum: number;
  TacModalOpen: boolean;
}

class Sprint1 extends Component<Props, State> {
  state = {
    // isCheckboxChecked: false,
    hidden: true,
    inputValue: "",
    SelectionTileNum: 2,
    SelectionTileNum1: 0,
    SelectionTileNum2: 3,
    IconButtonsNum: 1,
    TacModalOpen: false
  };
  render() {
    const {
      // isCheckboxChecked,
      hidden,
      inputValue,
      SelectionTileNum,
      SelectionTileNum1,
      SelectionTileNum2,
      IconButtonsNum,
      TacModalOpen
    } = this.state;
    return (
      <div style={{ paddingTop: "4rem" }}>
        <Navbar
          icon={{ link: "/" }}
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
              link: "/sprint-1"
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
        <Title>LinkList</Title>
        <>
          <LinkList
            list={[
              {
                label: "Jan 2020 eStatement",
                link: "/"
              },
              {
                label: "Dec 2019 eStatement",
                link: "/sprint-1"
              },
              {
                label: "Nov 2019 eStatement",
                link: "/sprint-1"
              },
              {
                label: "Oct 2019 eStatement",
                rightItem: "|Compo|",
                link: "/sprint-1"
              },
              {
                label: "Sep 2019 eStatement",
                link: "/sprint-1"
              }
            ]}
          />
        </>
        <Title>List with Header inside FormContainer with statusIcon</Title>
        <CenteredDiv style={{ backgroundColor: "#EEEEEE" }}>
          <FormContainer
            statusIcon={{
              backgroundColor: "#eeeeee",
              icon: "Tick-1",
              iconColor: { top: "#94EC9B", bottom: "#5BB362" }
            }}
            children={
              <List
                header={{
                  title: "Transfer Successful",
                  subTitle: (
                    <div style={{ display: "flex" }}>
                      <p>You have successfully transferred</p>
                      <p style={{ fontWeight: 700 }}> RM 500.00 </p>
                      <p> to </p>
                      <p style={{ fontWeight: 700 }}>Adam Constantine.</p>
                    </div>
                  )
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
            }
          />
        </CenteredDiv>
        <Title>List</Title>

        <CenteredDiv>
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
                    details: ["8881019596535 | AmBank"]
                  },
                  {
                    leftLabel: "Amount",
                    rightLabel: "RM 500.00",
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
            }
          />
        </CenteredDiv>

        <Title>FormContainer curvedTab</Title>
        <CenteredDiv
          style={{
            backgroundColor: "#eeeeee"
          }}
        >
          <FormContainerCurved
            curvedTab={{
              leftTab: "New Recipient",
              rightTab: "Own/Favorite",
              leftContent: <p>left content</p>,
              rightContent: <p>right content</p>
            }}
          />
        </CenteredDiv>
        <Title>FormContainer</Title>
        <CenteredDiv>
          <FormContainer
            label={"Select your account/card type"}
            children={
              <>
                <InputField
                  type="text"
                  clearClickHandler={() => alert("clear cliked")}
                  clearIcon={true}
                  label="input label"
                  icon={{ name: "Account-2" }}
                  value={inputValue}
                  handleChange={event => {
                    this.setState({
                      inputValue: event.target.value
                    });
                  }}
                />
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
                <InputField
                  type="text"
                  clearClickHandler={() => alert("clear cliked")}
                  clearIcon={true}
                  label="input label"
                  icon={{ name: "Account-2" }}
                  value={inputValue}
                  handleChange={event => {
                    this.setState({
                      inputValue: event.target.value
                    });
                  }}
                />
              </>
            }
          />
        </CenteredDiv>
        <CenteredDiv>
          <PrimaryButton
            title="Open MenuBanner"
            onButtonClick={() => {
              this.setState({
                TacModalOpen: true
              });
            }}
          />
        </CenteredDiv>
        <TacModal
          onButtonClick={() => alert("TAC Submitted")}
          buttonTitle="Continue"
          modalIsOpen={TacModalOpen}
          handleChange={(e: any) => console.log(e.target.value)}
          label={"TAC verification"}
          value={""}
          content="TAC was sent to your registered mobile number (**** 6867). You should receive a TAC within 2 minutes."
          buttonColor={{ top: "#BDBDBD", bottom: "#BDBDBD" }}
        />
        <CenteredDiv>
          <PrimaryButton
            title="Open TacModal"
            onButtonClick={() => {
              this.setState({
                TacModalOpen: true
              });
            }}
          />
        </CenteredDiv>
        <TacModal
          onButtonClick={() => alert("TAC Submitted")}
          buttonTitle="Continue"
          modalIsOpen={TacModalOpen}
          handleChange={(e: any) => console.log(e.target.value)}
          label={"TAC verification"}
          value={""}
          content="TAC was sent to your registered mobile number (**** 6867). You should receive a TAC within 2 minutes."
          buttonColor={{ top: "#BDBDBD", bottom: "#BDBDBD" }}
        />

        <Title>Vertical tab</Title>
        <VerticalTab
          minimize={true}
          data={[
            {
              selected: false,
              onClick: (index: any) => console.log(index, "indedeede"),
              icon: {
                name: "Account-2",
                color: "#ff2626"
              },
              accountTitle: "Service/Current-Account",
              children: <p> its a first children </p>
            },
            {
              selected: true,
              onClick: (index: any) => console.log(index, "indedeede"),

              icon: {
                name: "Account-2",
                color: "#ff2626"
              },
              accountTitle: "onYekii",
              children: <p> its a second children </p>
            }
          ]}
        />

        <Title>Tooltips</Title>
        <CenteredDiv>
          <Tooltip
            tipChildren={
              <div>
                <B_14_WHITE>Tips</B_14_WHITE>
                <RowDiv style={{ paddingTop: 10 }}>
                  <B_14_WHITE>
                    Value:
                    <R_11_WHITE>
                      Accumulation of fund’s market value based on current NAV.
                      Current value is an indicative value and is to be
                      considered as reference only.
                    </R_11_WHITE>
                  </B_14_WHITE>
                </RowDiv>
                <RowDiv style={{ paddingTop: 10 }}>
                  <B_14_WHITE>
                    Invested:
                    <R_11_WHITE>
                      Accumulation of fund’s initial book value
                    </R_11_WHITE>
                  </B_14_WHITE>
                </RowDiv>
                <RowDiv style={{ paddingTop: 10 }}>
                  <B_14_WHITE>
                    P/L:
                    <R_11_WHITE>
                      Profit or loss is the difference between Market Value and
                      Book Value
                    </R_11_WHITE>
                  </B_14_WHITE>
                </RowDiv>
              </div>
            }
          ></Tooltip>
        </CenteredDiv>
        <Title>secureImage</Title>
        <CenteredDiv>
          <SecureImage
            label="Hi Adam3011, is this your security image?"
            image={
              "https://images.unsplash.com/photo-1520167112707-56e25f2d7d6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
            }
          />
        </CenteredDiv>
        <Title>Tags</Title>
        <Tag
          text="How may I help you?"
          image={{
            src:
              "https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=935&q=80"
          }}
        />
        <Tag text="How may I help you?" />
        <Title>DetailList</Title>
        <div style={{ height: 500 }}>
          <DetailList
            title="Protected by PIDM up to RM 250,000 for each depositor"
            list={[
              {
                leftText: "Total Balance",
                rightText: "RM 100,000.00"
              },
              {
                leftText: "Available Balance",
                rightText: "RM 99,980.00 <tooltip>"
              },
              {
                leftText: "Account Type",
                rightText: "TRUE Savings Account-i"
              },
              {
                leftText: "Holder Name",
                rightText: "Adam Constantine"
              },
              {
                leftText: "Currency",
                rightText: "MYR"
              }
            ]}
          />
        </div>
        <div>
          <Title>DetailList Monthly</Title>
          <DetailListMonthly
            tipChildren={
              <div>
                <B_14_WHITE>Tips</B_14_WHITE>
              </div>
            }
            selected={3}
            list={[
              {
                date: "Nov 2019",
                content: [
                  {
                    leftText: "Bonus Nov",
                    rightText: "RM 40,000.00"
                  },
                  {
                    leftText: "Your Highest Qualifier so far",
                    rightText: "RM 20,000.00(Aug 2019)",
                    tipChildren: (
                      <div>
                        <B_14_WHITE>Tips</B_14_WHITE>
                      </div>
                    )
                  },
                  {
                    leftText: "Lowest Balance of the Month",
                    rightText: "RM 60,000.00"
                  },
                  {
                    leftText: "Total Balance",
                    rightText: "RM 110,000.00"
                  },
                  {
                    leftText: "Available Balance",
                    rightText: "RM 9,980.00"
                  },
                  {
                    leftText: "Account Type",
                    rightText: "eFlex"
                  },
                  {
                    leftText: "Holder Name",
                    rightText: "Adam Constantine"
                  },
                  {
                    leftText: "Currency",
                    rightText: "MYR"
                  }
                ]
              },
              {
                date: "Dec 2019",
                content: [
                  {
                    leftText: "Bonus Rate Qualifier Dec",
                    rightText: "RM 10,000.00",
                    tipChildren: (
                      <div>
                        <B_14_WHITE>Tips</B_14_WHITE>
                      </div>
                    )
                  },
                  {
                    leftText: "Your Highest Qualifier so far",
                    rightText: "RM 10,000.00(Aug 2019)"
                  },
                  {
                    leftText: "Lowest Balance of the Month",
                    rightText: "RM 10,000.00"
                  },
                  {
                    leftText: "Total Balance",
                    rightText: "RM 10,000.00"
                  },
                  {
                    leftText: "Available Balance",
                    rightText: "RM 9,980.00"
                  },
                  {
                    leftText: "Account Type",
                    rightText: "eFlex"
                  },
                  {
                    leftText: "Holder Name",
                    rightText: "Adam Constantine"
                  },
                  {
                    leftText: "Currency",
                    rightText: "MYR"
                  }
                ]
              },
              {
                date: "Jan 2020",
                content: [
                  {
                    leftText: "Bonus Rate Jan",
                    rightText: "RM 1,000.00"
                  },
                  {
                    leftText: "Your Highest Qualifier so far",
                    rightText: "RM 1,000.00(Aug 2019)"
                  },
                  {
                    leftText: "Lowest Balance of the Month",
                    rightText: "RM 40,000.00"
                  },
                  {
                    leftText: "Total Balance",
                    rightText: "RM 1,000.00",
                    tipChildren: (
                      <div>
                        <B_14_WHITE>Tips</B_14_WHITE>
                      </div>
                    )
                  },
                  {
                    leftText: "noOfUnsuccessfulTransfer",
                    rightText: "444,440"
                  },
                  {
                    leftText: "Available Balance",
                    rightText: "RM 500,0.00"
                  },
                  {
                    leftText: "scheduledEndDate",
                    rightText: "End 12 Jun 2019"
                  }
                ]
              },
              {
                date: "Feb 2020",
                content: [
                  {
                    leftText: "Bonus Rate Feb",
                    rightText: "RM 10,000.00"
                  },
                  {
                    leftText: "Your Highest Qualifier so far",
                    rightText: "RM 10,000.00(Aug 2019)"
                  },
                  {
                    leftText: "Lowest Balance of the Month",
                    rightText: "RM 10,000.00"
                  },
                  {
                    leftText: "Total Balance",
                    rightText: "RM 10,000.00"
                  },
                  {
                    leftText: "Available Balance",
                    rightText: "RM 9,980.00"
                  },
                  {
                    leftText: "Account Type",
                    rightText: "eFlex"
                  },
                  {
                    leftText: "Holder Name",
                    rightText: "Adam Constantine",
                    tipChildren: (
                      <div>
                        <B_14_WHITE>Tips</B_14_WHITE>
                      </div>
                    )
                  },
                  {
                    leftText: "Currency",
                    rightText: "MYR"
                  }
                ]
              },
              {
                date: "Mrc 2020",
                content: [
                  {
                    leftText: "Bonus Mrc",
                    rightText: "RM 80,000.00",
                    tipChildren: (
                      <div>
                        <B_14_WHITE>Tips</B_14_WHITE>
                      </div>
                    )
                  },
                  {
                    leftText: "Your Highest Qualifier so far",
                    rightText: "RM 60,000.00(Aug 2019)"
                  },
                  {
                    leftText: "Lowest Balance of the Month",
                    rightText: "RM 20,000.00"
                  },
                  {
                    leftText: "Total Balance",
                    rightText: "RM 70,000.00"
                  },
                  {
                    leftText: "Available Balance",
                    rightText: "RM 9,980.00"
                  },
                  {
                    leftText: "Account Type",
                    rightText: "eFlex"
                  },
                  {
                    leftText: "Holder Name",
                    rightText: "Adam Constantine"
                  },
                  {
                    leftText: "Currency",
                    rightText: "MYR"
                  }
                ]
              }
            ]}
          />
        </div>
        <Title>SelectionTile</Title>
        <div style={{ paddingBottom: 20 }}>
          <LabeledIcon
            rightLabel="AmBank"
            icon={{ name: "Account", color: "#000000", size: 30 }}
          />
        </div>
        <SelectionTile
          onTileClick={(item, index) => {
            this.setState({ SelectionTileNum: index });
            alert(`${item.accountTitle} with indexOf ${index} clicked`);
          }}
          selected={SelectionTileNum}
          list={[
            {
              accountTitle: "Saving Account A",
              accountNumber: "RM 2,000.00"
            },
            {
              accountTitle: "Ambank AmMoneyLine AmMoneyLine",
              accountNumber: "RM 2,000.00"
            },
            {
              accountTitle: "Ambank BonusLink Visa",
              accountNumber: "RM 2,000.00"
            },
            {
              accountTitle: "Saving Account B",
              accountNumber: "RM 2,000.00"
            },
            {
              accountTitle: "Saving Account C",
              accountNumber: "RM 2,000.00"
            }
          ]}
        />

        <SelectionTile
          onTileClick={(item, index) => {
            this.setState({ SelectionTileNum1: index });
            alert(`${item.accountTitle} with indexOf ${index} clicked`);
          }}
          selected={SelectionTileNum1}
          list={[
            {
              avatar: {
                name: "Myself Adam Constantine",
                src:
                  "https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=935&q=80"
              }
            },
            {
              avatar: {
                name: "Christina Azalea Rossie",
                initials: "CA",
                initialsBg: "#f1f1f1"
              }
            },
            {
              avatar: {
                name: "Ahmad Kassim Azmi",
                initials: "AK"
              }
            },
            {
              avatar: {
                name: "Kurniawan Suriawati",
                initials: "KS"
              }
            },
            {
              avatar: {
                name: "Deevan Raja",
                initials: "DR"
              }
            },
            {
              avatar: {
                name: "Lee Chong Wei",
                initials: "LC"
              }
            }
          ]}
        />
        <SelectionTile
          onTileClick={(item, index) => {
            this.setState({ SelectionTileNum2: index });
            alert(`${item.accountTitle} with indexOf ${index} clicked`);
          }}
          selected={SelectionTileNum2}
          list={[
            {
              accountTitle: "Saving Account A",
              accountNumber: "RM 2,000.00",
              amount: "RM 10,301.50"
            },
            {
              accountTitle: "Ambank AmMoneyLine AmMoneyLine",
              accountNumber: "RM 2,000.00",
              amount: " RM 11,555.00"
            },
            {
              accountTitle: "Ambank BonusLink Visa",
              accountNumber: "RM 2,000.00",
              amount: " RM 55,555.00"
            },
            {
              accountTitle: "Saving Account B",
              accountNumber: "RM 2,000.00",
              amount: " RM 33,555.50"
            },
            {
              accountTitle: "Saving Account C",
              accountNumber: "RM 2,000.00",
              amount: " RM 245,555.50"
            }
          ]}
        />
        <Title>DescriptionButton</Title>
        <DescriptionButton
          onButtonClick={(item, index) => {
            alert(`${item.title} with indexOf ${index} clicked`);
          }}
          list={[
            { title: "Pay Minimum Payment" },
            { title: "Pay Minimum Payment", amount: "RM 1,000.00" },
            {
              title: "Pay Unpaid Statement Balance",
              amount: "RM 2,000.00",
              icon: { name: "Alert", color: "#ff2626" }
            }
          ]}
        />
        <Title>IconButtons</Title>
        <IconButtons
          onButtonClick={(item, index) => {
            this.setState({
              IconButtonsNum: index
            });
            alert(`${item} with index of ${index} clicked`);
          }}
          selected={IconButtonsNum}
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
          clearClickHandler={() => alert("clear cliked")}
          clearIcon={true}
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
          type="text"
          label="input label"
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
          clearClickHandler={() => alert("clear cliked")}
          clearIcon={true}
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
        <CenteredDiv>
          <AMTabs
            defaultIndex={1}
            titles={["Login", "Security", "Contact Us"]}
            contents={[
              <ZeroResult
                text={`We can’t seem to find any result for 
              “Damansara Heights”`}
              />,
              <PieChart
                pieLabels={["Red", "Green", "Yellow"]}
                pieDataSets={{
                  data: [300, 50, 100],
                  backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
                }}
              />,
              "Contact Us"
            ]}
          />
        </CenteredDiv>
        <Title>PieChart</Title>
        <PieChart
          pieLabels={["Red", "Green", "Yellow"]}
          pieDataSets={{
            data: [300, 50, 100],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
          }}
        />

        <Title>ZeroResult</Title>
        <ZeroResult
          text={`We can’t seem to find any result for 
          “Damansara Heights”`}
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
          // testId="testId"
          // isChecked={isCheckboxChecked}
          // name="checkBox"
          // onCheckClick={(event, testId) => {
          //   this.setState({
          //     isCheckboxChecked: !isCheckboxChecked
          //   });
          //   alert(`${event.target.checked} ${event.target.name} ${testId}`);
          // }}
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

        {/* <Title>StickyTimer</Title>
        <StickyTimer /> */}

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
        <Dock
        // list={[
        //   {
        //     name: "Health",
        //     color: "#ffffff",
        //     backgroundColor: {
        //       top: "#FFC5A2",
        //       bottom: "#EA5702"
        //     },
        //     text: "Cash Advance"
        //   },
        //   {
        //     name: "Health",
        //     color: "#ffffff",
        //     backgroundColor: {
        //       top: "#FFC5A2",
        //       bottom: "#EA5702"
        //     },
        //     text: "Cash Advance"
        //   },
        //   {
        //     name: "Health",
        //     color: "#ffffff",
        //     backgroundColor: {
        //       top: "#FFC5A2",
        //       bottom: "#EA5702"
        //     },
        //     text: "Cash Advance"
        //   },
        //   {
        //     name: "Health",
        //     color: "#ffffff",
        //     backgroundColor: {
        //       top: "#FFC5A2",
        //       bottom: "#EA5702"
        //     },
        //     text: "Cash Advance"
        //   },
        //   {
        //     name: "Health",
        //     color: "#ffffff",
        //     backgroundColor: {
        //       top: "#FFC5A2",
        //       bottom: "#EA5702"
        //     },
        //     text: "Cash Advance"
        //   }
        // ]}
        />

        {/* <AmModal /> */}
      </div>
    );
  }
}

export default Sprint1;
