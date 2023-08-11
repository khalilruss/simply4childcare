import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useScreenSize } from "../../screenSizeContext/ScreenSizeContext";
import { useMediaQuery } from "react-responsive";
import cn from "classnames";

import "./ImageButton.css";
type ImageButtonProps = {
  imageSrc: string;
  buttonText: string;
  backgroundColor: `bg-${string}`;
};

const toURL = (str: string): string => {
  const words = str.split(" ");
  return words
    .map((word) => {
      return word[0].toLowerCase() + word.substring(1);
    })
    .join("-");
};

const ImageButton = ({
  imageSrc,
  buttonText,
  backgroundColor,
}: ImageButtonProps): JSX.Element => {
  const { isXs, isSm, isMd, isLg, isXl, isXXl, isTablet } = useScreenSize();
  const isSmallDesktop = useMediaQuery({ query: "(max-width: 1200px)" });
  const isSmallTablet = useMediaQuery({ query: "(max-width: 900px)" });

  return (
    <div
      className={cn("container mb-4 rounded", {
        // "mw-20 vh-40": !isSmallDesktop && !isSmallTablet,
        // "mw-40 vh-30": isSmallDesktop,
        // "mw-60 vh-20": isSmallTablet,
        // "mw-20 minw-20 vh-35": isXXl,
        // "minw-20 vh-30": isXl,
        // "minw-25 vh-30": isLg,
        // "w-80": isMd,
        // "w-90": isSm,
        // "w-100": isXs,
      })}
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "22rem",
        height: "20rem",
      }}
    >
      <Link
        to={`about/${toURL(buttonText)}`}
        onClick={() => {
          window.scroll(0, 0);
        }}
      >
        <Button
          className={`btnOverlay w-100 fs-1  ${backgroundColor.replace(
            "bg",
            "border"
          )} ${backgroundColor}`}
          onClick={() => {
            window.scroll(0, 0);
          }}
        >
          {buttonText}
        </Button>
      </Link>
    </div>
  );
};

export default ImageButton;
