import React, { Component } from "react";

import classes from "./Tooltip.module.css";

import Icon from "../assets/icons/icon";

interface TooltipProps {
  testId?: string;
  tipChildren?: any;
  color?: string;
  showTooltip?:boolean;
}
interface State {
  clicked: boolean;
}

class Tooltip extends Component<TooltipProps, State> {
  state = {
    clicked: false
  };
  static defaultProps: { showTooltip: boolean; };

  render() {
    const { clicked } = this.state;
    const { tipChildren, color, testId,showTooltip } = this.props;
    const clickHandler = () => {
      this.setState({ clicked: !clicked });
    };

    return (
      <>
            {showTooltip &&  (
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
      </>
    );
  }
}


Tooltip.defaultProps = {
  showTooltip : true,
}


export default Tooltip;


