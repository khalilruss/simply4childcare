import { Container, Image, Card, Button } from "react-bootstrap";
// import childDrawing from "../../assests/child-drawing.jpeg";
import childDrawing from "../../assests/drawing.jpg";

import welcome from "../../assests/welcome.jpg";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useState, MouseEvent } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";
import cn from "classnames";

import "./Home.css";
import ContactForm from "../../components/ContactForm";
// ***REMOVED***
const Home = (): JSX.Element => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "***REMOVED***",
  });

  const [toggleForm, setToggleForm] = useState<boolean>(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1200px)" });

  const center = {
    lat: -3.745,
    lng: -38.523,
  };

  const propagateClick = (event: MouseEvent<HTMLElement>) => {
    (
      (event.target as HTMLButtonElement).children[0] as HTMLLinkElement
    ).click();
  };

  return (
    <>
      <Container
        fluid={!isTabletOrMobile ? false : true}
        className={cn("image-stack ", {
          "vw-90 vh-95": !isTabletOrMobile,
          "vw-100 vh-60 mb-10": isTabletOrMobile,
        })}
      >
        <Image
          rounded
          className={cn({
            "image-stack__item--bottom": !isTabletOrMobile,
            "image-stack__item--bottom_mobile": isTabletOrMobile,
          })}
          src={childDrawing}
        />
        <Card
          className={`d-flex flex-column bg-base  ${
            !isTabletOrMobile
              ? "image-stack__item--top"
              : " image-stack__item--top_mobile"
          }  justify-content-center align-items-center`}
        >
          <Card.Text className="h1 text-light text-center fw-bolder">
            Simply 4 Childcare
          </Card.Text>
          <Card.Text
            className={`${
              !isTabletOrMobile ? "fs-5" : "fs-6"
            } text-light text-center`}
          >
            Providing quality care for your little ones
          </Card.Text>
          <Button
            className="w-50 "
            onClick={(event) => {
              setToggleForm(true);
              propagateClick(event);
            }}
            variant="secondary"
          >
            <Link
              className="text-lg font-medium text-white text-decoration-none"
              activeClass="active"
              type="submit"
              to={"contact-form"}
              smooth={true}
              offset={-40}
              onClick={() => setToggleForm(true)}
            >
              Enquire Now!
            </Link>
          </Button>
        </Card>
      </Container>
      <Container
        fluid
        className={`d-flex  align-content-center text-light bg-base ${
          !isTabletOrMobile ? "mb-6 flex-row" : "mb-4 flex-column"
        }`}
      >
        <div className="align-self-center">
          <Image
            rounded
            className={`${!isTabletOrMobile ? "ms-5 vh-60 vw-40" : "w-100"}`}
            src={welcome}
          />
        </div>
        <div
          className={`align-self-center ${
            !isTabletOrMobile ? "mw-50 ms-4" : ""
          }`}
        >
          <p className="m-0 fs-3">first of all</p>
          <h1>Welcome!</h1>
          <p className="fs-4">
            At Simply 4 Childcare we believe that 'every child is unique and has
            the ability to be resilient, capable, confident and self-assured'.
          </p>
          <p className="fs-4">
            Our aim is to ensure each child’s early education experience is
            positive and meaningful. We provide an environment for children that
            is warm, welcoming, caring and secure where they are able to
            experiment, have fun, take risks, learn from their experiences and
            grow in confidence. The individuality of each child is celebrated
            and valued.
          </p>
        </div>
      </Container>
      <Container fluid className="d-flex flex-column mb-6">
        <h1 className="text-center">Where to find us</h1>
        <Container
          fluid
          className={cn("d-flex flex-row text-light", {
            "vw-65 flex-row": !isTabletOrMobile,
            "h-auto m-0 flex-column-reverse": isTabletOrMobile,
            "vh-60": toggleForm && !isTabletOrMobile,
            "vh-55": !toggleForm && !isTabletOrMobile,
          })}
        >
          <Container
            fluid
            className={cn("bg-base d-flex flex-column w-100 ", {
              "vh-40": isTabletOrMobile && !toggleForm,
              "vh-55": isTabletOrMobile && toggleForm,
            })}
          >
            <TransitionGroup
              id="contact-form"
              component="div"
              className="overflow-hidden"
            >
              <CSSTransition
                key={toggleForm.toString()}
                timeout={750}
                classNames="pageSlider"
                mountOnEnter={false}
                unmountOnExit={true}
              >
                <div className={`${toggleForm ? "left" : "right"}`}>
                  {toggleForm ? (
                    <ContactForm setToggleForm={setToggleForm} />
                  ) : (
                    <div className="d-flex flex-column">
                      <h1 className={`${!isTabletOrMobile ? "fs-1" : "fs-3 "}`}>
                        Contact Details:
                      </h1>
                      <p className={`${!isTabletOrMobile ? "fs-4" : "fs-6"}`}>
                        Email: <br />
                        Contact Number:
                      </p>

                      <h1
                        className={` ${
                          !isTabletOrMobile ? "fs-1 pt-6" : "fs-3"
                        }`}
                      >
                        Opening Hours
                      </h1>
                      <p className={`${!isTabletOrMobile ? "fs-5" : "fs-6"}`}>
                        We are open Monday to Friday 7.30am to 6.30pm <br />
                        51 weeks per year excluding Bank Holidays and INSET days
                        for children aged 3 months to 5 years.
                      </p>
                      <Button
                        className="w-50 align-self-center mt-auto mb-auto"
                        variant="secondary"
                        onClick={() => setToggleForm(true)}
                      >
                        Contact Us
                      </Button>
                    </div>
                  )}
                </div>
              </CSSTransition>
            </TransitionGroup>
          </Container>
          {isLoaded ? (
            <GoogleMap
              mapContainerClassName={`w-100 ${
                !isTabletOrMobile ? (toggleForm ? "vh-60" : "vh-55") : "vh-45"
              } `}
              center={center}
              zoom={15}
            >
              <MarkerF position={center} />
            </GoogleMap>
          ) : (
            <></>
          )}
        </Container>
      </Container>
    </>
  );
};

export default Home;
