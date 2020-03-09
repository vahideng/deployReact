import React, { Component } from "react";

import classes from "./Tooltip.module.css";
import "../assets/common.css";
import Icon from "../assets/icons/icon";

interface TooltipProps {
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
    const { tipChildren, color } = this.props;
    const clickHandler = () => {
      this.setState({ clicked: !clicked });
    };

    return (
      <>
        <div className={classes.tooltip}>
          <div onClick={clickHandler}>
            <Icon
              icon={!clicked ? "system-info" : "system-close-grey"}
              color={!!color ? color : "#000000"}
              size={23}
            />
          </div>

          <div
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
