import { Container, Image, Tabs, Tab } from "react-bootstrap";
import communication from "../assets/Approach/stock-photo-young-brothers-talking-with-tin-can-telephone-on-grunge-background-116233960.jpg";
import handsTogether from "../assets/Approach/stock-photo-group-of-children-putting-their-hands-together-1123116176.jpg";
import physical from "../assets/Approach/stock-photo-group-of-little-and-years-old-kids-boys-and-girls-running-holding-hands-together-in-the-park-159883541.jpg";
import banner from "../assets/Approach/stock-photo-red-green-blue-jars-with-large-lettering-one-two-and-three-on-the-table-in-the-kindergarten-class-408189730.jpg";
import literary from "../assets/Approach/stock-photo-female-teacher-giving-a-lesson-to-nursery-students-they-are-sitting-on-the-floor-and-there-is-a-447567064.jpg";
import maths from "../assets/Approach/stock-photo-happy-schoolgirl-preschool-girl-with-book-near-school-board-blackboard-654603802.jpg";
import globe from "../assets/Approach/stock-photo-pupils-looking-at-globe-in-library-at-the-elementary-school-309242759.jpg";
import arts from "../assets/Approach/stock-photo-group-of-small-nursery-school-children-with-teacher-indoors-in-classroom-painting-2029379030.jpg";
import curious from "../assets/Approach/stock-photo-little-girl-holding-magnifying-glass-smiling-624381875.jpg";
import { useMediaQuery } from "react-responsive";
import cn from "classnames";

const Approach = (): JSX.Element => {
  const isTablet = useMediaQuery({ query: "(max-width: 1000px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });
  // const isSmallDesktop = useMediaQuery({ query: "(max-width: 1200px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <div>
      <Container
        fluid
        style={{
          backgroundImage: `url(${banner})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className=" d-flex vh-50 justify-content-center align-items-center p-0"
      >
        <div className="d-flex flex-column color-overlay text-light">
          <h1 className=" fw-bolder ">Our Approach</h1>
          <p className="fs-4 w-0">
            At Simply 4 Childcare we combine the Early Years Foundation Stage
            framework with the ‘Curiosity Approach’ to plan for learning.
          </p>
        </div>
      </Container>

      <Container
        fluid
        className="d-flex flex-column p-0 overflow-hidden h-auto justify-content-center"
      >
        <h1 className="text-center">
          The Early Years Foundation Stage framework
        </h1>
        <Container fluid className="w-80">
          <p className="fs-4">
            We work within the EYFS framework to support children within our
            care to deliver the seven areas of learning and development with a
            focus on the individual needs of each child and in line with our
            ethos. There are seven areas of Learning and Development within
            EYFS. Whilst all are important and inter-connected, the framework
            splits learning into three Prime Areas and four Specific Areas.
          </p>
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3 w-fit-content"
          >
            <Tab className="h-auto" eventKey="home" title="Prime Areas">
              <Container fluid>
                <h2>Prime Areas:</h2>
                <p className="fs-4">
                  The Prime Areas are fundamental to igniting a child’s
                  curiosity and building their capacity to learn. These are:
                </p>
                <Container
                  fluid
                  className={`d-flex text-center w-100 p-0 ${
                    !isTabletOrMobile ? " flex-row" : " flex-column "
                  }`}
                >
                  <Container className="d-flex flex-column text-center align-items-center p-0">
                    <h3>Communication and Language</h3>
                    <Image
                      rounded
                      className={cn("p-0", {
                        "w-80": !isTabletOrMobile,
                        "w-40": isTabletOrMobile,
                        "w-60": isTablet,
                        "w-90": isMobile,
                      })}
                      src={communication}
                    />
                    <p className="fs-5">
                      Creating opportunities for children to develop confidence
                      to express themselves, speak and listen in a range of
                      situations.
                    </p>
                  </Container>
                  <Container className="d-flex flex-column text-center align-items-center">
                    <h3>Physical Development</h3>
                    <Image
                      rounded
                      className={cn("p-0", {
                        "w-80": !isTabletOrMobile,
                        "w-40": isTabletOrMobile,
                        "w-60": isTablet,
                        "w-90": isMobile,
                      })}
                      src={physical}
                    />
                    <p className="fs-5">
                      Encouraging children to be active and interactive
                      developing their coordination, control and movement.
                      Promoting the importance of physical activity and making
                      health eating choices.
                    </p>
                  </Container>
                  <Container className="d-flex flex-column text-center align-items-center">
                    <h3>Personal, Social and Emotional Development</h3>
                    <Image
                      rounded
                      className={cn("p-0", {
                        "w-80": !isTabletOrMobile,
                        "w-40": isTabletOrMobile,
                        "w-60": isTablet,
                        "w-90": isMobile,
                      })}
                      src={handsTogether}
                    />
                    <p className="fs-5">
                      forming positive relationships and developing respect for
                      others. Developing social skills and learning how to
                      manage their feelings. Understanding appropriate behaviour
                      amongst groups and having confidence in their own
                      abilities.
                    </p>
                  </Container>
                </Container>
              </Container>
            </Tab>
            <Tab eventKey="profile" title="Specific Areas">
              <Container fluid>
                <h2>Specific Areas:</h2>
                <p className="fs-4">
                  The Specific Areas strengthen and apply the Prime Areas. These
                  are:
                </p>
              </Container>
              <Container
                fluid
                className={`d-flex text-center w-100 p-0 ${
                  !isTabletOrMobile ? " flex-row " : " flex-column"
                }`}
              >
                <Container className="d-flex flex-column text-center align-items-center">
                  <h3>Literacy</h3>
                  <Image
                    rounded
                    className={cn("p-0", {
                      "w-100": !isTabletOrMobile,
                      "w-40": isTabletOrMobile,
                      "w-60": isTablet,
                      "w-90": isMobile,
                    })}
                    src={literary}
                  />
                  <p className="fs-5">
                    Encouraging children to link letters and sounds and begin to
                    read and write. Give children access to a wide range of
                    reading materials including books and poems to ignite their
                    interest.
                  </p>
                </Container>
                <Container className="d-flex flex-column text-center w-100 align-items-center">
                  <h3>Mathematics</h3>
                  <Image
                    rounded
                    className={cn("p-0", {
                      "w-100": !isTabletOrMobile,
                      "w-40": isTabletOrMobile,
                      "w-60": isTablet,
                      "w-80": isMobile,
                    })}
                    src={maths}
                  />
                  <p className="fs-5">
                    Helping children with their counting skills, understanding
                    numbers, describing basic shapes and solving simple addition
                    and subtraction problems.
                  </p>
                </Container>
                <Container className="d-flex flex-column text-center align-items-center">
                  <h3> Understanding of the world</h3>
                  <Image
                    rounded
                    className={cn("p-0", {
                      "w-100": !isTabletOrMobile,
                      "w-40": isTabletOrMobile,
                      "w-60": isTablet,
                      "w-90": isMobile,
                    })}
                    src={globe}
                  />
                  <p className="fs-5">
                    Guiding children to make sense of their world and their
                    community through opportunities to explore, observe and find
                    out about people, places, technology and the environment.
                  </p>
                </Container>
                <Container className="d-flex flex-column text-center align-items-center">
                  <h3> Expressive Arts and design</h3>
                  <Image
                    rounded
                    className={cn("p-0", {
                      "w-100": !isTabletOrMobile,
                      "w-40": isTabletOrMobile,
                      "w-60": isTablet,
                      "w-90": isMobile,
                    })}
                    src={arts}
                  />
                  <p className="fs-5">
                    Providing opportunities for children to explore and play
                    with a wide range of media and materials. Allowing them to
                    express their thoughts, feelings and ideas through music
                    movement, art, dance roleplay and technology.
                  </p>
                </Container>
              </Container>
            </Tab>
          </Tabs>
        </Container>
      </Container>
      <Container
        fluid
        className="d-flex flex-column bg-base text-white rounded-top-5 align-contents-center vh-65"
      >
        <h1 className="text-center">The Curiosity Approach </h1>
        <Container fluid={isTablet} className="fs-4">
          <p>
            The curiosity approach is a modern 21st Century Approach to
            childcare drawing on elements from historical childcare theorists;
            Reggio Emilia, Stiner and Montessori. This approach allows us to
            follow each child’s interest, learning styles and place them at the
            centre of everything we do. We use natural resources within our
            environment to inspire curiosity, urging children to investigate,
            discover, think and problem solve.
          </p>
          <div
            className={`d-flex flex-colomn ${
              !isTabletOrMobile ? " flex-row" : " flex-column-reverse"
            }`}
          >
            <div>
              <p>Through the Curiosity approach we:</p>
              <ul>
                <li>
                  Create wondrous opportunities for learning and development.
                </li>
                <li>Inspire our incredible little learners.</li>
                <li>
                  Provide play spaces, which offer endless opportunities to
                  learning and development.
                </li>
                <li>
                  Introduce authentic materials, and loose parts, which teach
                  children HOW to think and not WHAT to think.
                </li>
                <li>
                  Create a calm, tranquil environment allowing children time and
                  space to learn.
                </li>
                <li>
                  Aspire for our little ones to be ‘thinkers and doers’ of the
                  future.
                </li>
              </ul>
            </div>
            <div className="image-stack align-self-center w-35">
              <div className=" image-stack__item--bottom-right bg-white" />
              <Image
                // roundedCircle
                className="image-stack__item--top-left"
                // className="vw-30 vh-50"
                // className={cn({
                //   "mw-95 ms-5 vh-60 ": !isTablet && !isMobile && !isSmallDesktop,
                //   "vh-50": isSmallDesktop,
                //   "w-100 pt-2": isTablet || isMobile,
                // })}
                src={curious}
              />
            </div>
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default Approach;
