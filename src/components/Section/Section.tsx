import { Container, Image } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import "./Section.css";

type SectionProps = {
  content: JSX.Element;
  imageSrc: string;
  imagePosition: "left" | "right";
  imageWidth?: string;
  background: boolean;
  curveDirection?: "left" | "right";
  imageStacked: boolean;
  stackDirection?: "left" | "right";
  marginBottom?: `mb-${number}`;
  sectionHeight?: `vh-${number}`;
  contentWidth?: `mw-${number}`;
} & (BackgroundCurveProps | NoBackgroundCurveProps) &
  (ImageStackProps | NoImageStackProps);

type BackgroundCurveProps = {
  background: true;
  curveDirection: "left" | "right";
};

type NoBackgroundCurveProps = {
  background: false;
  curveDirection?: never;
};

type ImageStackProps = {
  imageStacked: true;
  stackDirection: "left" | "right";
};

type NoImageStackProps = {
  imageStacked: false;
  stackDirection?: never;
};

const Section = ({
  content,
  imageSrc,
  imagePosition,
  imageWidth,
  background,
  curveDirection,
  imageStacked,
  stackDirection,
  marginBottom,
  sectionHeight,
  contentWidth,
}: SectionProps): JSX.Element => {
  const isTablet = useMediaQuery({ query: "(max-width: 1000px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <Container
      fluid
      className={`d-flex align-content-center justify-content-evenly ${
        background
          ? `text-light bg-base ${
              background ? `curved-section-${curveDirection}` : ""
            }`
          : "text-dark"
      } mt-5 ${
        !isTablet
          ? `${marginBottom ? marginBottom : "mb-5"} ${
              imagePosition === "right" ? "flex-row" : "flex-row-reverse"
            } ${sectionHeight ? sectionHeight : "vh-60"} `
          : "mb-4 flex-column-reverse"
      }`}
    >
      <div
        className={`align-self-center ${
          !isTabletOrMobile ? (contentWidth ? contentWidth : "mw-40") : ""
        } ${!background ? "bg-white" : ""}`}
      >
        {content}
      </div>
      {imageStacked && !isMobile ? (
        <div className={`image-stack align-self-center ${imageWidth}`}>
          <div
            className={`image-stack__item--bottom-${
              stackDirection === "left" ? "right" : "left"
            } ${background ? "bg-white" : "bg-base"}`}
          />
          <Image
            className={`image-stack__item--top-${stackDirection}`}
            src={imageSrc}
          />
        </div>
      ) : (
        <Image roundedCircle={!imageStacked} src={imageSrc} />
      )}
    </Container>
  );
};

export default Section;
