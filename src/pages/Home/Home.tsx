import { Container, Image, Card, Button } from "react-bootstrap";
import childDrawing from "../../assests/child-drawing.jpeg";
import welcome from "../../assests/welcome.jpg";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
// import ReactCSSTransitionReplace from "react-css-transition-replace";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useState } from "react";

import "./Home.css";
import ContactForm from "../../components/ContactForm";
// ***REMOVED***
const Home = (): JSX.Element => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "***REMOVED***",
  });

  const [toggleForm, setToggleForm] = useState<boolean>(false);

  // const map2 = useGoogleMap()
  // const [map, setMap] = useState<google.maps.Map | null>(null);

  // const onLoad = useCallback(function callback(map: google.maps.Map) {
  //   // This is just an example of getting and using the map instance!!! don't just blindly copy!
  //   // const bounds = new window.google.maps.LatLngBounds(center);
  //   // map.fitBounds(bounds);

  //   setMap(map);
  // }, []);

  // const onUnmount = useCallback(function callback() {
  //   setMap(null);
  // }, []);

  const containerStyle = {
    width: "500px",
    height: "483px",
  };

  const center = {
    lat: -3.745,
    lng: -38.523,
  };
  return (
    <div className="pt-5">
      <Container className="image-stack vw-100 vh-90">
        <Image
          rounded
          className="image-stack__item image-stack__item--bottom "
          src={childDrawing}
        />
        <Card className="d-flex flex-column bg-base image-stack__item image-stack__item--top justify-content-center align-items-center">
          <Card.Text className="h1 text-light text-center fw-bolder">
            Simply 4 Childcare
          </Card.Text>
          <Card.Text className="fs-5 text-light text-center">
            Providing quality care for your little ones
          </Card.Text>
          <Button className="w-50 " variant="secondary">
            Enquire Now!
          </Button>
        </Card>
      </Container>
      <Container
        fluid
        className="d-flex flex-row align-content-center mb-5 text-light vh-60 bg-base"
      >
        {/* <Container className="d-flex justify-content-center mw-50">  p-0 m-0 */}
        <Image rounded className="ms-5 w-auto" src={welcome} />
        {/* </Container> */}
        <Container className="d-flex flex-column justify-content-center  mw-50">
          <p className="fs-3">first of all</p>
          <h1 className="">Welcome!</h1>
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
        </Container>
      </Container>
      <Container className="d-flex flex-column pb-5 vh-80 justify-content-center">
        <h1 className="text-center">Where to find us</h1>
        <Container
          className={`d-flex flex-row text-light vw-60 ${
            toggleForm ? "vh-60" : "vh-50"
          }`}
        >
          <Container fluid className="bg-base d-flex flex-column ">
            <TransitionGroup component="div" className="overflow-hidden">
              <CSSTransition
                key={toggleForm.toString()}
                timeout={750}
                classNames="pageSlider"
                // mountOnEnter={false}
                // unmountOnExit={true}
              >
                <div className={`${toggleForm ? "left" : "right"}`}>
                  {toggleForm ? (
                    <ContactForm setToggleForm={setToggleForm} />
                  ) : (
                    <div className="d-flex flex-column ">
                      <h2 className="pt-4">Contact Details:</h2>
                      <p>
                        Email: <br />
                        Contact Number:
                      </p>

                      <h2 className="pt-4">Opening Hours</h2>
                      <p>
                        We are open Monday to Friday 7.30am to 6.30pm <br />
                        51 weeks per year excluding Bank Holidays and INSET days
                        for children aged 3 months to 5 years.
                      </p>
                      <Button
                        className="w-50 align-self-center mt-auto mb-auto"
                        variant="secondary"
                        onClick={() => setToggleForm(true)}
                      >
                        Enquire Online!
                      </Button>
                    </div>
                  )}
                </div>
              </CSSTransition>
            </TransitionGroup>
          </Container>
          <Container fluid className="d-flex w-auto p-0">
            {isLoaded ? (
              <GoogleMap
                // mapContainerClassName={"w-90 vh-50"}
                mapContainerStyle={containerStyle}
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
      </Container>
    </div>
  );
};

export default Home;
