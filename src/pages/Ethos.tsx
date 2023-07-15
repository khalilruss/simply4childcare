import { Container, Image } from "react-bootstrap";
import rainbow from "../assets/Ethos/stock-photo-close-up-photo-of-child-s-hands-touch-painting-rainbow-on-window-family-life-background-image-of-1694662114.jpg";
import thinking from "../assets/Ethos/stock-photo-successful-black-child-student-pointing-at-lightbulb-brainstorming-and-idea-concept-1759350455.jpg";
import quality from "../assets/Ethos/learning-day-care-center-icon.jpg";
import relationship from "../assets/Ethos/stock-photo-beautiful-mom-and-daughter-drawing-on-the-floor-75683242.jpg";
import { useMediaQuery } from "react-responsive";

const Ethos = (): JSX.Element => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <>
      <Container
        fluid
        style={{
          backgroundImage: `url(${rainbow})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className=" d-flex vh-50 justify-content-center align-items-center p-0"
      >
        <div className="color-overlay">
          <h1 className="text-light fw-bolder">Our Ethos</h1>
        </div>
      </Container>
      <Container
        fluid
        className={`d-flex justify-content-center mt-5 mb-5 text-dark  ${
          !isTabletOrMobile ? " flex-row vh-50" : " flex-column"
        } `}
      >
        {/* <div className="d-flex justify-content-center "> */}
        <div className="image-stack w-40 align-self-center">
          <div className=" image-stack__item--bottom-left bg-base" />
          <Image
            // roundedCircle
            className="image-stack__item--top-right"
            // className={` image-stack__item--top m-auto vh-40 ${
            //   !isTabletOrMobile ? " vw-40" : " mw-75"
            // }`}
            src={thinking}
          />
        </div>
        {/* </div> */}
        <div
          className={`align-self-center ms-5 ${
            !isTabletOrMobile ? "mw-40" : ""
          }`}
        >
          <p className={`${!isTabletOrMobile ? "fs-3" : "fs-3"} bg-white`}>
            Simply 4 Childcare pioneer a forward-thinking approach each and
            every day. We will achieve this by making significant investments in
            our learning and development by ensuring ongoing training and
            professional development.
          </p>
        </div>
      </Container>
      <Container
        fluid
        className={`d-flex flex-row justify-content-center mt-8 mb-8 text-white styled-div-left bg-base ${
          !isTabletOrMobile ? " flex-row vh-70" : "flex-column-reverse"
        } `}
      >
        <div
          className={`align-self-center me-5 ${
            !isTabletOrMobile ? "mw-40" : ""
          }`}
        >
          <p className="fs-3">
            Simply 4 Childcare are dedicated to delivering high quality practice
            and leadership. We work hard each day to build excellent
            relationships with each other, the children and their parents. Our
            environment is calm and nurturing. The children’s happiness is our
            always number one priority. Our home-from-home atmosphere enables
            the children to develop a sense of security and allows them to excel
            in all areas of their development.
          </p>
        </div>
        {/* <div className="d-flex justify-content-center"> */}
        <div className="image-stack w-40 align-self-center">
          <div className=" image-stack__item--bottom-right bg-white" />
          <Image
            // roundedCircle
            className="image-stack__item--top-left"
            // className={`m-auto vh-45 ${
            //   !isTabletOrMobile ? " w-100 " : " mw-65"
            // }`}
            src={relationship}
          />
        </div>
        {/* </div> */}
      </Container>
      <Container
        fluid
        className={`d-flex flex-row justify-content-center mt-5 mb-13 text-dark  ${
          !isTabletOrMobile ? " flex-row vh-40" : " flex-column"
        } `}
      >
        {/* <div className="d-flex justify-content-center"> */}
        <div className="image-stack w-35 align-self-center">
          <div className=" image-stack__item--bottom-left bg-base" />
          <Image
            // roundedCircle
            className="image-stack__item--top-right bg-white"
            // className={`m-auto vh-40 ${
            //   !isTabletOrMobile ? " vw-30" : " mw-90"
            // }`}
            src={quality}
          />
        </div>
        {/* </div> */}
        <div
          className={`align-self-center ms-5 ${
            !isTabletOrMobile ? "mw-40" : ""
          }`}
        >
          <p className="fs-3 bg-white">
            Simply 4 Childcare pride ourselves in paying close attention to what
            children tell us and show us. By doing this, we are able to gain
            important insights into the minds and to the development of each
            child. Focusing a child’s strengths, passions and interests, as they
            emerge, enables us to provide a stimulating environment and plan
            appropriate activities in order to promote their learning and
            development.
          </p>
        </div>
      </Container>
    </>
  );
};

export default Ethos;
