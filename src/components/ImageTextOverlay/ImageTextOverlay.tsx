import { Container } from "react-bootstrap";
import "./ImageTextOverlay.css";

type ImageOverlayProps = {
  content: JSX.Element;
  imageSrc: string;
};

const ImageOverlay = ({
  content,
  imageSrc,
}: ImageOverlayProps): JSX.Element => {
  return (
    <Container
      fluid
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className=" d-flex vh-50 justify-content-center align-items-center p-0"
    >
      <div className="d-flex flex-column color-overlay text-light">
        {content}
      </div>
    </Container>
  );
};

export default ImageOverlay;
