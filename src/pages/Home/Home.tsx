import { Container, Card, Button } from "react-bootstrap";
import childDrawing from "../../assets/Home/stock-photo-kids-drawing-on-floor-on-paper-preschool-boy-and-girl-play-on-floor-with-educational-toys-blocks-1009485583.jpg";
import handsTogether from "../../assets/Home/stock-photo-diverse-classmates-holding-arms-on-campus-309237581.jpg";
import woodenBlocks from "../../assets/Home/wooden-blocks.jpg";
import playground from "../../assets/Home/playground.jpg";
import smileyHands from "../../assets/Home/stock-photo-nursery-children-playing-with-teacher-in-the-classroom-1240454104.jpg";
import welcome from "../../assets/Home/stock-photo--the-very-best-of-friends-children-in-preschool-1418714162.jpg";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import { motion, AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";

import { useState, MouseEvent, useRef, useEffect } from "react";
import { Link } from "react-scroll";
import cn from "classnames";
import ImageButton, {
  ImageButtonProps,
} from "../../components/ImageButton/ImageButton";
import { useScreenSize } from "../../screenSizeContext/ScreenSizeContext";

import "./Home.css";
import ContactForm from "../../components/ContactForm";
import Section from "../../components/Section/Section";
import {
  MotionCard,
  MotionContainer,
  MotionImage,
  easeIn,
  easeInXVariants,
  easeInYVariants,
} from "../../components/MotionComponents";

const Home = (): JSX.Element => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`,
  });
  const center = {
    lat: 51.45433,
    lng: -0.12201,
  };

  const [toggleForm, setToggleForm] = useState<boolean>(false);

  const contentRef = useRef<HTMLInputElement>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);
  useEffect(() => {
    if (contentRef.current) {
      const observer = new ResizeObserver((entries) => {
        for (let entry of entries) {
          setContentHeight(entry.target.scrollHeight);
        }
      });

      observer.observe(contentRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  const {
    isXXs,
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,
    isXXl,
    isTablet,
    isMobile,
    isSmallScreen,
  } = useScreenSize();

  const propagateClick = (event: MouseEvent<HTMLElement>) => {
    (
      (event.target as HTMLButtonElement).children[0] as HTMLLinkElement
    ).click();
  };

  const imageButtons: ImageButtonProps[] = [
    {
      imageSrc: smileyHands,
      backgroundColor: "bg-light-pink",
      buttonText: "About Us",
    },
    {
      imageSrc: handsTogether,
      backgroundColor: "bg-yellow",
      buttonText: "Our Ethos",
    },
    {
      imageSrc: woodenBlocks,
      backgroundColor: "bg-light-green",
      buttonText: "Our Approach",
    },
    {
      imageSrc: playground,
      backgroundColor: "bg-turquoise",
      buttonText: "Our Environment",
    },
  ];
  const renderImageButtons = () => {
    return imageButtons.map((item, index) => {
      return (
        <motion.div
          key={index}
          variants={{
            hidden: {
              opacity: 0,
              x: -20,
            },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                ease: "easeInOut",
              },
            },
          }}
        >
          <ImageButton
            imageSrc={item.imageSrc}
            backgroundColor={item.backgroundColor}
            buttonText={item.buttonText}
          />
        </motion.div>
      );
    });
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <div
        className={cn("home-stack mt-5", {
          "minw-80 mw-80": isXXl || isXl,
          "mw-90 minw-90 ": isLg || isMd,
          "vw-100 ": isSm || isXs || isXXs,
          "mb-8": isXs,
          "mb-9": isSm || isMd,
          "mb-10": isXXs,
        })}
      >
        <MotionImage
          rounded
          className={cn({
            "home-stack-bottom-item": isXXl || isXl || isLg,
            "home-stack-bottom-item-mobile": isMd || isSm || isXs || isXXs,
          })}
          src={childDrawing}
          initial="hidden"
          whileInView="visible"
          transition={easeIn}
          viewport={{ once: true }}
          variants={easeInYVariants}
          custom={20}
        />
        <MotionCard
          className={cn(
            "d-flex flex-column bg-base justify-content-center align-items-center",
            {
              "home-stack-top-item": isXXl || isXl || isLg,
              "home-stack-top-item-mobile": isMd || isSm || isXs || isXXs,
              "top-45 h-60": isMd || isSm || isXs,
              "top-60 h-90": isXXs,
            }
          )}
          initial="hidden"
          whileInView="visible"
          transition={easeIn}
          viewport={{ once: true }}
          variants={easeInYVariants}
          custom={20}
        >
          <Card.Text className="text-light text-center">
            <h1
              className={`${
                !(isSm || isXs || isXXs) ? "fs-1" : "m-0"
              } fw-bolder`}
            >
              Welcome to Lorene's House
            </h1>
            <span className={`${!(isSm || isXs || isXXs) ? "fs-3" : "fs-6"}`}>
              (Part of the Simply 4 Group)
            </span>
          </Card.Text>
          <Card.Text
            className={`${
              !(isSm || isXs || isXXs) ? "fs-5 mt-2 " : "fs-6"
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
              onClick={() => setToggleForm(true)}
            >
              Enquire Now!
            </Link>
          </Button>
        </MotionCard>
      </div>
      <Section
        content={
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={easeIn}
            viewport={{ once: true }}
            variants={easeInXVariants}
            custom={50}
          >
            <h1>Welcome!</h1>
            <p className="fs-4">
              At Simply 4 Childcare we believe that 'every child is unique and
              has the ability to be resilient, capable, confident and
              self-assured'.
            </p>
            <p className="fs-4">
              Our aim is to ensure each child’s early education experience is
              positive and meaningful. We provide an environment for children
              that is warm, welcoming, caring and secure where they are able to
              experiment, have fun, take risks, learn from their experiences and
              grow in confidence. The individuality of each child is celebrated
              and valued.
            </p>
          </motion.div>
        }
        imageSrc={welcome}
        background={true}
        backgroundColor="bg-light-green"
        imageStacked={false}
        imagePosition="left"
        curveDirection="left"
      />
      <Container
        fluid
        className={cn("d-flex flex-column mb-6", {
          "mt-3": !isMobile && !isTablet,
          "mt-6": isTablet && !isMobile,
        })}
      >
        <h1 className="bg-white w-auto align-self-center display-5 mt-3 fw-normal">
          Find Out More
        </h1>
        <MotionContainer
          variants={{
            visible: {
              transition: {
                delay: 1,
                staggerChildren: 0.3,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          fluid
          className={"d-flex w-100 flex-wrap flex-row justify-content-evenly"}
        >
          {renderImageButtons()}
        </MotionContainer>
      </Container>
      <Container fluid className="d-flex flex-column mb-6">
        <h1 className="bg-white w-auto align-self-center display-5 fw-normal">
          Where to find us
        </h1>
        <MotionContainer
          fluid
          className={cn("d-flex text-light align-self-center", {
            "flex-row": isXXl || isXl,
            "h-auto m-0 flex-column-reverse":
              isLg || isMd || isSm || isXs || isXXs,
            "vw-65": isXXl,
            "vw-70 ": isXl || isSm || isXs,
            "vw-55": isLg || isMd,
            "vw-95": isXXs,
          })}
          initial="hidden"
          whileInView="visible"
          transition={easeIn}
          viewport={{ once: true }}
          variants={easeInYVariants}
          custom={50}
        >
          <Container
            fluid
            className={cn("bg-light-pink d-flex flex-column w-100 h-auto", {
              "rounded-bottom-5": isSmallScreen,
              "rounded-start-5": !isSmallScreen,
            })}
          >
            <div
              id="contact-form"
              ref={contentRef}
              className="overflow-hidden h-auto"
            >
              <AnimatePresence mode="wait" initial={false}>
                {toggleForm ? (
                  <motion.div
                    key="form"
                    className="content left"
                    initial={{ opacity: 0, x: "-100%" }}
                    animate={{ opacity: 1, x: "0%" }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0 },
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <ContactForm setToggleForm={setToggleForm} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="text"
                    className="content right"
                    initial={{ opacity: 0, x: "-100%" }}
                    animate={{ opacity: 1, x: "0%" }}
                    exit={{ opacity: 0, transition: { duration: 0 } }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <div className="d-flex flex-column">
                      <h1
                        className={`mt-5 ${!isSmallScreen ? "fs-1" : "fs-3 "}`}
                      >
                        Contact Details:
                      </h1>
                      <p className={`${!isSmallScreen ? "fs-5" : "fs-6"}`}>
                        Email: janice.copeland@simply4group.co.uk <br />
                        Contact Number: 07305811142
                      </p>

                      <h1
                        className={` ${!isSmallScreen ? "fs-1 pt-6" : "fs-3"}`}
                      >
                        Opening Hours
                      </h1>
                      <p className={`${!isSmallScreen ? "fs-5" : "fs-6"}`}>
                        We are open Monday to Friday 7.30am to 6.30pm <br />
                        51 weeks per year excluding Bank Holidays and INSET days
                        for children aged 3 months to 5 years.
                      </p>
                      <Button
                        className="w-50 align-self-center mb-5"
                        variant="secondary"
                        onClick={() => setToggleForm(true)}
                      >
                        Contact Us
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Container>
          {isLoaded ? (
            <GoogleMap
              mapContainerClassName={cn("w-100", {
                "rounded-top-5": isSmallScreen,
                "rounded-end-5": !isSmallScreen,
              })}
              center={center}
              zoom={15}
              mapContainerStyle={{ height: contentHeight }}
            >
              <MarkerF position={center} />
            </GoogleMap>
          ) : (
            <></>
          )}
        </MotionContainer>
        <ToastContainer limit={1} />
      </Container>
    </div>
  );
};

export default Home;
