import React, { Component } from "react";
import Paragraphs from "../../components/assets/typography";
import styled from "styled-components";
// import images from "src/assets";

import BannerHero from "src/components/banners/bannerHero/BannerHero";

import { Redirect } from "react-router-dom";
import Navbar from "src/components/headers/navbar/Navbar";
import BoxContent from "src/components/boxContent/BoxContent";
import { Row, Col } from "react-bootstrap";
import TransactionLimitList from "src/components/lists/TransactionLimitList/TransactionLimitList";

const { B_13_ORANGE_463 } = Paragraphs;
const Title = styled(B_13_ORANGE_463)`
  text-align: center;
  padding: 5px 0;
  margin: 5px 0;
  border-top: 1px solid #ffa463;
  border-bottom: 1px solid #ffa463;
`;

// const CenteredDiv = styled.div`
//   display: flex;
//   justify-content: center;
//   padding-top: 5rem;
// `;
// const RowDiv = styled.div`
//   display: flex;
//   flex-direction: "row";
// `;
interface Props {}
interface State {
  homeRedirect: boolean;
}

class Sprint2 extends Component<Props, State> {
  state = {
    homeRedirect: false
  };
  render() {
    const { homeRedirect } = this.state;

    if (homeRedirect === true) {
      return <Redirect to="/" />;
    }
    return (
      <div style={{ paddingTop: 100 }}>
        <Navbar
          icon={{
            onIconClick: () => {
              this.setState({
                homeRedirect: true
              });
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
  }
}

export default Sprint2;
