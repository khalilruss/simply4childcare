import { Container, Image } from "react-bootstrap";
import rainbow from "../../assests/rainbow-hands2.jpeg";
import thinking from "../../assests/thinking.jpg";
import quality from "../../assests/high-quality.png";
import relationship from "../../assests/relationship.jpg";
import "./Ethos.css";

const Ethos = (): JSX.Element => {
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
        className="d-flex flex-row align-content-center pt-5 mb-5 text-dark vh-50 "
      >
        <Container className="d-flex justify-content-center mw-50">
          <Image rounded className="p-0 w-60" src={thinking} />
        </Container>
        <Container className="d-flex flex-column justify-content-center mw-40">
          <p className="fs-4">
            Simply 4 Childcare pioneer a forward-thinking approach each and
            every day. We will achieve this by making significant investments in
            our learning and development by ensuring ongoing training and
            professional development.
          </p>
        </Container>
      </Container>
      <Container
        fluid
        className="d-flex flex-row align-content-center pt-5 mb-5 text-dark vh-50 "
      >
        <Container className="d-flex flex-column justify-content-center mw-40">
          <p className="fs-4">
            Simply 4 Childcare are dedicated to delivering high quality practice
            and leadership. We work hard each day to build excellent
            relationships with each other, the children and their parents. Our
            environment is calm and nurturing. The children’s happiness is our
            always number one priority. Our home-from-home atmosphere enables
            the children to develop a sense of security and allows them to excel
            in all areas of their development.
          </p>
        </Container>
        <Container className="d-flex justify-content-center mw-40">
          <Image rounded className="p-0 m-0 w-auto" src={relationship} />
        </Container>
      </Container>
      <Container
        fluid
        className="d-flex flex-row align-content-center pt-5 mb-5 text-dark vh-40 "
      >
        <Container className="d-flex justify-content-center mw-40">
          <Image rounded className="p-0 m-0 w-auto" src={quality} />
        </Container>
        <Container className="d-flex flex-column justify-content-center mw-40">
          <p className="fs-4">
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
    </>
  );
};

export default Ethos;
