import { Nav, Navbar, NavLink, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import bg from "../assets/coloured-balls.jpeg";

const Navigationbar = () => {
  return (
    <Navbar
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      collapseOnSelect
      expand="sm"
      bg="light"
      sticky="top"
    >
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
      <Navbar.Collapse className="justify-content-between" id="navbarScroll">
        <Nav>
          <NavLink className="fs-3" eventKey="1" as={Link} to="/">
            Home
          </NavLink>
          <NavDropdown className="fs-3" title="About" id="basic-nav-dropdown">
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
          <NavLink className="fs-3" eventKey="6" as={Link} to="/nutrition">
            Nutrition
          </NavLink>
          <NavLink
            className="fs-3"
            eventKey="7"
            as={Link}
            to="/parents-as-partners"
          >
            Parents
          </NavLink>
          <NavLink
            className="fs-3"
            eventKey="8"
            as={Link}
            to="/fees-and-sessions"
          >
            Fees & Sessions
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigationbar;
