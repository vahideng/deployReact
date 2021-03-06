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
import BackButton from "src/components/buttons/backButton/BackButton";
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
import AmModal from "src/components/modals/Modal";
import InputField from "src/components/inputs/inputFields/InputFields";
import IconButtons from "src/components/buttons/iconButtons/IconButtons";
import DescriptionButton from "src/components/buttons/descriptionButton/DescriptionButton";
import SelectionTile from "src/components/selections/selectionTile/SelectionTile";
import DetailList from "src/components/lists/DetailList/DetailList";
import DetailListMonthly from "src/components/lists/DetailListMonthly/DetailListMonthly";
import Tooltip from "src/components/tooltip/Tooltip";
import Navbar from "src/components/headers/navbar/Navbar";
import VerticalTab from "src/components/verticalTabs/VerticalTabs";
import Tag from "src/components/tags/Tag";
import Dock from "src/components/stickies/dock/Dock";
import SecureImage from "src/components/secureImage/SecureImage";
import FormContainer from "src/components/wrappers/formContainer/FormContainer";
import FormContainerCurved from "src/components/wrappers/formContainerCurved/FormContainerCurved";
import List from "src/components/lists/list/List";
import LinkList from "src/components/lists/linkList/LinkList";
import TacModal from "src/components/modals/tacModal/TacModal";
import MenuBanner from "src/components/modals/menuBanner/MenuBanner";
import FloatingButton from "src/components/buttons/floatingButton/FloatingButton";
import StickyTimer from "src/components/modals/stickyTimer/StickyTimer";
import TransactionList from "src/components/transactionList/TransactionList";
import NavigationButtons from "src/components/buttons/navigationButtons/NavigationButtons";
import ToggleButton from "src/components/buttons/toggleButton/ToggleButton";
import SearchBar from "src/components/inputs/searchBar/SearchBar";
import AccountsList from "src/components/lists/AccountsList/AccountsList";
import TransactionIconList from "src/components/lists/TransactionIconList/TransactionIconList";
import CardList from "src/components/lists/CardList/CardList";
import TileListView from "src/components/lists/TileListView/TileListView";

import { Redirect } from "react-router-dom";
import Box from "src/components/wrappers/box/Box";
import IconTest from "src/assets/iconTest/IconTest";

const {
  B_13_ORANGE_463,
  B_14_WHITE,
  R_11_WHITE,
  R_13_BLACK,
  B_24_BLACK,
} = Paragraphs;
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
interface Props { }
interface State {
  isCheckboxChecked: boolean;
  hidden: boolean;
  inputValue: string;
  SelectionTileNum: number;
  SelectionTileNum1: number;
  SelectionTileNum2: number;
  IconButtonsNum: number;
  TacModalOpen: boolean;
  StickyModalOpen: boolean;
  generalModalOpen: boolean;
  verticalActiveTab: any;
  toggled: boolean;
  tacInactive: boolean;
  homRedirect: boolean;
  tacClear: boolean;
  tacClearActiveStatus: boolean;
  actionBtnStatus: boolean;
}

class Sprint1 extends Component<Props, State> {
  state = {
    isCheckboxChecked: false,
    hidden: true,
    inputValue: "",
    SelectionTileNum: 2,
    SelectionTileNum1: 0,
    SelectionTileNum2: 3,
    IconButtonsNum: 1,
    TacModalOpen: false,
    StickyModalOpen: false,
    generalModalOpen: false,
    verticalActiveTab: 3,
    toggled: false,
    homRedirect: false,
    tacInactive: true,
    tacClear: false,
    tacClearActiveStatus: false,
    actionBtnStatus: true,
    rightSelect: true,
  };
  render() {
    const {
      isCheckboxChecked,
      hidden,
      inputValue,
      SelectionTileNum,
      SelectionTileNum1,
      SelectionTileNum2,
      IconButtonsNum,
      TacModalOpen,
      StickyModalOpen,
      generalModalOpen,
      verticalActiveTab,
      toggled,
      homRedirect,
      tacInactive,
      tacClear,
      tacClearActiveStatus,
    } = this.state;

    if (homRedirect === true) {
      return <Redirect to="/" />;
    }
    // if (sprint_2Direct === true) {
    //   return <Redirect to="/sprint-2" />;
    // }

    return (
      <div style={{ paddingTop: "4rem" }}>
        <AmModal
          testId={"testId"}
          zIndex={-1} // testing zIndex prop
          modalIsOpen={generalModalOpen}
          modalChildren={
            <FormContainer
              testId={"testId"}
              children={
                <List
                  testId={"testId"}
                  header={{
                    title: "Transfer Successful",
                    subTitle: (
                      <div style={{ display: "flex" }}>
                        <span>You have successfully transferred</span>
                        <p style={{ fontWeight: 700 }}> RM 500.00 </p>
                        <span> to </span>
                        <p style={{ fontWeight: 700 }}>Adam Constantine.</p>
                      </div>
                    ),
                  }}
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
                      details: [
                        "2998202013",
                        "Available Balance: RM 10,301.50",
                      ],
                    },
                  ]}
                />
              }
            />
          }
        />
        <Title>FormContainer curvedTab</Title>
        <CenteredDiv
          style={{
            backgroundColor: "#eeeeee",
          }}
        >
          <FormContainerCurved
            testId={"testId"}
            // contentStyle={{ paddingRight: "0rem"}}
            curvedTab={{
              leftTab: "New Recipient",
              rightTab: "Own/Favorite",
              rightSelected: true,
              onLeftClick: () => {
                alert("Left Clicked");
              },
              onRightClick: () => {
                alert("Right Clicked");
              },
              leftContent: (
                <div style={{ padding: "1.5rem" }}>
                  <IconButtons
                    testId={"testId"}
                    onButtonClick={(item, index) => {
                      this.setState({
                        IconButtonsNum: index,
                      });
                      alert(`${item} with index of ${index} clicked`);
                    }}
                    selected={IconButtonsNum}
                    label="Transfer To"
                    list={[
                      {
                        text: "Account",
                        icon: {
                          name: "Account",
                        },
                      },
                      {
                        text: "Card2",
                        icon: {
                          name: "Card2",
                        },
                      },
                      {
                        text: "Account",
                        icon: {
                          name: "Account",
                        },
                      },
                      {
                        text: "Card2",
                        icon: {
                          name: "Card2",
                        },
                      },
                      {
                        text: "Account",
                        icon: {
                          name: "Account",
                        },
                      },
                    ]}
                  />

                  <div style={{ padding: "2rem 0" }}>
                    <InputField
                      type="text"
                      clearClickHandler={() => alert("clear cliked")}
                      clearIcon={true}
                      label="input label"
                      icon={{ name: "Account-2" }}
                      value={inputValue}
                      handleChange={(event) => {
                        this.setState({
                          inputValue: event.target.value,
                        });
                      }}
                    />
                  </div>
                  <InputField
                    type="text"
                    label="input label"
                    value={inputValue}
                    handleChange={(event) => {
                      this.setState({
                        inputValue: event.target.value,
                      });
                    }}
                  />
                </div>
              ),
              rightContent: (
                <div style={{ padding: "1.5rem" }}>
                  <SelectionTile
                    tileStyle={{ margin: ".5rem" }}
                    onTileClick={(item, index) => {
                      this.setState({ SelectionTileNum1: index });
                      alert(
                        `${item.accountTitle} with indexOf ${index} clicked`
                      );
                    }}
                    selected={SelectionTileNum1}
                    list={[
                      {
                        avatar: {
                          name: "Myself Adam Constantine",
                          src:
                            "https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=935&q=80",
                        },
                      },
                      {
                        avatar: {
                          name: "Christina Azalea Rossie",
                          initials: "CA",
                          initialsBg: "#f1f1f1",
                        },
                      },
                      {
                        children: (
                          <img src={images.common.sampleLogo} width={150} />
                        ),
                      },
                      {
                        avatar: {
                          name: "Kurniawan Suriawati",
                          initials: "KS",
                        },
                      },
                      {
                        avatar: {
                          name: "Deevan Raja",
                          initials: "DR",
                        },
                      },
                      {
                        avatar: {
                          name: "Lee Chong Wei",
                          initials: "LC",
                        },
                      },
                    ]}
                  />
                </div>
              ),
            }}
          />
        </CenteredDiv>
        <Title>Icons</Title>
        <IconTest />
        <Title>TransactionList</Title>
        <CenteredDiv style={{ backgroundColor: "white", padding: 50 }}>
          <TransactionList
            testId={"testId"}
            data={[
              {
                flag: {
                  color: "red",
                  text: "Successful",
                },
                leftLabel: "DoItNow tr DF",
                middle: {
                  title: "this is sample long data fot testing purposes only",
                  content: [
                    {
                      leftLabel: "firstLeft",
                      rightLabel: "firstRight",
                    },
                    {
                      leftLabel: "secondtLeft",
                      rightLabel: "secondtRight",
                    },
                    {
                      leftLabel: "thirdLeft",
                      rightLabel: "thirdRight",
                    },
                  ],
                },
                rightLabel: {
                  iconName: "Plus",
                  iconColor: "#36A03E",
                  prefix: "RM",
                  content: "18.00000000",
                },
              },
              {
                flag: {
                  color: "green",
                  text: "Successful",
                },
                leftLabel: "doLaterNow tr DF",
                middle: {
                  title: "this is sample long data fot testing purposes only",
                  content: [
                    {
                      leftLabel:
                        "this is sample long data fot testing purposes",
                      rightLabel: "16 Jul 2020",
                    },
                    {
                      leftLabel: "HairShore Shanti",
                      rightLabel: "10 Jul 2018",
                    },
                  ],
                },
                rightLabel: {
                  iconName: "Minus",
                  iconColor: "#ff2626",
                  prefix: "RM",
                  content: "38.00",
                },
              },
            ]}
            title="Today"
          />
        </CenteredDiv>
        <Navbar
          testId={"testId"}
          scrolledIcon={{
            name: "LOGO",
            color: "#ff2626",
          }}
          icon={{
            onIconClick: () => {
              alert("click");
            },
          }}
          profile={{
            greeting: "Good Morning",
            name: "Adam Constantine",
            initials: "HB",
            initialsBg: "#ff2626",
            alt: "AVATAR",
            src:
              "https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=935&q=80",
          }}
          rightButtons={[
            {
              iconName: "Inbox",
              onButtonClick: () => {
                alert("Inbox-Clicked");
                this.setState({ homRedirect: true });
              },
            },
            {
              iconName: "Settings",
              onButtonClick: () => {
                alert("Settings-Clicked");
                this.setState({ homRedirect: true });
              },
            },
            {
              iconName: "logout",
              onButtonClick: () => {
                alert("logout-Clicked");
                this.setState({ homRedirect: true });
              },
            },
          ]}
        />
        <Title>LinkList</Title>
        <CenteredDiv style={{ backgroundColor: "#EEEEEE" }}>
          <FormContainer
            children={
              <div style={{ paddingTop: "2rem" }}>
                <LinkList
                  testId={"testId"}
                  list={[
                    {
                      label: "Jan 2020 eStatement",
                      onListClick: () => alert("item-1-clicked"),
                    },
                    {
                      label: "Dec 2019 eStatement",
                      onListClick: () => alert("item-2-clicked"),
                    },
                    {
                      label: "Nov 2019 eStatement",
                      onListClick: () => alert("item-3-clicked"),
                    },
                    {
                      label: "Oct 2019 eStatement",
                      rightItem: (
                        <ToggleButton
                          testId={"testId"}
                          value={toggled}
                          onTogglePress={() => {
                            this.setState({ toggled: !toggled });
                          }}
                          toggleOffLabel="NO"
                          toggleOnLabel="YES"
                          disabled={false}
                        />
                      ),
                    },
                    {
                      label: "Sep 2019 eStatement",
                      onListClick: () => alert("item-5-clicked"),
                    },
                  ]}
                />
              </div>
            }
          />
        </CenteredDiv>
        <Title>TransactionIconList</Title>
        <CenteredDiv>
          <div style={{ width: "57.1875em" }}>
            <TransactionIconList
              testId={"testId"}
              list={[
                {
                  date: "Today",
                  expandedIndexes: [0, 1],
                  transactions: [
                    {
                      icon: "Duitnow2",
                      iconBgColor: "#dedede",
                      // iconColor: "white",
                      iconSize: 25,
                      label1: "TRANSFER TO",
                      label2: "SEEN OPTICS ",
                      statusLabel: "SUCCESSFUL",
                      statusLabelColor: "#36A03E",
                      changeLabel: "-",
                      changeLabelColor: "#F73C4A",
                      amount: "RM 236.78",
                      actionLabel: "Repeat",
                      actionIcon: "Repeat",
                      hideButtons: false,
                      onActionButtonClick: () => alert("Repeat"),
                      details: [
                        {
                          label1: "From Account",
                          value1: "15806389266 - Savings Account A",
                          label2: "Recipient Reference",
                          value2: "May - Rental",
                          actionLabel: "Add to Fav",
                          actionIcon: "Love",
                          onActionButtonClick: () => alert("Fav"),
                        },
                        {
                          label1: "",
                          value1: "",
                          label2: "Other Details",
                          value2: "-",
                          hideButtons: true,
                          // actionLabel: 'View Receipt',
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
                      statusLabel: "Accept for Proceesing",
                      statusLabelColor: "#36A03E",
                      changeLabel: "-",
                      changeLabelColor: "#F73C4A",
                      amount: "RM 236.78",
                      actionLabel: "Repeat",
                      actionIcon: "Repeat",
                      hideButtons: true,
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
                          hideButtons: true,
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
                      hideButtons: true,
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
                          hideButtons: true,
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
        <Title>TileListView</Title>
        <CenteredDiv>
          <TileListView

            testId={"testId"}
            list={[
              {
                accountName:
                  "TRUE Savings AmBank Account-i Australia Singapore and alot",
                accountNickName: "Visa Card Classic",
                accountNumber: "123456890",
                statusLabel: "3 Unit Trust Funds",
                statusLabelColor: "#36A03E",
                amount: "RM 1700,140,160",
                percentageVal: "6.6",
                percentageStatus: "Plus",
              },
              {
                accountName:
                  "TRUE Savings AmBank Account-i Australia Singapore and alot",
                accountNickName: "Visa Card Classic",
                accountNumber: "123456890",
                statusLabel: "3 Unit Trust Funds",
                statusLabelColor: "#36A03E",
                amount: "RM 10000",
                percentageVal: "6.6",
                percentageStatus: "Plus",
              },
              {
                accountName:
                  "TRUE Savings AmBank Account-i Australia Singapore and alot",
                accountNickName: "Visa Card Classic",
                accountNumber: "123456890",
                statusLabel: "3 Unit Trust Funds",
                statusLabelColor: "#36A03E",
                amount: "RM 1,000.000.000.00",
                percentageVal: "6.6",
                percentageStatus: "Plus",
              },
              {
                accountName: "Foreign Currency Account",
                accountNumber: "79429284",
                statusLabel: "INQUIRY ONLY ALLOWED",
                statusLabelColor: "#FF2626",
                countryFlagImage: images.common.countryFlag,
                amount: "AUD 1,392",
                equivalentAmount: "RM 4,583",
                percentageVal: "6.6",
                percentageStatus: "Plus",
              },
              {
                icon: "Plus",
                iconColor: "#36A03E",
                iconSize: 30,
                accountName: "Conversion Account",
                accountNumber: "20717524",
                statusLabel: "ACTIVE",
                amount: "RM 1,000.000.00",
                amountStatus: "Minus",
                percentageVal: "6.6",
                percentageStatus: "Plus",
              },
              {
                accountName: "Conversion Account",
                accountNumber: "20717524",
                statusLabel: "ACTIVE",
                amount: "RM 9,000",
                amountStatus: "Plus",
                percentageVal: "6.6",
                percentageStatus: "Plus",
              },
              {
                cardLogo:
                  "https://images.unsplash.com/photo-1558981822-0c0c5b070026?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
                accountName: "Conversion Account",
                accountNumber: "20717524",
                statusLabel: "RESTRICTED ACCESS",
                statusLabelColor: "#FF2626",
                amount: "RM 0.00",
                percentageVal: "6.6",
                percentageStatus: "Plus",
              },
              {
                cardLogo: images.common.masterCard,
                accountName: "AmBank TRUE VISA (Supp)",
                accountNumber: "5000 0220 5023 5678",
                statusLabel: "ACTIVE",
                statusLabelColor: "#36A03E",
                amount: "RM 5,000",
              },
              {
                icon: "system-info",
                iconColor: "#FF2626",
                iconSize: 20,
                accountName: "AmBank Advance Card",
                accountNumber: "3062 2401 2019 5678",
                statusLabel: "OVERDUE",
                statusLabelColor: "#FF2626",
                amount: "RM 50",
              },
              {
                cardLogo: images.common.masterCard,
                icon: "system-info",
                iconColor: "#FFA463",
                iconSize: 20,
                accountName: "AmBank Advance Card",
                accountNumber: "3062 2401 2019 5678",
                statusLabel: "ACTIVE",
                statusLabelColor: "#36A03E",
                statusLabel2: "DUE SOON",
                statusLabel2Color: "#FFA463",
                amount: "RM 50",
              },
            ]}
            onTileClick={(item, index) => {
              alert(JSON.stringify(item));
              alert(index);
            }}
          />
        </CenteredDiv>
        <Title>LinkList no container</Title>
        <>
          <LinkList
            list={[
              {
                label: "Jan 2020 eStatement",
                onListClick: () => alert("item-1-clicked"),
              },
              {
                label: "Dec 2019 eStatement",
                onListClick: () => alert("item-2-clicked"),
              },
              {
                label: "Nov 2019 eStatement",
                onListClick: () => alert("item-3-clicked"),
              },
              {
                label: "Oct 2019 eStatement",
                rightItem: (
                  <ToggleButton
                    value={toggled}
                    onTogglePress={() => {
                      this.setState({ toggled: !toggled });
                    }}
                    toggleOffLabel="NO"
                    toggleOnLabel="YES"
                    disabled={false}
                  />
                ),
              },
              {
                label: "Sep 2019 eStatement",
                onListClick: () => alert("item-5-clicked"),
              },
            ]}
          />
        </>
        <Title>List with Header inside FormContainer with statusIcon</Title>
        <div style={{ backgroundColor: "#EEEEEE", padding: 100 }}>
          <FormContainer
            statusIcon={{
              icon: { name: "Register-1" },
              iconColor: { top: "#94EC9B", bottom: "#5BB362" },
              // outerIconColor: "red"
              // image: {
              //   src: images.common.amyIcon,
              //   alt: "logo",
              // },
            }}
            children={
              <List
                header={{
                  title: "Transfer Successful",
                  titleStyle: { paddingBottom: 0 },
                  subTitle: (
                    <div style={{ display: "flex" }}>
                      <span>You have successfully transferred</span>
                      <p style={{ fontWeight: 700 }}> RM 500.00 </p>
                      <span> to </span>
                      <p style={{ fontWeight: 700 }}>Adam Constantine.</p>
                    </div>
                  ),
                }}
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
            }
          />
        </div>
        <Title>FloatingButton</Title>
        <div>
          <div style={{ position: "fixed", bottom: 15, right: "15%" }}>
            <FloatingButton
              onButtonClick={() =>
                window.scroll({ top: 0, behavior: "smooth" })
              }
            />
          </div>

          <FloatingButton darkButton={true} testId={"testId"} />
        </div>
        <Title>List</Title>
        <CenteredDiv>
          <FormContainer
            children={
              <List
                header={{
                  // icon: {
                  //   name: "LOGO",
                  //   color: "#ff2626",
                  //   iconText: "Review & Confirm",
                  // },
                  image: {
                    name: "https://images.unsplash.com/photo-1516876902004-79f4bd1cb0dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
                    style: { width: "3rem" },
                    imageText: "Review & Confirm"
                  }
                }}
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
            }
          />
        </CenteredDiv>
        <Title>FormContainer curvedTab</Title>
        <CenteredDiv
          style={{
            backgroundColor: "#eeeeee",
          }}
        >
          <FormContainerCurved
            testId={"testId"}
            curvedTab={{
              leftTab: "New Recipient",
              rightTab: "Own/Favorite",

              onLeftClick: () => {
                alert("onLeftClick");
              },
              onRightClick: () => {
                alert("onRightClick");
              },
              rightSelected: true,
              leftContent: (
                <div>
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
                        details: [
                          "2998202013",
                          "Available Balance: RM 10,301.50",
                        ],
                      },
                    ]}
                  />
                </div>
              ),
              rightContent: (
                <div>
                  <LinkList
                    list={[
                      {
                        label: "Jan 2020 eStatement",
                        onListClick: () => alert("item-1-clicked"),
                      },
                      {
                        label: "Dec 2019 eStatement",
                        onListClick: () => alert("item-2-clicked"),
                      },
                      {
                        label: "Nov 2019 eStatement",
                        onListClick: () => alert("item-3-clicked"),
                      },
                      {
                        label: "Oct 2019 eStatement",
                        rightItem: (
                          <ToggleButton
                            value={toggled}
                            onTogglePress={() => {
                              this.setState({ toggled: !toggled });
                            }}
                            toggleOffLabel="NO"
                            toggleOnLabel="YES"
                            disabled={false}
                          />
                        ),
                      },
                      {
                        label: "Sep 2019 eStatement",
                        onListClick: () => alert("item-5-clicked"),
                      },
                    ]}
                  />
                </div>
              ),
            }}
          />
        </CenteredDiv>
        <Title>FormContainer</Title>
        <CenteredDiv style={{ flexDirection: "column", alignItems: "center" }}>
          <FormContainer
            childrenWrapperStyle={{ padding: "1rem 2rem" }}
            label={"Select your account/card type"}
            showTooltip={false}
            onTooltipClicked={() => alert("clicked!!")}
            tooltip={
              <div>
                <p style={{ color: "#ffffff" }}>
                  Select your account/card type
                </p>
              </div>
            }
            children={
              <div>
                <SelectionTile
                  tileStyle={{ margin: ".5rem" }}
                  onTileClick={(item, index) => {
                    this.setState({ SelectionTileNum1: index });
                    alert(
                      `${item.accountTitle} with indexOf ${index} clicked`
                    );
                  }}
                  selected={SelectionTileNum1}
                  list={[
                    {
                      avatar: {
                        name: "Myself Adam Constantine",
                        src:
                          "https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=935&q=80",
                      },
                    },
                    {
                      avatar: {
                        name: "Christina Azalea Rossie",
                        initials: "CA",
                        initialsBg: "#f1f1f1",
                      },
                    },
                    {
                      children: (
                        <img src={images.common.sampleLogo} width={150} />
                      ),
                    },
                    {
                      avatar: {
                        name: "Kurniawan Suriawati",
                        initials: "KS",
                      },
                    },
                    {
                      avatar: {
                        name: "Deevan Raja",
                        initials: "DR",
                      },
                    },
                    {
                      avatar: {
                        name: "Lee Chong Wei",
                        initials: "LC",
                      },
                    },
                  ]}
                />
              </div>
            }
          />
          <br />
          <FormContainer
            childrenWrapperStyle={{ padding: "1rem 2rem" }}
            label={"Select your account/card type"}
            showTooltip={false}
            onTooltipClicked={() => alert("clicked!!")}
            tooltip={
              <div>
                <p style={{ color: "#ffffff" }}>
                  Select your account/card type
                </p>
              </div>
            }
            children={
              <div>
                <InputField
                  notValid={true}
                  errorMessage={{
                    testId: "testId",
                    errorText: "The TAC is incorrect",
                    subText: "Please try again.",
                  }}
                  type="password"
                  clearClickHandler={() => {
                    console.log("clicked");
                  }}
                  clearIcon={true}
                  label="input label"
                  icon={{ name: "Account-2" }}
                  value={inputValue}
                  handleChange={(event) => {
                    this.setState({
                      inputValue: event.target.value,
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
                      paddingLeft: 5,
                    }}
                  >
                    Terms & Conditions
                  </a>
                  of AmOnline
                </p>
                <InputField
                  disabled={true}
                  type="text"
                  clearClickHandler={() => alert("clear clicked")}
                  clearIcon={true}
                  label="input label"
                  icon={{ name: "Account-2" }}
                  value={inputValue}
                  handleChange={(event) => {
                    this.setState({
                      inputValue: event.target.value,
                    });
                  }}
                />
              </div>
            }
          />
        </CenteredDiv>
        <MenuBanner
          testId={"testId"}
          notification={true}
          content={
            <div
              style={{
                paddingLeft: "2rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CardList
                list={[
                  {
                    cardName: "AmBank World MasterCard",
                    cardNumber: "2379 4793 4797 7493",
                    amount: "RM 7,398",
                    expiryDate: "EXP 12/21",
                    colorLeft: "#5F73E9",
                    colorRight: "#131E5B",
                    active: false,
                    activeLabel: "ACTIVE",
                    selected: false,
                  },
                  {
                    cardName: "AmBank TRUE VISA (Supp)",
                    cardNumber: "2379 4793 4797 7493",
                    amount: "RM 13,356",
                    expiryDate: "EXP 12/21",
                    colorLeft: "#798E96",
                    colorRight: "#31434A",
                    active: false,
                    activeLabel: "",
                    selected: false,
                  },
                  {
                    cardName: "AmBank Platinum Card",
                    cardNumber: "2379 4793 4797 7493",
                    amount: "RM 50,293",
                    expiryDate: "EXP 12/21",
                    cardVendorLogo: images.common.UnionPay_logo,
                    colorLeft: "#6C3F4F",
                    colorRight: "#3D1A1A",
                    active: true,
                    activeLabel: "ACTIVE",
                    selected: true,
                  },
                  {
                    cardName: "AmBank World MasterCard",
                    cardNumber: "2379 4793 4797 7493",
                    amount: "RM 7,398",
                    expiryDate: "EXP 12/21",
                    colorLeft: "#5F73E9",
                    colorRight: "#131E5B",
                    active: false,
                    activeLabel: "ACTIVE",
                    selected: false,
                  },
                  {
                    cardName: "AmBank TRUE VISA (Supp)",
                    cardNumber: "2379 4793 4797 7493",
                    amount: "RM 13,356",
                    expiryDate: "EXP 12/21",
                    colorLeft: "#798E96",
                    colorRight: "#31434A",
                    active: false,
                    activeLabel: "",
                    selected: false,
                  },
                  {
                    cardName: "AmBank Platinum Card",
                    cardNumber: "2379 4793 4797 7493",
                    amount: "RM 3,897,576",
                    expiryDate: "EXP 12/21",
                    cardVendorLogo: images.common.UnionPay_logo,
                    colorLeft: "#989898",
                    colorRight: "#000000",
                    active: false,
                    activeLabel: "",
                    selected: false,
                  },
                  {
                    cardName: "AmBank TRUE VISA (Supp)",
                    cardNumber: "2379 4793 4797 7493",
                    amount: "RM 13,356",
                    expiryDate: "EXP 12/21",
                    colorLeft: "#798E96",
                    colorRight: "#31434A",
                    active: false,
                    activeLabel: "",
                    selected: false,
                  },
                ]}
                onCardTileClick={(item, index) => {
                  alert(JSON.stringify(item));
                  alert(index);
                }}
              />
            </div>
          }
        />
        <Title>Box</Title>
        <Box
          title={"Login"}
          leftTitle={"LeftTitle"}
          rightTitle={"rightTitle"}
          onSelect={(obj: any) => console.log(obj)}
          tabTitles={["Security", "Login", "Contact Us"]}
          content={[
            <div>
              <SecureImage
                testId="secure_image_testid"
                image={images.common.SampleSecureImage}
              />
            </div>,
            <>
              <InputField
                type="text"
                clearClickHandler={() => alert("clear")}
                clearIcon={false}
                label="Username"
                icon={{ name: "Account-2" }}
                value={""}
                handleChange={(event) => {
                  alert(event);
                }}
              />
              <div style={{ width: "40px", paddingTop: 30 }}>
                <TextButton
                  testId="testId"
                  buttonText="Forgot username/password?"
                  onTextClick={(id) => {
                    alert(`${id} clicked`);
                  }}
                />
              </div>
            </>,
          ]}
        ></Box>
        <TacModal
          // zIndex={-1}
          onCloseClick={() => {
            this.setState({
              TacModalOpen: false,
            });
          }}
          responsive={true}
          maxLength={6}
          clearIcon={inputValue === "" ? tacClear : !tacClear}
          clearClickHandler={() => {
            this.setState({ inputValue: "" });
          }}
          // disabledInput={true}
          inActiveMessage={{
            title: "Your profile is inactive.",
            text: "TAC verification is required to activate your profile.",
          }}
          inActive={tacInactive}
          testId={"testId"}
          onButtonClick={() => {
            this.setState({ tacInactive: !tacInactive });
          }}
          modalIsOpen={TacModalOpen}
          label={"TAC verification"}
          value={inputValue}
          handleChange={(e: any) => {
            this.setState({
              inputValue: e.target.value,
            });
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
          buttonStyle={{ width: "10rem" }}
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
            this.setState({
              TacModalOpen: true,
            });
          }}
        />
        <PrimaryButton
          title="Open TacModal Status"
          onButtonClick={() => {
            this.setState({
              TacModalOpen: true,
              tacClearActiveStatus: true,
            });
          }}
        />
        {/* {console.log(this.state.StickyModalOpen)} */}
        <StickyTimer
          // zIndex={-1}
          testId={"testId"}
          closeTimeoutMS={1000}
          contentLabel="example"
          textBefore="Transaction will expire in"
          onCLoseButtonCLick={() => alert("clicked")}
          modalIsOpen={StickyModalOpen}
          expirationTime={"05:00"}
          expirationText="Seconds"
          text={
            "You will receive an AmSecure notification on your primary registered phone to approve or reject this transaction. Please ensure that you have downloaded/updated the latest version of AmOnline App and have a working internet connection on your phone."
          }
          children={
            <PrimaryButton
              title="Open StickyTimer"
              onButtonClick={() => {
                this.setState({
                  StickyModalOpen: true,
                });
              }}
            />
          }
          showCrossIcon={true}
        />
        <PrimaryButton
          title="Open StickyTimer"
          onButtonClick={() => {
            this.setState({
              StickyModalOpen: true,
            });
          }}
        />
        <PrimaryButton
          title="Open GeneralModal"
          onButtonClick={() => {
            this.setState({
              generalModalOpen: true,
            });
          }}
        />
        <Title>Modals</Title>
        <div
          style={{
            padding: "40px 0",
            height: 350,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <TacModal
            // disabledInput={true}
            // zIndex={-1}
            onCloseClick={() => {
              this.setState({
                TacModalOpen: false,
              });
            }}
            maxLength={6}
            clearIcon={inputValue === "" ? tacClear : !tacClear}
            clearClickHandler={() => {
              this.setState({ inputValue: "" });
            }}
            inActiveMessage={{
              title: "Your profile is inactive.",
              text: "TAC verification is required to activate your profile.",
            }}
            inActive={tacInactive}
            testId={"testId"}
            onButtonClick={() => {
              this.setState({ tacInactive: !tacInactive });
            }}
            modalIsOpen={TacModalOpen}
            label={"TAC verification"}
            value={inputValue}
            handleChange={(e: any) => {
              this.setState({
                inputValue: e.target.value,
              });
            }}
            notValid={inputValue === "" ? true : false}
            errorMessage={{
              testId: "testId",
              errorText: "The TAC is incorrect",
              subText: "Please try again.",
            }}
            content={
              "TAC was sent to your registered mobile number (**** 6867) You should receive a tac within two minuets"
            }
            // link={{
            //   text: "Did not receive TAC? Request new",
            //   onLinkClick: () => {
            //     alert("Tac link");
            //   },
            // }}
            buttonColor={{
              top: !tacInactive ? "#BDBDBD" : "#FD8585",
              bottom: !tacInactive ? "#BDBDBD" : "#FF2222",
            }}
            buttonTitle={tacInactive ? "Request TAC" : "Continue"}
            buttonStyle={{ width: "10rem" }}
            activeStatus={tacClearActiveStatus}
            activeStatusChild={
              <div style={{ display: "flex" }}>
                <Prompt
                  testId={"testId"}
                  iconColor={{ top: "#81D988", bottom: "#5BB362" }}
                  icon={{ name: "Tick-1", color: "#ffffff", size: 20 }}
                  text="Your profile is successfully activated."
                  small
                />
              </div>
            }
          />

          <PrimaryButton
            width={"40rem"}
            title="Open TacModal"
            onButtonClick={() => {
              this.setState({
                TacModalOpen: true,
              });
            }}
          />
          <PrimaryButton
            width={400}
            title="Open TacModal Status"
            onButtonClick={() => {
              this.setState({
                TacModalOpen: true,
                tacClearActiveStatus: true,
              });
            }}
          />
          <PrimaryButton
            width={"100%"}
            title="Open StickyTimer"
            onButtonClick={() => {
              this.setState({
                StickyModalOpen: true,
              });
            }}
          />
          <PrimaryButton
            title="Open GeneralModal"
            onButtonClick={() => {
              this.setState({
                generalModalOpen: true,
              });
            }}
          />
        </div>
        <Title>Vertical tab</Title>
        <CenteredDiv>
          <VerticalTab
            // tabHeight="300px"
            // WrapperStyle={{ backgroundColor: 'red' }}
            testId={"testId"}
            selectedBorderColor="#FD8585"
            minimize={false}
            defaultIndex={verticalActiveTab}
            data={[
              {
                selected: verticalActiveTab === 0 ? true : false,
                onClick: (index: any) =>
                  this.setState({ verticalActiveTab: index }),
                icon: {
                  name: "Duitnow2",
                  size: 30,
                },
                image: {
                  source: images.common.sadAmyIcon,
                  imageStyle: { width: 30 },
                },
                accountTitle: "Savings/Current Accounts",
                children: (
                  <div
                    style={{
                      display: "flex",
                      padding: 30,
                      flexDirection: "column",
                    }}
                  >
                    <B_13_ORANGE_463>CHILD-1</B_13_ORANGE_463>
                    <R_13_BLACK>Your outstanding</R_13_BLACK>
                    <B_24_BLACK>RM 55,555.00</B_24_BLACK>
                    <R_13_BLACK style={{ marginBottom: 16 }}>
                      5 credit cards
                    </R_13_BLACK>
                    <TileListView
                      list={[
                        {
                          accountName: "Conversion",
                          accountNickName: "Term Cov",
                          accountNumber: "20717524",
                          statusLabel: "ACTIVE",
                          statusLabelColor: "#36A03E",
                          amount: "- RM 2,000",
                        },
                        {
                          accountName: "Conversion Account",
                          accountNumber: "20717524",
                          statusLabel: "RESTRICTED ACCESS",
                          statusLabelColor: "#FF2626",
                          amount: "RM 0.00",
                        },
                        {
                          cardLogo: images.common.masterCard,
                          accountName: "AmBank TRUE VISA (Supp)",
                          accountNumber: "5000 0220 5023 5678",
                          statusLabel: "ACTIVE",
                          statusLabelColor: "#36A03E",
                          amount: "RM 5,000",
                        },
                        {
                          icon: "system-info",
                          iconColor: "#FF2626",
                          iconSize: 20,
                          accountName: "AmBank Advance Card",
                          accountNumber: "3062 2401 2019 5678",
                          statusLabel: "OVERDUE",
                          statusLabelColor: "#FF2626",
                          amount: "RM 50",
                        },
                        {
                          cardLogo: images.common.masterCard,
                          icon: "system-alert",
                          iconColor: "#FFA463",
                          iconSize: 20,
                          accountName: "AmBank Advance Card",
                          accountNumber: "3062 2401 2019 5678",
                          statusLabel: "ACTIVE",
                          statusLabelColor: "#36A03E",
                          statusLabel2: "DUE SOON",
                          statusLabel2Color: "#FFA463",
                          amount: "RM 50",
                        },
                      ]}
                      onTileClick={(item) => alert(JSON.stringify(item))}
                    />
                  </div>
                ),
              },
              {
                selected: verticalActiveTab === 1 ? true : false,
                onClick: (index: any) =>
                  this.setState({ verticalActiveTab: index }),
                icon: {
                  name: "Car",
                  color: "#444444",
                },
                accountTitle: "DescriptionButton",
                children: (
                  <div
                    style={{
                      width: "43rem",
                      padding: 30,
                    }}
                  >
                    <B_13_ORANGE_463>CHILD-2</B_13_ORANGE_463>
                    <DescriptionButton
                      testId={"testId"}
                      onButtonClick={(item, index) => {
                        alert(`${item.title} with indexOf ${index} clicked`);
                      }}
                      list={[
                        { title: "Pay Minimum Payment", disabled: true },
                        { title: "Pay Minimum Payment", amount: "RM 1,000.00" },
                        {
                          title: "Pay Unpaid Statement Balance",
                          amount: "RM 2,000.00",
                          icon: { name: "system-alert", color: "#ff2626" },
                        },
                      ]}
                    />
                  </div>
                ),
              },
              {
                selected: verticalActiveTab === 2 ? true : false,
                onClick: (index: any) =>
                  this.setState({ verticalActiveTab: index }),

                icon: {
                  name: "Account3",
                  color: "#ff2626",
                  size: 30,
                },
                accountTitle: "Fixed/Term Deposits",
                children: (
                  <div
                    style={{
                      display: "flex",
                      paddingTop: 30,
                      flexDirection: "column",
                    }}
                  >
                    <B_13_ORANGE_463>CHILD-3</B_13_ORANGE_463>
                    <R_13_BLACK>Your outstanding</R_13_BLACK>
                    <B_24_BLACK>RM 55,555.00</B_24_BLACK>
                    <R_13_BLACK style={{ marginBottom: 16 }}>
                      5 credit cards
                    </R_13_BLACK>
                    <TileListView
                      list={[
                        {
                          accountName: "TRUE Savings Account-i",
                          accountNumber: "123456890",
                          statusLabel: "ACTIVE",
                          statusLabelColor: "#36A03E",
                          amount: "RM 10,135",
                        },
                        {
                          accountName: "Foreign Currency Account",
                          accountNumber: "79429284",
                          statusLabel: "INQUIRY ONLY ALLOWED",
                          statusLabelColor: "#FF2626",
                          countryFlagImage: images.common.countryFlag,
                          amount: "AUD 1,392",
                          equivalentAmount: "RM 4,583",
                        },
                        {
                          accountName: "Conversion Account",
                          accountNumber: "20717524",
                          statusLabel: "ACTIVE",
                          statusLabelColor: "#36A03E",
                          amount: "- RM 2,000",
                        },
                        {
                          accountName: "Conversion Account",
                          accountNumber: "20717524",
                          statusLabel: "RESTRICTED ACCESS",
                          statusLabelColor: "#FF2626",
                          amount: "RM 0.00",
                        },
                        {
                          cardLogo: images.common.masterCard,
                          accountName: "AmBank TRUE VISA (Supp)",
                          accountNumber: "5000 0220 5023 5678",
                          statusLabel: "ACTIVE",
                          statusLabelColor: "#36A03E",
                          amount: "RM 5,000",
                        },
                        {
                          icon: "system-info",
                          iconColor: "#FF2626",
                          iconSize: 20,
                          accountName: "AmBank Advance Card",
                          accountNumber: "3062 2401 2019 5678",
                          statusLabel: "OVERDUE",
                          statusLabelColor: "#FF2626",
                          amount: "RM 50",
                        },
                        {
                          cardLogo: images.common.masterCard,
                          icon: "system-info",
                          iconColor: "#FFA463",
                          iconSize: 20,
                          accountName: "AmBank Advance Card",
                          accountNumber: "3062 2401 2019 5678",
                          statusLabel: "ACTIVE",
                          statusLabelColor: "#36A03E",
                          statusLabel2: "DUE SOON",
                          statusLabel2Color: "#FFA463",
                          amount: "RM 50",
                        },
                      ]}
                      onTileClick={(item) => alert(JSON.stringify(item))}
                    />
                  </div>
                ),
              },
              {
                selected: verticalActiveTab === 3 ? true : false,
                onClick: (index: any) =>
                  this.setState({ verticalActiveTab: index }),

                icon: {
                  name: "Account-2",
                  color: "#ff2626",
                },
                accountTitle: "Loans/ Financing",
                children: <B_13_ORANGE_463>CHILD-4</B_13_ORANGE_463>,
              },
              {
                selected: verticalActiveTab === 4 ? true : false,
                onClick: (index: any) =>
                  this.setState({ verticalActiveTab: index }),

                icon: {
                  name: "Account-2",
                  color: "#ff2626",
                },
                accountTitle: "Investment",
                children: <B_13_ORANGE_463>CHILD-5</B_13_ORANGE_463>,
              },
              {
                selected: verticalActiveTab === 5 ? true : false,
                onClick: (index: any) =>
                  this.setState({ verticalActiveTab: index }),

                icon: {
                  name: "Account-2",
                  color: "#ff2626",
                },
                accountTitle: "Insurance",
                children: <B_13_ORANGE_463>CHILD-6</B_13_ORANGE_463>,
              },
              {
                selected: verticalActiveTab === 6 ? true : false,
                onClick: (index: any) =>
                  this.setState({ verticalActiveTab: index }),

                icon: {
                  name: "Account-2",
                  color: "#ff2626",
                },
                accountTitle: "Debit Card",
                children: <B_13_ORANGE_463>CHILD-7</B_13_ORANGE_463>,
              },
            ]}
          />
        </CenteredDiv>
        <Title>VerticalTab with background image</Title>
        <CenteredDiv>
          <VerticalTab
            // tabWidth={"12rem"}
            selectedBorderColor="#FD8585"
            minimize={false}
            data={[
              {
                selected: false,
                onClick: (index: any) => alert(index),
                icon: {
                  name: "Card",
                  color: "#ff2626",
                },
                accountTitle: "Credit Cards",
                bgImage: {
                  background:
                    "https://images.unsplash.com/photo-1502101872923-d48509bff386?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3289&q=80",
                  title: "INVESTMENT",
                  subTitle: "Freedom to invest in Unit Trust is now yours",
                  overlay: true,
                  overlayStyle: { backgroundColor: 'rgba(0,0,0,0.5)' },
                },
                children: (
                  <div
                    style={{
                      padding: "1rem",
                      width: "42.68rem",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <p>
                        Its hands were holograms that altered to match the
                        convolutions of the car’s floor. The semiotics of the
                        room where Case waited. Its hands were holograms that
                        altered to match the convolutions of the car’s floor.
                        The semiotics of the room where Case waited. Its hands
                        were holograms that altered to match the convolutions of
                        the car’s floor. The semiotics of the room where Case
                        waited. Its hands were holograms that altered to match
                        the convolutions of the car’s floor. The semiotics of
                        the room where Case waited. Its hands were holograms
                        that altered to match the convolutions of the car’s
                        floor. The semiotics of the room where Case waited.
                        car’s floor. The semiotics of the room where Case
                        waited. Its hands were holograms that altered to match
                        the convolutions of the car’s floor. The semiotics of
                        the room where Case waited. Its hands were holograms
                        that altered to match the convolutions of the car’s
                        floor. The semiotics of the room where Case waited.
                      </p>
                      <TextButton
                        buttonText="LEARN MORE >"
                        onTextClick={() => { }}
                      />
                    </div>
                    <PrimaryButton
                      onButtonClick={() => { }}
                      title="Apply Now"
                      buttonColor={{ top: "#f1f1f1", bottom: "#BDBDBD" }}
                    />
                  </div>
                ),
              },
              {
                selected: true,
                onClick: (index: any) => alert(index),
                icon: {
                  name: "Account3",
                  color: "green",
                  size: 20,
                },
                accountTitle: "Accounts",
                accountTitle2: "& Card Settings",
                children: (
                  <div
                    style={{
                      display: "flex",
                      paddingTop: 30,
                      flexDirection: "column",
                    }}
                  >
                    <R_13_BLACK>Your outstanding</R_13_BLACK>
                    <B_24_BLACK>RM 55,555.00</B_24_BLACK>
                    <R_13_BLACK style={{ marginBottom: 16 }}>
                      5 credit cards
                    </R_13_BLACK>
                    <TileListView
                      list={[
                        {
                          accountName: "TRUE Savings Account-i",
                          accountNumber: "123456890",
                          statusLabel: "ACTIVE",
                          statusLabelColor: "#36A03E",
                          amount: "RM 10,135",
                        },
                        {
                          accountName: "Foreign Currency Account",
                          accountNumber: "79429284",
                          statusLabel: "INQUIRY ONLY ALLOWED",
                          statusLabelColor: "#FF2626",
                          countryFlagImage: images.common.countryFlag,
                          amount: "AUD 1,392",
                          equivalentAmount: "RM 4,583",
                        },
                        {
                          accountName: "Conversion Account",
                          accountNumber: "20717524",
                          statusLabel: "ACTIVE",
                          statusLabelColor: "#36A03E",
                          amount: "- RM 2,000",
                        },
                        {
                          accountName: "Conversion Account",
                          accountNumber: "20717524",
                          statusLabel: "RESTRICTED ACCESS",
                          statusLabelColor: "#FF2626",
                          amount: "RM 0.00",
                        },
                        {
                          cardLogo: images.common.masterCard,
                          accountName: "AmBank TRUE VISA (Supp)",
                          accountNumber: "5000 0220 5023 5678",
                          statusLabel: "ACTIVE",
                          statusLabelColor: "#36A03E",
                          amount: "RM 5,000",
                        },
                        {
                          icon: "system-info",
                          iconColor: "#FF2626",
                          iconSize: 20,
                          accountName: "AmBank Advance Card",
                          accountNumber: "3062 2401 2019 5678",
                          statusLabel: "OVERDUE",
                          statusLabelColor: "#FF2626",
                          amount: "RM 50",
                        },
                        {
                          cardLogo: images.common.masterCard,
                          icon: "system-info",
                          iconColor: "#FFA463",
                          iconSize: 20,
                          accountName: "AmBank Advance Card",
                          accountNumber: "3062 2401 2019 5678",
                          statusLabel: "ACTIVE",
                          statusLabelColor: "#36A03E",
                          statusLabel2: "DUE SOON",
                          statusLabel2Color: "#FFA463",
                          amount: "RM 50",
                        },
                      ]}
                      onTileClick={(item) => alert(JSON.stringify(item))}
                    />
                  </div>
                ),
              },
            ]}
          />
        </CenteredDiv>
        <CenteredDiv>
          <VerticalTab
            // tabHeight="300px"
            tabHeight={'75px'}
            selectedBorderColor="#FD8585"
            minimize={true}
            data={[
              {
                selected: true,
                onClick: (index: any) => alert(index),
                icon: {
                  name: "Account3",
                  size: 20,
                  color: "#ff2626",
                },
                accountTitle: "Credit Cards",

                children: (
                  <div style={{ display: "flex", padding: "1rem" }}>
                    <AccountsList
                      testId={"testId"}
                      list={[
                        {
                          label1: "Foreign Current Account",
                          label2: "79429284",
                          amount: "RM 10,648.50",
                          selected: false,
                        },
                        {
                          label1: "Foreign Current Account",
                          label2: "79429284",
                          amount: "RM 10,648.50",
                          selected: false,
                        },
                        {
                          label1: "Foreign Current Account",
                          label2: "79429284",
                          amount: "RM 10,648.50",
                          defaultLabel: "DEFAULT",
                          default: true,
                          statusLabel: "ACTIVE",
                          statusLabelColor: "#36A03E",
                          selected: true,
                        },
                        {
                          label1: "Foreign Current Account",
                          label2: "79429284",
                          amount: "RM 10,648.50",
                          statusLabel: "ACTIVE",
                          statusLabelColor: "#36A03E",
                          selected: false,
                        },
                      ]}
                      onAccountTileClick={(item, index) => {
                        alert(JSON.stringify(item));
                        alert(index);
                      }}
                    />
                    <div style={{ width: 700 }}>
                      <AMTabs
                        titlesStyle={{ paddingLeft: "80px", paddingRight: "80px" }}
                        defaultIndex={1}
                        onSelect={(obj: any) => {
                          alert(obj);
                        }}
                        titles={[
                          "Transactions",
                          "Details",
                          "Settings",
                          "Estatments",
                          "Direct Debit"



                        ]}
                        contents={[
                          <div style={{ padding: "2rem" }}>
                            <SearchBar
                              testId={"testId"}
                              clearClickHandler={() => alert("clear clicked")}
                              searchIconClickHandler={() =>
                                alert("Search Icon clicked")
                              }
                              placeholder={"Search"}
                              value={this.state.inputValue}
                              handleChange={(event) => {
                                this.setState({
                                  inputValue: event.target.value,
                                });
                              }}
                            />
                          </div>,

                          <ZeroResult
                            testId={"testId"}
                            text={`We can’t seem to find any result for “Damansara Heights”`}
                          />,
                          <PieChart
                            pieLabels={["Fixed Income 60%", "Equity 10%"]}
                            pieDataSets={{
                              data: [60, 10],
                              backgroundColor: ["#7AB497", "#FFA463"],
                            }}
                          />,
                          "Contact Us",
                        ]}
                      />
                    </div>
                  </div>
                ),
              },
              {
                selected: false,
                onClick: (index: any) => alert(index),
                icon: {
                  name: "Card",
                  color: "#ff2626",
                },
                accountTitle: "Credit Cards",

                children: (
                  <div style={{ display: "flex" }}>
                    <AccountsList
                      list={[
                        {
                          label1: "Foreign Current Account",
                          label2: "79429284",
                          amount: "RM 10,648.50",
                          selected: false,
                        },
                        {
                          label1: "Foreign Current Account",
                          label2: "79429284",
                          amount: "RM 10,648.50",
                          selected: false,
                        },
                        {
                          label1: "Foreign Current Account",
                          label2: "79429284",
                          amount: "RM 10,648.50",
                          defaultLabel: "DEFAULT",
                          default: true,
                          statusLabel: "ACTIVE",
                          statusLabelColor: "#36A03E",
                          selected: true,
                        },
                        {
                          label1: "Foreign Current Account",
                          label2: "79429284",
                          amount: "RM 10,648.50",
                          statusLabel: "ACTIVE",
                          statusLabelColor: "#36A03E",
                          selected: false,
                        },
                      ]}
                      onAccountTileClick={(item, index) => {
                        alert(JSON.stringify(item));
                        alert(index);
                      }}
                    />
                    <div style={{ width: 700, padding: "2rem" }}>
                      <AMTabs
                        defaultIndex={2}
                        titles={[
                          "Transactions",
                          "Settings",
                          "Security",
                          "Contact Us",
                        ]}
                        titlesStyle={{ backgroundColor: "red" }}
                        contents={[
                          <SearchBar
                            clearClickHandler={() => alert("clear clicked")}
                            searchIconClickHandler={() =>
                              alert("Search Icon clicked")
                            }
                            placeholder={"Search"}
                            value={this.state.inputValue}
                            handleChange={(event) => {
                              this.setState({
                                inputValue: event.target.value,
                              });
                            }}
                          />,
                          <ZeroResult
                            text={`We can’t seem to find any result for
              “Damansara Heights”`}
                          />,
                          <PieChart
                            testId={"testId"}
                            pieLabels={["Fixed Income 60%", "Equity 10%"]}
                            pieDataSets={{
                              data: [60, 10],
                              backgroundColor: ["#7AB497", "#FFA463"],
                            }}
                          />,
                          "Contact Us",
                        ]}
                      />
                    </div>
                  </div>
                ),
              },
            ]}
          />
        </CenteredDiv>
        <Title>Tooltips</Title>
        <CenteredDiv>
          <Tooltip
            onBlur={() => console.log("onclicked")}
            showTooltip={true}
            testId={"testId"}
            tipChildren={
              <div>
                <B_14_WHITE>Tips</B_14_WHITE>
                <RowDiv style={{ paddingTop: 10 }}>
                  <span>
                    Value:
                    <R_11_WHITE>
                      Accumulation of fund’s market value based on current NAV.
                      Current value is an indicative value and is to be
                      considered as reference only.
                    </R_11_WHITE>
                  </span>
                </RowDiv>
                <RowDiv style={{ paddingTop: 10 }}>
                  <span>
                    Invested:
                    <R_11_WHITE>
                      Accumulation of fund’s initial book value
                    </R_11_WHITE>
                  </span>
                </RowDiv>
                <RowDiv style={{ paddingTop: 10 }}>
                  <span>
                    P/L:
                    <R_11_WHITE>
                      Profit or loss is the difference between Market Value and
                      Book Value
                    </R_11_WHITE>
                  </span>
                </RowDiv>
              </div>
            }
          />
        </CenteredDiv>
        <Title>NavigationButtons</Title>
        <CenteredDiv>
          <NavigationButtons
            testId={"testId"}
            onLeftButtonPress={() => alert("Left Button Clicked")}
            onRightButtonPress={() => alert("Right Button Clicked")}
            leftButtonDisable={true}
            rightButtonDisable={false}
            label={"1 of 5"}
          />
        </CenteredDiv>
        <Title>ToggleButtons</Title>
        <CenteredDiv>
          <ToggleButton
            value={toggled}
            onTogglePress={() => {
              this.setState({ toggled: !toggled });
            }}
            toggleOffLabel="NO"
            toggleOnLabel="YES"
            disabled={false}
          />
        </CenteredDiv>
        <Title>SearchBar/Filter</Title>
        <CenteredDiv style={{ backgroundColor: "#f5f5f5", width: "600px" }}>
          <SearchBar
            clearClickHandler={() => alert("clear clicked")}
            searchIconClickHandler={() => alert("Search Icon clicked")}
            placeholder={"Search"}
            value={this.state.inputValue}
            handleChange={(event) => {
              this.setState({
                inputValue: event.target.value,
              });
            }}
            autoFocus={false}
            showFilter={true}
            filterOptions={[
              { label: "Successful", value: "Successful", selected: true },
              { label: "Unsuccessful", value: "Unsuccessful", selected: true },
              {
                label: "Pending Verification",
                value: "Pending Verification",
                selected: false,
              },
            ]}
            onFilterOptionClick={(obj) => alert(JSON.stringify(obj))}
            selectedFilters={[
              {
                label: "Successful",
                value: "Successful",
                closeIconClickHandler: () => alert("clear Successful"),
              },
              {
                label: "Unsuccessful",
                value: "Unsuccessful",
                closeIconClickHandler: () => alert("clear Unsuccessful"),
              },
            ]}
          />
        </CenteredDiv>
        <Title>CardList</Title>
        <CenteredDiv>
          <CardList
            list={[
              {
                cardName: "AmBank TRUE VISA (Supp)",
                cardNumber: "2379 4793 4797 7493",
                amount: "RM 13,356",
                expiryDate: "EXP 12/21",
                colorLeft: "#798E96",
                colorRight: "#31434A",
                active: false,
                activeLabel: "",
                selected: false,
              },
              {
                cardName: "AmBank Platinum Card Classic Two Lines Title",
                cardNumber: "2379 4793 4797 7493",
                amount: "RM 50,293",
                expiryDate: "EXP 12/21",
                cardVendorLogo: images.common.UnionPay_logo,
                colorLeft: "#6C3F4F",
                colorRight: "#3D1A1A",
                active: true,
                activeLabel: "ACTIVE",
                selected: true,
              },
              {
                cardName: "AmBank World MasterCard",
                cardNumber: "2379 4793 4797 7493",
                amount: "RM 7,398",
                expiryDate: "EXP 12/21",
                colorLeft: "#5F73E9",
                colorRight: "#131E5B",
                active: false,
                activeLabel: "ACTIVE",
                selected: false,
              },
              {
                cardName: "AmBank Platinum Card",
                cardNumber: "2379 4793 4797 7493",
                amount: "RM 3,897,576",
                expiryDate: "EXP 12/21",
                cardVendorLogo: images.common.UnionPay_logo,
                colorLeft: "#989898",
                colorRight: "#000000",
                active: false,
                activeLabel: "",
                selected: false,
              },
            ]}
            onCardTileClick={(item, index) => {
              alert(JSON.stringify(item));
              alert(index);
            }}
          />
        </CenteredDiv>
        <Title>AccountsList</Title>
        <CenteredDiv>
          <AccountsList
            list={[
              {
                label1: "Foreign Current Account",
                label2: "79429284",
                amount: "RM 10,648.50",
                selected: false,
              },
              {
                label1: "Foreign Current Account",
                label2: "79429284",
                amount: "RM 10,648.50",
                selected: false,
                countryFlagImage: images.common.countryFlag,
                convertedAmount: "RM 50.000.00",
              },
              {
                label1: "Foreign Current Account",
                label2: "79429284",
                amount: "RM 10,648.50",
                label3: "Matures 20 Jan 2020",
                defaultLabel: "DEFAULT",
                default: true,
                statusLabel: "ACTIVE",
                statusLabelColor: "#36A03E",
                selected: true,
                convertedAmount: "RM 100.000.00",
                countryFlagImage: images.common.countryFlag,
              },
              {
                label1: "Foreign Current Account",
                label2: "79429284",
                amount: "RM 10,648.50",
                statusLabel: "ACTIVE",
                statusLabelColor: "#36A03E",
                selected: false,
              },
            ]}
            onAccountTileClick={(item, index) => {
              alert(JSON.stringify(item));
              alert(index);
            }}
          />
        </CenteredDiv>
        <Title>secureImage</Title>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <SecureImage
            testId={"testId"}
            label="Hi Adam3011, is this your security image?"
            image={
              "https://images.unsplash.com/photo-1520167112707-56e25f2d7d6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
            }
          />
          <SecureImage
            testId={"testId"}
            label="Hi Adam3011, is this your security image?"
            image={
              "https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2167&q=80"
            }
          />
          <SecureImage
            testId={"testId"}
            label="Hi Adam3011, is this your security image?"
            image={
              "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
            }
          />
          <SecureImage
            testId={"testId"}
            label="Hi Adam3011, is this your security image?"
            image={
              "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80"
            }
          />
        </div>
        <Title>Tags</Title>
        <Tag
          testId={"testId"}
          text="How may I help you?"
          image={{
            src:
              "https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=935&q=80",
          }}
        />
        <Tag text="How may I help you?" />
        <Tag
          text={"Different styling"}
          styles={{ background: "#444444" }}
          textStyles={{ fontSize: "11px", fontWeight: 400 }}
        />
        <Title>DetailList</Title>
        <div style={{ height: 500 }}>
          <DetailList
            testId={"testId"}
            title="Protected by PIDM up to RM 250,000 for each depositor"
            list={[
              {
                leftText: "Total Balance",
                rightText: "RM 100,000.00",
              },
              {
                leftText: "Available Balance",
                rightText: "RM 99,980.00 <tooltip>",
              },
              {
                leftText: "Account Type",
                rightText: "TRUE Savings Account-i",
                showTooltip: true,
                onTooltipClicked: () => alert("clicked"),
                tipChildren: (
                  <div>
                    <B_14_WHITE>Tips</B_14_WHITE>
                  </div>
                ),
              },
              {
                leftText: "Holder Name",
                rightText: "Adam Constantine",
              },
              {
                leftText: "Currency",
                rightText: "MYR",
              },
            ]}
          />
        </div>
        <div>
          <Title>DetailList Monthly</Title>
          <DetailListMonthly
            divider={2}
            testId={"testId"}
            showTooltip={true}
            onTooltipClicked={() => alert("clicked!!")}
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
                    rightText: "RM 40,000.00",
                  },
                  {
                    leftText: "Your Highest Qualifier so f 200000",
                    rightText: "RM 20,000.00(Aug 20100)",
                    showTooltip: true,
                    onTooltipClicked: () => alert("clicked!!"),
                    tipChildren: (
                      <div>
                        <B_14_WHITE>Tips</B_14_WHITE>
                      </div>
                    ),
                  },
                  {
                    leftText: "Lowest Balance of the Month",
                    rightText: "RM 60,000.00",
                  },
                  {
                    leftText: "Total Balance",
                    rightText: "RM 110,000.00",
                  },
                  {
                    leftText: "Available Balance",
                    rightText: "RM 9,980.00",
                  },
                  {
                    leftText: "Account Type",
                    rightText: "eFlex",
                  },
                  {
                    leftText: "Holder Name",
                    rightText: "Adam Constantine",
                  },
                  {
                    leftText: "Currency",
                    rightText: "MYR",
                  },
                ],
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
                    ),
                  },
                  {
                    leftText: "Your Highest Qualifier so far",
                    rightText: "RM 10,000.00(Aug 2019)",
                  },
                  {
                    leftText: "Lowest Balance of the Month",
                    rightText: "RM 10,000.00",
                  },
                  {
                    leftText: "Total Balance",
                    rightText: "RM 10,000.00",
                  },
                  {
                    leftText: "Available Balance",
                    rightText: "RM 9,980.00",
                  },
                  {
                    leftText: "Account Type",
                    rightText: "eFlex",
                  },
                  {
                    leftText: "Holder Name",
                    rightText: "Adam Constantine",
                  },
                  {
                    leftText: "Currency",
                    rightText: "MYR",
                  },
                ],
              },
              {
                date: "Jan 2020",
                content: [
                  {
                    leftText: "Bonus Rate Jan",
                    rightText: "RM 1,000.00",
                  },
                  {
                    leftText: "Your Highest Qualifier so far",
                    rightText: "RM 1,000.00(Aug 2019)",
                  },
                  {
                    leftText: "Lowest Balance of the Month",
                    rightText: "RM 40,000.00",
                  },
                  {
                    leftText: "Total Balance",
                    rightText: "RM 1,000.00",
                    tipChildren: (
                      <div>
                        <B_14_WHITE>Tips</B_14_WHITE>
                      </div>
                    ),
                  },
                  {
                    leftText: "noOfUnsuccessfulTransfer",
                    rightText: "444,440",
                  },
                  {
                    leftText: "Available Balance",
                    rightText: "RM 500,0.00",
                  },
                  {
                    leftText: "scheduledEndDate",
                    rightText: "End 12 Jun 2019",
                  },
                ],
              },
              {
                date: "Feb 2020",
                content: [
                  {
                    leftText: "Bonus Rate Feb",
                    rightText: "RM 10,000.00",
                  },
                  {
                    leftText: "Your Highest Qualifier so far",
                    rightText: "RM 10,000.00(Aug 2019)",
                  },
                  {
                    leftText: "Lowest Balance of the Month",
                    rightText: "RM 10,000.00",
                  },
                  {
                    leftText: "Total Balance",
                    rightText: "RM 10,000.00",
                  },
                  {
                    leftText: "Available Balance",
                    rightText: "RM 9,980.00",
                  },
                  {
                    leftText: "Account Type",
                    rightText: "eFlex",
                  },
                  {
                    leftText: "Holder Name vahid",
                    rightText: "Adam Constantine",
                    showTooltip: true,
                    onTooltipClicked: () => alert("clicked!!"),

                    tipChildren: (
                      <div>
                        <B_14_WHITE>Tips</B_14_WHITE>
                      </div>
                    ),
                  },
                  {
                    leftText: "Currency",
                    rightText: "MYR",
                  },
                ],
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
                    ),
                  },
                  {
                    leftText: "Your Highest Qualifier so far",
                    rightText: "RM 60,000.00(Aug 2019)",
                  },
                  {
                    leftText: "Lowest Balance of the Month",
                    rightText: "RM 20,000.00",
                  },
                  {
                    leftText: "Total Balance",
                    rightText: "RM 70,000.00",
                  },
                  {
                    leftText: "Available Balance",
                    rightText: "RM 9,980.00",
                  },
                  {
                    leftText: "Account Type",
                    rightText: "eFlex",
                  },
                  {
                    leftText: "Holder Name",
                    rightText: "Adam Constantine",
                  },
                  {
                    leftText: "Currency",
                    rightText: "MYR",
                  },
                ],
              },
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
          testId={"testId"}
          onTileClick={(item, index) => {
            this.setState({ SelectionTileNum: index });
            alert(`${item.accountTitle} with indexOf ${index} clicked`);
          }}
          selected={SelectionTileNum}
          list={[
            {
              children: (
                <p>
                  Is it more important for something to be dynamic or to be
                  dynamic or to be dynamic or to be customer-directed? What does
                  the term 'e-tailers' really mean?
                </p>
              ),
            },
            {
              children: <p>Is it more important</p>,
            },
            {
              children: (
                <p>
                  Is it more important for something to be dynamic or to be
                  dynamic or to be dynamic or to be customer-directed? What does
                  the term 'e-tailers' really mean?
                </p>
              ),
            },
          ]}
        />
        <SelectionTile
          testId={"testId"}
          onTileClick={(item, index) => {
            this.setState({ SelectionTileNum: index });
            alert(`${item.accountTitle} with indexOf ${index} clicked`);
          }}
          selected={SelectionTileNum}
          list={[
            {
              accountTitle: "Saving Account A",
              accountNumber: "RM 2,000.00",
            },
            {
              accountTitle: "Ambank AmMoneyLine",
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
                  "https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=935&q=80",
              },
            },
            {
              avatar: {
                name: "Christina Azalea Rossie",
                initials: "CA",
                initialsBg: "#f1f1f1",
              },
            },
            {
              children: <img src={images.common.sampleLogo} width={100} />,
            },
            {
              avatar: {
                name: "Kurniawan Suriawati",
                initials: "KS",
              },
            },
            {
              avatar: {
                name: "Deevan Raja",
                initials: "DR",
              },
            },
            {
              avatar: {
                name: "Lee Chong Wei",
                initials: "LC",
              },
            },
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
              amount: "RM 10,301.50",
            },
            {
              accountTitle: "Ambank AmMoneyLine AmMoneyLine",
              accountNumber: "RM 2,000.00",
              amount: " RM 11,555.00",
            },
            {
              accountTitle: "Ambank BonusLink Visa",
              accountNumber: "RM 2,000.00",
              amount: " RM 55,555.00",
            },
            {
              accountTitle: "Saving Account B",
              accountNumber: "RM 2,000.00",
              amount: " RM 33,555.50",
            },
            {
              accountTitle: "Saving Account C",
              accountNumber: "RM 2,000.00",
              amount: " RM 245,555.50",
            },
          ]}
        />
        <Title>DescriptionButton</Title>
        <div style={{ backgroundColor: "#f5f5f5", padding: 50 }}>
          <DescriptionButton
            testId={"testId"}
            onButtonClick={(item, index) => {
              alert(`${item.title} with indexOf ${index} clicked`);
            }}
            list={[
              { title: "Pay Minimum Payment", disabled: true },
              { title: "Pay Minimum Payment", amount: "RM 1,000.00" },
              {
                title: "Pay Unpaid Statement Balance",
                amount: "RM 2,000.00",
                icon: { name: "system-alert", color: "#ff2626" },
              },
            ]}
          />
        </div>
        <Title>IconButtons</Title>
        <IconButtons
          testId={"testId"}
          onButtonClick={(item, index) => {
            this.setState({
              IconButtonsNum: index,
            });
            alert(`${item} with index of ${index} clicked`);
          }}
          selected={IconButtonsNum}
          label="Transfer To"
          list={[
            {
              text: "Account",
              icon: {
                name: "Account",
              },
            },
            {
              text: "Card2",
              icon: {
                name: "Card2",
              },
            },
            {
              text: "Account",
              icon: {
                name: "Account",
              },
            },
            {
              text: "Card2",
              icon: {
                name: "Card2",
              },
            },
            {
              text: "Business Registration (ROB & ROC)",
              icon: {
                name: "Business",
              },
            },
            {
              text: `Business Registration (East Malaysia)`,
              icon: {
                name: "Business",
              },
            },
          ]}
        />
        <Title>IconButtons No Border</Title>
        <IconButtons
          removeBorder={true}
          testId={"testId"}
          onButtonClick={(item, index) => {
            this.setState({
              IconButtonsNum: index,
            });
            alert(`${item} with index of ${index} clicked`);
          }}
          selected={IconButtonsNum}
          label="Transfer To"
          list={[
            {
              text: "Account",
              icon: {
                name: "Account",
              },
            },
            {
              text: "Card2",
              icon: {
                name: "Card2",
              },
            },
            {
              text: "Account",
              icon: {
                name: "Account",
              },
            },
            {
              text: "Card2",
              icon: {
                name: "Card2",
              },
            },
            {
              text: "Account",
              icon: {
                name: "Account",
              },
            },
          ]}
        />
        <Title>InputField</Title>
        <InputField
          placeholder="PlaceHolder"
          type="text"
          clearClickHandler={() => alert("clear cliked")}
          clearIcon={true}
          label="input label"
          icon={{ name: "Account-2" }}
          value={inputValue}
          handleChange={(event) => {
            this.setState({
              inputValue: event.target.value,
            });
          }}
        />
        <InputField
          type="text"
          label="input label"
          value={inputValue}
          handleChange={(event) => {
            this.setState({
              inputValue: event.target.value,
            });
          }}
        />
        <InputField
          type="text"
          label="input label"
          icon={{ name: "Account-2" }}
          value={inputValue}
          handleChange={(event) => {
            this.setState({
              inputValue: event.target.value,
            });
          }}
        />
        <InputField
          maxLength={10}
          minLength={2}
          onBlur={(e) => {
            console.log(e.target);
          }}
          value={inputValue}
          handleChange={(event) => {
            this.setState({
              inputValue: event.target.value,
            });
            // console.log(inputValue);
          }}
          isSecure
          clearClickHandler={() => {
            this.setState({
              inputValue: "",
            });
          }}
          clearIcon={true}
          type={!!hidden ? "password" : "text"}
          label="input label"
          icon={{ name: "Account-2" }}
          onSecureClick={() => {
            this.setState({
              hidden: !hidden,
            });
          }}
        />
        <Title>AMTabs</Title>
        <CenteredDiv>
          <AMTabs
            titlesStyle={{ backgroundColor: "#f1f1f1", padding: "1rem 0" }}
            testId={"testId"}
            defaultIndex={1}
            titles={["Login", "Security", "Contact Us"]}
            contents={[
              <ZeroResult
                text={`We can’t seem to find any result for 
              “Damansara Heights”`}
              />,
              <PieChart
                pieLabels={["Fixed Income 60%", "Equity 10%"]}
                pieDataSets={{
                  data: [60, 10],
                  backgroundColor: ["#7AB497", "#FFA463"],
                }}
              />,
              "Contact Us",
            ]}
          />
        </CenteredDiv>
        <Title>PieChart</Title>
        <PieChart
          pieLabels={["Fixed Income 60%", "Equity 40%"]}
          pieDataSets={{
            data: [60, 40],
            backgroundColor: ["#7AB497", "#FFA463"],
          }}
        />
        <Title>ZeroResult</Title>
        <ZeroResult
          text={`We can’t seem to find any result for 
          “Damansara Heights”`}
          textStyle={{ fontWeight: "normal" }}
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
            testId={"testId"}
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
          <FullButton
            title="Color"
            titleColor="#ff2727"
            buttonColor={{ top: "#f7f7f7", bottom: "#dedede" }}
            onButtonClick={() => {
              alert("Button Clicked");
            }}
          />
          <div style={{ paddingTop: 5 }}>
            <FullButton
              split
              leftTitle="No"
              rightTitle="Yes"
              leftTitleStyle={{ color: "#ff2626" }}
              rightTitleStyle={{ color: "#000000" }}
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

        <Title>TextButton</Title>
        <div style={{ width: "180px" }}>
          <TextButton
            testId="testId"
            buttonText="Forgot username/password?"
            onTextClick={(id) => {
              alert(`${id} clicked`);
            }}
          />
        </div>
        <CenteredDiv>
          <TextButton
            buttonText="FAQ"
            onTextClick={() => {
              alert(`clicked`);
            }}
            buttonStyles={{
              color: "#000000",
              fontWeight: 400,
              fontSize: 15,
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
              height: 50,
            }}
          />
        </CenteredDiv>
        <Logo
          image={{
            src: images.common.sampleLogo,
            width: 200,
            height: 50,
          }}
        />
        <Title>Checkbox</Title>
        <Checkbox
          testId="testId"
          isChecked={isCheckboxChecked}
          name="checkBox"
          onCheckClick={(event, testId) => {
            this.setState({
              isCheckboxChecked: !isCheckboxChecked,
            });
            alert(`${event.target.checked} ${event.target.name} ${testId}`);
          }}
          children={
            <div>
              <p> I have read and agree to the</p>
              <p> I have read and agree to the</p>
              <p> I have read and agree to the</p>
            </div>
          }
        />
        <Checkbox
          testId="testId"
          isChecked={isCheckboxChecked}
          name="checkBox"
          onCheckClick={(event, testId) => {
            this.setState({
              isCheckboxChecked: !isCheckboxChecked,
            });
            alert(`${event.target.checked} ${event.target.name} ${testId}`);
          }}
        />
        <Title>TextButtonList -- FooterLogo</Title>
        <TextButtonList
          testId="testId"
          data={[
            "Terms & Conditions",
            "Privacy Notice",
            "Security Statement",
            "e-Banking Charter",
            "Security Alert",
          ]}
          onTextClick={(text, _index, testId) => {
            alert(
              `${text} with index of ${_index} have been clicked ${testId}`
            );
          }}
          footerText="  Copyright © AmBank (M) Berhad (Company No. 8515-D) All Rights
          Reserved."
        />
        <FooterLogo
          onLogoClick={(logo, index) => {
            alert(`${logo.src}<=-link  id-=>${logo.id} index-=>${index}`);
          }}
          logos={[
            {
              src: images.common.AKPK,
              id: "Id-0",
            },
            {
              src: images.common.ATM,
              id: "Id-1",
            },
            {
              src: images.common.BNM,
              id: "Id-1",
            },
            {
              src: images.common.BNMFinancialConsumerAlert,
              id: "Id-1",
            },
            {
              src: images.common.MasterCardFooter,
              id: "Id-1",
            },
            {
              src: images.common.MEPS,
              id: "Id-1",
            },
            {
              src: images.common.MIFC,
              id: "Id-1",
            },
            {
              src: images.common.PerbankanIslam,
              id: "Id-1",
            },
            {
              src: images.common.PIDM,
              id: "Id-1",
            },
            {
              src: images.common.SIDREC,
              id: "Id-1",
            },
            {
              src: images.common.PoliceAlert,
              id: "Id-1",
            },
            {
              src: images.common.SMEInfo,
              id: "Id-1",
            },
            {
              src: images.common.Verisign,
              id: "Id-1",
            },
            {
              src: images.common.VISA,
              id: "Id-1",
            },
            {
              src: images.common.MyBayar,
              id: "Id-1",
            },
            {
              src: images.common.BankingInfo,
              id: "Id-2",
            },
          ]}
        />
        <Title>BackButton</Title>
        <BackButton
          testId={"testId"}
          buttonText="Forgot Username/Password"
          onButtonClick={() => {
            alert("BackButton clicked");
          }}
        />
        <Title>Profile</Title>
        <Profile
          testId={"testId"}
          greeting="Good Morning"
          name="Adam Constantine"
          alt="AVATAR"
          src={
            "https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=935&q=80"
          }
        />
        <Profile
          greetingStyle={{ color: "#ff2626" }}
          nameStyle={{ color: "#000" }}
          testId={"testId"}
          greeting="Good Morning"
          name="Adam Constantine"
          alt="AVATAR"
          src={
            "https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=935&q=80"
          }
        />
        <Title>StatusIcon</Title>
        <RowDiv>
          <StatusIcon
            icon={{ name: "Tick-1" }}
            iconColor={{ top: "#94EC9B", bottom: "#5BB362" }}
            small={true}
            outerIconColor="black"
          />
          <StatusIcon
            icon={{ name: "Tick-1" }}
            iconColor={{ top: "#94EC9B", bottom: "#5BB362" }}
            small={true}
          />
          <StatusIcon
            testId={"testId"}
            iconColor={{ top: "#FFA14E", bottom: "#FFA14E" }}
            icon={{ name: "Fail", color: "#ff3", size: 70 }}
          />
          <StatusIcon
            iconColor={{ top: "#FD8585", bottom: "#FF2222" }}
            image={{
              src:
                "https://images.unsplash.com/photo-1516876902004-79f4bd1cb0dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
            }}
          />
          <StatusIcon
            iconColor={{ top: "#FD8585", bottom: "#FF2222" }}
            image={{
              src: images.common.amyIcon,
              alt: "logo",
            }}
          />
        </RowDiv>
        <Title>Prompt</Title>
        <Prompt
          testId={"testId"}
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
            alt: "logo",
          }}
          detailTitle="Looking Good"
          detail="Your lowest balance for this month is RM 10,000.00 Keep it up so you can earn the 3-month FD/TD-i prevailing interest/profit rate."
          linkText="How does this work?"
          onLinkClick={() => {
            alert("link clicked");
          }}
        />
        <CenteredDiv>
          <Dock
            isExpanded={true}
            onButtonClick={(item, index) => {
              alert(`${item.name} with index of${index} clicked`);
            }}
            testId={"testId"}
            tagText="How may I help you?"
            list={[
              {
                name: "Health",
                color: "#ffffff",
                backgroundColor: {
                  top: "#FFC5A2",
                  bottom: "#EA5702",
                },
                text: "Cash Advance",
              },
              {
                name: "AmSecure",
                color: "#ffffff",
                backgroundColor: {
                  top: "#FD8585",
                  bottom: "#FF2222",
                },
                text: "PlaceFD/TD",
              },
              {
                name: "Car",
                color: "#ffffff",
                backgroundColor: {
                  top: "#798E96",
                  bottom: "#31434A",
                },
                text: "Renew Car Insurance",
              },
              {
                name: "Apply",
                color: "#ffffff",
                backgroundColor: {
                  top: "#DCEAEA",
                  bottom: "#7FA2A2",
                },
                text: "BrowseFunds",
              },
              {
                name: "Health",
                color: "#ffffff",
                backgroundColor: {
                  top: "#FFC5A2",
                  bottom: "#EA5702",
                },
                text: "Cash Advance",
              },
              {
                name: "Bank",
                color: "#ffffff",
                backgroundColor: {
                  top: "#FD8585",
                  bottom: "#FF2222",
                },
                text: "Bank",
              },
              {
                name: "Card",
                color: "#ffffff",
                backgroundColor: {
                  top: "#798E96",
                  bottom: "#31434A",
                },
                text: "Card",
              },
              {
                name: "Apply",
                color: "#ffffff",
                backgroundColor: {
                  top: "#DCEAEA",
                  bottom: "#7FA2A2",
                },
                text: "Cash Advance",
              },
            ]}
          />
        </CenteredDiv>
      </div>
    );
  }
}

export default Sprint1;
