import React from "react";
import classes from "./TileListView.module.css";
import Paragraphs from "../../assets/typography";
import Icon from "src/components/assets/icons/icon";

const { R_15_GREY444, R_13_BLACK, B_15_BLACK } = Paragraphs;
interface Props {
  list: {
    accountName: string;
    accountNumber: string;
    statusLabel: string;
    statusLabelColor: string;
    countryFlagImage?: any;
    amount: string;
    equivalentAmount?: string;
  }[]
  onTileClick: (item: {
    accountName: string;
    accountNumber: string;
    statusLabel: string;
    statusLabelColor: string;
    countryFlagImage?: any;
    amount: string;
    equivalentAmount?: string;
  }) => void;
}

const TileListView: React.FC<Props> = ({ list, onTileClick }) => {
  return (
    <div className={classes.TileListMainDiv}>
      {!!list &&
        list.map((item) => (
          <div className={classes.ListTile} onClick={() => onTileClick(item)}>
            <div style={{ display: 'flex', flex: 1.5, flexDirection: 'column' }}>
              <R_15_GREY444 style={{fontWeight: 600}}>
                {item.accountName}
              </R_15_GREY444>
              <R_15_GREY444 style={{fontWeight: 600}}>
                {item.accountNumber}
              </R_15_GREY444>
            </div>
            <div style={{ display: 'flex', flex: 0.7 }}>
              <R_13_BLACK style={{ color: item.statusLabelColor, fontWeight: 600 }}>
                {item.statusLabel}
              </R_13_BLACK>
            </div>
            <div style={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'flex-end' }}>
              <div style={{ display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'flex-end' }}>
                {
                  item.countryFlagImage && (
                    <img src={item.countryFlagImage} alt="Image" />
                  )
                } 
                <B_15_BLACK style={{ marginLeft: 4, letterSpacing: 0.4 }}>
                  {item.amount}
                </B_15_BLACK>
              </div>
              <R_13_BLACK style={{ letterSpacing: 0.4 }}>
                {item.equivalentAmount}
              </R_13_BLACK>
            </div>
            <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', marginLeft: 8 }}>
              <Icon
                icon={"Right1"}
                color={"#000"}
                size={28}
              />
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default TileListView;
