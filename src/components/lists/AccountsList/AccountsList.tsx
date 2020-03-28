import React from "react";
import classes from "./AccountsList.module.css";
import Paragraphs from "../../assets/typography";
import Icon from "src/components/assets/icons/icon";
const {
  R_15_GREY444,
  B_20_BLACK,
  R_18_GREY444,
  B_24_BLACK,
  R_13_BLACK,
  SB_15_GREY393
} = Paragraphs;
interface Props {
  testId?: string;
  list: {
    label1: string;
    label2: string;
    amount: string;
    defaultLabel?: string;
    default?: boolean;
    statusLabel?: string;
    statusLabelColor?: string;
    selected: boolean;
    convertedAmount?: string;
    countryFlagImage?: any;
  }[];
  onAccountTileClick: (
    item: {
      label1: string;
      label2: string;
      amount: string;
      defaultLabel?: string;
      default?: boolean;
      statusLabel?: string;
      statusLabelColor?: string;
      selected: boolean;
      convertedAmount?: string;
      countryFlagImage?: any;
    },
    index: number
  ) => void;
}

const AccountsList: React.FC<Props> = ({
  list,
  onAccountTileClick,
  testId
}) => {
  return (
    <div className={classes.AccountsListMainDiv}>
      {!!list &&
        list.map((item, index) => {
          if (item.selected) {
            return (
              <div
                key={index}
                id={`${testId}-0${index}`}
                className={classes.AccountsTileSelected}
                onClick={() => onAccountTileClick(item, index)}
              >
                <div
                  style={{ display: "flex", flex: 1, flexDirection: "column" }}
                >
                  <R_18_GREY444 style={{ fontWeight: 400, letterSpacing: 0.3 }}>
                    {item.label1}
                  </R_18_GREY444>
                  <R_18_GREY444 style={{ fontWeight: 400, letterSpacing: 0.3 }}>
                    {item.label2}
                  </R_18_GREY444>
                  <div
                    style={{
                      display: "flex",
                      flex: 1,
                      flexDirection: "row",
                      alignItems: "center"
                    }}
                  >
                    {item.countryFlagImage && (
                      <img
                        src={item.countryFlagImage}
                        alt="Image"
                        width={"20rem"}
                        height={"15rem"}
                        className={classes.AccountListFlag}
                      />
                    )}

                    <B_24_BLACK>{item.amount}</B_24_BLACK>
                    {item.default && (
                      <R_13_BLACK style={{ marginLeft: 24, color: "#444" }}>
                        {item.defaultLabel}
                      </R_13_BLACK>
                    )}
                    {item.statusLabel && (
                      <R_13_BLACK
                        style={{
                          marginLeft: 16,
                          color: item.statusLabelColor
                            ? item.statusLabelColor
                            : "#000",
                          flex: 1,
                          textAlign: "right",
                          marginRight: 16
                        }}
                      >
                        {item.statusLabel}
                      </R_13_BLACK>
                    )}
                  </div>
                  {!!item.convertedAmount && (
                    <SB_15_GREY393>{`(${item.convertedAmount})*`}</SB_15_GREY393>
                  )}
                </div>
                <div
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    marginRight: -2
                  }}
                >
                  <Icon icon={"Right1"} color={"#000"} size={28} />
                </div>
              </div>
            );
          } else {
            return (
              <div
                key={index}
                id={`${testId}-1${index}`}
                className={classes.AccountsTile}
                onClick={() => onAccountTileClick(item, index)}
              >
                <div
                  style={{ display: "flex", flex: 1, flexDirection: "column" }}
                >
                  <R_15_GREY444 style={{ fontWeight: 400, letterSpacing: 0.3 }}>
                    {item.label1}
                  </R_15_GREY444>
                  <R_15_GREY444>{item.label2}</R_15_GREY444>
                  <div
                    style={{
                      display: "flex",
                      flex: 1,
                      flexDirection: "row",
                      alignItems: "center"
                    }}
                  >
                    {item.countryFlagImage && (
                      <img
                        src={item.countryFlagImage}
                        alt="Image"
                        width={"20rem"}
                        height={"15rem"}
                        className={classes.AccountListFlag}
                      />
                    )}
                    <B_20_BLACK style={{ letterSpacing: 0.4 }}>
                      {item.amount}
                    </B_20_BLACK>
                      {item.default && (
                        <R_13_BLACK style={{ marginLeft: 24 }}>
                          {item.defaultLabel}
                        </R_13_BLACK>
                      )}
                      {item.statusLabel && (
                        <R_13_BLACK
                          style={{
                            marginLeft: 16,
                            color: item.statusLabelColor
                              ? item.statusLabelColor
                              : "#000",
                            flex: 1,
                            textAlign: "right",
                            marginRight: 16
                          }}
                        >
                          {item.statusLabel}
                        </R_13_BLACK>
                      )}
                  </div>
                  {!!item.convertedAmount && (
                    <SB_15_GREY393>{`(${item.convertedAmount})*`}</SB_15_GREY393>
                  )}
                </div>
                <div
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex"
                  }}
                >
                  <Icon icon={"Right1"} color={"#000"} size={28} />
                </div>
              </div>
            );
          }
        })}
    </div>
  );
};

export default AccountsList;
