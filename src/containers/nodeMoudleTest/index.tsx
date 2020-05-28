import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import Paragraphs from "../../components/assets/typography";
import images from "src/assets";
import LocalImages from "src/components/assets/images";
import Icon from "src/components/assets/icons/icon";
import LabeledIcon from "src/components/assets/icons/labeledIcon/LabeledIcon";
import IconButtons from "src/components/buttons/iconButtons/IconButtons";
import moment from "moment";
import {
  CalendarBox,
  // sprint3
  Navbar,
  ArrayCheckBox,
  TextWithDetails,
  List,
  Line,
  PortfolioList,
  PortfolioListContent,
  PieChartBox,
  LabelToolTip,
  AmDropdown,
  SearchBar,
  TransactionLimitList,
  PrimaryButton,
  AmModal,
  InputFields,
  AmProfileSetting,
  ImageModal,
  SecureImage,
  SecureImageSelect,
  BarCode,
  // AmAccordion,
  BoxId,
  HeaderWithIcons,
  SimpleHeader,
  TextWithLink,
  TooltipDropdown,
  LinkList,
  ToggleButton,
  SelectionTile,
  StickyFooter,
  UnitTrustList,
  SettingModalCenter,
  CenterMessage,
  // sprint4
  TransactionList,
  FormContainer,
  AmResetPin,
  HeaderWithIButtons,
  StatusFormContainer,
  ConfirmNotes,
  ViewRateContainer,
  ViewRate,
  DetailList,
  CenterText,
  DynamicText,
  ErrorPage,
  TacModal,
  Prompt,
  TransactionWithNote,
  ListWithSelectionTile,
  Box_V2,
} from "amonline-reactjs-component";
const {
  B_13_ORANGE_463,
  B_14_WHITE,
  R_12_WHITE,
  B_24_BLACK,
  SB_13_BLACK,
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

const NodeModule: React.FC = () => {
  const [sprint1] = useState(false);
  const [sprint2] = useState(false);
  const [sprint3] = useState(false);
  const [homeRedirect, setHomeRedirect] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [showDropdown, setDropdown] = useState(false);
  const [dropdownValue, setDropdownValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [hiddenList, setHiddenList] = useState(true);
  const [isViewRateModalOpen, setIsViewRateModalOpen] = useState(false);
  const [rateType, setRateType] = useState("test_value3");
  const [showImageModal, setShowImageModal] = useState(false);
  const [sTileNum, setSTileNum] = useState(2);
  const [sTileNum1, setSTileNum1] = useState(0);
  const [sTileNum2, setSTileNum2] = useState(3);
  const [sTileNum3, setSTileNum3] = useState(1);
  const [stickyFooter, setStickyFooter] = useState(false);
  const [settingsModalOpen, setSettingsModalOpen] = useState(false);
  const [tacClear, setTacClear] = useState(false);
  const [selectionTile, setSelectionTile] = useState(2);
  const [linkListClear, setLinkListClear] = useState(false);
  const [tacInactive, setTacInactive] = useState(true);
  const [TacModalOpen, setTacModalOpen] = useState(false);
  const [linkListInputValue, setLinkListInputValue] = useState("");
  const [SelectionTileNum2, setSelectionTileNum2] = useState(3);
  const [linkListBtnColor, setLinkListBtnColor] = useState({
    top: "#BDBDBD",
    bottom: "#BDBDBD",
  });
  const [inputDate, setInputDate] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [buttonColor, setButtonColor] = useState({
    top: "#BDBDBD",
    bottom: "#BDBDBD",
  });
  const tacClearActiveStatus = false;

  const [profileInputValue, setProfileInputValue] = useState("");

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
  const handleInputDateChange = (input: string) => {
    setInputDate(input);
  };

  const handleOnChange = (input: Date) => {
    const date = moment(input).format("DD/MM/YYYY");
    setSelectedDate(input);
    setInputDate(date);
  };
  const checkBoxData = [
    {
      title: "Indah",
      content: ["Biller Code: 68502", "0"],
      isCheckboxChecked: isCheckboxChecked,
      name: "checkBox",
      onCheckClick: handleCheckBox,
    },
    {
      title: "Kojadi",
      content: ["Biller Code: 68502", "1"],
      isCheckboxChecked: isCheckboxChecked,
      name: "checkBox",
      onCheckClick: handleCheckBox,
    },
    {
      title: "Indah",
      content: ["Biller Code: 68502", "2"],
      isCheckboxChecked: isCheckboxChecked,
      name: "checkBox",
      onCheckClick: handleCheckBox,
    },
    {
      title: "Indah",
      content: ["Biller Code: 68502", "3"],
      isCheckboxChecked: isCheckboxChecked,
      name: "checkBox",
      onCheckClick: handleCheckBox,
    },
    {
      title: "Astro",
      content: ["Biller Code: 68502", "4"],
      isCheckboxChecked: isCheckboxChecked,
      name: "checkBox",
      onCheckClick: handleCheckBox,
    },
    {
      title: "Syabas",
      content: ["Biller Code: 68502", "5"],
      isCheckboxChecked: isCheckboxChecked,
      name: "checkBox",
      onCheckClick: handleCheckBox,
    },
    {
      title: "Petronas",
      content: ["Biller Code: 68502", "6"],
      isCheckboxChecked: isCheckboxChecked,
      name: "checkBox",
      onCheckClick: handleCheckBox,
    },
    {
      title: "Time",
      content: ["Biller Code: 68502", "7"],
      isCheckboxChecked: isCheckboxChecked,
      name: "checkBox",
      onCheckClick: handleCheckBox,
    },
    {
      title: "UNIFI",
      content: ["Biller Code: 68502", "8"],
      isCheckboxChecked: isCheckboxChecked,
      name: "checkBox",
      onCheckClick: handleCheckBox,
    },
    {
      title: "TNB",
      content: ["Biller Code: 68502", "9"],
      isCheckboxChecked: isCheckboxChecked,
      name: "checkBox",
      onCheckClick: handleCheckBox,
    },
    {
      title: "Petronas",
      content: ["Biller Code: 68502", "10"],
      isCheckboxChecked: isCheckboxChecked,
      name: "checkBox",
      onCheckClick: handleCheckBox,
    },
    {
      title: "Time",
      content: ["Biller Code: 68502", "11"],
      isCheckboxChecked: isCheckboxChecked,
      name: "checkBox",
      onCheckClick: handleCheckBox,
    },
    {
      title: "UNIFI",
      content: ["Biller Code: 68502", "12"],
      isCheckboxChecked: isCheckboxChecked,
      name: "checkBox",
      onCheckClick: handleCheckBox,
    },
    {
      title: "TNB",
      content: ["Biller Code: 68502", "13"],
      isCheckboxChecked: isCheckboxChecked,
      name: "checkBox",
      onCheckClick: handleCheckBox,
    },
  ];

  const handlerDropdown = (item: any) => {
    console.log(item, "dropdownValue");

    setDropdown(!showDropdown);
    setDropdownValue(item.value);
  };
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
      <Title>CalendarBox</Title>
      <div
        style={{
          width: "50%",
          margin: "0 auto",
        }}
      >
        <FormContainer
          label={"Select your account/card type"}
          tooltip={
            <div>
              <p style={{ color: "#ffffff" }}>
                When would you like to transfer?
              </p>
            </div>
          }
          children={
            <div style={{ padding: "1rem" }}>
              <div>Input Date: {`${inputDate}`}</div>
              <div>Selected Date: {`${selectedDate}`}</div>

              <CalendarBox
                label="Effective Date"
                minDate={moment()
                  .add(1, "day")
                  .toDate()}
                maxDate={moment()
                  .add(7, "day")
                  .toDate()}
                onChangeDate={handleOnChange}
                onChangeInput={handleInputDateChange}
                placeholderText="DD / MM / YYYY"
                selectedDate={selectedDate}
                value={inputDate}
              />
            </div>
          }
        />
      </div>
      <Title>Sprint 3</Title>

      <Title>ArrayCheckbox</Title>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ArrayCheckBox
          data={checkBoxData}
          title={`Jompay (${checkBoxData.length})`}
          testId="testId"
        />
      </div>

      <Title>PaymentBox (Using FormContainer component)</Title>
      <div
        style={{
          margin: "0 auto",
          padding: 4,
          width: "50%",
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
      <Title>Text With Details</Title>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
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
            "Ref-1: 65432145432",
          ]}
        />
      </div>

      <Title>List</Title>
      <CenteredDiv>
        <FormContainer
          children={
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
                  details: ["2998202013", "Available Balance: RM 10,301.50"],
                },
              ]}
            />
          }
        />
      </CenteredDiv>

      <Title>TextWithIcon (using LabeledIcon component)</Title>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: 20,
        }}
      >
        <LabeledIcon
          leftLabel="Powered by"
          leftLabelStyle={{ fontWeight: 700 }}
          imageIcon={{ src: images.common.JomPay1, size: 40 }}
        />
      </div>

      <Title>line</Title>
      <div>
        <Line testId={"testId"} />
      </div>

      {/* <Title>DashboardCart</Title>
      <CenteredDiv>
        <DashboardCart
          
          subtitle={{ content: "123456", icon: "User1" }}
          description="RM 100,084,208.66"
          descriptionRightLabel={{
            type: "loss",
            percentage: "6.6%",
          }}
          data={[
            {
              leftSide: {
                title: "Profit/Loss",
                content: "RM 6,205,220.93",
                type: "profit",
              },
              rightSide: {
                title: "Invested",
                content: "RM 93,878,987.73",
              },
            },
          ]}
          onClickContainer={() => alert("Clicked")}
          tooltip={true}
          footerLabel="Last Updated: 11 Nov 2019"
          tipChildren={<div>tip</div>}
        />
      </CenteredDiv> */}

      <Title>PortfolioList</Title>
      <CenteredDiv>
        <PortfolioList
          header={[
            {
              title: "Fund Name",
              icon: "sort",
              onArrowClick: () => alert(" Handle sort and icon change"),

              arrowDownBold: true,
              arrowUpBold: false,
            },
            {
              title: "Value",
              icon: "sort",
              onArrowClick: () => alert(" Handle sort and icon change"),
              arrowDownBold: false,
              arrowUpBold: true,
            },
            {
              title: "Profit/Loss",
              icon: "sort",
              onArrowClick: () => alert(" Handle sort and icon change"),
              arrowDownBold: true,
              arrowUpBold: false,
            },
          ]}
          testId={"testId"}
          data={[
            {
              borderColor: "#FFA463",
              expandableLeft: true,
              leftLabel: "Advantage Global Equity Volatility Focused",
              middleLabel: "RM 406,318.98",
              rightLabel: {
                type: "loss",
                percentage: "0.03%",
                amount: "RM 12,189.56",
              },
              leftContent: (
                <PortfolioListContent
                  borderColor="#FFA463"
                  buttonText="View Performance"
                  onClickButton={() => alert("button clicked")}
                  data={[
                    {
                      leftLabel: "Invested",
                      rightLabel: "RM 418,944.73",
                    },
                    {
                      leftLabel: "NAV",
                      rightLabel: "4.7894",
                    },
                    {
                      leftLabel: "Number of Units",
                      rightLabel: "1,828.40",
                    },
                    {
                      leftLabel: "Asset Class",
                      rightLabel: "Equity",
                      rightLabelStyle: {
                        color: "#FFA463",
                      },
                    },
                  ]}
                />
              ),
            },
            {
              borderColor: "#8677D9",
              expandableLeft: true,
              leftLabel: "Advantage Global Equity Volatility Focused",
              rightLabel: {
                type: "profit",
                percentage: "0.03%",
                amount: "RM 12,189.56",
              },
              middleLabel: "RM 406,318.98",
              leftContent: (
                <PortfolioListContent
                  borderColor="#8677D9"
                  buttonText="View Performance"
                  onClickButton={() => alert("button clicked")}
                  data={[
                    {
                      leftLabel: "Invested",
                      rightLabel: "RM 418,944.73",
                    },
                    {
                      leftLabel: "NAV",
                      rightLabel: "4.7894",
                    },
                    {
                      leftLabel: "Number of Unts",
                      rightLabel: "1,828.40",
                    },
                    {
                      leftLabel: "Asset Class",
                      rightLabel: "Equity",
                    },
                  ]}
                />
              ),
            },
            {
              borderColor: "#7AB497",
              expandableLeft: true,
              leftLabel: "Advantage Global Equity Volatility Focused",
              rightLabel: {
                type: "loss",
                percentage: "0.03%",
                amount: "RM 12,189.56",
              },
              middleLabel: "RM 406,318.98",
              leftContent: (
                <PortfolioListContent
                  borderColor="#7AB497"
                  buttonText="View Performance"
                  onClickButton={() => alert("button clicked")}
                  data={[
                    {
                      leftLabel: "Invested",
                      rightLabel: "RM 418,944.73",
                    },
                    {
                      leftLabel: "NAV",
                      rightLabel: "4.7894",
                    },
                    {
                      leftLabel: "Number of Unts",
                      rightLabel: "1,828.40",
                    },
                    {
                      leftLabel: "Asset Class",
                      rightLabel: "Equity",
                    },
                  ]}
                />
              ),
            },
          ]}
        />
      </CenteredDiv>

      <Title>Pie Chart Box</Title>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#F7F7F7",
          padding: "4rem",
        }}
      >
        <PieChartBox
          title={"YOUR CURRENT PORTFOLIO"}
          pieLabels={["Fixed Income 100%", "Equity 0%", "Mixed Assets 0% "]}
          pieDataSets={{
            data: [100, 0, 0],
            backgroundColor: ["#7AB497", "#FFA463", "#8677D9"],
          }}
        />
        <PieChartBox
          title={"Your Ideal Portfolio"}
          pieLabels={["Fixed Income 100%", "Equity 0%"]}
          pieDataSets={{
            data: [100, 0],
            backgroundColor: ["#7AB497", "#FFA463"],
          }}
        />
        <PieChartBox
          title={"YOUR CURRENT PORTFOLIO"}
          pieLabels={["Fixed Income 60%", "Equity 20%", "Mixed Assets 20% "]}
          pieDataSets={{
            data: [60, 20, 20],
            backgroundColor: ["#7AB497", "#FFA463", "#8677D9"],
          }}
        />
        <PieChartBox
          title={"Your Ideal Portfolio"}
          pieLabels={["Fixed Income 85%", "Equity 15%"]}
          pieDataSets={{
            data: [85, 15],
            backgroundColor: ["#7AB497", "#FFA463"],
          }}
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
            ),
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
            ),
          }}
        />
      </div>

      <Title>AmDropDown</Title>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <AmDropdown
          max="200px"
          type="dropdown"
          readOnly={true}
          disabled={false}
          clickOnArrow={() => setDropdown(!showDropdown)}
          showDropdown={showDropdown}
          dropdownData={[
            { value: "ambank", label: "am" },
            { value: "Alpeh", label: "alp" },
            { value: "ambank", label: "am" },
            { value: "Alpeh", label: "alp" },
            { value: "ambank", label: "am" },
            { value: "Alpeh", label: "alp" },
            { value: "ambank", label: "am" },
            { value: "Alpeh", label: "alp" },
            { value: "ambank", label: "am" },
            { value: "Alpeh", label: "alp" },
            { value: "ambank", label: "am" },
            { value: "Alpeh", label: "alp" },
            { value: "ambank", label: "am" },
            { value: "Alpeh", label: "alp" },
          ]}
          notValid={false}
          errorMessage={{
            testId: "testId",
            errorText: "The TAC is incorrect",
            subText: "Please try again.",
          }}
          inputClickHandler={() => setDropdown(!showDropdown)}
          arrowIcon={true}
          label="dropdown label"
          icon={{ name: "Account-2" }}
          value={dropdownValue}
          handleChange={(item) => handlerDropdown(item)}
          placeholder="place holder"
        />
      </div>

      <Title>SearchBar/Filter (updated for sections)</Title>
      <CenteredDiv
        style={{
          backgroundColor: "#f5f5f5",
          width: "600px",
          marginLeft: "32%",
        }}
      >
        <SearchBar
          clearClickHandler={() => alert("clear clicked")}
          searchIconClickHandler={() => alert("Search Icon clicked")}
          placeholder={"Search"}
          value={inputValue}
          handleChange={(event) => {
            setInputValue(event.target.value);
          }}
          autoFocus={false}
          showFilter={true}
          sectionFilter={true}
          sectionFilterOptions={[
            {
              sectionTitle: "Transaction Channel",
              data: [
                {
                  label: "AmOnline Transaction",
                  value: "AmOnline Transaction",
                  selected: true,
                },
                {
                  label: "Branch Transaction",
                  value: "Branch Transaction",
                  selected: false,
                },
                {
                  label: "All Transaction",
                  value: "All Transaction",
                  selected: false,
                },
              ],
            },
            {
              sectionTitle: "Period",
              data: [
                {
                  label: "Last 30 days",
                  value: "Last 30 days",
                  selected: true,
                },
                {
                  label: "Last 60 days",
                  value: "Last 60 days",
                  selected: false,
                },
                {
                  label: "Last 90 days",
                  value: "Last 90 days",
                  selected: false,
                },
                {
                  label: "Last 1 year",
                  value: "Last 1 year",
                  selected: false,
                },
              ],
            },
            {
              sectionTitle: "Transaction Type",
              data: [
                {
                  label: "All",
                  value: "All",
                  selected: false,
                },
                {
                  label: "Buy Fund",
                  value: "Buy Fund",
                  selected: true,
                },
                {
                  label: "Redemption",
                  value: "Redemption",
                  selected: true,
                },
                {
                  label: "Dividend",
                  value: "Dividend",
                  selected: false,
                },
              ],
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

      <Title>ProfileSetting</Title>
      <CenteredDiv
        style={{
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <AmProfileSetting
          testId={"testId"}
          profilePicImage={""}
          ProfilePicBgColor={"#2694EB"}
          profile_name={"Adam_1234"}
          profile_login_history={"Last login on 2 Feb 2020 at 03:09pm"}
          editIcon={<Icon icon={"Right1"} size={20} color={"#000000"} />}
          data={[
            {
              profile_data: {
                title: "Full Name",
                showAccordion: true,
                subtitle: [
                  {
                    content: "Adam Jake",
                  },
                  {
                    content: "aslam Furich",
                  },
                  {
                    content: "Furich",
                  },
                ],
                children: (
                  <div>
                    <InputFields
                      notValid={false}
                      errorMessage={{
                        testId: "testId",
                        errorText: "The Input Field is wrong",
                        subText: "Please try again.",
                      }}
                      type="text"
                      clearClickHandler={() => {
                        setLinkListInputValue("");
                        setLinkListClear(false);
                        setLinkListBtnColor({
                          top: "#BDBDBD",
                          bottom: "#BDBDBD",
                        });
                      }}
                      clearIcon={profileInputValue === "" ? tacClear : true}
                      label=""
                      icon={{ name: "Lock", color: "red" }}
                      value={profileInputValue}
                      handleChange={(e) => {
                        setProfileInputValue(e.target.value);
                        setTacClear(true);
                        setButtonColor({ top: "#FF0D0D", bottom: "#FD8585" });
                      }}
                    />
                    <div style={{ marginTop: "24px" }}>
                      <PrimaryButton
                        title="Continue"
                        titleColor="#ffffff"
                        buttonColor={buttonColor}
                        onButtonClick={() => {}}
                      />
                    </div>
                    <InputFields
                      notValid={false}
                      errorMessage={{
                        testId: "testId",
                        errorText: "The Input Field is wrong",
                        subText: "Please try again.",
                      }}
                      type="text"
                      clearClickHandler={() => {
                        setLinkListInputValue("");
                        setLinkListClear(false);
                        setLinkListBtnColor({
                          top: "#BDBDBD",
                          bottom: "#BDBDBD",
                        });
                      }}
                      clearIcon={profileInputValue === "" ? tacClear : true}
                      label=""
                      icon={{ name: "Lock", color: "red" }}
                      value={profileInputValue}
                      handleChange={(e) => {
                        setProfileInputValue(e.target.value);
                        setTacClear(true);
                        setButtonColor({ top: "#FF0D0D", bottom: "#FD8585" });
                      }}
                    />
                    <div style={{ marginTop: "24px" }}>
                      <PrimaryButton
                        title="Continue"
                        titleColor="#ffffff"
                        buttonColor={buttonColor}
                        onButtonClick={() => {}}
                      />
                    </div>
                  </div>
                ),
              },
            },
            {
              profile_data: {
                title: "Nickname",
                showAccordion: true,
                subtitle: [
                  {
                    content: "Adam_1234",
                  },
                ],
                children: (
                  <div>
                    <InputFields
                      notValid={false}
                      errorMessage={{
                        testId: "testId",
                        errorText: "The Input Field is wrong",
                        subText: "Please try again.",
                      }}
                      type="text"
                      clearClickHandler={() => {
                        setLinkListInputValue("");
                        setLinkListClear(false);
                        setLinkListBtnColor({
                          top: "#BDBDBD",
                          bottom: "#BDBDBD",
                        });
                      }}
                      clearIcon={profileInputValue === "" ? tacClear : true}
                      label=""
                      icon={{ name: "Lock", color: "red" }}
                      value={profileInputValue}
                      handleChange={(e) => {
                        setProfileInputValue(e.target.value);
                        setTacClear(true);
                        setButtonColor({ top: "#FF0D0D", bottom: "#FD8585" });
                      }}
                    />
                    <div style={{ marginTop: "24px" }}>
                      <PrimaryButton
                        title="Continue"
                        titleColor="#ffffff"
                        buttonColor={buttonColor}
                        onButtonClick={() => {
                          alert(`button cliked`);
                        }}
                      />
                    </div>
                  </div>
                ),
              },
            },
            {
              profile_data: {
                title: "Mobile Number",
                showAccordion: false,
                subtitle: [
                  {
                    content: "******897",
                  },
                ],
              },
            },
            {
              profile_data: {
                title: "Mailing Address",
                showAccordion: false,
                subtitle: [
                  {
                    content:
                      "41, Jalan PJU 1A/29A Ara Damansara,Kundanahalli,Banagalore,43701 Petaling Jaya,Selangor,Malaysia",
                  },
                ],
              },
            },
            {
              profile_data: {
                showAccordion: true,
                title: "Email",
                subtitle: [
                  {
                    content: "*******5678@gmail.com",
                  },
                ],
                children: (
                  <div>
                    <InputFields
                      notValid={false}
                      errorMessage={{
                        testId: "testId",
                        errorText: "The Input Field is wrong",
                        subText: "Please try again.",
                      }}
                      type="text"
                      clearClickHandler={() => {
                        setLinkListInputValue("");
                        setLinkListClear(false);
                        setLinkListBtnColor({
                          top: "#BDBDBD",
                          bottom: "#BDBDBD",
                        });
                      }}
                      clearIcon={profileInputValue === "" ? tacClear : true}
                      label=""
                      icon={{ name: "Lock", color: "red" }}
                      value={profileInputValue}
                      handleChange={(e) => {
                        setProfileInputValue(e.target.value);
                        setTacClear(true);
                        setButtonColor({ top: "#FF0D0D", bottom: "#FD8585" });
                      }}
                    />
                    <div style={{ marginTop: "24px" }}>
                      <PrimaryButton
                        title="Continue"
                        titleColor="#ffffff"
                        buttonColor={buttonColor}
                        onButtonClick={() => {}}
                      />
                    </div>
                  </div>
                ),
              },
            },
          ]}
          onEditClickHandler={() => {
            alert("on edit click");
          }}
          fullName={"Adam Faruk"}
          openAccordionIcon={{
            name: "system-close-grey",
            color: "#444444",
            size: 12,
          }}
          closeAccordionIcon={{ name: "arrowDown", color: "#444444", size: 12 }}
          tipChildren={
            <div>
              <RowDiv
                style={{
                  maxWidth: 439,
                  width: "100%",
                  paddingTop: "24px",
                  paddingBottom: "24px",
                }}
              >
                <SB_13_BLACK>
                  Note: If you wish to change your
                  <strong>mobile number</strong>
                  and/or <strong>mailing address.</strong> please visit your
                  nearest branch.
                </SB_13_BLACK>
              </RowDiv>
              <RowDiv
                style={{
                  maxWidth: 439,
                  width: "100%",
                }}
              >
                <SB_13_BLACK>
                  Your <b>Profile picture</b>should not exceed the 5 MB file
                  limit.
                </SB_13_BLACK>
              </RowDiv>
            </div>
          }
        />
      </CenteredDiv>

      <Title>TransactionLimitList Hidden</Title>
      <div style={{ width: "60vw", margin: "auto" }}>
        <TransactionLimitList
          list={[
            {
              notify: true,
              label: "AmBank BonusLink Visa BlackGold",
              subDetail: "7565 8767 5821 5409",
              onClick: (item, index) =>
                alert(`${JSON.stringify(item)},Index: ${index}`),

              cardImg: LocalImages.common.card,
              hidden: hiddenList,
              onHiddenButtonClick: () => {
                setHiddenList(false);
              },
            },
            {
              label: "Change Password",
              subDetail: "Password last change: 0 day ago",
              onClick: (item, index) =>
                alert(`${JSON.stringify(item)},Index: ${index}`),
              hidden: hiddenList,
              onHiddenButtonClick: () => {
                setHiddenList(false);
              },
            },
            {
              label: "Investments",
              subDetail: "Password last change: 0 day ago",
              onClick: (item, index) =>
                alert(`${JSON.stringify(item)},Index: ${index}`),
              cardImg: images.common.Duitnow1,
              showShadow: true,
              // shadowStyle: {boxShadow: '2px 2px 7px rgba(0, 0, 0, 0.8)'},
              cardImgStyle: { height: 30, width: 30 },
              hidden: hiddenList,
              onHiddenButtonClick: () => {
                setHiddenList(false);
              },
            },
            {
              label: "Online Shopping",

              onClick: (item, index) =>
                alert(`${JSON.stringify(item)},Index: ${index}`),
              rightLabelColor: "green",
              rightLabel: "Default",
              hidden: hiddenList,
              onHiddenButtonClick: () => {
                setHiddenList(false);
              },
            },
            {
              label: "FPX Specific Merchant",
              subDetail: "Password last change: 0 day ago",
              onClick: (item, index) =>
                alert(`${JSON.stringify(item)},Index: ${index}`),
              rightLabelColor: "#000000",
              rightLabel: "Show",
              hidden: hiddenList,
              onHiddenButtonClick: () => {
                setHiddenList(false);
              },
            },
          ]}
          testId="testId"
        />
      </div>

      <Title>ImageModal</Title>
      <CenteredDiv>
        <PrimaryButton
          title="Open ImageModal"
          onButtonClick={() => {
            setShowImageModal(true);
          }}
          width={"25rem"}
          buttonColor={{ top: "#FD8585", bottom: "#FF2222" }}
        />
        <ImageModal
          modalIsOpen={showImageModal}
          imgSrc={LocalImages.common.passwordSecurity}
          title="Keep your account safe"
          message="We have just changed our password policy. It is good for you to change it now to keep your account secured."
          buttonLabel="Continue"
          buttonLabelColor={"#FFF"}
          // buttonColor={{ top: "#FD8585", bottom: "#FF2222" }}
          onButtonClick={() => alert("Continue")}
          // leftButtonLabel="NO"
          // rightButtonLabel="YES"
          // onLeftButtonClick={()=>alert('NO')}
          // onRightButtonClick={()=>alert('YES')}
          // leftButtonLabelColor={'#000'}
          // leftButtonColor={{ top: "#F6F6F3", bottom: "#EAE9E3" }}
          // rightButtonLabelColor={'#FFF'}
          // rightButtonColor={{ top: "#FD8585", bottom: "#FF2222" }}

          onRequestClose={() => setShowImageModal(false)}
        />
      </CenteredDiv>

      <Title>Secure Image Container</Title>
      <CenteredDiv>
        <FormContainer
          label="Change Security Image"
          children={
            <>
              <CenteredDiv>
                <SecureImage
                  testId="secure_image_testid"
                  image={images.common.SampleSecureImage}
                />
              </CenteredDiv>

              <Line testId={"testId"} />

              <CenteredDiv>
                <SecureImageSelect
                  testId="secure_image_select_testid"
                  label="Select your new security image"
                  selectedImages={[3]}
                  images={[
                    {
                      uri: images.common.SampleSecureImage,
                    },
                    {
                      uri: images.common.SampleSecureImage,
                    },
                    {
                      uri: images.common.SampleSecureImage,
                    },
                    {
                      uri: images.common.SampleSecureImage,
                    },
                    {
                      uri: images.common.SampleSecureImage,
                    },
                  ]}
                />
              </CenteredDiv>
            </>
          }
        />
      </CenteredDiv>

      <Title>Primary Button</Title>
      <CenteredDiv>
        <PrimaryButton
          title="Set up now"
          onButtonClick={() => alert("clicked")}
          buttonColor={{ top: "#F6F6F3", bottom: "#EAE9E3" }}
          titleColor="#000000"
          icon={{ name: "Settings", color: "#000000" }}
        />
        <PrimaryButton
          title="Remove device"
          onButtonClick={() => alert("clicked")}
          icon={{ name: "delete", color: "#ffffff" }}
        />
        <PrimaryButton
          title="Set up now"
          onButtonClick={() => alert("clicked")}
          buttonColor={{ top: "#F6F6F3", bottom: "#EAE9E3" }}
          titleColor="#000000"
        />
        <PrimaryButton
          title="Remove device"
          onButtonClick={() => alert("clicked")}
        />
      </CenteredDiv>

      <Title>Barcode</Title>
      <CenteredDiv style={{ backgroundColor: "#F7F7F7" }}>
        <BarCode imgSrc={images.common.SampleQRCode} />
      </CenteredDiv>

      <Title>BoxId</Title>
      <CenteredDiv>
        <div>
          <BoxId
            title="Active IDs"
            isActive={true}
            list={[
              {
                leftIcon: { name: "ID-2" },
                boldText: "ID Number ••••••9876",
                subText: "Maybank  |  ••••••••4321",
                notification: true,
                iconButtons: [
                  {
                    icon: "Edit",
                    text: "Edit",
                    onClick: () => alert("click"),
                  },
                  {
                    icon: "delete",
                    text: "Delete",
                    onClick: () => alert("click"),
                  },
                  {
                    icon: "Clear",
                    text: "Deactivate",
                    onClick: () => alert("click"),
                  },
                ],
              },
              {
                leftIcon: { name: "Mobile" },
                boldText: "Mobile Number ••••••1234",
                subText: "Ambank  |  ••••••••3463",
                iconButtons: [
                  {
                    icon: "Edit",
                    text: "Edit",
                    onClick: () => alert("click"),
                  },
                  {
                    icon: "delete",
                    text: "Delete",
                    onClick: () => alert("click"),
                  },
                  {
                    icon: "Clear",
                    text: "Deactivate",
                    onClick: () => alert("click"),
                  },
                ],
              },
            ]}
          />

          <BoxId
            title="Inactive IDs"
            list={[
              {
                leftImage:
                  "https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=935&q=80",
                boldText: "Mobile Number ••••••4546",

                iconButtons: [
                  {
                    icon: "Edit",
                    text: "Edit",
                    onClick: () => alert("click"),
                  },
                  {
                    icon: "delete",
                    text: "Delete",
                    onClick: () => alert("click"),
                  },
                  {
                    icon: "Clear",
                    text: "Deactivate",
                    onClick: () => alert("click"),
                  },
                ],
              },
            ]}
          />

          <BoxId
            title="Active"
            isActive={true}
            list={[
              {
                leftImage: images.common.Duitnow1,
                boldText: "DuitNow QR",
                subText: "Savings Account A  |  ••••••••4321",
                iconButtons: [
                  {
                    icon: "Switch",
                    text: "Change Default Account",
                    onClick: () => alert("click"),
                  },
                ],
              },
            ]}
          />
        </div>
      </CenteredDiv>

      <Title>HeaderWithIButtons</Title>
      <CenteredDiv>
        <div style={{ width: 620 }}>
          <HeaderWithIButtons
            headerStyle={{
              backgroundColor: "rgba(196, 196, 196, 0.3)",
            }}
            icon={{ name: "Amy", color: "#ff2626" }}
            label="Your DuitNow IDs (3/5)"
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
            }}
            buttonLabel={"Add Mobile Number"}
            buttonColor={{ top: "#F6F6F3", bottom: "#EAE9E3" }}
            buttonIcon={{ name: "Add", color: "#000000", size: 25 }}
            onButtonClick={() => alert("clicked")}
          />
          <br />
          <HeaderWithIButtons
            headerStyle={{
              backgroundColor: "rgba(196, 196, 196, 0.3)",
            }}
            image={{ src: images.common.Duitnow1 }}
            label="Your DuitNow IDs (3/5)"
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
            }}
            buttonLabel={"Add Mobile Number"}
            buttonColor={{ top: "#F6F6F3", bottom: "#EAE9E3" }}
            buttonIcon={{ name: "Add", color: "#000000", size: 25 }}
            onButtonClick={() => alert("clicked")}
          />
        </div>
      </CenteredDiv>

      <Title>Header With Icons</Title>
      <CenteredDiv>
        <div style={{ width: 620 }}>
          <HeaderWithIcons
            headerStyle={{
              backgroundColor: "rgba(196, 196, 196, 0.3)",
            }}
            label={"DuitNow QR"}
            image={{ src: images.common.Duitnow1 }}
            onIconClick={() => alert("clicked")}
          />
          <br />
          <HeaderWithIcons
            headerStyle={{
              backgroundColor: "rgba(196, 196, 196, 0.3)",
            }}
            label={"DuitNow QR"}
            labelStyle={{ fontWeight: "normal" }}
            leftIcon={{ name: "Amy", color: "#ff2626" }}
            onIconClick={() => alert("clicked")}
          />
        </div>
      </CenteredDiv>

      <Title>Simple Header</Title>
      <CenteredDiv>
        <div style={{ width: 620 }}>
          <SimpleHeader
            label="Change Default Account"
            headerStyle={{
              backgroundColor: "rgba(196, 196, 196, 0.3)",
            }}
          />
        </div>
      </CenteredDiv>

      <Title>TextWithLink</Title>
      <CenteredDiv>
        <TextWithLink
          label="I agree to the"
          textWithLink="Terms and conditions"
          onClick={() => alert("Hello")}
        />
      </CenteredDiv>

      <Title>TooltipDropdown</Title>
      <CenteredDiv>
        <TooltipDropdown
          iconButtons={[
            {
              icon: "Edit",
              text: "Edit",
              onClick: () => alert("click"),
            },
            {
              icon: "delete",
              text: "Delete",
              onClick: () => alert("click"),
            },
            {
              icon: "Clear",
              text: "Deactivate",
              onClick: () => alert("click"),
            },
          ]}
        />
      </CenteredDiv>

      <Title>LinkList</Title>
      <CenteredDiv style={{ margin: "1.5rem" }}>
        <LinkList
          testId="link_list_sprint_3_test"
          defaultActiveKey="2"
          list={[
            {
              label: "Show on AmOnline",
              rightItem: (
                <ToggleButton
                  toggleOffLabel="NO"
                  toggleOnLabel="YES"
                  value={true}
                  onTogglePress={() => {}}
                />
              ),
            },
            { label: "Change Card PIN" },
            {
              label: "Nickname", // change Lastname
              leftIcon: <Icon icon="Announcement" size={22} color="#444444" />,
              bold: true, // chang false
              onListClick: () => {
                // window.alert(`clicked on item ${item.label}`);
                // window.alert(`ITEM NAME:::: ${item.label}`)
              },
              // rightItem: (
              //   <ToggleButton
              //     toggleOffLabel="NO"
              //     toggleOnLabel="YES"
              //     value={true}
              //     onTogglePress={() => {}}
              //   />
              // ), // change
              expandable: true, // change false
              expandableContent: (
                <>
                  <InputFields
                    type="text"
                    value=""
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
                        setLinkListBtnColor({
                          top: "#FF0D0D",
                          bottom: "#FD8585",
                        });
                      },
                      clearClickHandler: () => {
                        // window.alert(`clear change`)
                        setLinkListInputValue("");
                        setLinkListClear(false);
                        setLinkListBtnColor({
                          top: "#BDBDBD",
                          bottom: "#BDBDBD",
                        });
                      },
                      clearIcon: linkListInputValue ? true : linkListClear, // change false
                      label: "", // change Test Input
                      icon: { name: "Lock" }, // change Amy
                      errorMessage: {
                        errorText: "something wrong",
                        subText: "detail error",
                      },
                    }}
                  />
                  <PrimaryButton
                    onButtonClick={() => {
                      window.alert("Button Clicked");
                    }}
                    title={"Update"}
                    titleColor={"#fff"}
                    buttonColor={{
                      top: "#BDBDBD",
                      bottom: "#BDBDBD",
                    }}
                    {...{
                      onButtonClick: () => {
                        alert("Button Clicked");
                      },
                      title: "Update",
                      titleColor: "#fff",
                      buttonColor: linkListBtnColor,
                    }}
                  />
                </>
              ),
              subtitle: [
                "AmBank BonusLink Visa",
                "AmBank BonusLink Mastercard", // change
                // 'Another line of subtitle'
              ],
              leftBorderColor: "red", // change green
            },
            { label: "Block This Card" },
            { label: "Block This Replace This Card" },
          ]}
        />
      </CenteredDiv>

      <Title>Selection Tiles</Title>
      <div style={{ paddingLeft: "2rem" }}>
        <SelectionTile
          rowStyle={{ flexWrap: "nowrap" }}
          testId={"testId"}
          onTileClick={(item, index) => {
            setSTileNum(index);
            alert(`${item.accountTitle} with indexOf ${index} clicked`);
          }}
          selected={sTileNum}
          list={[
            {
              children: (
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
                  quasi libero placeat vel! Dicta modi accusamus, quo magnam
                  pariatur doloremque.
                </p>
              ),
            },
            {
              children: (
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
                  quasi libero placeat vel! Dicta modi accusamus, magnam
                  pariatur doloremque magnam pariatur doloremque quo magnam
                  pariatur doloremque.
                </p>
              ),
            },
            {
              children: (
                <p>
                  Lorem ipsuelit. Quos quasi libero placeat vel! Dic doloremque
                  magnam pariatur doloremque quo magnam pariatur doloremque.
                </p>
              ),
            },
          ]}
        />

        <SelectionTile
          onTileClick={(item, index) => {
            setSTileNum1(index);
            alert(`${item.accountTitle} with indexOf ${index} clicked`);
          }}
          selected={sTileNum1}
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
              children: <img src={images.common.sampleLogo} width={150} />,
            },

            {
              avatar: {
                name: "Kurniawan Suriawati",
                initials: "KS",
              },
            },
          ]}
        />
        <SelectionTile
          onTileClick={(item, index) => {
            setSTileNum2(index);
            alert(`${item.accountTitle} with indexOf ${index} clicked`);
          }}
          selected={sTileNum2}
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
          ]}
        />
        <SelectionTile
          centered={true}
          onTileClick={(item, index) => {
            setSTileNum3(index);
            alert(`${item.centeredText} with indexOf ${index} clicked`);
          }}
          selected={sTileNum3}
          list={[
            {
              centeredText: "Lost",
            },
            {
              centeredText: "Stolen",
            },
            {
              centeredText: "Suspicious Activity",
            },
          ]}
        />
      </div>

      <Title>Sticky Footer</Title>
      <CenteredDiv>
        <PrimaryButton
          title={"Open Sticky Footer"}
          onButtonClick={() => {
            setStickyFooter(!stickyFooter);
          }}
        />
      </CenteredDiv>
      <StickyFooter
        isOpen={stickyFooter}
        label="Hide Card"
        buttonTitle="Yes, Disable"
        onButtonClick={() => {
          setStickyFooter(!stickyFooter);
        }}
        iconText="Disable online purchases for AmBank Debit Card?"
      />

      <Title>UnitTrustList</Title>
      <CenteredDiv>
        <UnitTrustList
          header={[
            {
              title: "Fund Name",
              icon: "sort",
              onArrowClick: () => alert(" Handle sort and icon change"),

              arrowDownBold: true,
              arrowUpBold: false,
            },
            {
              title: "Value",
              icon: "sort",
              onArrowClick: () => alert(" Handle sort and icon change"),
              arrowDownBold: false,
              arrowUpBold: true,
            },
            {
              title: "Profit/Loss",
              icon: "sort",
              onArrowClick: () => alert(" Handle sort and icon change"),
              arrowDownBold: true,
              arrowUpBold: false,
            },
          ]}
          testId={"testId"}
          data={[
            {
              borderColor: "#FFA463",
              expandableLeft: true,
              leftLabel: "Advantage Global Equity Volatility Focused",
              middleLabel: "RM 406,318.98",
              rightLabel: {
                type: "loss",
                percentage: "0.03%",
                amount: "RM 23,312,189.56",
              },
              rightButtons: [
                {
                  icon: "Edit",
                  text: "Edit",
                  onClick: () => alert("click"),
                },
                {
                  icon: "delete",
                  text: "Delete",
                  onClick: () => alert("click"),
                },
              ],
              leftContent: (
                <PortfolioListContent
                  borderColor="#FFA463"
                  buttonText="View Performance"
                  onClickButton={() => alert("button clicked")}
                  data={[
                    {
                      leftLabel: "Invested",
                      rightLabel: "RM 418,944.73",
                    },
                    {
                      leftLabel: "NAV",
                      rightLabel: "4.7894",
                    },
                    {
                      leftLabel: "Number of Units",
                      rightLabel: "1,828.40",
                    },
                    {
                      leftLabel: "Asset Class",
                      rightLabel: "Equity",
                      rightLabelStyle: {
                        color: "#FFA463",
                      },
                    },
                  ]}
                />
              ),
            },
            {
              borderColor: "#8677D9",
              expandableLeft: true,
              leftLabel: "Advantage Global Equity Volatility Focused",
              rightLabel: {
                type: "profit",
                percentage: "0.03%",
                amount: "RM 12,189.56",
              },
              rightButtons: [
                {
                  icon: "Edit",
                  text: "Edit",
                  onClick: () => alert("click"),
                },
                {
                  icon: "delete",
                  text: "Delete",
                  onClick: () => alert("click"),
                },
              ],
              middleLabel: "RM 406,318.98",
              leftContent: (
                <PortfolioListContent
                  borderColor="#8677D9"
                  buttonText="View Performance"
                  onClickButton={() => alert("button clicked")}
                  data={[
                    {
                      leftLabel: "Invested",
                      rightLabel: "RM 418,944.73",
                    },
                    {
                      leftLabel: "NAV",
                      rightLabel: "4.7894",
                    },
                    {
                      leftLabel: "Number of Unts",
                      rightLabel: "1,828.40",
                    },
                    {
                      leftLabel: "Asset Class",
                      rightLabel: "Equity",
                    },
                  ]}
                />
              ),
            },
            {
              borderColor: "#7AB497",
              expandableLeft: true,
              leftLabel: "Advantage Global Equity Volatility Focused",
              rightLabel: {
                type: "loss",
                percentage: "0.03%",
                amount: "RM 12,189.56",
              },
              rightButtons: [
                {
                  icon: "Edit",
                  text: "Edit",
                  onClick: () => alert("click"),
                },
                {
                  icon: "delete",
                  text: "Delete",
                  onClick: () => alert("click"),
                },
              ],
              middleLabel: "RM 406,318.98",
              leftContent: (
                <PortfolioListContent
                  borderColor="#7AB497"
                  buttonText="View Performance"
                  onClickButton={() => alert("button clicked")}
                  data={[
                    {
                      leftLabel: "Invested",
                      rightLabel: "RM 418,944.73",
                    },
                    {
                      leftLabel: "NAV",
                      rightLabel: "4.7894",
                    },
                    {
                      leftLabel: "Number of Unts",
                      rightLabel: "1,828.40",
                    },
                    {
                      leftLabel: "Asset Class",
                      rightLabel: "Equity",
                    },
                  ]}
                />
              ),
            },
          ]}
        />
      </CenteredDiv>

      <Title>SettingModalCenter</Title>
      <PrimaryButton
        title="Open Settings Modal"
        onButtonClick={() => setSettingsModalOpen(true)}
      />
      <SettingModalCenter // give CV  close functionality
        testId={"testId"}
        modalIsOpen={settingsModalOpen}
        onRequestClose={() => alert("close")}
        modalChildren={
          <StatusFormContainer
            statusIcon={{
              iconColor: { top: "#DCEAEA", bottom: "#7FA2A2" },
              image: {
                src: images.common.amyIcon,
                alt: "logo",
              },
              outerIconColor: "#EAF4F4",
            }}
            children={
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "0rem 2rem",
                  marginTop: "1rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "1rem",
                  }}
                >
                  <TextWithDetails
                    title="Forgotten your username and password?"
                    content={[
                      "If you have forgotten your username and/or password, you can change them in AmOnline",
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
                        fontSize: "0.93rem",
                      }}
                      icon={{
                        name: "Call",
                        color: "#FF2626",
                        size: 28,
                      }}
                    />
                  </div>
                  <LabeledIcon
                    rightLabel="customercare@ambankgroup.com"
                    rightLabelStyle={{ fontWeight: 700, fontSize: "0.93rem" }}
                    icon={{
                      name: "Inbox",
                      color: "#FF2626",
                      size: 28,
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

      <Title>Message (using CenterMessage component)</Title>
      <div
        style={{
          height: 500,
        }}
      >
        <CenterMessage // show props , positioning props
          show={true}
          style={{ padding: "80px" }}
          title="You have been logged out"
          subtitle="Thank you for banking with AmOnline Thank you for banking with AmOnline Thank you for banking with AmOnline Thank you for banking with AmOnline Thank you for banking with AmOnlineThank you for banking with AmOnlineThank you for banking with AmOnlineThank you for banking with AmOnlineThank you for banking with AmOnline Thank you for banking with AmOnline Thank you for banking with AmOnline "
        />
      </div>

      <Title>
        W2W ModalList using (StatusFormContainer and List component)and Line
      </Title>
      <div
        style={{
          backgroundColor: "#EEEEEE",
          paddingTop: 100,
        }}
      >
        <StatusFormContainer
          statusIcon={{
            icon: "Fail",
            iconColor: { top: "#FD8585", bottom: "#FF2222" },
            outerIconColor: "#FFEBEE",
          }}
          children={
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
            </div>
          }
        />
      </div>

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
                    leftLabel: "this is sample long data fot testing purposes",
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

      <Title>Sprint 4</Title>

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
                  label: "Conventional Fixed Deposit 1",
                },
                {
                  value: "test_value2",
                  label: "Conventional Fixed Deposit 2",
                },
                {
                  value: "test_value3",
                  label: "Conventional Fixed Deposit 3",
                },
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
                    ),
                  },
                  {
                    children: (
                      <img src={require("src/assets/images/slider.png")} />
                    ),
                  },
                  {
                    children: (
                      <img src={require("src/assets/images/slider.png")} />
                    ),
                  },
                  {
                    children: (
                      <img src={require("src/assets/images/slider.png")} />
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
            <InputFields
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
          Btnwidth={"20.43rem"}
          onButtonClick={() => alert("check")}
          statusText={" You will be redirected to FPX status page in 9 seconds"}
        />
      </div>

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

      <Title>DetailList</Title>
      <div style={{ width: "38.5rem", margin: "0 auto" }}>
        <DetailList
          testId={"testId"}
          // title={[
          //   "*RM Amount is an indicative value and to be considered as reference only.",
          //   "Protected by PIDM up to RM 250,000 for each depositor."
          // ]}
          title="*RM Amount is an indicative value and to be considered as reference only.
          Protected by PIDM up to RM 250,000 for each depositor."
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

      <Title> Reset Pin</Title>
      <CenteredDiv
        style={{ position: "relative", padding: "5rem 6rem", height: "25rem" }}
      >
        <AmResetPin
          showKeyPad={true}
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
      <Title>Confirm Notes</Title>
      <CenteredDiv
        style={{
          margin: "1rem 15rem",
        }}
      >
        <ConfirmNotes
          testId="sprint_4_confirm_notes"
          title={{
            content: "Important Notes",
            style: { fontSize: "2rem" },
          }}
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
          ]}
        />
      </CenteredDiv>

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
                  label: "Conventional Fixed Deposit 1",
                },
                {
                  value: "test_value2",
                  label: "Conventional Fixed Deposit 2",
                },
                {
                  value: "test_value3",
                  label: "Conventional Fixed Deposit 3",
                },
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
                    ),
                  },
                  {
                    children: (
                      <img src={require("src/assets/images/slider.png")} />
                    ),
                  },
                  {
                    children: (
                      <img src={require("src/assets/images/slider.png")} />
                    ),
                  },
                  {
                    children: (
                      <img src={require("src/assets/images/slider.png")} />
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
          width: "30rem",
        }}
      >
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
      </CenteredDiv>

      <Title>Confirm Notes</Title>
      <CenteredDiv
        style={{
          margin: "1rem 15rem",
        }}
      >
        <ConfirmNotes
          testId="sprint_4_confirm_notes"
          title={{
            content: "Important Notes",
            style: { fontSize: "2rem" },
          }}
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
          ]}
        />
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

export default NodeModule;
