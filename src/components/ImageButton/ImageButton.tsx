import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useMediaQuery } from "react-responsive";
import cn from "classnames";

import "./ImageButton.css";
type ImageButtonProps = {
  image: string;
  buttonText: string;
};

const toURL = (str: string): string => {
  const words = str.split(" ");
  return words
    .map((word) => {
      return word[0].toLowerCase() + word.substring(1);
    })
    .join("-");
};

const ImageButton = ({ image, buttonText }: ImageButtonProps): JSX.Element => {
  const isSmallDesktop = useMediaQuery({ query: "(max-width: 1200px)" });
  const isSmallTablet = useMediaQuery({ query: "(max-width: 900px)" });

  return (
    <div
      className={cn("container p-0 m-0 rounded", {
        "mw-25 vh-40": !isSmallDesktop && !isSmallTablet,
        "mw-40 vh-30": isSmallDesktop,
        "mw-60 vh-30": isSmallTablet,
      })}
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Link
        to={`about/${toURL(buttonText)}`}
        onClick={() => {
          window.scroll(0, 0);
        }}
      >
        <Button
          className="btnOverlay w-100 fs-1 bg-base "
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
