import React from "react";
import classes from "./Tooltip.module.css";
import Paragraphs from "../../components/assets/typography";

// import Icon from "../assets/icons/icon";
import ReactTooltip from "react-tooltip";
const {
  B_14_WHITE
  //  R_11_WHITE
} = Paragraphs;
interface TriggerProps {
  title?: any;
}
const Trigger: React.FC<TriggerProps> = ({}) => {
  let fooRef: any;

  return (
    <div className={classes.Hov}>
      <B_14_WHITE
        className={classes.Hover}
        ref={ref => (fooRef = ref)}
        data-tip="tooltip"
      >
        hellllll
      </B_14_WHITE>
      <button
        onClick={() => {
          ReactTooltip.show(fooRef);
        }}
      ></button>
      <button
        onClick={() => {
          ReactTooltip.hide(fooRef);
        }}
      ></button>
      <ReactTooltip />
    </div>
  );
};

export default Trigger;
