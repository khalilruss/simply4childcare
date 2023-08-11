import { Image } from "react-bootstrap";

type AreaProps = {
  type: "prime" | "specific";
  title: string;
  imageSrc: string;
  text: string;
};

const Area = ({ type, title, imageSrc, text }: AreaProps): JSX.Element => {
  const primeAreasStyle = {
    width: "325px",
    height: "250px",
    objectFit: "cover" as "cover",
  };

  const specificAreasStyle = {
    width: "300px",
    height: "200px",
    objectFit: "cover" as "cover",
  };

  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{ width: "20rem" }}
    >
      <h3 style={{ height: "2.5em", overflow: "hidden" }}> {title}</h3>
      <Image
        rounded
        style={type === "prime" ? primeAreasStyle : specificAreasStyle}
        src={imageSrc}
      />
      <p className="fs-5">{text}</p>
    </div>
  );
};

export default Area;
