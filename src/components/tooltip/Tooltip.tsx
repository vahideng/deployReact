import React, { Component } from "react";

import classes from "./Tooltip.module.css";

import Icon from "../assets/icons/icon";
import OutsideClickHandler from "react-outside-click-handler";

interface TooltipProps {
  testId?: string;
  tipChildren?: any;
  color?: string;
  rightAlign?: boolean;
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
    const { tipChildren, color, testId, rightAlign } = this.props;
    const clickHandler = () => {
      this.setState({ clicked: !clicked });
    };

    return (
      <OutsideClickHandler
        onOutsideClick={() => {
          this.setState({ clicked: false });
        }}
      >
        {rightAlign ? (
          <div className={classes.tooltipRight} id={testId}>
            <div onClick={clickHandler} id={`${testId}-0`}>
              <Icon
                icon={!clicked ? "system-info" : "system-close-grey"}
                color={!!color ? color : "#000000"}
                size={23}
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
                size={23}
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
      </OutsideClickHandler>
    );
  }
}

export default Tooltip;
