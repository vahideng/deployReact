import React, { Component } from "react";

import classes from "./Tooltip.module.css";
import "../assets/common.css";
import Icon from "../assets/icons/icon";
import ReactTooltip from "react-tooltip";

interface TooltipProps {
  tipChildren?: any;
}
interface State {}

class Tooltip extends Component<TooltipProps, State> {
  state = {
    clicked: true
  };
  render() {
    const { clicked } = this.state;
    const { children, tipChildren } = this.props;
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
      <div className={classes.TooltipMainDiv}>
        <p ref={ref => (fooRef = ref)} data-tip={`${children}`}></p>

        <div onClick={clickHandler}>
          <Icon
            icon={!!clicked ? "system-info" : "system-close-grey"}
            color={"#000000"}
            size={25}
          />
        </div>
        <ReactTooltip place={"left"}>
          <div className={classes.TooltipContent}>
            <>{tipChildren}</>
          </div>
        </ReactTooltip>
      </div>
    );
  }
}

export default Tooltip;
