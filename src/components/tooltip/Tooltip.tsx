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
}
interface State {
  clicked: boolean;
}

class Tooltip extends Component<TooltipProps, State> {
  state = {
    clicked: false,
  };
  render() {
    const { clicked } = this.state;
    const { tipChildren, color, testId, rightAlign, tipSize } = this.props;
    const clickHandler = () => {
      this.setState({ clicked: !clicked });
    };

    const tooltipSize = tipSize !== undefined ? tipSize : 23;

    return (
      <>
        {rightAlign ? (
          <div className={classes.tooltipRight} id={testId}>
            <div onClick={clickHandler} id={`${testId}-0`}>
              <Icon
                icon={!clicked ? "system-info" : "system-close-grey"}
                color={!!color ? color : "#000000"}
                size={tooltipSize}
              />
            </div>

            <div
              id={`${testId}-1`}
              className={classes.TooltipContentRight}
              style={{ visibility: !!clicked ? "visible" : "hidden" }}
            >
              {tipChildren}
            </div>
          </div>
        ) : (
          <div className={classes.tooltip} id={testId}>
            <div onClick={clickHandler} id={`${testId}-0`}>
              <Icon
                icon={!clicked ? "system-info" : "system-close-grey"}
                color={!!color ? color : "#000000"}
                size={tooltipSize}
              />
            </div>

            <div
              id={`${testId}-1`}
              className={classes.TooltipContent}
              style={{ visibility: !!clicked ? "visible" : "hidden" }}
            >
              {tipChildren}
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Tooltip;
