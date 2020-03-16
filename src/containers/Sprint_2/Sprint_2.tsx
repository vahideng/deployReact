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
      <Title>Box_V2</Title>
      <Box_V2
        title={"Login"}
        boxChildren={
          <div style={{ padding: "3rem 1.5rem" }}>
            <InputField
              notValid={true}
              errorMessage={{
                testId: "testId",
                errorText: "The TAC is incorrect",
                subText: "Please try again."
              }}
              type="text"
              clearClickHandler={() => alert("clear clicked")}
              clearIcon={true}
              label="input label"
              icon={{ name: "Account-2" }}
              value={""}
              handleChange={event => {
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
      <Title>BoxSlider &larr;---&rarr; BoxContent</Title>

      <Row>
        <Col xs={0} md={7}>
          <BoxSlider
            sliderItems={[
              {
                tagText: "ANNOUNCeMeNTS",
                title: "Pay Bills to Majlis Bandaraya Seremban via JomPAY",
                descriptions:
                  "Majlis Perbandaran Nilai and Majlis Perbandaran Seremban have combined to become Majlis Bandaraya Seremban (MBS). You can now pay to MBS via JomPAY on AmOnline through all the different channels such as Consectetur elit. At vero eos et accusamus et iusto odio. Sithfint occ. Neque porro quisquam est qui dolorem adipisci velit",
                readMore: {
                  text: "read more",
                  onReadClick: () => {
                    alert("ReadMore");
                  }
                }
              },
              {
                tagText: "ANNOUNCeMeNTS",
                title: "Pay Bills to Majlis Bandaraya Seremban via JomPAY",
                descriptions:
                  "The semiotics of the console in faded pinks and yellows. They were dropping, losing altitude in a canyon of rainbow foliage, a lurid communal mural that completely covered the hull of the previous century",
                readMore: {
                  text: "read more",
                  onReadClick: () => {
                    alert("ReadMore");
                  }
                }
              },
              {
                tagText: "ANNOUNCeMeNTS",
                title: "Pay Bills to Majlis Bandaraya Seremban via JomPAY",
                descriptions:
                  "We will enlarge our ability to iterate virtually. It sounds wonderful, but it's 100 percent accurate! The experiences factor is short-term"
              },
              {
                tagText: "ANNOUNCeMeNTS",
                title: "Pay Bills to Majlis Bandaraya Seremban via JomPAY",
                descriptions:
                  "We will enlarge our ability to iterate virtually. It sounds wonderful, but it's 100 percent accurate! The experiences factor is short-term"
              }
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

      <Title>First Banner</Title>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginLeft: "58px",
          marginRight: "58px"
          // alignItems: "center"
        }}
      >
        <div style={{ marginRight: "23px" }}>
          <FirstBanner
            content="Consectetur elit. At vero eos et accusamus et iusto odio. Excepteur sint occaecat cupidatat no..."
            image="https://images.unsplash.com/photo-1532033375034-a29004ea9769?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
            tag="tempor incidunt"
            title="Why pick between yield and liquidity? "
          />
        </div>
        <div style={{ marginRight: "23px" }}>
          <FirstBanner
            content="Consectetur elit. At vero eos et accusamus et iusto odio. Excepteur sint occaecat cupidatat no..."
            image="https://images.unsplash.com/photo-1532033375034-a29004ea9769?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
            tag="tempor incidunt"
            title="Why pick between yield and liquidity? "
          />
        </div>
        <div>
          <FirstBanner
            content="Consectetur elit. At vero eos et accusamus et iusto odio. Excepteur sint occaecat cupidatat no..."
            image="https://images.unsplash.com/photo-1532033375034-a29004ea9769?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
            tag="tempor incidunt"
            title="Why pick between yield and liquidity? "
          />
        </div>
      </div>

      <Title>Second Banner</Title>
      <div
        style={{
          marginLeft: "58px",
          marginRight: "58px"
        }}
      >
        <SecondBanner
          data={[
            {
              onClick: () => alert("click"),
              content:
                "Consectetur elit. At vero eos et accusamus et iusto odio. Excepteur sint occ. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
              video:
                "https://images.unsplash.com/photo-1532033375034-a29004ea9769?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80",
              title:
                "Lorem ipsum dolor sit amet, surreal awesome gabr builds conver assion"
            },
            {
              content:
                "Consectetur elit. At vero eos et accusamus et iusto odio. Excepteur sint occ. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
              image:
                "https://images.unsplash.com/photo-1532033375034-a29004ea9769?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80",
              title:
                "Lorem ipsum dolor sit amet, surreal awesome gabr builds conver assion"
            },
            {
              content:
                "Consectetur elit. At vero eos et accusamus et iusto odio. Excepteur sint occ. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
              image:
                "https://images.unsplash.com/photo-1532033375034-a29004ea9769?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80",
              title:
                "Lorem ipsum dolor sit amet, surreal awesome gabr builds conver assion"
            }
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
            marginRight: "3.62rem"
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
                highlighted: true
              },
              {
                title:
                  "Lorem ipsum dolor sit amet, surreal awesome gabr builds conversion"
              },
              {
                title:
                  "Lorem ipsum dolor sit amet, surreal awesome gabr builds conversion"
              }
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Sprint2;
