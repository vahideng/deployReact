import React from "react";
import classes from "./TileListView.module.css";
import Paragraphs from "../../assets/typography";
import Icon from "src/components/assets/icons/icon";

const { R_15_GREY444, R_13_BLACK, B_15_BLACK } = Paragraphs;
interface Props {
  testId?: string;
  list: {
    cardLogo?: any;
    accountName: string;
    accountNumber: string;
    statusLabel: string;
    statusLabelColor: string;
    statusLabel2?: string;
    statusLabel2Color?: string;
    countryFlagImage?: any;
    icon?: string;
    iconSize?: number;
    iconColor?: string;
    amount: string;
    equivalentAmount?: string;
  }[];
  onTileClick: (
    item: {
      cardLogo?: any;
      accountName: string;
      accountNumber: string;
      statusLabel: string;
      statusLabelColor: string;
      countryFlagImage?: any;
      icon?: string;
      iconSize?: number;
      iconColor?: string;
      amount: string;
      equivalentAmount?: string;
    },
    index: number
  ) => void;
}

const TileListView: React.FC<Props> = ({ list, onTileClick, testId }) => {
  return (
    <div className={classes.TileListMainDiv}>
      {!!list &&
        list.map((item, index) => (
          <div
            className={classes.ListTile}
            onClick={() => onTileClick(item, index)}
            key={index}
            id={testId}
          >
            <div style={{ display: "flex", flex: 1.5, flexDirection: "row" }}>
              {item.cardLogo && <img src={item.cardLogo} alt="Image" />}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: item.cardLogo ? 16 : 0
                }}
              >
                <R_15_GREY444 style={{ fontWeight: 600 }}>
                  {item.accountName}
                </R_15_GREY444>
                <R_15_GREY444 style={{ fontWeight: 600 }}>
                  {item.accountNumber}
                </R_15_GREY444>
              </div>
            </div>
            <div style={{ display: "flex", flex: 0.7 }}>
              <R_13_BLACK
                style={{
                  color: item.statusLabelColor,
                  fontWeight: 600,
                  display: "flex",
                  flexDirection: "row"
                }}
              >
                {item.statusLabel}{" "}
                {item.statusLabel2 && item.statusLabel2Color && (
                  <>
                    <R_13_BLACK style={{ marginLeft: 2, marginRight: 2 }}>
                      {" "}
                      |{" "}
                    </R_13_BLACK>
                    <R_13_BLACK
                      style={{ color: item.statusLabel2Color, fontWeight: 600 }}
                    >
                      {item.statusLabel2}
                    </R_13_BLACK>
                  </>
                )}
              </R_13_BLACK>
            </div>
            <div
              style={{
                display: "flex",
                flex: 0.8,
                flexDirection: "column",
                alignItems: "flex-end"
              }}
            >
              <div
                style={{
                  display: "flex",
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "flex-end"
                }}
              >
                {item.countryFlagImage && (
                  <img src={item.countryFlagImage} alt="Image" />
                )}
                {item.icon && item.iconColor && item.iconSize && (
                  <Icon
                    icon={item.icon}
                    color={item.iconColor}
                    size={item.iconSize}
                  />
                )}
                <B_15_BLACK
                  style={{
                    marginLeft:
                      item.icon && item.iconColor && item.iconSize ? 8 : 4,
                    letterSpacing: 0.4
                  }}
                >
                  {item.amount}
                </B_15_BLACK>
              </div>
              <R_13_BLACK style={{ letterSpacing: 0.4 }}>
                {item.equivalentAmount}
              </R_13_BLACK>
            </div>
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                marginLeft: 8
              }}
            >
              <Icon icon={"Right1"} color={"#000"} size={28} />
            </div>
          </div>
        ))}
    </div>
  );
};

export default TileListView;
