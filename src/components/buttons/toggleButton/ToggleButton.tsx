import React from "react";
import Paragraphs from "../../assets/typography";
import classes from "./ToggleButton.module.css";
const { B_11_WHITE } = Paragraphs;
interface Props {
  disabled?: boolean;
  onTogglePress: () => void;
  toggleOffLabel: string;
  toggleOnLabel: string;
  value: boolean;
}
const ToggleButton: React.FC<Props> = ({
  disabled,
  onTogglePress,
  toggleOffLabel,
  toggleOnLabel,
  value
}) => {
  return (
    <>
      <div 
        className={classes.ToggleButtonContainer} 
        style={{ justifyContent: value ? 'flex-end' : 'flex-start', pointerEvents: disabled ? 'none' : 'all' }} 
        onClick={onTogglePress && onTogglePress}
        >
        <div className={classes.ToggleButton} style={{ backgroundColor: value ? " #FF2626" : "#c4c4c4" }}>
          <B_11_WHITE style={{ fontWeight: 'normal' }}>{value ? toggleOnLabel : toggleOffLabel}</B_11_WHITE>
        </div>
      </div>
    </>
  );
};

export default ToggleButton;
