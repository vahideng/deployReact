import React, { Component } from "react";
import Paragraphs from "../../components/assets/typography";
import styled from "styled-components";
// import images from "src/assets";

import BannerHero from "src/components/banners/bannerHero/BannerHero";

import { Redirect } from "react-router-dom";
import Navbar from "src/components/headers/navbar/Navbar";

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
      </div>
    );
  }
}

export default Sprint2;
