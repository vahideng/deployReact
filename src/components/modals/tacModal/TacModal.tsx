import React, { useState, useEffect, ReactNode, FormEvent } from "react";
import Modal from "react-modal";
import InputField from "src/components/inputs/inputFields/InputFields";
import Paragraphs from "../../assets/typography";
import FullButton from "../../buttons/primaryButton/PrimaryButton";
import classes from "./TacModal.module.css";
import Icon from "src/components/assets/icons/icon";
const { R_15_GREY444, B_15_BLACK, R_14_BLACK, B_15_ORANGE_463 } = Paragraphs;

interface Props {
  testId?: string;
  responsive?: boolean;
  content?: string | string[];
  link?: { text: string; onLinkClick: () => void };
  modalIsOpen?: boolean;
  handleChange?: any;
  maxLength?: number;
  onBlur?: (event: FormEvent) => void;
  onFocus?: (event: FormEvent) => void;
  label?: string;
  value?: string;
  notValid?: boolean;
  errorMessage?: {
    testId?: string;
    errorText: string;
    subText: string;
  };
  buttonTitle?: string;
  onButtonClick?: any;
  buttonColor?: any;
  inActive?: boolean;
  inActiveIcon?: { name?: string; color?: string; size?: number };
  inActiveMessage?: { title: string; text: string };
  clearIcon?: boolean;
  activeStatus?: boolean;
  activeStatusChild?: ReactNode;
  clearClickHandler?: () => void;
  onClearIconHover?: (event: MouseEvent, isHover?: boolean) => void;
  onCloseClick?: () => void;
  zIndex?: number;
  disabledInput?: boolean;
}

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
const customStyles = (props: React.PropsWithChildren<Props>) => ({
  content: {
    top: "auto",
    right: "auto",
    bottom: "0",
    marginRight: "-50%",
    width: "100%",
    left: " 0px",
    padding: "1.5rem",
    zIndex: props.zIndex ? props.zIndex : 1000000000,
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "multiply",
    zIndex: props.zIndex ? props.zIndex : 1000000000,
  },
});
const TacModal: React.FC<Props> = (props) => {
  const {
    modalIsOpen,
    handleChange,
    label,
    value,
    notValid,
    errorMessage,
    content,
    buttonTitle,
    onButtonClick,
    buttonColor,
    testId,
    inActive,
    inActiveIcon,
    inActiveMessage,
    clearIcon,
    clearClickHandler,
    activeStatus,
    activeStatusChild,
    link,
    onCloseClick,
    maxLength,
    onBlur,
    onFocus,
    responsive,
    onClearIconHover,
    disabledInput,
  } = props;
  const [modalStatus, setModalStatus] = useState(modalIsOpen);
  useEffect(() => {
    setModalStatus(modalIsOpen);
  }, [modalIsOpen]);
  const {
    TacMainInnerDiv,
    TacMainInnerDivRes,
    TacMainDiv,
    TacInActiveIcon,
    TacInActiveIconText,
    TacInputField,
    TacInputFieldContent,
    TacInputFieldLink,
    TacButton,
    TacCrossButton,
    TacInActiveIconRes,
    TacButtonRes,
  } = classes;
  return (
    <>
      <Modal isOpen={!!modalStatus && modalStatus} style={customStyles(props)}>
        <div id={testId} className={TacMainDiv}>
          {!!activeStatus ? (
            <>{activeStatusChild}</>
          ) : (
            <div
              id={testId}
              className={responsive ? TacMainInnerDivRes : TacMainInnerDiv}
            >
              {!!inActive ? (
                <div
                  className={responsive ? TacInActiveIconRes : TacInActiveIcon}
                >
                  {!!inActiveIcon ? (
                    <Icon
                      icon={inActiveIcon.name}
                      color={inActiveIcon.color}
                      size={inActiveIcon.size}
                    />
                  ) : (
                    <Icon icon={"Amy1"} color={"#A9A9A9"} size={60} />
                  )}

                  <div className={TacInActiveIconText}>
                    <B_15_BLACK>{inActiveMessage.title}</B_15_BLACK>
                    <R_14_BLACK>{inActiveMessage.text}</R_14_BLACK>
                  </div>
                </div>
              ) : (
                <>
                  <form>
                    <div className={TacInputField}>
                      <InputField
                        disabled={disabledInput}
                        onClearIconHover={onClearIconHover}
                        responsive={responsive ? responsive : false}
                        clearIcon={clearIcon}
                        clearClickHandler={clearClickHandler}
                        testId={`${testId}-0`}
                        handleChange={handleChange}
                        maxLength={maxLength}
                        onBlur={onBlur}
                        onFocus={onFocus}
                        type="password"
                        label={label}
                        icon={{ name: "TAC" }}
                        value={value}
                        notValid={notValid}
                        errorMessage={errorMessage}
                        tacInput={true}
                      />
                    </div>
                    <div className={TacInputFieldContent}>
                      {!!content && typeof content === "object" ? (
                        content.map((item, index) => {
                          return (
                            <R_15_GREY444 key={index}>{item}</R_15_GREY444>
                          );
                        })
                      ) : (
                        <R_15_GREY444>{content}</R_15_GREY444>
                      )}

                      {!!link && (
                        <B_15_ORANGE_463
                          onClick={link.onLinkClick}
                          className={TacInputFieldLink}
                        >
                          {link.text}
                        </B_15_ORANGE_463>
                      )}
                    </div>
                  </form>
                </>
              )}

              <div className={responsive ? TacButtonRes : TacButton}>
                <FullButton
                  responsive={responsive ? responsive : false}
                  testId={`${testId}-1`}
                  buttonColor={{
                    top: buttonColor.top,
                    bottom: buttonColor.bottom,
                  }}
                  title={buttonTitle}
                  onButtonClick={!!onButtonClick && onButtonClick}
                />
              </div>
              <span
                className={TacCrossButton}
                onClick={() => {
                  setModalStatus(false);
                  onCloseClick();
                }}
              >
                <Icon icon={"Fail-2"} size={15} />
              </span>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};

TacModal.defaultProps = {
  responsive: false,
};
export default TacModal;
