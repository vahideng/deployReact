import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sprint1 from "./containers/Sprint_1/Sprint_1";
import Sprint2 from "./containers/Sprint_2/Sprint_2";
import Home from "./containers/Home/Home";
import Sprint3 from "./containers/Sprint_3/Sprint_3";
import Sprint4 from "./containers/Sprint_4/Sprint_4";

//IE Not supported Page imports
import NotSupportedPage from "./components/NotSupportedPage/NotSupportedPage";
import TextButton from "src/components/buttons/textButton/TextButton";
import assets from "src/assets/index";

import NodeModule from "./containers/nodeMoudleTest";
const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/sprint-1" exact>
          <Sprint1 />
        </Route>
        <Route path="/sprint-2" exact>
          <Sprint2 />
        </Route>
        <Route path="/sprint-3" exact>
          <Sprint3 />
        </Route>
        <Route path="/sprint-4" exact>
          <Sprint4 />
        </Route>
        <Route path="/NodeModule" exact>
          <NodeModule />
        </Route>
        <Route path="/not-supported" exact>
          <NotSupportedPage
            backgroundColor="#F0F2F6"
            leftItem={{
              // icon: {
              //   name: "amonline-white",
              //   color: "#ff2626",
              // },
              image: {
                source: assets.common.amOnlineLogoWithRedBg,
                imageStyle: { height: 41 },
              },
              onLeftItemClick: () => alert("Clicked on Logo"),
            }}
            rightItems={[
              <TextButton
                buttonText="Contact Us"
                onTextClick={() => {
                  alert("Contact Us");
                }}
                buttonStyles={{
                  color: "#000000",
                  fontWeight: 400,
                  fontSize: 15,
                }}
              />,
              <TextButton
                buttonText="FAQ"
                onTextClick={() => {
                  alert("FAQ");
                }}
                buttonStyles={{
                  color: "#000000",
                  fontWeight: 400,
                  fontSize: 15,
                }}
              />,
            ]}
            //  icon={{
            //     name: "amonline-white",
            //     color: "#ff2626",
            //   }}
            image={{
              source: assets.common.sadAmyIcon,
              imageStyle: { height: "90px", width: "103px" },
            }}
            title={"Oops! This browser is not supported."}
            // titleStyle={{ fontSize: 20, color: '#EEE' }}
            subtitle={"Please use the following supported browsers:"}
            // subtitleStyle={{ fontSize: 14 }}
            browserList={[
              {
                image: {
                  source: assets.common.googleChromeLogo,
                  imageStyle: { height: 50, width: 50 },
                },
                name: "Google Chrome",
                note: "Ver. 49 & above",
              },
              {
                image: {
                  source: assets.common.safariLogo,
                  imageStyle: { height: 50, width: 50 },
                },
                name: "Apple Safari",
                note: "Ver. 10 & above",
              },
              {
                image: {
                  source: assets.common.firefoxLogo,
                  imageStyle: { height: 50, width: 50 },
                },
                name: "Mozilla Firefox",
                note: "Ver. 50 & above",
                onClick: () =>
                  window.open(
                    "https://www.mozilla.org/en-US/firefox/new/",
                    "_blank"
                  ),
              },
              {
                image: {
                  source: assets.common.microsoftEdgeLogo,
                  imageStyle: { height: 50, width: 50 },
                },
                name: "Microsoft Edge",
                note: "Ver. 14 & above",
              },
            ]}
            noteText={"...or switch to our AmOnline Mobile App today!"}
            // noteTextStyle={{ fontSize: 14 }}
            appLinks={[
              {
                source: assets.common.downloadOnGPlay,
                imageStyle: { height: 34 },
                onClick: () =>
                  window.open(
                    "https://play.google.com/store/apps/details?id=com.ambank.ambankonline&hl=en",
                    "_blank"
                  ),
              },
              {
                source: assets.common.downloadOnAppStore,
                imageStyle: { height: 34 },
                onClick: () =>
                  window.open(
                    "https://apps.apple.com/my/app/amonline/id1174142234",
                    "_blank"
                  ),
              },
            ]}
          />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
