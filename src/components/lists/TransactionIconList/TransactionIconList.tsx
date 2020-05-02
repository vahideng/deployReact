import React from "react";
import classes from "./TransactionIconList.module.css";
import Paragraphs from "../../assets/typography";
import Icon from "src/components/assets/icons/icon";

const { R_13_BLACK, B_13_BLACK, B_11_WHITE, R_15_BLACK, } = Paragraphs;
interface Props {
  testId?: string;
  list: {
    date: string;
    expandedIndexes: Array<number>;
    transactions: {
      icon: string;
      iconColor: string;
      iconSize: number;
      iconBgColor: string;
      label1: string;
      label2: string;
      statusLabel: string;
      statusLabelColor: string;
      changeLabel?: string;
      changeLabelColor?: string;
      amount: string;
      actionLabel?: string;
      actionIcon?: string;
      hideButtons?:boolean;
      onActionButtonClick?: () => void;
      details?: {
        label1?: string;
        value1?: string;
        label2?: string;
        value2?: string;
        actionLabel?: string;
        actionIcon?: string;
        onActionButtonClick?: () => void;
      }[];
    }[];
  }[];
  onTransactionClick: (item: any, sectionIndex: number, index: number) => void;
}

const AccountsList: React.FC<Props> = ({
  list,
  onTransactionClick,
  testId,
  
}) => {
  return (
    <div className={classes.TransactionIconListMainDiv} id={testId}>
      {!!list &&
        list.map((item, sectionIndex) => (
          <div
            id={`${testId}-${sectionIndex}`}
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              paddingRight: 31,
              paddingLeft: 31
            }}
          >
            <R_15_BLACK
              style={{ fontSize: 16, marginBottom: 20, fontWeight: "bold" }}
            >
              {item.date}
            </R_15_BLACK>
            {item.transactions.map((transaction, index) => (
              <div
                id={`${testId}-0-${index}`}
                style={{
                  display: "flex",
                  flex: 1,
                  flexDirection: "column",
                  marginBottom: 20
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flex: 1,
                    flexDirection: "row",
                    marginBottom: item.expandedIndexes.includes(index) ? 30 : 0
                  }}
                >
                  <div
                    style={{
                      height: "2.25em",
                      width: "2.25em",
                      borderRadius: "1.125em",
                      backgroundColor: transaction.iconBgColor,
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                      marginRight: 14
                    }}
                  >
                    <Icon
                      icon={transaction.icon}
                      color={transaction.iconColor}
                      size={transaction.iconSize}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flex: 2,
                      flexDirection: "column"
                    }}
                  >
                    <R_13_BLACK style={{ marginBottom: 6 }}>
                      {transaction.label1}
                    </R_13_BLACK>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        cursor: "pointer"
                      }}
                      onClick={() =>
                        onTransactionClick(transaction, sectionIndex, index)
                      }
                    >
                      <B_13_BLACK>
                        {transaction.label2}
                        {transaction.details && (
                          <Icon
                            icon={
                              item.expandedIndexes.includes(index)
                                ? "arrowUp"
                                : "arrowDown"
                            }
                            size={15}
                            style={{ marginLeft: 6 }}
                          />
                        )}
                      </B_13_BLACK>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flex: 1,
                      flexDirection: "column"
                    }}
                  >
                    <R_13_BLACK style={{ opacity: 0, marginBottom: 6 }}>
                      SUCCESSFUL
                    </R_13_BLACK>{" "}
                    {/* <--- Spacer with opacity 0*/}
                    <B_13_BLACK
                      style={{
                        color: transaction.statusLabelColor,
                        fontWeight: 'bolder',
                      }}
                    >
                      {transaction.statusLabel}
                    </B_13_BLACK>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flex: 1,
                      flexDirection: "column"
                    }}
                  >
                    <R_13_BLACK style={{ opacity: 0, marginBottom: 6 }}>
                      SUCCESSFUL
                    </R_13_BLACK>{" "}
                    {/* <--- Spacer with opacity 0*/}
                    <div
                      style={{ display: "flex", flex: 1, flexDirection: "row" }}
                    >
                      {transaction.changeLabel && transaction.changeLabelColor && (
                        <R_13_BLACK
                          style={{
                            color: transaction.changeLabelColor,
                            marginRight: 4,
                            fontWeight: 700
                          }}
                        >
                          {transaction.changeLabel}
                        </R_13_BLACK>
                      )}
                      <R_13_BLACK style={{ fontWeight: 700 }}>
                        {transaction.amount}
                      </R_13_BLACK>
                    </div> 
                  </div>
                { !!transaction.hideButtons ? !transaction.hideButtons : true  &&
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <button
                      style={{
                        border: "none",
                        background: `linear-gradient(180deg, #F6F6F3 0%, #EAE9E3 100%)`,
                        borderRadius: 31,
                        height: "1.9375em",
                        width: "7.5em"
                      }}
                      onClick={
                        transaction.onActionButtonClick &&
                        transaction.onActionButtonClick
                      }
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center"
                        }}
                      >
                        {transaction.actionIcon && (
                          <Icon
                            icon={transaction.actionIcon}
                            color={"#000"}
                            size={20}
                          />
                        )}
                        <B_11_WHITE style={{ marginLeft: 8, color: "black" }}>
                          {transaction.actionLabel}
                        </B_11_WHITE>
                      </div>
                    </button>
                  </div>
}
                </div>
                        
                {item.expandedIndexes.includes(index) && (
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    {transaction.details &&
                      transaction.details.map((transactionDetail, TDIndex) => (
                        <>
                          <div
                            id={`${testId}-1-${TDIndex}`}
                            style={{
                              display: "flex",
                              flex: 1,
                              flexDirection: "row",
                              marginBottom: 24
                            }}
                          >
                            <div
                              style={{
                                height: "2.25em",
                                width: "2.25em",
                                borderRadius: "1.125em",
                                backgroundColor: "red",
                                justifyContent: "center",
                                alignItems: "center",
                                display: "flex",
                                marginRight: 14,
                                opacity: 0
                              }}
                            >
                              <Icon icon={"Right1"} color={"#000"} size={28} />
                            </div>

                            <div
                              style={{
                                display: "flex",
                                flex: 1,
                                flexDirection: "column"
                              }}
                            >
                              <R_13_BLACK style={{ marginBottom: 6 }}>
                                {transactionDetail.label1}
                              </R_13_BLACK>
                              <B_13_BLACK>
                                {transactionDetail.value1}
                              </B_13_BLACK>
                            </div>

                            <div
                              style={{
                                display: "flex",
                                flex: 1,
                                flexDirection: "column"
                              }}
                            >
                              <R_13_BLACK style={{ marginBottom: 6 }}>
                                {transactionDetail.label2}
                              </R_13_BLACK>
                              <B_13_BLACK>
                                {transactionDetail.value2}
                              </B_13_BLACK>
                            </div>
                            { !!transaction.hideButtons ? !transaction.hideButtons : true  &&
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center"
                              }}
                            >
                              <button
                                style={{
                                  border: "none",
                                  background: `linear-gradient(180deg, #F6F6F3 0%, #EAE9E3 100%)`,
                                  borderRadius: 31,
                                  height: "1.9375em",
                                  width: "7.5em",
                                  opacity: transactionDetail.actionLabel ? 1 : 0
                                }}
                                onClick={
                                  transactionDetail.onActionButtonClick &&
                                  transactionDetail.onActionButtonClick
                                }
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center"
                                  }}
                                >
                                  {transactionDetail.actionIcon && (
                                    <Icon
                                      icon={transactionDetail.actionIcon}
                                      color={"#000"}
                                      size={20}
                                    />
                                  )}
                                  <B_11_WHITE
                                    style={{ marginLeft: 8, color: "black" }}
                                  >
                                    {transactionDetail.actionLabel}
                                  </B_11_WHITE>
                                </div>
                              </button>
                            </div>
}
                        </div>
                          {transaction.details &&
                            TDIndex === transaction.details.length - 1 && (
                              <div
                                style={{
                                  height: 1,
                                  width: "100%",
                                  backgroundColor: "#dedede"
                                }}
                              />
                            )}
                        </>
                      ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default AccountsList;
