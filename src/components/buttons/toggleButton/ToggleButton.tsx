import React from 'react';
import Paragraphs from '../../assets/typography';
import classes from './ToggleButton.module.css';
const { B_11_WHITE } = Paragraphs;
interface Props {
  disabled?: boolean;
  onTogglePress: () => void;
  toggleOffLabel: string;
  toggleOnLabel: string;
  value: boolean;
  testId?: string;
}
const ToggleButton: React.FC<Props> = ({
  disabled,
  onTogglePress,
  toggleOffLabel,
  toggleOnLabel,
  value,
  testId,
}) => {
  return (
    <>
      <div
        className={classes.ToggleButtonContainer}
        style={{
          pointerEvents: disabled ? 'none' : 'all',
        }}
        onClick={onTogglePress && onTogglePress}
        id={testId}
      >
        <div
          className={classes.ToggleButton}
          style={{
            backgroundColor: value ? ' #FF2626' : '#c4c4c4',
            left: !!value ? '1.3rem' : '.2rem',
          }}
        >
          <B_11_WHITE style={{ fontWeight: 'normal' }}>
            {value ? toggleOnLabel : toggleOffLabel}
          </B_11_WHITE>
        </div>
      </div>
    </>
  );
};

export default ToggleButton;
