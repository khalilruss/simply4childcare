import { Container, Image } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import handshake from "../assets/Parents/stock-photo-japanese-parent-and-child-holding-hands-in-the-living-room-2325395553.jpg";
import parents from "../assets/Parents/stock-photo-diverse-children-enjoying-playing-with-toys-1243109917.jpg";
import atHome from "../assets/Parents/stock-photo-family-spend-time-happiness-holiday-togetherness-559207186.jpg";

const Parents = (): JSX.Element => {
  const isTablet = useMediaQuery({ query: "(max-width: 1000px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <>
      <Container
        fluid
        style={{
          backgroundImage: `url(${handshake})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className=" d-flex vh-50 justify-content-center align-items-center p-0"
      >
        <div className="color-overlay">
          <h1 className="text-light fw-bolder">Parents as Partners</h1>
        </div>
      </Container>
      <Container className="pt-5">
        <h2>Closures</h2>
        <p className="fs-4">
          Please note that we are closed on Public/Bank Holidays and INSET days.
          You will still be charged for these days. If we are closed between
          Christmas and New Year, you will not be charged for this period.
        </p>
        <h2>Policies</h2>
        <p className="fs-4">
          We have a range of policies and procedures that are given to all
          parents when they join us. They are also on display around the setting
          for parents, carers and staff to read at any time. Our policies and
          procedures are used as a training tool as well as new staff/student
          inductions. They are also explained to parents at
          registration/settling in visits.
        </p>
      </Container>
      <Container
        fluid
        className={`d-flex align-content-center justify-content-evenly text-white mt-5 bg-base styled-div-right ${
          !isTablet ? "mb-5 flex-row vh-60" : "mb-4 flex-column-reverse"
        }`}
      >
        <div className="image-stack align-self-center w-35">
          <div className=" image-stack__item--bottom-left bg-white" />
          <Image
            // roundedCircle
            className="image-stack__item--top-right"
            // className="vw-30 vh-50"
            // className={cn({
            //   "mw-95 ms-5 vh-60 ": !isTablet && !isMobile && !isSmallDesktop,
            //   "vh-50": isSmallDesktop,
            //   "w-100 pt-2": isTablet || isMobile,
            // })}
            src={atHome}
          />
        </div>
        <div
          className={`align-self-center ms-5 ${
            !isTabletOrMobile ? "mw-40" : ""
          }`}
        >
          <h2>Easy activities to do at home with your child</h2>
          <p className="fs-4">Reading at home (Simply Reading)</p>
          <p className="fs-4">Maths at home (Simply Maths) </p>
          <p className="fs-4">
            Sports, music and dance at home (Simply movement){" "}
          </p>
          <p className="fs-4">Healthy eating (Simply nutrition/recipes) </p>
          <p className="fs-4">Outdoor learning (Simply outdoors) </p>
          <p className="fs-4">Arts and crafts at home (Simply creative)</p>
        </div>
      </Container>

      <Container>
        <h2>Communication</h2>
        <p className="fs-4">
          As well as daily verbal feedback we use an online daily diary to help
          you keep in touch with your child’s day wherever you are. As parents,
          the first day of handing over your child to the care of another can be
          an emotional time. As your child adjusts to experiences without you we
          will continue to share key moments. Our online daily diary facilitates
          this by enabling a personal photo journal, or diary, to build over
          time. Photographs, videos and notes of special moments are not only
          recorded, but can be made available to you. Whether you use iOS or
          Android, we will use an app that will enable you to receive new
          entries in your child’s journal celebrating their achievements and
          exciting activities, individually or with their new friends and the
          staff looking after them. As parents you can contribute to this
          growing journal by commenting on the journal entries, or even adding
          your own. You can let us teachers know what your child loves doing at
          home by sending photos and videos back, helping them understand their
          development at home. Your child’s other relatives can also be set up
          with access to the Tapestry profile so you can all share the
          excitement of the growth of your child.
        </p>
      </Container>
      <Container
        fluid
        className={`d-flex align-content-center justify-content-evenly text-white mt-5 bg-base styled-div-left ${
          !isTablet ? "mb-5 flex-row vh-60" : "mb-4 flex-column-reverse"
        }`}
      >
        <div
          className={`align-self-center ms-5 ${
            !isTabletOrMobile ? "mw-40" : ""
          }`}
        >
          <h2>Parent carer workshops</h2>
          <p className="fs-4">Potty training</p>
          <p className="fs-4">Biting </p>
          <p className="fs-4">New siblings </p>
          <p className="fs-4">Establishing routines </p>
          <p className="fs-4">Understanding child development </p>
          <p className="fs-4"> School reediness </p>
          <p className="fs-4">
            Early Literacy, numeracy and introduction to phonics{" "}
          </p>
          <p className="fs-4">Dealing with unwanted behaviour </p>
          <p className="fs-4">Understanding the EYFS curriculum </p>
        </div>

        <div className="image-stack align-self-center w-35">
          <div className=" image-stack__item--bottom-right bg-white" />
          <Image
            // roundedCircle
            className="image-stack__item--top-left"
            // className="vw-30 vh-50"
            // className={cn({
            //   "mw-95 ms-5 vh-60 ": !isTablet && !isMobile && !isSmallDesktop,
            //   "vh-50": isSmallDesktop,
            //   "w-100 pt-2": isTablet || isMobile,
            // })}
            src={parents}
          />
        </div>
      </Container>
    </>
  );
};

export default Parents;
