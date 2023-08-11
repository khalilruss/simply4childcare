import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
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
  return (
    <div
      className="container mb-4 rounded"
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
