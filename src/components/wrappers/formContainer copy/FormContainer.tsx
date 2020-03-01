import React, { ReactNode, useState } from "react";
import classes from "./FormContainer.module.css";
import Paragraphs from "../../assets/typography";
const { B_14_WHITE, B_17_BLACK, B_17_WHITE } = Paragraphs;
interface Props {
  curvedTab?: {
    leftTab: string;
    rightTab: string;
  };
  label?: string;
  children?: ReactNode;
}

const FormContainer: React.FC<Props> = ({ children, label, curvedTab }) => {
  const [LeftSelected, setLeftSelected] = useState(true);
  const [RightSelected, setRightSelected] = useState(false);
  return (
    <div className={classes.FormContainerMain}>
      {!!curvedTab ? (
        <div className={classes.FormContainerMainCurve}>
          <div className={classes.FormContainerLeftCurve}>
            <div
              className={classes.FormContainerFirstCurveWr}
              style={{
                backgroundColor: !!RightSelected ? "#ffffff" : "#c4c4c4"
              }}
            >
              <div
                onClick={() => {
                  setLeftSelected(true);
                  setRightSelected(false);
                }}
                className={classes.FormContainerFirstCurve}
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
              className={classes.FormContainerSecondCurveWr}
              style={{
                backgroundColor: !!LeftSelected ? "#ffffff" : "#c4c4c4"
              }}
            >
              <div
                onClick={() => {
                  setLeftSelected(false);
                  setRightSelected(true);
                }}
                className={classes.FormContainerSecondCurve}
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

          <div className={classes.FormContainerRightCurve}></div>
        </div>
      ) : (
        <div className={classes.FormContainerLabel}>
          <B_14_WHITE>{label}</B_14_WHITE>
        </div>
      )}
      <div className={classes.FormContainerContent}>{children}</div>
    </div>
  );
};

export default FormContainer;
