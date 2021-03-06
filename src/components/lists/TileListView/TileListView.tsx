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
    accountNickName?: string;
    accountNumber: string;
    statusLabel: string;
    statusLabelColor?: string;
    statusLabel2?: string;
    statusLabel2Color?: string;
    countryFlagImage?: any;
    icon?: string;
    iconSize?: number;
    iconColor?: string;
    amount: string;
    amountStatus?: "Plus" | "Minus";
    equivalentAmount?: string;
    percentageVal?:string;
    percentageStatus?: "Plus" | "Minus";
  }[];
  onTileClick: (
    item: {
      cardLogo?: any;
      accountName: string;
      accountNickName?: string;
      accountNumber: string;
      statusLabel: string;
      statusLabelColor?: string;
      countryFlagImage?: any;
      icon?: string;
      iconSize?: number;
      iconColor?: string;
      amount: string;
      equivalentAmount?: string;
      percentageVal?:string;
      percentageStatus?: "Plus" | "Minus";
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

            {/* first column */}
            <div style={{ display: "flex", width: "12.8125rem", flexDirection: "row" }}>
              {item.cardLogo && (
                <div className={classes.imageContainer}>
                  <img src={item.cardLogo} alt="Image" />
                </div>
              )}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: item.cardLogo ? 16 : 0,
                  width: item.cardLogo ? '10.3125rem' : '13.8125rem',
                 
                }}
              >
                <R_15_GREY444
                  style={{
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                    maxWidth: "12.8125rem",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                  }}
                >
                  {item.accountName}{" "}
                  <span style={{ display: "inline-block" }}>
                    {item.accountNickName}
                  </span>
                </R_15_GREY444>
                <R_15_GREY444 style={{ fontWeight: 600 }}>
                  {item.accountNumber}
                </R_15_GREY444>
              </div>
            </div>

              {/* second column */}
            
            <div style={{ display: "flex", width:"10rem",
            marginLeft:  '1.4375rem',   marginRight:  '1.4375rem' }}>
              <R_13_BLACK
                style={{
                  color: !!item.statusLabelColor && item.statusLabelColor,
                  fontWeight: 600,
                  display: "flex",
                  flexDirection: "row",
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
                      style={{
                        color: item.statusLabel2Color,
                        fontWeight: 600,
                      }}
                    >
                      {item.statusLabel2}
                    </R_13_BLACK>
                  </>
                )}
              </R_13_BLACK>
            </div>

  {/* third column */}
            <div
              style={{
                display: "flex",
                width: "16rem",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  minWidth: '11rem',
                  justifyContent:'flex-end'
                }}
              >
                {item.countryFlagImage && (
                  <img
                    src={item.countryFlagImage}
                    alt="Image"
                    width={"20rem"}
                    height={"15rem"}
                  />
                )}
                {item.icon && item.iconColor && item.iconSize && (
                  <Icon
                    icon={item.icon}
                    color={item.iconColor}
                    size={item.iconSize}
                    style={{ display: "block" }}
                  />
                )}
                {!!item.amountStatus && (
                  <Icon
                    icon={item.amountStatus}
                    color={item.amountStatus === "Plus" ? "#36A03E" : "#ff2626"}
                    size={30}
                    style={{ marginRight: -10 }}
                  />
                )}
                <B_15_BLACK
                  style={{
                    marginLeft:
                      item.icon && item.iconColor && item.iconSize ? 8 : 4,
                    letterSpacing: 0.4,
                    whiteSpace :"nowrap"
                  }}
                >
                  {item.amount}
                </B_15_BLACK>
                {!!item.percentageVal && (
                <B_15_BLACK
                  style={{
                    marginLeft:
                      item.icon && item.iconColor && item.iconSize ? 8 : 4,
                    letterSpacing: 0.4,
                    display: 'flex',
                    alignItems:"center"
          
                  }}
                >
                  (
                    {!!item.percentageStatus && (
                  <Icon
                    icon={item.percentageStatus}
                    color={item.percentageStatus === "Plus" ? "#36A03E" : "#ff2626"}
                    size={30}
                    style={{ marginRight: '-0.5rem',marginLeft:'-0.5rem' }}
                  />
                )}
                {item.percentageVal}&#37;)
                </B_15_BLACK>
                 )}
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
                marginLeft: 8,
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
