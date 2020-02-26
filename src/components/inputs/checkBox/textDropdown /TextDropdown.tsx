import React, { Component } from "react";
import Select from "react-select";

interface Props {
  options: { value: string; label: string }[];
}
interface State {}

class TextDropdown extends Component<Props, State> {
  state = {
    selectedOption: null
  };

  handleChange = (selectedOption: any) => {
    this.setState({ selectedOption });
  };
  render() {
    const { selectedOption } = this.state;
    const { options } = this.props;
    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}

export default TextDropdown;

// const options = [
//   { value: "chocolate", label: "Chocolate" },
//   { value: "strawberry", label: "Strawberry" },
//   { value: "vanilla", label: "Vanilla" }
// ];
