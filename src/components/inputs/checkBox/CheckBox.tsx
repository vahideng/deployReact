import React, { ReactNode } from "react";
import classes from "./CheckBox.module.css";
import Icon from "src/components/assets/icons/icon";
interface Props {
  onCheckClick: (event: any, testId?: string | undefined) => void;
  isChecked: boolean;
  name?: string;
  testId?: string;
  children?: ReactNode;
  size?: number;
}

const Checkbox: React.FC<Props> = props => {
  const { onCheckClick, isChecked, name, testId, children, size } = props;
  const iconSize = size !== undefined ? size : 25;

  return (
    <form id={`${testId}`}>
      <div className={classes.checkboxRow} id={`${testId}-1`}>
        <label id={`${testId}-2`}>
          {!!isChecked ? (
            <Icon icon="CheckboxYes" color="#36a03e" size={iconSize} />
          ) : (
            <Icon icon="CheckboxNo" color="#ffffff" size={iconSize} />
          )}
          <input
            type="checkbox"
            name={name}
            checked={isChecked}
            onChange={event => {
              onCheckClick(event, testId);
            }}
            id={`${testId}-3`}
          />
        </label>
        <div className={classes.boxChildren}>{children}</div>
      </div>
    </form>
  );
};

export default Checkbox;
