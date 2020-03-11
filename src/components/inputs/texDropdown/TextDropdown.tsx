import React, { Component } from "react";
import Select from "react-select";

import classes from "./TextDropdown.module.css";
import Icon from "src/components/assets/icons/icon";

interface Props {
  testId?: string;
  options: { value: string; label: string }[];
  selectedOption: any;
  handleChange: any;
  placeHolder?: string;
  menuIsOpen?: boolean;
}
interface State {}

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    border: "hidden",
    backgroundColor: "transparent",

    "&:hover": {
      borderColor: "red"
    },
    boxShadow: "none",
    cursor: "pointer"
  }),

  placeholder: () => ({
    color: "black"
  }),

  menu: (provided: any) => ({
    ...provided,
    backgroundColor: "transparent",
    display: "block",
    width: "100px",
    border: "0.1px solid #DEDEDE"
  }),

  menuList: (base: any) => ({
    ...base,
    backgroundColor: "#FFFFFF",
    boxSizing: "border-box",
    borderRadius: "8px"
  }),
  indicatorSeparator: () => ({
    display: "none"
  }),
  option: (styles: any, { data, isDisabled, isFocused, isSelected }: any) => {
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? data.color
        : isFocused
        ? "#EDEDED"
        : null,
      color: isDisabled
        ? "#ccc"
        : isSelected
        ? "black"
          ? "black"
          : "black"
        : "black",
      cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
        backgroundColor:
          !isDisabled && (isSelected ? data.color : "transparent")
      }
    };
  }
};

class TextDropdown extends Component<Props, State> {
  state = {
    menuIsOpen: false
  };

  onchangeHandler = (object: any) => {
    this.props.handleChange(object);
    this.setState({ menuIsOpen: false });
  };
  handleClickOutside = (evt: any) => {
    evt.preventDefault();
    this.setState({ menuIsOpen: false });
  };

  render() {
    const { options, selectedOption, placeHolder, testId } = this.props;
    return (
      <div
        className={`row ${classes.Container}`}
        onClick={() => this.setState({ menuIsOpen: !this.state.menuIsOpen })}
        id={`${testId}`}
      >
        <div className={`col-sm-8 ${classes.LeftSide}`} id={`${testId}-0`}>
          <Select
            components={{ DropdownIndicator: () => null }}
            placeholder={placeHolder}
            value={selectedOption}
            onChange={object => this.onchangeHandler(object)}
            options={options}
            styles={customStyles}
            menuIsOpen={this.state.menuIsOpen}
            isSearchable={false}
          />
        </div>

        <div className={`col-sm-4 ${classes.RightSide}`} id={`${testId}-1`}>
          <div className={classes.Content}>
            {!this.state.menuIsOpen ? (
              <span className={classes.TextDropdownIcons}>
                <Icon icon="arrowDown" size={18} />
              </span>
            ) : (
              <span className={classes.TextDropdownIcons}>
                <Icon icon="arrowUp" size={18} />
              </span>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default TextDropdown;
