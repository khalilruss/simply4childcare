import { Container } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import environment from "../assets/Environment/stock-photo-world-environment-day-concept-a-mother-s-hand-embrace-her-little-daughter-s-hands-child-hand-s-1999540577.jpg";
import MediaCarousel from "../components/MediaCarousel/MediaCarousel";
import ImageOverlay from "../components/ImageTextOverlay/ImageTextOverlay";
import cn from "classnames";
import { useScreenSize } from "../screenSizeContext/ScreenSizeContext";

const room1 = require.context("../assets/Environment/Room1", true);
const room1Media = room1.keys().map((media) => room1(media));

const room2 = require.context("../assets/Environment/Room2", true);
const room2Media = room2.keys().map((media) => room2(media));

const garden = require.context("../assets/Environment/Garden", true);
const gardenMedia = garden.keys().map((media) => garden(media));

const Environment = (): JSX.Element => {
  const { isXs, isSm, isMd, isLg, isTablet } = useScreenSize();

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <>
      <ImageOverlay
        imageSrc={environment}
        content={
          <h1 className="text-light fw-bolder" style={{ fontSize: "5rem" }}>
            Our Environment
          </h1>
        }
      />
      <Container
        fluid
        className={`d-flex align-content-center justify-content-evenly text-dark mt-5 ${
          !isTablet ? "mb-10 flex-row vh-60" : "mb-4 flex-column"
        }`}
      >
        <div
          className={cn("align-self-center bg-white", {
            "mw-40": !isTablet,
            "mb-4": isTablet,
          })}
        >
          <h1>Room 1</h1>
          <p className="fs-3">
            In our baby room, babies from 3 months to 18 months will experience
            a loving transition from home to nursery life. We follow your little
            one’s individual routine from home and babies enjoy a cosy and
            stimulating room with a sleeping area.
          </p>
        </div>
        <div
          className={cn("align-self-center", {
            // || isSm || isMd
            "vw-100": isXs,
            "w-90": isSm,
            "w-80": isMd || isLg,
            "mw-45": !isTablet,
          })}
          // className="mw-40 h-100 align-self-center"
        >
          <MediaCarousel itemWidth={650} media={room1Media} />
        </div>
      </Container>
      <Container
        fluid
        className={`d-flex flex-row justify-content-between mt-4 text-white curved-section-left bg-base ${
          !isTabletOrMobile ? " flex-row vh-75" : "flex-column-reverse"
        } `}
      >
        <Container
          fluid
          className={`d-flex align-content-center justify-content-evenly text-white ${
            !isTablet ? "flex-row" : "mb-4 flex-column-reverse"
          }`}
        >
          <div
            className={cn("align-self-center", {
              "vw-100": isXs,
              "w-90": isSm,
              "w-80": isMd || isLg,
              "mw-45": !isTablet,
            })}
            // className="mw-40 h-85 align-self-center"
          >
            <MediaCarousel itemWidth={650} media={room2Media} />
          </div>
          <div
            className={cn("align-self-center", {
              "mw-40": !isTablet,
              "mb-4": isTablet,
            })}
          >
            <h1>Room 2</h1>
            <p className="fs-3">
              Toddlers is an active room for children from 18 months and older.
              This room has lots of different discovery areas, with furniture
              and resources to support their development with a large variety of
              exciting activities based on the children’s interests. The room
              has its own toilet area to support your child to begin to potty
              train.{" "}
            </p>
          </div>
        </Container>
      </Container>
      <Container
        fluid
        className={`d-flex justify-content-evenly text-dark mt-7 ${
          !isTablet ? "mb-8 flex-row vh-60" : "mb-4 flex-column"
        }`}
      >
        <div
          className={cn("align-self-center bg-white", {
            "mw-40": !isTablet,
            "mb-4": isTablet,
          })}
        >
          <h1>Garden</h1>
          <p className="fs-3">
            Your child will love spending time in our garden area, which is full
            of exciting resources and activities. Preschoolers will enjoy
            free-flow access, giving them the opportunity to choose indoor or
            outdoor play. We have created a shelter to provide shade in the
            summer, and the planting area is perfect for mini gardeners. We are
            also situated adjacent to Windmill Park (part of Ashby’s Mill grade
            11 listed mill) which, contains a large grass play area, outdoor
            seating area and climbing frames.
          </p>
        </div>
        <div
          className={cn("align-self-center", {
            "vw-100": isXs,
            "w-90": isSm,
            "w-80": isMd || isLg,
            "mw-45": !isTablet,
          })}
          // className="mw-40 h-100 align-self-center"
        >
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
