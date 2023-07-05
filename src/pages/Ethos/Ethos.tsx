import { Container, Image } from "react-bootstrap";
import rainbow from "../../assests/rainbow-hands2.jpeg";
import thinking from "../../assests/thinking.jpg";
import quality from "../../assests/high-quality.png";
import relationship from "../../assests/relationship.jpg";
import "./Ethos.css";
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
      {/* <div className="d-flex flex-column"> */}
      <Container
        fluid
        className={`d-flex align-content-center mt-5 mb-3 text-dark  ${
          !isTabletOrMobile ? " flex-row vh-50" : " flex-column"
        } `}
      >
        <Container
          fluid={!isTabletOrMobile ? false : true}
          className={`d-flex justify-content-center p-0 ${
            !isTabletOrMobile ? " mw-50" : "w-auto"
          } `}
        >
          <Image
            rounded
            className={`m-auto vh-40 ${
              !isTabletOrMobile ? " vw-40" : " w-100"
            }`}
            src={thinking}
          />
        </Container>
        <Container
          fluid={!isTabletOrMobile ? false : true}
          className={`d-flex flex-column justify-content-center align-content-center ${
            !isTabletOrMobile ? "mw-40" : "m-0"
          }`}
        >
          <p className={`${!isTabletOrMobile ? "fs-3" : "fs-3"}`}>
            Simply 4 Childcare pioneer a forward-thinking approach each and
            every day. We will achieve this by making significant investments in
            our learning and development by ensuring ongoing training and
            professional development.
          </p>
        </Container>
      </Container>
      <Container
        fluid
        className={`d-flex flex-row align-content-center mt-3 mb-3 text-dark ${
          !isTabletOrMobile ? " flex-row vh-50" : "flex-column-reverse"
        } `}
      >
        <Container
          fluid={!isTabletOrMobile ? false : true}
          className={`d-flex flex-column justify-content-center align-content-center ${
            !isTabletOrMobile ? "mw-40" : "m-0"
          }`}
        >
          {/* className={`${!isTabletOrMobile ? "fs-3" : "fs-5"}`} */}
          <p className="fs-3">
            Simply 4 Childcare are dedicated to delivering high quality practice
            and leadership. We work hard each day to build excellent
            relationships with each other, the children and their parents. Our
            environment is calm and nurturing. The children’s happiness is our
            always number one priority. Our home-from-home atmosphere enables
            the children to develop a sense of security and allows them to excel
            in all areas of their development.
          </p>
        </Container>
        <Container
          fluid={!isTabletOrMobile ? false : true}
          className={`d-flex justify-content-center ${
            !isTabletOrMobile ? " mw-40" : "w-auto"
          } `}
        >
          <Image
            rounded
            className={`m-auto ${
              !isTabletOrMobile ? " vw-50 vh-50" : " w-100"
            }`}
            src={relationship}
          />
        </Container>
      </Container>
      <Container
        fluid
        className={`d-flex flex-row align-content-center mt-5 mb-8 text-dark  ${
          !isTabletOrMobile ? " flex-row vh-40" : " flex-column"
        } `}
      >
        <Container
          fluid={!isTabletOrMobile ? false : true}
          className={`d-flex justify-content-center ${
            !isTabletOrMobile ? " mw-40" : "w-auto"
          } `}
        >
          <Image
            rounded
            className={`m-auto vh-40 ${
              !isTabletOrMobile ? " vw-30" : " w-100"
            }`}
            src={quality}
          />
        </Container>
        <Container
          fluid={!isTabletOrMobile ? false : true}
          className={`d-flex flex-column justify-content-center align-content-center ${
            !isTabletOrMobile ? "mw-40" : "m-0"
          }`}
        >
          <p className="fs-3">
            Simply 4 Childcare pride ourselves in paying close attention to what
            children tell us and show us. By doing this, we are able to gain
            important insights into the minds and to the development of each
            child. Focusing a child’s strengths, passions and interests, as they
            emerge, enables us to provide a stimulating environment and plan
            appropriate activities in order to promote their learning and
            development.
          </p>
        </Container>
      </Container>
      {/* </div> */}
    </>
  );
};

export default Ethos;
