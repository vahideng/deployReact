import React from "react";

import styled from "styled-components";
import Paragraphs from "../../components/assets/typography";

import { TransactionList, FormContainer, List , UnitTrustList, PortfolioListContent} from "amonline-reactjs-component";
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
    </div>
  );
};

export default NodeModule;
