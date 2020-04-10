import React, { useState } from "react";
import BackgroundSingle from "src/components/wrappers/backgroundSingle/BackgroundSingle";
import Header from "src/components/headers/header/Header";
import Box_V2 from "src/components/wrappers/box_V2/Box_V2";
import TextButton from "src/components/buttons/textButton/TextButton";
import NavbarTransparent from "src/components/headers/navbarTransparent/NavbarTransparent";
import TextDropdown from "src/components/inputs/texDropdown/TextDropdown";
import { Redirect } from "react-router-dom";
import InputField from "src/components/inputs/inputFields/InputFields";

interface Props {}

const Home: React.FC<Props> = () => {
  const [selectedItem, setSelectedOption] = useState(null);
  const [split, setsSplit] = useState(false);
  const [sprint1, setSprint1] = useState(false);
  const [sprint2, setSprint2] = useState(false);
  const [sprint3, setSprint3] = useState(false);
  const [sprint4, setSprint4] = useState(false);
  const [NodeModule, setNodeModule] = useState(false);
  if (sprint1 === true) {
    return <Redirect to="/sprint-1" />;
  }
  if (sprint2 === true) {
    return <Redirect to="/sprint-2" />;
  }
  if (sprint3 === true) {
    return <Redirect to="/sprint-3" />;
  }
  if (sprint4 === true) {
    return <Redirect to="/sprint-4" />;
  }

  if (NodeModule === true) {
    return <Redirect to="/NodeModule" />;
  }
  return (
    <>
      <BackgroundSingle
        image={
          "https://static.vecteezy.com/system/resources/previews/000/547/469/large_2x/abstract-blurred-background-with-bokeh-sparkling-lights-vector.jpg"
        }
      >
        <div style={{ padding: 100 }}>
          <div>
            <NavbarTransparent
              icon={{
                onIconClick: () => {
                  setSprint1(true);
                }
              }}
              rightButtons={[
                <TextButton
                  buttonText="Sprint-1"
                  onTextClick={() => {
                    setSprint1(true);
                  }}
                  buttonStyles={{
                    color: "#000000",
                    fontWeight: 400,
                    fontSize: 15
                  }}
                />,
                <TextButton
                  buttonText="Sprint-2"
                  onTextClick={() => {
                    setSprint2(true);
                  }}
                  buttonStyles={{
                    color: "#000000",
                    fontWeight: 400,
                    fontSize: 15
                  }}
                />,
                <TextButton
                  buttonText="Sprint-3"
                  onTextClick={() => {
                    setSprint3(true);
                  }}
                  buttonStyles={{
                    color: "#000000",
                    fontWeight: 400,
                    fontSize: 15
                  }}
                />,
                <TextButton
                buttonText="Sprint-4"
                onTextClick={() => {
                  setSprint4(true);
                }}
                buttonStyles={{
                  color: "#000000",
                  fontWeight: 400,
                  fontSize: 15
                }}
              />,
              <TextButton
                buttonText="NodeModule"
                onTextClick={() => {
                  setNodeModule(true);
                }}
                buttonStyles={{
                  color: "#000000",
                  fontWeight: 400,
                  fontSize: 15
                }}
              />,
                <TextDropdown
                  handleChange={(selectedOption: any) => {
                    setSelectedOption(selectedOption);
                    console.log(`Option:`, selectedOption);
                  }}
                  selectedOption={selectedItem}
                  placeHolder={"English"}
                  options={[
                    { label: "English", value: "english" },
                    { label: "Malay", value: "malay" },
                    { label: "中文", value: "中文" },
                    { label: "Persian", value: "persian" }
                  ]}
                />
              ]}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "9rem"
              }}
            >
              <Header
                testId="testId"
                title="good morning"
                subTitle="Banking your way. 
          What would you like
          to do today?"
              />
              <Box_V2
                title={"Login"}
                split={split}
                onButtonClick={() => {
                  setsSplit(!split);
                }}
                onRightButton={() => {
                  setsSplit(!split);
                }}
                onLeftButton={() => {
                  setsSplit(!split);
                }}
                leftTitle={"LeftTitle"}
                rightTitle={"rightTitle"}
                boxChildren={
                  <div style={{ height: 250, padding: "3rem 1rem" }}>
                    <InputField
                      notValid={true}
                      errorMessage={{
                        testId: "testId",
                        errorText: "The TAC is incorrect",
                        subText: "Please try again."
                      }}
                      type="text"
                      clearClickHandler={() => alert("clear clicked")}
                      // clearIcon={true}
                      label="input label"
                      icon={{ name: "User1" }}
                      value={""}
                      handleChange={event => {
                        console.log(event.target.value);
                      }}
                    />
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </BackgroundSingle>
    </>
  );
};

export default Home;
