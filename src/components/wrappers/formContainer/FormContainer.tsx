import React, { ReactNode } from "react";
import classes from "./FormContainer.module.css";
import Paragraphs from "../../assets/typography";
import StatusIcon from "src/components/assets/icons/statusIcon/StatusIcon";
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
      style={statusIcon ? { paddingTop: "3rem" } : {}}
      id={testId}
    >
      {!!statusIcon && (
        <div
          className={classes.FormContainerStatus}
          style={
            statusIcon ? { backgroundColor: statusIcon.backgroundColor } : {}
          }
        >
          <StatusIcon
            testId={statusIcon.testId}
            icon={!!statusIcon ? statusIcon.icon : ""}
            iconColor={{
              top: statusIcon.iconColor.top,
              bottom: statusIcon.iconColor.bottom
            }}
            image={!!statusIcon ? statusIcon.image : ""}
          />
        </div>
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

      <div className={classes.FormContainerContent}>{children}</div>
    </div>
  );
};

export default FormContainer;
