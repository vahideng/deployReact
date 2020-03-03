import React, { Component } from "react";

import classes from "./Tooltip.module.css";
import "../assets/common.css";
import Icon from "../assets/icons/icon";
import ReactTooltip from "react-tooltip";

interface TooltipProps {
  tipChildren?: any;
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
    const { tipChildren } = this.props;
    const clickHandler = () => {
      this.setState({ clicked: !clicked });
      if (!!clicked) {
        ReactTooltip.show(fooRef);
      } else {
        ReactTooltip.hide(fooRef);
      }
    };
    let fooRef: any;
    return (
      <>
        <div className={classes.tooltip}>
          <div onClick={clickHandler}>
            <Icon
              icon={!!clicked ? "system-info" : "system-close-grey"}
              color={"#000000"}
              size={25}
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
