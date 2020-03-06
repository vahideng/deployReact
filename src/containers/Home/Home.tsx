import React, { useState } from "react";

import BackgroundSingle from "src/components/wrappers/backgroundSingle/BackgroundSingle";
import Header from "src/components/headers/header/Header";
import Box from "src/components/wrappers/box/Box";
import InputField from "src/components/inputs/inputFields/InputFields";
import TextButton from "src/components/buttons/textButton/TextButton";
import NavbarTransparent from "src/components/headers/navbarTransparent/NavbarTransparent";
import TextDropdown from "src/components/inputs/texDropdown/TextDropdown";
import { Redirect } from "react-router-dom";
import PrimaryButton from "src/components/buttons/primaryButton/PrimaryButton";

interface Props {}

const Home: React.FC<Props> = () => {
  const [selectedItem, setSelectedOption] = useState(null);
  const [split, setsSplit] = useState(false);
  const [NavClick, setNavClick] = useState(false);
  if (NavClick === true) {
    return <Redirect to="/sprint-1" />;
  }
  return (
    <>
      <BackgroundSingle
        image={
          "https://static.vecteezy.com/system/resources/previews/000/547/469/large_2x/abstract-blurred-background-with-bokeh-sparkling-lights-vector.jpg"
        }
      >
        <div style={{ padding: 50 }}>
          <div>
            <NavbarTransparent
              icon={{
                onIconClick: () => {
                  setNavClick(true);
                }
              }}
              rightButtons={[
                <TextButton
                  buttonText="FAQ"
                  onTextClick={() => {
                    alert(`clicked`);
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
                    { label: "中文", value: "中文" }
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
              <Box
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
                onSelect={(obj: any) => console.log(obj)}
                content={[
                  <div
                    style={{
                      display: "flex",
                      minHeight: "10rem",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "space-between"
                    }}
                  >
                    <PrimaryButton
                      onButtonClick={() => {
                        setNavClick(true);
                      }}
                      title="Sprint-1 Components"
                    />
                    <PrimaryButton
                      onButtonClick={() => {
                        setNavClick(true);
                      }}
                      title="Sprint-2 Components"
                    />
                  </div>,
                  <>
                    <InputField
                      type="text"
                      clearClickHandler={() => alert("clear")}
                      clearIcon={false}
                      label="Username"
                      icon={{ name: "Account-2" }}
                      value={""}
                      handleChange={event => {
                        alert(event);
                      }}
                    />
                    <div style={{ paddingTop: 30 }}>
                      <TextButton
                        testId="testId"
                        buttonText="Forgot username/password?"
                        onTextClick={id => {
                          alert(`${id} clicked`);
                        }}
                      />
                    </div>
                  </>
                ]}
              ></Box>
            </div>
          </div>
        </div>
      </BackgroundSingle>
    </>
  );
};

export default Home;
