import { Container } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import environment from "../assets/Environment/stock-photo-world-environment-day-concept-a-mother-s-hand-embrace-her-little-daughter-s-hands-child-hand-s-1999540577.jpg";
import MediaCarousel from "../components/MediaCarousel/MediaCarousel";

const room1 = require.context("../assets/Environment/Room1", true);
const room1Media = room1.keys().map((media) => room1(media));

const room2 = require.context("../assets/Environment/Room2", true);
const room2Media = room2.keys().map((media) => room2(media));

const garden = require.context("../assets/Environment/Garden", true);
const gardenMedia = garden.keys().map((media) => garden(media));

const Environment = (): JSX.Element => {
  const isTablet = useMediaQuery({ query: "(max-width: 1000px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  console.log(typeof room1Media[1]);
  return (
    <>
      <Container
        fluid
        style={{
          backgroundImage: `url(${environment})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className=" d-flex vh-50 justify-content-center align-items-center p-0"
      >
        <div className="color-overlay">
          <h1 className="text-light fw-bolder">Our Environment</h1>
        </div>
      </Container>
      <Container
        className={`d-flex align-content-center justify-content-between text-dark mt-5 ${
          !isTablet ? "mb-10 flex-row vh-60" : "mb-4 flex-column"
        }`}
      >
        <div className="mw-40 align-self-center">
          <h1>Room 1</h1>
          <p className="fs-3">Description</p>
        </div>
        <div className="vh-50">
          <MediaCarousel itemWidth={650} media={room1Media} />
        </div>
      </Container>
      <Container
        fluid
        className={`d-flex flex-row justify-content-between mt-4 mb-8 text-white styled-div-left bg-base ${
          !isTabletOrMobile ? " flex-row vh-75" : "flex-column-reverse"
        } `}
      >
        <Container
          className={`d-flex align-content-center justify-content-between text-white${
            !isTablet ? "flex-row" : "mb-4 flex-column"
          }`}
        >
          <div className="vh-40 d-flex align-self-center">
            <MediaCarousel
              itemWidth={650}
              carouselClassNames="align-self-center"
              media={room2Media}
            />
          </div>
          <div className="mw-40 align-self-center">
            <h1>Room 2</h1>
            <p className="fs-3">Description</p>
          </div>
        </Container>
      </Container>
      <Container
        className={`d-flex justify-content-between text-dark mt-5 ${
          !isTablet ? "mb-12 flex-row vh-60" : "mb-4 flex-column"
        }`}
      >
        <div className="mw-40 align-self-center">
          <h1>Garden</h1>
          <p className="fs-3">Description</p>
        </div>
        <div>
          <MediaCarousel
            itemWidth={650}
            imageClassNames="img"
            media={gardenMedia}
          />
        </div>
      </Container>
    </>
  );
};

export default Environment;
