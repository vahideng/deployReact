import React, { ReactNode } from "react";
import classes from "./StatusFormContainer.module.css";
import StatusIcon from "src/components/assets/icons/statusIcon/StatusIcon";
import Icon from "src/components/assets/icons/icon";
interface Props {
  testId?: string;
  statusIcon?: {
    testId?: string;
    iconColor: {
      top: string;
      bottom: string;
    };
    outerIconColor: string;
    icon?: any;
    image?: any;
  };

  children?: ReactNode;
}

const StatusFormContainer: React.FC<Props> = ({
  children,
  statusIcon,
  testId
}) => {
  return (
    <div className={classes.StatusFormContainerMain}>
      {!!statusIcon && (
        <>
          <span className={classes.StatusFormContainerStatusIcon}>
            <StatusIcon
              outerIconColor={statusIcon.outerIconColor}
              testId={statusIcon.testId}
              icon={!!statusIcon ? statusIcon.icon : ""}
              iconColor={{
                top: statusIcon.iconColor.top,
                bottom: statusIcon.iconColor.bottom
              }}
              image={!!statusIcon ? statusIcon.image : ""}
            />
          </span>
        </>
      )}
      <div className={classes.StatusFormContainerCurve} id={testId}>
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
        <div className={classes.StatusFormContainerContent}>{children}</div>
      </div>
    </div>
  );
};

export default StatusFormContainer;
