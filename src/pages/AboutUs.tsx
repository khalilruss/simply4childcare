import { Container, Image } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

import children from "../assets/About/stock-photo-diverse-children-enjoying-playing-with-toys-1247691913.jpg";
import happyChild from "../assets/About/stock-photo-children-toddlers-girls-play-logical-toy-learning-shapes-arithmetic-and-colors-at-home-644198899.jpg";
import childPlaying from "../assets/About/stock-photo-young-boy-playing-with-educational-toys-1234278556.jpg";
import caringStaff from "../assets/About/stock-photo-female-infant-school-teacher-working-one-on-one-with-a-young-schoolboy-sitting-at-a-table-smiling-1283557810.jpg";

const AboutUs = (): JSX.Element => {
  const isTablet = useMediaQuery({ query: "(max-width: 1000px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <>
      <Container
        fluid
        style={{
          backgroundImage: `url(${children})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className=" d-flex vh-50 justify-content-center align-items-center p-0"
      >
        <div className="d-flex flex-column color-overlay text-light">
          <h1 className=" fw-bolder ">About Us</h1>
          <p className="fs-4 w-0">
            Every day at Simply 4 Childcare is packed with fun-filled learning
            and adventures.
          </p>
        </div>
      </Container>
      <Container
        fluid
        className={`d-flex align-content-center justify-content-evenly text-dark mt-5 ${
          !isTablet ? "mb-5 flex-row vh-60" : "mb-4 flex-column-reverse"
        }`}
      >
        <div
          className={`align-self-center ms-5 ${
            !isTabletOrMobile ? "mw-40" : ""
          }`}
        >
          <p className="fs-3">
            Our rooms and resources have the Early Years Foundation Stage (EYFS)
            completely covered. Children can relax with a book; get busy with
            construction toys or role-playing props; get creative with musical
            instruments, art and craft materials or learn in our maths areas and
            explore the garden. Our range of resources embrace the needs of a
            wide variety of abilities and cultures, giving our children the
            chance to learn about the different backgrounds of their new
            friends.
          </p>
        </div>
        <div className="image-stack align-self-center w-35">
          <div className=" image-stack__item--bottom-right bg-base" />
          <Image
            // roundedCircle
            className="image-stack__item--top-left bg-white"
            // className="vw-30 vh-50"
            // className={cn({
            //   "mw-95 ms-5 vh-60 ": !isTablet && !isMobile && !isSmallDesktop,
            //   "vh-50": isSmallDesktop,
            //   "w-100 pt-2": isTablet || isMobile,
            // })}
            src={childPlaying}
          />
        </div>
      </Container>
      <Container
        fluid
        className={`d-flex align-content-center justify-content-evenly text-light mt-5 bg-base styled-div-left ${
          !isTablet ? "mb-5 flex-row vh-60" : "mb-4 flex-column"
        }`}
      >
        <div className="image-stack align-self-center w-35">
          <div className=" image-stack__item--bottom-left bg-white" />
          <Image
            // roundedCircle
            className="image-stack__item--top-right bg-white"
            // className="vw-30 vh-50"
            // className={cn({
            //   "mw-95 ms-5 vh-60 ": !isTablet && !isMobile && !isSmallDesktop,
            //   "vh-50": isSmallDesktop,
            //   "w-100 pt-2": isTablet || isMobile,
            // })}
            src={happyChild}
          />
        </div>
        <div
          className={`align-self-center ms-5 ${
            !isTabletOrMobile ? "mw-40" : ""
          }`}
        >
          <h2>Independent, happy children</h2>
          <p className="fs-3">
            We want our children to learn, play and explore indoors and out; and
            of course, have lots of fun; this way, a thirst for learning stays
            with them for life.
          </p>
          <p className="fs-3">
            At Simply 4 childcare, we encourage independence by letting our
            children choose what they want to play with throughout most of the
            day. This helps them to become confident at making choices as they
            grow. The amazing staff also plan special adult led activities to
            extend each child’s learning even further.
          </p>
        </div>
      </Container>
      <Container
        fluid
        className={`d-flex align-content-center justify-content-evenly text-dark mt-5 ${
          !isTablet ? "mb-5 flex-row vh-60" : "mb-4 flex-column-reverse"
        }`}
      >
        <div
          className={`align-self-center ms-5 ${
            !isTabletOrMobile ? "mw-40" : ""
          }`}
        >
          <h2>Professional, caring staff</h2>
          <p className="fs-3">
            Consistency is important for children, so our small team follow a
            daily routine that is displayed and shared with parents. Our staff
            are fully qualified to work with children, or have many years’
            experience within the sector. We also attend regular training
            sessions, delivered in-house or by outside trainers, to energize us
            and keep our ideas, knowledge and skills fresh.
          </p>
          <p className="fs-3">
            We strive to act as excellent role models, ensuring that everyone
            has fun, but also learns to listen to and respect each other.
          </p>
        </div>

        <div className="image-stack align-self-center w-35">
          <div className=" image-stack__item--bottom-right bg-base" />
          <Image
            // roundedCircle
            className="image-stack__item--top-left"
            // className="vw-30 vh-50"
            // className={cn({
            //   "mw-95 ms-5 vh-60 ": !isTablet && !isMobile && !isSmallDesktop,
            //   "vh-50": isSmallDesktop,
            //   "w-100 pt-2": isTablet || isMobile,
            // })}
            src={caringStaff}
          />
        </div>
      </Container>
    </>
  );
};

export default AboutUs;
