import React, { ReactNode, useState, useEffect } from "react";
import classes from "./FormContainerCurved.module.css";
import Paragraphs from "../../assets/typography";
import Icon from "src/components/assets/icons/icon";
const { B_17_BLACK, B_17_WHITE } = Paragraphs;
interface Props {
  testId?: string;
  curvedTab: {
    leftTab: string;
    rightTab: string;
    onLeftClick?: () => void;
    onRightClick?: () => void;
    leftContent?: ReactNode;
    rightContent?: ReactNode;
    rightSelected?: boolean;
  };
}

const FormContainerCurved: React.FC<Props> = ({ curvedTab, testId }) => {
  const [LeftSelected, setLeftSelected] = useState(
    curvedTab.rightSelected ? false : true
  );
  const [RightSelected, setRightSelected] = useState(
    curvedTab.rightSelected ? curvedTab.rightSelected : false
  );
  const leftColors = () => {
    if (!!LeftSelected) {
      return "#fff";
    } else {
      return "#c4c4c4";
    }
  };
  const rightColors = () => {
    if (!!RightSelected) {
      return "#fff";
    } else {
      return "#c4c4c4";
    }
  };
  const onRightClick = () => {
    setLeftSelected(false);
    setRightSelected(true);
    if (curvedTab.onRightClick) {
      return curvedTab.onRightClick();
    }
  };
  const onLeftClick = () => {
    setLeftSelected(true);
    setRightSelected(false);
    if (curvedTab.onLeftClick) {
      return curvedTab.onLeftClick();
    }
  };
  useEffect(() => {
    if (!!curvedTab.rightSelected && curvedTab.rightSelected) {
      setRightSelected(true);
      setLeftSelected(false);
    } else {
      setLeftSelected(true);
      setRightSelected(false);
    }
  }, [curvedTab.rightSelected]);

  return (
    <div id={testId}>
      <div className={classes.MainCurve}>
        <div className={classes.LeftCurve}>
          <div className={classes.FirstCurveWr}>
            <div
              onClick={onLeftClick}
              className={classes.FirstCurve}
              style={{
                backgroundColor: leftColors(),
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
              className={classes.SecondCurveWr}
              style={{
                backgroundColor: leftColors(),
              }}
            >
              <div
                onClick={onRightClick}
                className={classes.SecondCurve}
                style={{
                  backgroundColor: rightColors(),
                }}
              >
                {!!RightSelected && (
                  <div className={classes.leftCurveIcon}>
                    <Icon
                      icon={"tab-curve"}
                      color={"#ffffff"}
                      style={{
                        height: "3.18rem",
                        width: "3.8rem",
                        marginLeft: "-2px",
                      }}
                    />
                  </div>
                )}
                {!!RightSelected ? (
                  <B_17_BLACK>{curvedTab.rightTab}</B_17_BLACK>
                ) : (
                  <B_17_WHITE>{curvedTab.rightTab}</B_17_WHITE>
                )}
              </div>
            </div>
            <Icon
              icon={"tab-curve"}
              color={rightColors()}
              style={{
                marginLeft: "-1.5rem",
                height: "3.18rem",
                width: "3.8rem",
              }}
            />
          </span>
        </div>

        <div className={classes.RightCurve}></div>
      </div>

      <div className={classes.Content} id={`${testId}-0`}>
        {!!LeftSelected ? (
          <div id={`${testId}-1`}>{curvedTab.leftContent}</div>
        ) : (
          <div id={`${testId}-2`}>{curvedTab.rightContent}</div>
        )}
      </div>
    </div>
  );
};

export default FormContainerCurved;
