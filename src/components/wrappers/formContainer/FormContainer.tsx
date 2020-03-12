import React, { ReactNode } from "react";
import classes from "./FormContainer.module.css";
import Paragraphs from "../../assets/typography";
import Tooltip from "src/components/tooltip/Tooltip";
const { B_14_WHITE } = Paragraphs;
interface Props {
  testId?: string;
  statusIcon?: {
    backgroundColor: string;
    testId?: string;
    iconColor: {
      top: string;
      bottom: string;
    };
    icon?: any;
    image?: any;
  };
  label?: string;
  tooltip?: ReactNode;
  children?: ReactNode;
}

const FormContainer: React.FC<Props> = ({
  children,
  label,
  statusIcon,
  tooltip,
  testId
}) => {
  return (
    <div
      className={classes.FormContainerMain}
      id={testId}
      style={!statusIcon ? { borderRadius: "1rem" } : { width: "36.31rem" }}
    >
      {!!statusIcon && (
        <>
          <div
            className={classes.FormContainerStatusIcon}
            style={
              statusIcon ? { backgroundColor: statusIcon.backgroundColor } : {}
            }
          ></div>

          <div
            className={classes.FormContainerStatus}
            style={
              statusIcon ? { backgroundColor: statusIcon.backgroundColor } : {}
            }
          >
            <div className={classes.FormContainerStatusLeft}></div>
            <div className={classes.FormContainerStatusCenter}></div>
            <div className={classes.FormContainerStatusRight}></div>
          </div>
        </>
      )}
      {!!label && (
        <div className={classes.FormContainerLabel} id={`${testId}-0`}>
          <B_14_WHITE>{label}</B_14_WHITE>
          {!!tooltip && (
            <span className={classes.FormContainerTooltip}>
              <Tooltip
                tipChildren={tooltip}
                color="#FFFFFF"
                testId={`${testId}-1`}
              />
            </span>
          )}
        </div>
      )}

      <div
        className={classes.FormContainerContent}
        style={statusIcon ? { marginTop: "2rem" } : {}}
      >
        {children}
      </div>
    </div>
  );
};

export default FormContainer;
