import React, { Component } from "react";

import classes from "./Tooltip.module.css";
import Icon from "../assets/icons/icon";
import ReactTooltip from "react-tooltip";

interface TooltipProps {
  tipChildren: any;
  datatip?: any;
}
interface State {}

class Tooltip extends Component<TooltipProps, State> {
  state = {
    clicked: true
  };
  render() {
    const { clicked } = this.state;
    const { tipChildren, datatip } = this.props;
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
      <div data-for = "1">
        <p ref={ref => (fooRef = ref)} data-tip={`${datatip}`}></p>

        <div onClick={clickHandler}>
          <Icon icon={!!clicked ? "Love" : "FAQ"} color={"#000000"} size={40} />
        </div>
        <ReactTooltip place={"left"}>
          <div className={classes.TooltipContent}>{tipChildren}</div>
        </ReactTooltip>
      </div>
    );
  }
}

export default Tooltip;
