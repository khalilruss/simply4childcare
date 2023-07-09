import { Nav, Navbar, NavLink, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assests/logo.png";

const Navigationbar = () => {
  return (
    <Navbar collapseOnSelect expand="sm" bg="light" sticky="top">
      <Container className="d-flex w-50 justify-content-center">
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="150"
            height="70"
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
      <Navbar.Collapse className="justify-content-evenly" id="navbarScroll">
        <Nav>
          <NavLink className="fs-3" eventKey="1" as={Link} to="/">
            Home
          </NavLink>
          <NavDropdown
            className="fs-3"
            title="About Us"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="/about-us/our-ethos">
              Our Ethos
            </NavDropdown.Item>
            <NavDropdown.Item href="/about-us/our-approach">
              Our Approach
            </NavDropdown.Item>
            <NavDropdown.Item href="/about-us/our-environment">
              Our Environment
            </NavDropdown.Item>
          </NavDropdown>
          <NavLink className="fs-3" eventKey="2" as={Link} to="/nutrition">
            Nutrition
          </NavLink>
          <NavLink
            className="fs-3"
            eventKey="3"
            as={Link}
            to="/parents-as-partners"
          >
            Parents as partners
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigationbar;
