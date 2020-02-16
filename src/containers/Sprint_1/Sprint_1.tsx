import React, { ReactElement } from "react";
import Header from "../../components/headers/header/Header";
import TextButtonList from "../../components/buttons/textButtonList/TextButtonList";
interface Props {}

function Sprint_1({}: Props): ReactElement {
  return (
    <>
      <Header
        title="good morning"
        subTitle="Banking your way. 
        What would you like
        to do today?"
      />
      <TextButtonList
        data={[
          "Terms & Conditions",
          "Privacy Notice",
          "Security Statement",
          "e-Banking Charter",
          "Security Alert"
        ]}
        footerText="  Copyright © AmBank (M) Berhad (Company No. 8515-D) All Rights
          Reserved."
      />
    </>
  );
}

export default Sprint_1;
