import React, { useState, ReactNode } from "react";

import Modal from "react-modal";
import classes from "./MenuBanner.module.css";
import Icon from "src/components/assets/icons/icon";
import { Notify } from "../../assets/common/notification";
const customStyles = {
  content: {
    top: "auto",
    right: "auto",
    bottom: "0",
    marginRight: "-50%",
    width: "100%",
    left: "73vw",
    backgroundColor: "transparent",
    border: 0
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "multiply"
  }
};

interface Props {
  content?: ReactNode;
  notification?: boolean;
}

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)

const MenuBanner: React.FC<Props> = ({ content, notification }) => {
  const [isModalIsOpen, setIsModalIsOpen] = useState(false);
  return (
    <div>
      <Modal isOpen={isModalIsOpen} style={customStyles}>
        <div className={classes.MenuBannerMainDiv}>
          <div className={classes.MenuBannerInsideButtonDiv}>
            <div
              className={classes.MenuBannerInsideButton}
              onClick={() => {
                setIsModalIsOpen(!isModalIsOpen);
              }}
            >
              <span>
                {!!notification && (
                  <Notify className={classes.MenuBannerNotifyIn} />
                )}

                <Icon icon="Vector" size={20} />
              </span>
            </div>
          </div>
          <div className={classes.MenuBannerContentDiv}>{content}</div>
        </div>
      </Modal>
      <div
        className={classes.MenuBannerButton}
        onClick={() => {
          setIsModalIsOpen(!isModalIsOpen);
        }}
      >
        {!!notification && <Notify className={classes.MenuBannerNotify} />}

        <div>
          <Icon icon="Vector" size={20} />
        </div>
      </div>
    </div>
  );
};

export default MenuBanner;
