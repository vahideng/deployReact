import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Paragraphs from "../../components/assets/typography";
import styled from "styled-components";
import Navbar from "src/components/headers/navbar/Navbar";
import BannerHero from "src/components/banners/bannerHero/BannerHero";
import TransactionLimitList from "src/components/lists/TransactionLimitList/TransactionLimitList";
import BoxContent from "src/components/boxContent/BoxContent";
// import images from "../../assets";
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
import BoxSlider from "src/components/carousel/boxSlider/BoxSlider";
import FirstBanner from "src/components/banners/firstBanner/FirstBanner";
import SecondBanner from "src/components/banners/secondBanner/SecondBanner";
import ArticleDetails from "src/components/articleDetails/ArticleDetails";
import InputField from "src/components/inputs/inputFields/InputFields";
import Box_V2 from "src/components/wrappers/box_V2/Box_V2";
import CalendarBox from "src/components/inputs/calendarBox/CalendarBox";
import images from "src/assets";
import moment from "moment";
import LocalImages from "src/components/assets/images";
import FormContainer from "src/components/wrappers/formContainer/FormContainer";

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
  const [sprint3, setSprint3] = useState(false);
  const [homeRedirect, setHomeRedirect] = useState(false);
  const [settingModalCenter, setSettingModalCenter] = useState(false);
  const [settingModal, setSettingModal] = useState(false);
  const [inputDate, setInputDate] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();

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

  const handleInputDateChange = (input: string) => {
    setInputDate(input);
  };

  const handleOnChange = (input: Date) => {
    const date = moment(input).format("DD/MM/YYYY");
    setSelectedDate(input);
    setInputDate(date);
  };

  return (
    <div style={{ paddingTop: 100 }}>
      <Navbar
        image={{
          src:
            "https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=935&q=80",
          onImageClick: () => {
            setHomeRedirect(true);
          },
          style: { width: "100px", height: "50px" },
        }}
        scrolledImage={{
          src:
            "https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=935&q=80",
          style: { width: "70px", height: "30px" },
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
        onRequestClose={() => alert("close")}
        testId={"testId"}
        modalIsOpen={settingModal}
        modalChildren={
          <SettingSummary
            icon={{ name: "Tick-1", size: 30 }}
            // image={{ src: images.common.amyIcon }}
            iconColor={{ top: "#94EC9B", bottom: "#5BB362" }}
            detailTitle="Successfully Activated"
            detail="Your account has been activated successfully."
            outerRoundSize={"3.9375rem"}
            innerRoundSize={"3.01875rem"}
          />
        }
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
      <SettingModalCenter
        // zIndex={-1}
        testId={"testId"}
        modalIsOpen={settingModalCenter}
        onRequestClose={() => alert("close")}
        modalChildren={
          <StatusFormContainer
            statusIcon={{
              iconColor: { top: "#FD8585", bottom: "#FF2222" },
              image: {
                src: images.common.amyIcon,
                alt: "logo",
              },
              outerIconColor: "#FFEBEE",
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
                ></div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "1rem",
                    marginBottom: "3rem",
                  }}
                >
                  <PrimaryButton
                    shadowed
                    title="No"
                    buttonStyle={{
                      background:
                        "linear-gradient(180deg, #F6F6F3 0%, #EAE9E3 100%)",
                    }}
                    containerStyle={{
                      marginRight: ".5rem",
                    }}
                    height="3rem"
                    minWidth="15rem"
                    titleColor="#000"
                  />
                  <PrimaryButton title="Yes" minWidth="15rem" />
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
      <Title>Box_V2</Title>
      <Box_V2
        title={"Login"}
        hideButton
        // tabTitles={["Security", "Login", "Contact Us"]}
        // content={[
        //   <p>We can’t seem to find any result for “Damansara Heights”</p>,
        //   <>
        //     <InputField
        //       type="text"
        //       clearClickHandler={() => alert("clear")}
        //       clearIcon={false}
        //       label="Username"
        //       icon={{ name: "Account-2" }}
        //       value={""}
        //       handleChange={(event) => {
        //         alert(event);
        //       }}
        //     />
        //     <div style={{ paddingTop: 30 }}>
        //       <TextButton
        //         testId="testId"
        //         buttonText="Forgot username/password?"
        //         onTextClick={(id) => {
        //           alert(`${id} clicked`);
        //         }}
        //       />
        //     </div>
        //   </>,
        // ]}
        boxChildren={
          <div style={{ padding: "3rem 1.5rem" }}>
            <InputField
              tipChildren={<p>tip</p>}
              notValid={true}
              errorMessage={{
                testId: "testId",
                errorText: "The TAC is incorrect",
                subText: "Please try again.",
              }}
              type="password"
              isSecure={true}
              clearClickHandler={() => alert("clear clicked")}
              clearIcon={true}
              label="input label"
              icon={{ name: "Lock" }}
              value={"value"}
              handleChange={(event) => {
                console.log(event.target.value);
              }}
            />
          </div>
        }
      />
      <Title>List</Title>
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
            approved: true,
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
      <Title>BannerHero</Title>
      <BannerHero
        buttonClick={() => {
          alert("Clicked");
        }}
        buttonText="Learn More"
        content="Total of RM2.5 Million to be won. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab."
        label="Hero Promotion"
        leftImage={images.common.masterCard}
        showButton={true}
        testId="testId"
        title="Grand Prize RM 1 Million Cash"
      />
      <Title>Transaction Limit List</Title>

      <div style={{ width: "30rem" }}>
        <TransactionLimitList
          selectedIndex={3}
          list={[
            {
              label: "AmBank BonusLink Visa BlackGold",
              subDetail: "7565 8767 5821 5409",
              onClick: (item, index) =>
                alert(`${JSON.stringify(item)},Index: ${index}`),
              rightLabelColor: "red",
              rightLabel: "Default",
              cardImg: LocalImages.common.card,
              notify: true,
            },
            {
              label: "Change Password",
              subDetail: "Password last change: 0 day ago",
              onClick: (item, index) =>
                alert(`${JSON.stringify(item)},Index: ${index}`),
            },
            {
              label: "Investments",
              subDetail: "Password last change: 0 day ago",
              onClick: (item, index) =>
                alert(`${JSON.stringify(item)},Index: ${index}`),
              rightLabelColor: "",
              rightLabel: "",

              cardImg: LocalImages.common.card,
            },
            {
              label: "Online Shopping",
              subDetail: "Password last change: 0 day ago",
              onClick: (item, index) =>
                alert(`${JSON.stringify(item)},Index: ${index}`),
              rightLabelColor: "green",
              rightLabel: "Default",
            },
            {
              label: "FPX Specific Merchant",
              subDetail: "Password last change: 0 day ago",
              onClick: (item, index) =>
                alert(`${JSON.stringify(item)},Index: ${index}`),
              rightLabelColor: "#000000",
              rightLabel: "Show",
            },
          ]}
          testId="testId"
        />
      </div>
      <TransactionLimitList
        selectedIndex={1}
        small
        list={[
          {
            label: "DuitNow ID",

            onClick: (item, index) =>
              alert(`${JSON.stringify(item)},Index: ${index}`),
          },
          {
            label: "DuitNow QR",
            onClick: (item, index) =>
              alert(`${JSON.stringify(item)},Index: ${index}`),
          },
        ]}
        testId="testId"
      />

      <>
        <TransactionLimitList
          selectedIndex={1}
          small
          list={[
            {
              label: "DuitNow ID",

              onClick: (item, index) =>
                alert(`${JSON.stringify(item)},Index: ${index}`),
            },
            {
              label: "DuitNow QR",
              onClick: (item, index) =>
                alert(`${JSON.stringify(item)},Index: ${index}`),
            },
          ]}
          testId="testId"
        />
      </>
      <Title>BoxSlider &larr;---&rarr; BoxContent</Title>
      <Row>
        <Col xs={0} md={7}>
          <BoxSlider
            sliderItems={[
              {
                tagText: "ANNOUNCeMeNTS",
                title:
                  "Pay Bills to Majlis Bandaraya Seremban Majlis Bandaraya Seremban Majlis Bandaraya Bandaraya Bandaraya Bandaraya Bandaraya Bandaraya Bandaraya Bandaraya Bandaraya  JomPAYPay Bills to Majlis Bandaraya Seremban via JomPAYPay Bills to Majlis Bandaraya Sean via JomPAY  JomPAYPay Bills to Majlis Bandaraya Seremban via JomPAY ",
                descriptions:
                  "Majlis Perbandaran Nilai and Majlis Perbandaran Seremban have combined to become Majlis Bandaraya Seremban (MBS). You can now pay to MBS via JomPAY on AmOnline through all the different channels such as Consectetur elit. At vero eos et accusamus et iusto odio. Sithfint occ. Neque porro quisquam est qui dolorem adipisci velit",
                readMore: {
                  text: "read more",
                  onReadClick: () => {
                    alert("ReadMore");
                  },
                },
              },
              {
                tagText: "ANNOUNCeMeNTS",
                title:
                  "A company that can streamline elegantly will (at some undefined point of time in the future) be able to orchestrate correctly.  company that can streamline elegantly will (at some undefined point of time in the future) future vfuture hbdss",
                descriptions:
                  "The semiotics of the console in faded pinks and yellows. They were dropping, losing altitude in a canyon of rainbow foliage, a lurid communal mural that completely covered the hull of the previous century",
                readMore: {
                  text: "read more",
                  onReadClick: () => {
                    alert("ReadMore");
                  },
                },
              },
              {
                tagText: "ANNOUNCeMeNTS-3",
                title: "shall be valid to all Cases affecting Ambassadors",
                descriptions:
                  "We will enlarge our ability to iterate virtually. It sounds wonderful, but it's 100 percent accurate! The experiences factor is short-term",
              },
              {
                tagText: "ANNOUNCeMeNTS-4",
                title: "Pay Bills to Majlis Seremban via JomPAY",
                descriptions:
                  "We will enlarge our ability to iterate virtually. It sounds wonderful, but it's 100 percent accurate! The experiences factor is short-term",
              },
            ]}
          />
        </Col>
        <Col xs={12} md={5}>
          <BoxContent
            content={[
              {
                title: "Phone Scam",
                content:
                  "Never respond to phone calls asking for your sensitive banking information.",
                icon: "Call",
              },
              {
                title: "SMS Scam",
                content:
                  "Never respond to SMS-es informing you have won a contest/reward that you did not participate in",
                icon: "Inbox",
              },
              {
                title: "Malware",
                content: "Never “jailbreak” or “root” your smart phones.",
                icon: "Hold",
              },
              {
                title: "Email Scam",
                content:
                  "Never click website links from unknown and suspicious senders",
                icon: "Target",
              },
            ]}
            tag="Security Alerts"
            testId="testId"
            title="Always be vigilant against scam threats."
            link={{
              label: "Learn more",
              onLinkClick: () => alert("link clicked"),
            }}
          />
        </Col>
      </Row>
      <Title>First Banner</Title>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginLeft: "58px",
          marginRight: "58px",
          // alignItems: "center"
        }}
      >
        <div style={{ width: "300PX", marginRight: "10px" }}>
          <FirstBanner
            onClick={() => alert("clicked")}
            content="Consectetur elit. At vero eos et accusamus et iusto odio. Excepteur sint occaecat cupidatat no..."
            image="https://images.unsplash.com/photo-1532033375034-a29004ea9769?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
            tag="tempor incidunt"
            title="Why pick between yield and liquidity? "
          />
        </div>
        <div style={{ width: "300PX", marginRight: "10px" }}>
          <FirstBanner
            onClick={() => alert("clicked")}
            content="Consecsadsadsadbdsabkdbaskbdkasbkbadskbdkasbksabbasdasdasdasdadsavasvdusabvhubuybguybgtetur elit. At vero eos et accusamus et iusto odio. Excepteur sint occaecat cupidatat no..."
            image="https://images.unsplash.com/photo-1532033375034-a29004ea9769?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
            tag="tempor incidunt"
            title="Why pick between yield and liquidity? "
          />
        </div>
        <div style={{ width: "300PX", marginRight: "10px" }}>
          <FirstBanner
            onClick={() => alert("clicked")}
            content="Consectetur elit. At vero eos et accusamus et iusto odio. Excepteur sint occaecat cupidatat no..."
            image="https://images.unsplash.com/photo-1532033375034-a29004ea9769?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
            tag="tempor incidunt"
            title="Why pick between yield and liquidity? "
          />
        </div>
      </div>
      <Title>BoxSlider Single Item</Title>
      <BoxSlider
        sliderItems={[
          {
            tagText: "ANNOUNCeMeNTS",
            title:
              "Pay Bills to Majlis Bandaraya Seremban via JomPAYPay Bills to Majlis Bandaraya Seremban via JomPAYPay Bandaraya Bandaraya Bandaraya Bandaraya  Bills to Majlis Bandaraya Seremban via JomPAY  JomPAYPay Bills to Majlis Bandaraya Seremban via JomPAY ",
            descriptions:
              "Majlis Perbandaran Nilai and Majlis Perbandaran Seremban have combined to become Majlis Bandaraya Seremban (MBS). You can now pay to MBS via JomPAY on AmOnline through all the different channels such as Consectetur elit. At vero eos et accusamus et iusto odio. Sithfint occ. Neque porro quisquam est qui dolorem adipisci velit",
            readMore: {
              text: "read more",
              onReadClick: () => {
                alert("ReadMore");
              },
            },
          },
        ]}
      />
      <FormContainer
        label={"Select your account/card type"}
        tooltip={
          <div>
            <p style={{ color: "#ffffff" }}>When would you like to transfer?</p>
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
      <FormContainer
        label={"Select your account/card type"}
        tooltip={
          <div>
            <p style={{ color: "#ffffff" }}>When would you like to transfer?</p>
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
      <Title>Second Banner</Title>
      <div
        style={{
          marginLeft: "58px",
          marginRight: "58px",
        }}
      >
        <SecondBanner
          data={[
            {
              onClick: (item) => alert(item.title),
              content:
                "Consectetur Consectetur ConsecteturConsectetur Consectetur  Consectetur  Consectetur Consectetur Consectetur Consectetur elit. At vero eos et accusamus et iusto odio. Excepteur sint occ. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
              video:
                "https://images.unsplash.com/photo-1532033375034-a29004ea9769?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80",

              title:
                "Lorem ipsum dolor sit amet, surreal awesome gabr builds conver assion",
            },
            {
              onClick: (item) => alert(item.title),
              content:
                "Consectetur elit. At vero eos et accusamus et iusto odio. Excepteur sint occ. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
              image: images.common.masterCard,
              title:
                "em ipsum doloem ipsum doloem ipsum doloem ipsum doloem ipsum doloem ipsum doloem ipsum doloLorem ipsum dolor sit amet, surreal awesome gabr builds conver assion",
            },
            {
              content:
                "Consectetur elit. At vero eos et accusamus et iusto odio. Excepteur sint occ. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
              image:
                "https://images.unsplash.com/photo-1532033375034-a29004ea9769?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80",
              title:
                "Lorem ipsum dolor sit amet, surreal awesome gabr builds conver assion",
            },
          ]}
          linkText="View More"
          title="Lorem Ipsum"
          linkOnClick={() => alert("click")}
        />
        <div
          style={{
            display: "flex",
            // justify-content: left;
            // margin-bottom: 2rem;
            marginLeft: "55rem",
            marginBottom: "20.44rem",
            marginRight: "3.62rem",
            // padding-left: 0.93rem;
          }}
        >
          <ArticleDetails
            onArticleClick={(item, index) => {
              alert(`${item.title} with the index ${index} clicked`);
            }}
            testId="testId"
            mainTitle="Lorem Ipsum"
            data={[
              {
                title:
                  "Lorem ipsum dolor sit amet, surreal awesome gabr builds",
                content:
                  "Consectetur elit. At vero eos et accusamus et iusto odio. Excepteur sint occ. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                highlighted: true,
                clickable: false,
              },
              {
                title:
                  "Lorem ipsum dolor sit amet, surreal awesome gabr builds conversion",
                clickable: true,
              },
              {
                title:
                  "Lorem ipsum dolor sit amet, surreal awesome gabr builds conversion",
                clickable: true,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Sprint2;
