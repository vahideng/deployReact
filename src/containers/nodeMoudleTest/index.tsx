import React from "react";

import styled from "styled-components";
import Paragraphs from "../../components/assets/typography";

import { AmResetPin, UnitTrustList, PortfolioListContent,ConfirmNotes, PrimaryButton, ViewRateContainer, ViewRate, AmModal} from "amonline-reactjs-component";
const { B_13_ORANGE_463 } = Paragraphs;

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

const NodeModule: React.FC = () => {


  const [rateType, setRateType] = React.useState("test_value3");
  const [isViewRateModalOpen, setIsViewRateModalOpen] = React.useState(false);
  return (
    <div>
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
                }
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
                }
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
                }
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
      <Title> Reset Pin</Title>  
    <CenteredDiv style={{position:'relative',padding:'5rem 6rem',height:'25rem'}}>
    <AmResetPin
      testId="testId"
      keysArray={[5,8,1,0,4,6,2,9,3,7]}
      onEnterClick={() => {alert('Enter click')}}
      onNumberSelected={(item:any) =>{alert(item)}}
      EnterIcon={{name:"system-close-grey",size:15,color:'#000000'}}
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
    </div>
  );
};

export default NodeModule;
