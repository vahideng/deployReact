import React from "react";
import { Row, Col } from "react-bootstrap";
import PrimaryButton from "src/components/buttons/primaryButton/PrimaryButton";
import Paragraphs from "../../assets/typography";
const { SB_15_BLACK, B_32_BLACK, R_20_BLACK } = Paragraphs;

interface IButtonColor {
  bottom: string;
  top: string;
}
interface Props {
  buttonClick?: () => void;
  buttonColor?: IButtonColor;
  buttonText?: string;
  content: string;
  label: string;
  leftImage: string;
  showButton: boolean;
  testId?: string;
  title: string;
}

const BannerHero: React.FC<Props> = ({
  buttonClick,
  buttonColor,
  buttonText,
  content,
  label,
  leftImage,
  showButton,
  testId,
  title
}: Props) => {
  return (
    <div id={`${testId}`}>
      <Row>
        <Col xs={12} sm={6}>
          <img src={leftImage} style={{ width: "100%" }} />
        </Col>
        <Col
          xs={12}
          sm={5}
          style={{
            paddingBottom: "8px",
            paddingLeft: "17px",
            paddingTop: "72px"
          }}
        >
          <SB_15_BLACK style={{ textTransform: "uppercase" }}>
            {label}
          </SB_15_BLACK>
          <B_32_BLACK>{title}</B_32_BLACK>
          <div style={{ paddingTop: "16px" }}>
            <R_20_BLACK>{content}</R_20_BLACK>
          </div>
          {showButton && buttonClick && buttonText ? (
            <div style={{ paddingTop: "72px" }}>
              <Col xs={12} sm={6}>
                <PrimaryButton
                  buttonColor={!!buttonColor}
                  title={buttonText}
                  onButtonClick={buttonClick}
                  width={"100%"}
                />
              </Col>
            </div>
          ) : null}
        </Col>
      </Row>
    </div>
  );
};

export default BannerHero;
