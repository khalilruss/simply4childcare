import { Nav, Navbar, NavLink, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/Lorenes-House2.svg";
import cn from "classnames";

import "./Navbar.css";
import { useScreenSize } from "../screenSizeContext/ScreenSizeContext";
import { MotionLink, MotionNavDropdown } from "../components/MotionComponents";

const Navigationbar = () => {
  const { isXXs, isXs, isSm } = useScreenSize();

  return (
    <Navbar collapseOnSelect expand="md" bg="white" sticky="top">
      <Container
        className={cn("d-flex ", {
          "w-50 justify-content-center": !(isSm || isXs || isXXs),
          "justify-content-between": isSm || isXs || isXXs,
        })}
      >
        <Navbar.Brand
          as={MotionLink}
          to="/"
          className="bg-white"
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 1 }}
        >
          <img
            src={logo}
            height="120rem"
            // height={logoHeight.get()}
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
            as={MotionLink}
            to="/"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 1 }}
          >
            Home
          </NavLink>
          <MotionNavDropdown
            className="fs-3 bg-white"
            title={<span className="fs-3 text-dark-pink">About</span>}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 1 }}
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
          </MotionNavDropdown>
          <MotionNavDropdown
            className="fs-3 bg-white"
            title={
              <span className="fs-3 text-turquoise">Parent Information</span>
            }
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 1 }}
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
          </MotionNavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigationbar;
