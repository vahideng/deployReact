import React, { Component } from "react";
import classes from "./Tooltip.module.css";
import Icon from "../assets/icons/icon";

interface TooltipProps {
  testId?: string;
  tipChildren?: any;
  color?: string;
  rightAlign?: boolean;
  tipSize?: number;
  showTooltip?: boolean;
  onBlur?: () => void;
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
      onBlur,
    } = this.props;

    const tooltipSize = tipSize !== undefined ? tipSize : 23;
    return (
      <>
        {rightAlign ? (
          <div
            tabIndex={0}
            className={classes.tooltipRight}
            id={testId}
            onBlur={onBlur}
          >
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
          <div
            tabIndex={0}
            onBlur={onBlur}
            className={classes.tooltip}
            id={testId}
          >
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
