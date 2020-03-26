import React, { ReactNode, useState } from "react";
import classes from "./FormContainerCurved.module.css";
import Paragraphs from "../../assets/typography";
import Icon from "src/components/assets/icons/icon";
const { B_17_BLACK, B_17_WHITE } = Paragraphs;
interface Props {
  testId?: string;
  curvedTab: {
    leftTab: string;
    rightTab: string;
    leftContent?: ReactNode;
    rightContent?: ReactNode;
  };
}

const FormContainerCurved: React.FC<Props> = ({ curvedTab, testId }) => {
  const [LeftSelected, setLeftSelected] = useState(true);
  const [RightSelected, setRightSelected] = useState(false);
  return (
    <div id={testId}>
      <div className={classes.FormContainerCurvedMainCurve}>
        <div className={classes.FormContainerCurvedLeftCurve}>
          <div
            className={classes.FormContainerCurvedFirstCurveWr}
            style={{
              backgroundColor: !!RightSelected ? "#ffffff" : "#c4c4c4"
            }}
          >
            <div
              onClick={() => {
                setLeftSelected(true);
                setRightSelected(false);
              }}
              className={classes.FormContainerCurvedFirstCurve}
              style={{
                backgroundColor: !!LeftSelected ? "#ffffff" : "#c4c4c4"
              }}
            >
              {!!LeftSelected ? (
                <B_17_BLACK>{curvedTab.leftTab}</B_17_BLACK>
              ) : (
                <B_17_WHITE>{curvedTab.leftTab}</B_17_WHITE>
              )}
            </div>
          </div>
          <span style={{ backgroundColor: "transparent", display: "flex" }}>
            <div
              className={classes.FormContainerCurvedSecondCurveWr}
              style={{
                backgroundColor: !!LeftSelected ? "#ffffff" : "#c4c4c4"
              }}
            >
              <div
                onClick={() => {
                  setLeftSelected(false);
                  setRightSelected(true);
                }}
                className={classes.FormContainerCurvedSecondCurve}
                style={{
                  backgroundColor: !!RightSelected ? "#ffffff" : "#c4c4c4"
                }}
              >
                {!!RightSelected ? (
                  <B_17_BLACK>{curvedTab.rightTab}</B_17_BLACK>
                ) : (
                  <B_17_WHITE>{curvedTab.rightTab}</B_17_WHITE>
                )}
              </div>
            </div>
            <Icon
              // size={30}
              icon={"tab-curbe"}
              color={!!RightSelected ? "#ffffff" : "#c4c4c4"}
              style={{
                marginLeft: "-1.5rem",
                height: "3.18rem",
                width: "3.8rem"
              }}
            />
          </span>
        </div>

        <div className={classes.FormContainerCurvedRightCurve}></div>
      </div>

      <div className={classes.FormContainerCurvedMain} id={`${testId}-0`}>
        <div className={classes.FormContainerCurvedContent}>
          {!!LeftSelected ? (
            <div id={`${testId}-1`}>{curvedTab.leftContent}</div>
          ) : (
            <div id={`${testId}-2`}>{curvedTab.rightContent}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormContainerCurved;
