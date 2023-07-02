import { Col, Row, Container } from "react-bootstrap";

const Footer = (): JSX.Element => {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <Container>
        <Row>
          <Col md={6}>
            <h5>About Us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Col>
          <Col md={6}>
            <h5>Contact Us</h5>
            <p>Email: info@example.com</p>
            <p>Phone: 123-456-7890</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
