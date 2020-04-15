import React, { CSSProperties } from "react";
import classes from "./Loader.module.css";
import AmModal from "src/components/modals/Modal";
import Paragraphs from "../../typography";
import assets from "../../images";

const { R_20_WHITE } = Paragraphs;
interface Props {
  testId?: string;
  isLoading: boolean;
  loaderText?: string;
  onRequestClose?: () => void;
  optionalStyle?: {
    color?: string;
    thickness?: number;

    imageIcon?: string;
    imageIconStyle?: CSSProperties;
    textStyle?: CSSProperties;
  };
}

const Loader = ({
  testId,
  isLoading,
  onRequestClose,
  loaderText,
  optionalStyle,
}: Props) => {
  const onRequestCloseHandler = () => {
    return onRequestClose ? onRequestClose() : () => {};
  };

  const Spinner = () => {
    return (
      <div id={testId}>
        <div className={classes.Wrapper}>
          <div className={classes.Loader}>
            {[...Array(4)].map(() => (
              <div
                style={
                  optionalStyle
                    ? {
                        borderColor: `${optionalStyle.color} transparent transparent transparent`,
                        borderWidth: optionalStyle.thickness,
                      }
                    : {}
                }
              ></div>
            ))}
            <section className={classes.ImageDiv}>
              {optionalStyle && optionalStyle.imageIcon ? (
                <img
                  src={optionalStyle.imageIcon}
                  style={optionalStyle.imageIconStyle}
                />
              ) : (
                <img src={assets.common.amyIconPNG} />
              )}
            </section>
          </div>
          <footer>
            {loaderText && (
              <R_20_WHITE style={optionalStyle ? optionalStyle.textStyle : {}}>
                {loaderText}
              </R_20_WHITE>
            )}
          </footer>
        </div>
      </div>
    );
  };
  return (
    <AmModal
      testId={`${testId}-0`}
      modalIsOpen={isLoading}
      onRequestClose={onRequestCloseHandler}
      modalChildren={<Spinner />}
    />
  );
};

export default Loader;
