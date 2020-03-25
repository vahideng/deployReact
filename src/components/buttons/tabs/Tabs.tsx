import React, { CSSProperties } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import classes from "./Tabs.module.css";
interface Props {
  testId?: string;
  defaultIndex?: number;
  titles: string[];
  contents: React.ReactNode[];
  onSelect?: any;
  titlesStyle?: CSSProperties;
}

export const AMTabs: React.FC<Props> = ({
  titles,
  contents,
  defaultIndex,
  onSelect,
  testId,
  titlesStyle
}) => {
  return (
    <div className={classes.AMTabsMainDiv} id={testId}>
      <Tabs
        selectedTabClassName={classes.TabsSelected}
        defaultIndex={!!defaultIndex ? defaultIndex : 0}
        onSelect={obj => onSelect(obj)}
      >
        <TabList
          style={titlesStyle ? titlesStyle : {}}
          className={classes.AMTabsContents}
        >
          {!!titles &&
            titles.map((title, index: number) => {
              return (
                <Tab
                  className={classes.TabsTab}
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
