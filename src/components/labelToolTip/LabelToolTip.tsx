import React from "react";
import Tooltip from "src/components/tooltip/Tooltip";
import classes from "./LabelToolTip.module.css";
// import Paragraphs from "../../components/assets/typography";

// const { B_14_WHITE } = Paragraphs;
interface Props {
  tooltipData: {
    testId?: string;
    tipChildren?: any;
    color?: string;
    spaceBetween?: any;
  };
  label?: any;
}

const LabelToolTip: React.FC<Props> = ({ tooltipData, label }) => {
  return (
    <div className={classes.toolTipContainer}>
      <div className={classes.toolTipLabel}>{label}</div>
      <div
        className={classes.toolTipData}
        style={{ paddingLeft: `${tooltipData.spaceBetween}` }}
      >
        <Tooltip
          testId={tooltipData.testId}
          tipChildren={tooltipData.tipChildren}
          color={tooltipData.color}
        />
      </div>
    </div>
  );
};
export default LabelToolTip;
