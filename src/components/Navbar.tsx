import { Nav, Navbar, NavLink, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/Lorenes-House2.svg";
import "./Navbar.css";

const Navigationbar = () => {
  return (
    <Navbar
      // style={{
      //   backgroundImage: `url(${bg})`,
      //   backgroundRepeat: "no-repeat",
      //   backgroundPosition: "center",
      //   backgroundSize: "cover",
      // }}
      collapseOnSelect
      expand="md"
      bg="white"
      sticky="top"
    >
      <Container className="d-flex w-50 justify-content-center">
        <Navbar.Brand href="/" className="bg-white">
          <img
            src={logo}
            height="120rem"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
      </Container>
      <Navbar.Toggle
        aria-controls="navbarScroll"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
      />
      <Navbar.Collapse className="justify-content-evenly " id="navbarScroll">
        <Nav>
          <NavLink
            className="fs-3 text-green bg-white"
            eventKey="1"
            as={Link}
            to="/"
          >
            Home
          </NavLink>
          <NavDropdown
            className="fs-3 bg-white"
            title={<span className="fs-3 text-dark-pink">About</span>}
          >
            <NavDropdown.Item eventKey="2" href="/about/about-us">
              About Us
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="3" href="/about/our-ethos">
              Our Ethos
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4" href="/about/our-approach">
              Our Approach
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="5" href="/about/our-environment">
              Our Environment
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            className="fs-3 bg-white"
            title={
              <span className="fs-3 text-turquoise">Parent Information</span>
            }
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item
              eventKey="6"
              href="/parent-information/parents-as-partners"
            >
              Parents as Partners
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="7" href="/parent-information/nutrition">
              Nutrition
            </NavDropdown.Item>
            <NavDropdown.Item
              eventKey="8"
              href="/parent-information/fees-and-sessions"
            >
              Fees & Sessions
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigationbar;
