import React from "react";
import classes from "./CardList.module.css";
import Paragraphs from "../../assets/typography";
import Icon from "src/components/assets/icons/icon";

const {
  R_18_GREY444,
  B_24_BLACK,
  R_13_BLACK,
  R_15_BLACK,
  B_20_BLACK
} = Paragraphs;
interface Props {
  testId?: string;
  list: {
    cardName: string;
    cardNumber: string;
    amount: string;
    expiryDate?: string;
    cardVendorLogo?: any;
    colorLeft: string;
    colorRight: string;
    active?: boolean;
    activeLabel?: string;
    selected: boolean;
  }[];
  onCardTileClick: (item: {
    cardName: string;
    cardNumber: string;
    amount: string;
    expiryDate?: string;
    cardVendorLogo?: any;
    active?: boolean;
    activeLabel?: string;
    selected: boolean;
  }) => void;
}

const CardList: React.FC<Props> = ({ list, onCardTileClick, testId }) => {
  return (
    <div className={classes.CardListMainDiv}>
      {!!list &&
        list.map((item, index) => {
          if (item.selected) {
            return (
              <div
                id={`${testId}-0${index}`}
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginBottom: 24
                }}
              >
                <div
                  className={classes.CardTileSelected}
                  style={{
                    background: `linear-gradient(to left top, ${item.colorLeft}, ${item.colorRight})`
                  }}
                  onClick={() => onCardTileClick(item)}
                >
                  <div
                    style={{
                      display: "flex",
                      flex: 1,
                      flexDirection: "column"
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between"
                      }}
                    >
                      <R_18_GREY444
                        style={{
                          fontWeight: 400,
                          letterSpacing: 0.3,
                          color: "#FFF"
                        }}
                      >
                        {item.cardName}
                      </R_18_GREY444>
                      {item.cardVendorLogo && (
                        <img src={item.cardVendorLogo} alt="checkmark" />
                      )}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between"
                      }}
                    >
                      <R_15_BLACK
                        style={{
                          fontWeight: 400,
                          letterSpacing: 0.3,
                          color: "#FFF"
                        }}
                      >
                        {item.cardNumber}
                      </R_15_BLACK>
                      {item.expiryDate && (
                        <R_13_BLACK
                          style={{
                            marginLeft: 16,
                            color: "#fff",
                            fontWeight: 500
                          }}
                        >
                          {item.expiryDate}
                        </R_13_BLACK>
                      )}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flex: 1,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingTop: 12
                      }}
                    >
                      <B_24_BLACK style={{ color: "#FFF" }}>
                        {item.amount}
                      </B_24_BLACK>
                      {item.active && (
                        <R_13_BLACK
                          style={{
                            marginLeft: 16,
                            color: "#fff",
                            fontWeight: 500
                          }}
                        >
                          {item.activeLabel}
                        </R_13_BLACK>
                      )}
                    </div>
                  </div>
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
          } else {
            return (
              <div
                id={`${testId}-1${index}`}
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginBottom: 16
                }}
              >
                <div
                  className={classes.CardTile}
                  style={{
                    background: `linear-gradient(to left top, ${item.colorLeft}, ${item.colorRight})`
                  }}
                  onClick={() => onCardTileClick(item)}
                >
                  <div
                    style={{
                      display: "flex",
                      flex: 1,
                      flexDirection: "column"
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between"
                      }}
                    >
                      <R_15_BLACK
                        style={{
                          fontWeight: 400,
                          letterSpacing: 0.3,
                          color: "#FFF"
                        }}
                      >
                        {item.cardName}
                      </R_15_BLACK>
                      {item.cardVendorLogo && (
                        <img src={item.cardVendorLogo} alt="checkmark" />
                      )}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flex: 1,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingTop: 8
                      }}
                    >
                      <B_20_BLACK style={{ color: "#FFF" }}>
                        {item.amount}
                      </B_20_BLACK>
                      {item.active && (
                        <R_13_BLACK
                          style={{
                            marginLeft: 16,
                            color: "#fff",
                            fontWeight: 500
                          }}
                        >
                          {item.activeLabel}
                        </R_13_BLACK>
                      )}
                    </div>
                  </div>
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

export default CardList;
