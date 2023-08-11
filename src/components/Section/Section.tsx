import { Container, Image } from "react-bootstrap";
import cn from "classnames";
import "./Section.css";
import { useScreenSize } from "../../screenSizeContext/ScreenSizeContext";

type SectionProps = {
  content: JSX.Element;
  imageSrc: string;
  imagePosition: "left" | "right";
  imageWidth?: string;
  background: boolean;
  backgroundColor?: `bg-${string}`;
  curveDirection?: "left" | "right";
  imageStacked: boolean;
  stackBackgroundColor?: `bg-${string}`;
  stackDirection?: "left" | "right";
  marginBottom?: `mb-${number}`;
  contentWidth?: `mw-${number}`;
} & (BackgroundCurveProps | NoBackgroundCurveProps) &
  (ImageStackProps | NoImageStackProps);

type BackgroundCurveProps = {
  background: true;
  curveDirection: "left" | "right";
  backgroundColor: `bg-${string}`;
};

type NoBackgroundCurveProps = {
  background: false;
  curveDirection?: never;
  backgroundColor?: never;
};

type ImageStackProps = {
  imageStacked: true;
  stackDirection: "left" | "right";
  stackBackgroundColor: `bg-${string}`;
};

type NoImageStackProps = {
  imageStacked: false;
  stackDirection?: never;
  stackBackgroundColor?: never;
};

const Section = ({
  content,
  imageSrc,
  imagePosition,
  background,
  backgroundColor,
  curveDirection,
  imageStacked,
  stackDirection,
  stackBackgroundColor,
  marginBottom,
  contentWidth,
}: SectionProps): JSX.Element => {
  const { isXs, isSm, isMd, isLg, isXl, isXXl, isTablet } = useScreenSize();
  return (
    <Container
      fluid
      className={cn(
        `d-flex flex-wrap-reverse align-content-center justify-content-evenly ${
          background
            ? `text-light ${backgroundColor} curved-section-${curveDirection}`
            : "text-dark"
        }`,
        {
          "flex-row": imagePosition === "right",
          "flex-row-reverse": imagePosition === "left",
          "pt-5 pb-5": background,
          "pt-3 pb-4": !background,
          "mt-7": !isTablet,
          "mt-5 mb-3": isTablet && background,
          "mb-5": !marginBottom,
          [`${marginBottom}`]: true,
        }
      )}
    >
      <div
        className={cn("align-self-center", {
          [`${contentWidth}`]: !isTablet && contentWidth,
          "mw-40": !isTablet && !contentWidth,
          "bg-white": !background,
        })}
      >
        {content}
      </div>
      {/* && !isMobile */}
      {imageStacked ? (
        <div
          className={cn("image-stack align-self-center", {
            // "bg-white": !background,
            "mb-5": background || isTablet,
            "w-35": isXXl,
            "w-45": isXl,
            "w-50": isLg,
            "w-80": isMd,
            "w-90": isSm,
            "w-100": isXs,
          })}
        >
          <div
            className={cn({
              "bg-white": background,
              [`${stackBackgroundColor}`]: !background,
              "image-stack__item--bottom-right": stackDirection === "left",
              "image-stack__item--bottom-left": stackDirection === "right",
            })}
          />
          <Image
            className={`image-stack__item--top-${stackDirection}`}
            src={imageSrc}
          />
        </div>
      ) : (
        <Image
          className={cn("align-self-center", {
            "w-35": isXXl,
            "w-40": isXl,
            "w-45": isLg,
            "w-60": isMd,
            "w-70": isSm,
            "w-100": isXs,
            "mb-4": isTablet && imageStacked,
          })}
          roundedCircle={!imageStacked}
          src={imageSrc}
        />
      )}
    </Container>
  );
};

export default Section;
