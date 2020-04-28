import React, { Component } from "react";

import classes from "./Tooltip.module.css";

import Icon from "../assets/icons/icon";
// import OutsideClickHandler from "react-outside-click-handler";

interface TooltipProps {
  testId?: string;
  tipChildren?: any;
  color?: string;
  rightAlign?: boolean;
  tipSize?: number;
  showTooltip?: boolean;
  onTooltipClicked?: () => void;
}

class Tooltip extends Component<TooltipProps, {}> {
  static defaultProps: { showTooltip: boolean };

  render() {
    const {
      tipChildren,
      color,
      testId,
      rightAlign,
      tipSize,
      showTooltip,
      onTooltipClicked,
    } = this.props;

    console.log(showTooltip, "showTooltip");

    const tooltipSize = tipSize !== undefined ? tipSize : 23;
    return (
      <>
        {rightAlign ? (
          <div className={classes.tooltipRight} id={testId}>
            <div
              onClick={!!onTooltipClicked && onTooltipClicked}
              id={`${testId}-0`}
            >
              <Icon
                icon={!showTooltip ? "system-info" : "system-close-grey"}
                color={!!color ? color : "#000000"}
                size={tooltipSize}
              />
            </div>
            {showTooltip && (
              <div id={`${testId}-1`} className={classes.TooltipContentRight}>
                {tipChildren}
              </div>
            )}
          </div>
        ) : (
          <div className={classes.tooltip} id={testId}>
            <div
              onClick={!!onTooltipClicked && onTooltipClicked}
              id={`${testId}-0`}
            >
              <Icon
                icon={!showTooltip ? "system-info" : "system-close-grey"}
                color={!!color ? color : "#000000"}
                size={23}
              />
            </div>
            {showTooltip && (
              <div id={`${testId}-1`} className={classes.TooltipContent}>
                {tipChildren}
              </div>
            )}
          </div>
        )}
      </>
    );
  }
}

export default Tooltip;

Tooltip.defaultProps = {
  showTooltip: false,
};
