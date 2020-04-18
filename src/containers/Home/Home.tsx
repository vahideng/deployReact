import React, { useState } from "react";
import BackgroundSingle from "src/components/wrappers/backgroundSingle/BackgroundSingle";
import Header from "src/components/headers/header/Header";
import Box from "src/components/wrappers/box/Box";
import InputField from "src/components/inputs/inputFields/InputFields";
import TextButton from "src/components/buttons/textButton/TextButton";
import NavbarTransparent from "src/components/headers/navbarTransparent/NavbarTransparent";
import TextDropdown from "src/components/inputs/texDropdown/TextDropdown";
import { Redirect } from "react-router-dom";

import SecureImage from "src/components/secureImage/SecureImage";

interface Props {}

const Home: React.FC<Props> = () => {
  const [selectedItem, setSelectedOption] = useState(null);
  const [split, setsSplit] = useState(false);
  const [sprint1, setSprint1] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [inputValue, setInputValue] = useState("");

  if (sprint1 === true) {
    return <Redirect to="/sprint-1" />;
  }

  return (
    <>
      <BackgroundSingle
        style={{ height: "70vh" }}
        testId={"testId"}
        image={
          "https://images.unsplash.com/photo-1584275556625-162f54df05b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
        }
      >
        <div style={{ padding: 100 }}>
          <NavbarTransparent
            icon={{
              color: "#FFFFFF",
              onIconClick: () => {
                setSprint1(true);
              },
            }}
            rightButtons={[
              <TextButton
                testId={"testId"}
                buttonText="Sprint-1"
                onTextClick={() => {
                  setSprint1(true);
                }}
                buttonStyles={{
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              />,

              <TextDropdown
                boldFont={true}
                themColor="#FFFFFF"
                handleChange={(selectedOption: any) => {
                  setSelectedOption(selectedOption);
                  console.log(`Option:`, selectedOption);
                }}
                selectedOption={selectedItem}
                defaultValue={{ label: "Malay", value: "malay" }}
                // placeHolder={"English"}
                options={[
                  { label: "English", value: "english" },
                  { label: "Malay", value: "malay" },
                  { label: "中文", value: "中文" },
                ]}
              />,
            ]}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "9rem",
            }}
          >
            <Header
              textColor="#FFFFFF"
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
              leftTitleStyle={{ color: "#ff2626" }}
              rightTitleStyle={{ color: "#000000" }}
              rightTitle={"rightTitle"}
              tabTitles={["Security", "Login", "Contact Us"]}
              onSelect={(obj: any) => console.log(obj)}
              content={[
                <SecureImage
                  testId={"testId"}
                  label="Hi Adam3011, is this your security image?"
                  image={
                    "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                  }
                />,

                <div style={{ paddingTop: "2rem" }}>
                  <InputField
                    value={inputValue}
                    handleChange={(event) => {
                      setInputValue(event.target.value);
                    }}
                    notValid={inputValue.length >= 4 ? true : false}
                    errorMessage={{
                      testId: "testId",
                      errorText: "Wrong Password",
                      subText: "Please try again.",
                    }}
                    isSecure
                    clearClickHandler={() => {
                      setInputValue("");
                    }}
                    clearIcon={inputValue === "" ? false : true}
                    type={!hidden ? "password" : "text"}
                    label="Password"
                    icon={{ name: "User1" }}
                    onSecureClick={() => {
                      setHidden(!hidden);
                    }}
                  />
                  <div style={{ paddingTop: 30 }}>
                    <TextButton
                      testId="testId"
                      buttonText="Forgot username/password?"
                      onTextClick={(id) => {
                        alert(`${id} clicked`);
                      }}
                    />
                  </div>
                </div>,
              ]}
            ></Box>
          </div>
        </div>
      </BackgroundSingle>
    </>
  );
};

export default Home;
