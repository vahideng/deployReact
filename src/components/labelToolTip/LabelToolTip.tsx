import React, { CSSProperties } from "react";
import Tooltip from "src/components/tooltip/Tooltip";
import classes from "./LabelToolTip.module.css";
import Paragraphs from "../../components/assets/typography";

const { B_16_BLACK } = Paragraphs;
interface Props {
  tooltipData: {
    testId?: string;
    tipChildren?: any;
  };
  label: string;
  labelStyle?: CSSProperties;
  spaceBetween?: boolean;
  showTooltip ?: boolean;
  onTooltipClicked ?: () => void
}

const LabelToolTip: React.FC<Props> = ({
  tooltipData,
  label,
  labelStyle,
  spaceBetween,
  showTooltip,
  onTooltipClicked
}) => {
  return (
    <div
      className={classes.toolTipContainer}
      style={spaceBetween ? { justifyContent: "space-between" } : {}}
    >
      <div className={classes.toolTipLabel}>
        <B_16_BLACK style={labelStyle ? labelStyle : {}}>{label}</B_16_BLACK>
      </div>
      <div>
        <Tooltip
        onTooltipClicked ={onTooltipClicked}
          showTooltip ={showTooltip}
          testId={tooltipData.testId}
          tipChildren={tooltipData.tipChildren}
        />
      </div>
    </div>
  );
};
export default LabelToolTip;
