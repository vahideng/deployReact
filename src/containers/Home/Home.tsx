import React from "react";

import BackgroundSingle from "src/components/wrappers/backgroundSingle/BackgroundSingle";
import Header from "src/components/headers/header/Header";
import Box from "src/components/wrappers/box/Box";
import AMTabs from "src/components/buttons/tabs/Tabs";
import ZeroResult from "src/components/infographic/zeroResault/ZeroResult";
import InputField from "src/components/inputs/checkBox/inputFields/InputFields";
import FullButton from "src/components/buttons/fullButton/FullButton";
import TextButton from "src/components/buttons/textButton/TextButton";

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <>
      <BackgroundSingle
        image={
          "https://static.vecteezy.com/system/resources/previews/000/547/469/large_2x/abstract-blurred-background-with-bokeh-sparkling-lights-vector.jpg"
        }
      >
        <Header
          testId="testId"
          title="good morning"
          subTitle="Banking your way. 
          What would you like
          to do today?"
        />
        <Box>
          <AMTabs
            defaultIndex={1}
            titles={["Login", "Security", "Contact Us"]}
            contents={[
              <ZeroResult
                text={`We can’t seem to find any result for 
              “Damansara Heights”`}
              />,
              <>
                <div style={{ padding: "1.5rem" }}>
                  <InputField
                    autoFocus
                    type="text"
                    label="input label"
                    icon={{ name: "Bill" }}
                    value={""}
                    handleChange={event => {
                      alert(event);
                    }}
                  />
                  <div style={{ paddingTop: "1.5rem" }}>
                    <TextButton
                      testId="testId"
                      buttonText="Forgot username/password?"
                      onTextClick={id => {
                        alert(`${id} clicked`);
                      }}
                    />
                  </div>
                </div>

                <FullButton
                  title="Login"
                  onButtonClick={() => {
                    alert("Button Clicked");
                  }}
                />
              </>,
              "Contact Us"
            ]}
          />
        </Box>
      </BackgroundSingle>
    </>
  );
};

export default Home;
