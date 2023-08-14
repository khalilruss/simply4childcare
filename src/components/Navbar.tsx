import { Nav, Navbar, NavLink, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/Lorenes-House2.svg";
import cn from "classnames";

import "./Navbar.css";
import { useScreenSize } from "../screenSizeContext/ScreenSizeContext";

const Navigationbar = () => {
  const { isXXs, isXs, isSm } = useScreenSize();

  return (
    <Navbar collapseOnSelect expand="md" bg="white" sticky="top">
      <Container
        className={cn("d-flex ", {
          "w-50 justify-content-center": !isSm && !isXs && !isXXs,
          "justify-content-between": isSm || isXs || isXXs,
        })}
      >
        <Navbar.Brand as={Link} to="/" className="bg-white">
          <img
            src={logo}
            height="120rem"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
        />
      </Container>
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
            <NavDropdown.Item eventKey="2" as={Link} to="/about/about-us">
              About Us
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="3" as={Link} to="/about/our-ethos">
              Our Ethos
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4" as={Link} to="/about/our-approach">
              Our Approach
            </NavDropdown.Item>
            <NavDropdown.Item
              eventKey="5"
              as={Link}
              to="/about/our-environment"
            >
              Our Environment
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            className="fs-3 bg-white"
            title={
              <span className="fs-3 text-turquoise">Parent Information</span>
            }
          >
            <NavDropdown.Item
              eventKey="6"
              as={Link}
              to="/parent-information/parents-as-partners"
            >
              Parents as Partners
            </NavDropdown.Item>
            <NavDropdown.Item
              eventKey="7"
              as={Link}
              to="/parent-information/nutrition"
            >
              Nutrition
            </NavDropdown.Item>
            <NavDropdown.Item
              eventKey="8"
              as={Link}
              to="/parent-information/fees-and-sessions"
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
