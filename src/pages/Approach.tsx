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
import ImageOverlay from "../components/ImageTextOverlay/ImageTextOverlay";
import cn from "classnames";
import Area from "../components/Area";

const Approach = (): JSX.Element => {
  const isTablet = useMediaQuery({ query: "(max-width: 1000px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });
  // const isSmallDesktop = useMediaQuery({ query: "(max-width: 1200px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const breakpoints = {
    xs: "(max-width: 576px)",
    sm: "(min-width: 576px) and (max-width: 768px)",
    md: "(min-width: 768px) and (max-width: 992px)",
    lg: "(min-width: 992px) and (max-width: 1200px)",
    xl: "(min-width: 1200px) and (max-width: 1400px)",
    xxl: "(min-width: 1400px)",
  };

  // Use useMediaQuery with the defined breakpoints
  const isXs = useMediaQuery({ query: breakpoints.xs });
  const isSm = useMediaQuery({ query: breakpoints.sm });
  const isMd = useMediaQuery({ query: breakpoints.md });
  const isLg = useMediaQuery({ query: breakpoints.lg });
  const isXl = useMediaQuery({ query: breakpoints.xl });
  const isXXl = useMediaQuery({ query: breakpoints.xxl });
  return (
    <div>
      <ImageOverlay
        imageSrc={banner}
        content={
          <>
            <h1 className=" fw-bolder" style={{ fontSize: "5rem" }}>
              Our Approach
            </h1>
            <p className="fs-2 w-0">
              At Simply 4 Childcare we combine the Early Years Foundation Stage
              framework with the ‘Curiosity Approach’ to plan for learning.
            </p>
          </>
        }
      />
      <Container
        fluid
        className="d-flex flex-column p-0 overflow-hidden h-auto justify-content-center"
      >
        <Container fluid className="w-80 bg-white">
          <h1 className="text-center">
            The Early Years Foundation Stage framework
          </h1>
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
            className="mb-3 w-fit-content bg-white"
          >
            <Tab
              className="h-auto bg-white"
              eventKey="home"
              title="Prime Areas"
            >
              <Container fluid>
                <h2>Prime Areas:</h2>
                <p className="fs-4">
                  The Prime Areas are fundamental to igniting a child’s
                  curiosity and building their capacity to learn. These are:
                </p>
                <Container
                  fluid
                  className={`d-flex flex-wrap flex-row text-center justify-content-evenly w-100 p-0`}
                >
                  <Area
                    type="prime"
                    title="Communication and Language"
                    imageSrc={communication}
                    text="Creating opportunities for children to develop confidence
                      to express themselves, speak and listen in a range of
                      situations."
                  />
                  <Area
                    type="prime"
                    title="Physical Development"
                    imageSrc={physical}
                    text="Encouraging children to be active and interactive
                    developing their coordination, control and movement.
                    Promoting the importance of physical activity and making
                    health eating choices."
                  />
                  <Area
                    type="prime"
                    title="Personal, Social and Emotional Development"
                    imageSrc={handsTogether}
                    text="Forming positive relationships and developing respect for
                    others. Developing social skills and learning how to
                    manage their feelings. Understanding appropriate behaviour
                    amongst groups and having confidence in their own
                    abilities."
                  />
                </Container>
              </Container>
            </Tab>
            <Tab
              className="h-auto bg-white"
              eventKey="profile"
              title="Specific Areas"
            >
              <Container fluid>
                <h2>Specific Areas:</h2>
                <p className="fs-4">
                  The Specific Areas strengthen and apply the Prime Areas. These
                  are:
                </p>
              </Container>
              <Container
                fluid
                className={`d-flex flex-wrap flex-row text-center justify-content-between w-100 p-0`}
              >
                <Area
                  type="specific"
                  title="Literacy"
                  imageSrc={literary}
                  text="Encouraging children to link letters and sounds and begin to
                  read and write. Give children access to a wide range of
                  reading materials including books and poems to ignite their
                  interest."
                />
                <Area
                  type="specific"
                  title="Mathematics"
                  imageSrc={maths}
                  text="Helping children with their counting skills, understanding
                  numbers, describing basic shapes and solving simple addition
                  and subtraction problems."
                />
                <Area
                  type="specific"
                  title="Understanding of the world"
                  imageSrc={globe}
                  text="Guiding children to make sense of their world and their
                  community through opportunities to explore, observe and find
                  out about people, places, technology and the environment."
                />
                <Area
                  type="specific"
                  title="Expressive Arts and design"
                  imageSrc={arts}
                  text="Providing opportunities for children to explore and play
                  with a wide range of media and materials. Allowing them to
                  express their thoughts, feelings and ideas through music
                  movement, art, dance roleplay and technology."
                />
              </Container>
            </Tab>
          </Tabs>
        </Container>
      </Container>
      <Container
        fluid
        className="d-flex flex-column bg-turquoise text-white rounded-top-5 align-items-center pb-5"
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
            <div
              className={cn(`image-stack align-self-center`, {
                "w-35": isXXl,
                "w-45": isXl,
                "w-55": isLg,
                "w-60": isMd,
                "w-70": isSm,
                "w-100": isXs,
                "mb-6": isTablet,
              })}
            >
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
