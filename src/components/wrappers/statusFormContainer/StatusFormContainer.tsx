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
    icon?: { name?: string; color?: string; size?: number };
    image?: { src: string; alt?: string };
  };

  children?: ReactNode;
  responsive?: boolean;
}

const StatusFormContainer: React.FC<Props> = ({
  children,
  statusIcon,
  testId,
  responsive,
}) => {
  let containerCls = classes.StatusFormContainerCurve;
  if (responsive) {
    containerCls = `${classes.StatusFormContainerCurve} ${classes.StatusFormContainerCurveResponive}`;
  }
  return (
    <div className={classes.StatusFormContainerMain}>
      {!!statusIcon && (
        <>
          <span className={classes.StatusFormContainerStatusIcon}>
            <StatusIcon
              outerIconColor={statusIcon.outerIconColor}
              testId={statusIcon.testId}
              icon={!!statusIcon && statusIcon.icon}
              iconColor={{
                top: statusIcon.iconColor.top,
                bottom: statusIcon.iconColor.bottom,
              }}
              image={!!statusIcon.image && statusIcon.image}
              outerRoundSize={"5.625rem"}
              innerRoundSize={"4.3125rem"}
            />
          </span>
        </>
      )}
      <div className={containerCls} id={testId}>
        <span className={classes.CurveStyle}>
          <Icon
            icon="popup-curve"
            color={"#FFFFFF"}
            size={58}
            style={{
              width: "36.25rem",
              position: "absolute",
              margin: "auto",
              display: "block",
              height: "100%",
              left: "-100%",
              right: " -100%",
            }}
          />
        </span>
        <div className={classes.StatusFormContainerContent}>{children}</div>
      </div>
    </div>
  );
};

export default StatusFormContainer;

StatusFormContainer.defaultProps = {
  responsive: false,
};
