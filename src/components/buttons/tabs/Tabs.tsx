import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import classes from "./Tabs.module.css";
interface Props {
  defaultIndex?: number;
  titles: string[];
  contents: React.ReactNode[];
}

const AMTabs: React.FC<Props> = ({ titles, contents, defaultIndex }) => {
  return (
    <div className={classes.AMTabsMainDiv}>
      <Tabs defaultIndex={!!defaultIndex ? defaultIndex : 0}>
        <TabList style={{ border: 0 }} className={classes.AMTabsContents}>
          {!!titles &&
            titles.map((title, index: number) => {
              return <Tab key={index}>{title}</Tab>;
            })}
        </TabList>

        {!!contents &&
          contents.map((content, index: number) => {
            return <TabPanel key={index}>{content}</TabPanel>;
          })}
      </Tabs>
    </div>
  );
};

export default AMTabs;
