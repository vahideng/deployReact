import React, { Component } from "react";

import classes from "./Tooltip.module.css";

import Icon from "../assets/icons/icon";

interface TooltipProps {
  testId?: string;
  tipChildren?: any;
  color?: string;
}
interface State {
  clicked: boolean;
}

class Tooltip extends Component<TooltipProps, State> {
  state = {
    clicked: false
  };
  render() {
    const { clicked } = this.state;
    const { tipChildren, color, testId } = this.props;
    const clickHandler = () => {
      this.setState({ clicked: !clicked });
    };

    return (
      <>
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
      </>
    );
  }
}

export default Tooltip;
