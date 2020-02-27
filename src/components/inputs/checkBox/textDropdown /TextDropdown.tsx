import React, { Component } from "react";
import Select from "react-select";
import arrowUp from "../../../assets/common/arrowUp.svg";
import arrowDown from "../../../assets/common/arrowDown.svg";
import classes from "./textDropdown.module.css";
interface Props {
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
    boxShadow: "none"
  }),

  placeholder : ()=> ({
    color : "black"
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

  render() {
    const { options, selectedOption, placeHolder } = this.props;
    return (
      <div className={`row ${classes.Container}`}>
        <div className={`col-sm-8 ${classes.LeftSide}`}>
          <Select
            components={{ DropdownIndicator: () => null }}
            placeholder={placeHolder}
            value={selectedOption}
            onChange={(object)=>this.onchangeHandler(object)}
            options={options}
            styles={customStyles}
            menuIsOpen={this.state.menuIsOpen}
            isSearchable={false}
          />
        </div>

        <div className={`col-sm-4 ${classes.RightSide}`}>
          <div
            className={classes.Content}
            onClick={() =>
              this.setState({ menuIsOpen: !this.state.menuIsOpen })
            }
          >
            {this.state.menuIsOpen ? (
              <img src={arrowUp} alt="arrowUp" />
            ) : (
              <img src={arrowDown} alt="arrowUp" />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default TextDropdown;
