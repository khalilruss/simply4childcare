import { Col, Row, Container } from "react-bootstrap";

const Footer = (): JSX.Element => {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Address</h5>
            <p>
              Lorene’s House:
              <br />9 Halliwell Road
              <br />
              Brixton Hill SW2 5HB
            </p>
          </Col>
          <Col md={6}>
            <h5>Contact Us</h5>
            <p>
              Email: janice.copeland@simply4group.co.uk <br />
              Mobile: 07305811142
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
