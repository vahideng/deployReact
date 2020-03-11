import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import classes from "./Tabs.module.css";
interface Props {
  testId?: string;
  defaultIndex?: number;
  titles: string[];
  contents: React.ReactNode[];
  onSelect?: any;
}

export const AMTabs: React.FC<Props> = ({
  titles,
  contents,
  defaultIndex,
  onSelect,
  testId
}) => {
  return (
    <div className={classes.AMTabsMainDiv} id={testId}>
      <Tabs
        selectedTabClassName={classes.KK}
        defaultIndex={!!defaultIndex ? defaultIndex : 0}
        onSelect={obj => onSelect(obj)}
      >
        <TabList style={{ border: 0 }} className={classes.AMTabsContents}>
          {!!titles &&
            titles.map((title, index: number) => {
              return (
                <Tab
                  className={classes.TT}
                  key={index}
                  id={`${testId} -0 ${index}`}
                >
                  {title}
                </Tab>
              );
            })}
        </TabList>

        {!!contents &&
          contents.map((content, index: number) => {
            return (
              <TabPanel id={`${testId} -0 ${index}`} key={index}>
                {content}
              </TabPanel>
            );
          })}
      </Tabs>
    </div>
  );
};

export default AMTabs;
