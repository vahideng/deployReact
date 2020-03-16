import React, { ReactNode } from "react";
import classes from "./FormContainer.module.css";
import Paragraphs from "../../assets/typography";
import Tooltip from "src/components/tooltip/Tooltip";
import Icon from "src/components/assets/icons/icon";
import StatusIcon from "src/components/assets/icons/statusIcon/StatusIcon";
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
    <div>
      {!!statusIcon && (
        <div className={classes.FormContainerIconWrap}>
          <span className={classes.FormContainerStatusIcon}>
            <StatusIcon
              testId={statusIcon.testId}
              icon={!!statusIcon ? statusIcon.icon : ""}
              iconColor={{
                top: statusIcon.iconColor.top,
                bottom: statusIcon.iconColor.bottom
              }}
              image={!!statusIcon ? statusIcon.image : ""}
            />
          </span>
          <span>
            <Icon
              icon="popup-curve"
              color={"#FFFFFF"}
              size={58}
              style={{
                width: "36.31rem"
              }}
            />
          </span>
        </div>
      )}
      <div
        className={classes.FormContainerMain}
        id={testId}
        style={
          !statusIcon
            ? { borderRadius: "1rem" }
            : {
                width: "36.31rem",
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0
              }
        }
      >
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

        <div className={classes.FormContainerCurve} id={testId}>
          <div className={classes.FormContainerContent}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
