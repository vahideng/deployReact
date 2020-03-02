import React, { ReactNode, useState } from "react";
import classes from "./FormContainerCurved.module.css";
import Paragraphs from "../../assets/typography";
const { B_17_BLACK, B_17_WHITE } = Paragraphs;
interface Props {
  curvedTab: {
    leftTab: string;
    rightTab: string;
    leftContent?: ReactNode;
    rightContent?: ReactNode;
  };
}

const FormContainerCurved: React.FC<Props> = ({ curvedTab }) => {
  const [LeftSelected, setLeftSelected] = useState(true);
  const [RightSelected, setRightSelected] = useState(false);
  return (
    <div>
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
        </div>

        <div className={classes.FormContainerCurvedRightCurve}></div>
      </div>

      <div className={classes.FormContainerCurvedMain}>
        <div className={classes.FormContainerCurvedContent}>
          {!!LeftSelected ? (
            <>{curvedTab.leftContent}</>
          ) : (
            <>{curvedTab.rightContent}</>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormContainerCurved;
