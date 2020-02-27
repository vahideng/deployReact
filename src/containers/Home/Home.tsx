import React from "react";

import BackgroundSingle from "src/components/wrappers/backgroundSingle/BackgroundSingle";
import Header from "src/components/headers/header/Header";
import Box from "src/components/wrappers/box/Box";
import FullButton from "src/components/buttons/fullButton/FullButton";
import ZeroResult from "src/components/infographic/zeroResault/ZeroResult";
// import AMTabs from "src/components/buttons/tabs/Tabs";
// import ZeroResult from "src/components/infographic/zeroResault/ZeroResult";
// import InputField from "src/components/inputs/checkBox/inputFields/InputFields";
// import FullButton from "src/components/buttons/fullButton/FullButton";
// import TextButton from "src/components/buttons/textButton/TextButton";

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
        <Box
          fullButton={false}
          buttonColor = "blue"
          splitButton={true}
          onButtonClick={() => console.log("buttonCLicked")}
          onRightButton={() => console.log("rightButtonClicked")}
          onLeftButton={() => console.log("leftButtonClicked")}
          leftTitle={"LeftTitle"}
          rightTitle={"rightTitle"}
          onSelect={(obj: any) => console.log(obj)}
          content={[
            <ZeroResult
              text={`We can’t seem to find any result for 
              “Damansara Heights”`}
            />,
            <>
              <p>any things</p>
            </>,
            <FullButton
              title="Login"
              onButtonClick={() => {
                alert("Button Clicked");
              }}
            />
          ]}
        ></Box>
      </BackgroundSingle>
    </>
  );
};

export default Home;
