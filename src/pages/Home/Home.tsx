import { Container, Image, Card, Button } from "react-bootstrap";
import childDrawing from "../../assets/Home/stock-photo-kids-drawing-on-floor-on-paper-preschool-boy-and-girl-play-on-floor-with-educational-toys-blocks-1009485583.jpg";
import handsTogether from "../../assets/hands-together.png";
import woodenBlocks from "../../assets/Home/wooden-blocks.jpg";
import playground from "../../assets/Home/playground.jpg";

import welcome from "../../assets/Home/welcome.jpg";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useState, MouseEvent } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";
import cn from "classnames";
import ImageButton from "../../components/ImageButton/ImageButton";

import "./Home.css";
import ContactForm from "../../components/ContactForm";
// ***REMOVED***
const Home = (): JSX.Element => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "***REMOVED***",
  });

  const [toggleForm, setToggleForm] = useState<boolean>(false);
  const isTablet = useMediaQuery({ query: "(max-width: 1000px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  const isSmallDesktop = useMediaQuery({ query: "(max-width: 1200px)" });

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
    <div className="d-flex flex-column align-items-center">
      <div
        className={cn("home-stack", {
          "minw-80 mw-80 mt-5": !isMobile && !isTablet,
          "mw-90 minw-90 mt-5": (isTablet || isSmallDesktop) && !isMobile,
          "mb-6": !isMobile && !isTablet,
          "mb-12": isTablet,
          "vw-100 mt-5 mb-9": isMobile && isTablet,
        })}
      >
        <Image
          rounded
          className={cn({
            "home-stack__item--bottom": !isMobile && !isTablet,
            "home-stack__item--bottom_tablet": isTablet,
            "home-stack__item--bottom_mobile": isMobile,
          })}
          src={childDrawing}
        />
        <Card
          className={cn(
            "d-flex flex-column bg-base justify-content-center align-items-center",
            {
              "home-stack__item--top": !isMobile && !isTablet,
              "home-stack__item--top_tablet": isTablet,
              " home-stack__item--top_mobile": isMobile,
            }
          )}
        >
          <Card.Text className="h1 text-light text-center fw-bolder">
            Simply 4 Childcare
          </Card.Text>
          <Card.Text
            className={`${!isMobile ? "fs-5" : "fs-6"} text-light text-center`}
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
      </div>
      <Container
        fluid
        className={`d-flex align-content-center text-light bg-base styled-div-left ${
          !isTablet ? "mb-6 flex-row" : "mb-4 flex-column"
        }`}
      >
        <div className="d-flex align-self-center justify-content-center">
          <Image
            roundedCircle
            className={cn({
              "ms-5 vh-60 ": !isTablet && !isMobile && !isSmallDesktop,
              "vh-50": isSmallDesktop,
              "w-100 pt-2": isTablet || isMobile,
            })}
            src={welcome}
          />
        </div>
        <div
          className={cn("align-self-center", {
            "mw-50 ms-4": !isTablet && !isMobile && !isSmallDesktop,
          })}
        >
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
        <h1 className="text-center"> Find Out More</h1>
        <Container
          fluid
          className={cn("d-flex w-100", {
            "flex-row justify-content-evenly": !isSmallDesktop,
            "flex-column vh-100 justify-content-evenly align-items-center":
              isSmallDesktop,
          })}
        >
          <ImageButton image={handsTogether} buttonText="Our Ethos" />
          <ImageButton image={woodenBlocks} buttonText="Our Approach" />
          <ImageButton image={playground} buttonText="Our Environment" />
        </Container>
      </Container>
      <Container fluid className="d-flex flex-column mb-6">
        <h1 className="text-center">Where to find us</h1>
        <Container
          fluid
          className={cn("d-flex flex-row text-light align-self-center", {
            "vw-65 flex-row": !isSmallDesktop,
            "h-auto m-0 flex-column-reverse": isSmallDesktop,
            "vh-60": toggleForm && !isSmallDesktop,
            "vh-55": !toggleForm && !isSmallDesktop,
            "vw-55": isSmallDesktop && !isMobile,
          })}
        >
          <Container
            fluid
            className={cn("bg-base d-flex flex-column w-100 ", {
              "vh-40": isSmallDesktop && !toggleForm,
              "vh-55": isSmallDesktop && toggleForm,
              "rounded-bottom-5": isSmallDesktop,
              "rounded-start-5": !isSmallDesktop,
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
                classNames="contactSlider"
                mountOnEnter={false}
                unmountOnExit={true}
              >
                <div className={`${toggleForm ? "left" : "right"}`}>
                  {toggleForm ? (
                    <ContactForm setToggleForm={setToggleForm} />
                  ) : (
                    <div className="d-flex flex-column">
                      <h1 className={`${!isSmallDesktop ? "fs-1" : "fs-3 "}`}>
                        Contact Details:
                      </h1>
                      <p className={`${!isSmallDesktop ? "fs-4" : "fs-6"}`}>
                        Email: <br />
                        Contact Number:
                      </p>

                      <h1
                        className={` ${!isSmallDesktop ? "fs-1 pt-6" : "fs-3"}`}
                      >
                        Opening Hours
                      </h1>
                      <p className={`${!isSmallDesktop ? "fs-5" : "fs-6"}`}>
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
              mapContainerClassName={cn("w-100", {
                "rounded-top-5": isSmallDesktop,
                "rounded-end-5": !isSmallDesktop,
                "vh-60": toggleForm,
                "vh-55": !toggleForm,
                "vh-45": isSmallDesktop,
              })}
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
    </div>
  );
};

export default Home;
