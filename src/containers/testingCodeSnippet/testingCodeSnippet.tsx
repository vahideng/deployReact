import { AmDropdown } from "amonline-reactjs-component";
import React, { Component } from "react";

interface LocalState {
    value: string;
    valueIsFocus: boolean;
    showDropdown: boolean;
    selectedItem: { value?: string; label?: string };
}

class App extends Component<{}, LocalState> {
    constructor(prop: {}) {
        super(prop);
        this.state = {
            value: "",
            valueIsFocus: false,
            showDropdown: false,
            selectedItem: { value: "am", label: "Ambank" }
        };
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            marginTop: "50px"
                        }}
                    >
                        <AmDropdown
                            containerStyle={{
                                marginBottom: "1rem",
                                width: "31.6rem"
                            }}
                            max="200px"
                            type="text"
                            readOnly={false}
                            disabled={false}
                            clickOnArrow={() =>
                                this.setState({
                                    showDropdown: !this.state.showDropdown,
                                    valueIsFocus: false,
                                    value: ""
                                })
                            }
                            showDropdown={this.state.showDropdown}
                            dropdownData={[
                                { value: "am", label: "Ambank" },
                                { value: "alp", label: "Alpeh" }
                            ]}
                            inputClickHandler={() => this.setState({ showDropdown: true })}
                            arrowIcon={true}
                            label="dropdown label"
                            icon={{ name: "Bank" }}
                            value={this.state.selectedItem.label}
                            handleChange={(_event, item, _testId) => {
                                console.log(item);
                                this.setState({
                                    selectedItem: item,
                                    showDropdown: false,
                                    valueIsFocus: false
                                });
                            }}
                            inputHandleChange={event => this.setState({ value: event.target.value })}
                            placeholder="place holder"
                            onFocus={event => {
                                this.setState({ valueIsFocus: true });
                                console.log(event, "event");
                                
                            }}
                           
                            onBlurDropdown={() => this.setState({ showDropdown: false })}
                            // onBlur={event => {
                            //     event.stopPropagation();
                            // }}
                        />
                    </div>
                </header>
            </div>
        );
    }
}

export default App;
