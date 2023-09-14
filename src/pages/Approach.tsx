import banner from "../assets/Approach/shutterstock_408189730.jpg";
import communication from "../assets/Approach/shutterstock_116233960.jpg";
import physical from "../assets/Approach/shutterstock_159883541.jpg";
import handsTogether from "../assets/Approach/shutterstock_1123116176.jpg";
import literary from "../assets/Approach/shutterstock_447567064.jpg";
import maths from "../assets/Approach/shutterstock_654603802.jpg";
import globe from "../assets/Approach/shutterstock_309242759.jpg";
import arts from "../assets/Approach/shutterstock_2029379030.jpg";
import curious from "../assets/Approach/shutterstock_624381875.jpg";

import { Container, Image, Tabs, Tab } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import cn from "classnames";
import { motion } from "framer-motion";

import ImageOverlay from "../components/ImageTextOverlay/ImageTextOverlay";
import Area from "../components/Area";
import { useScreenSize } from "../screenSizeContext/ScreenSizeContext";
import {
  MotionContainer,
  titlePulse,
  pulseVariants,
  easeIn,
  easeInYVariants,
} from "../components/MotionComponents";

const Approach = (): JSX.Element => {
  const { isXs, isSm, isMd, isLg, isXl, isXXl, isTablet } = useScreenSize();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const swapArea = useMediaQuery({ query: "(max-width: 800px)" });

  return (
    <div>
      <ImageOverlay
        imageSrc={banner}
        content={
          <motion.div
            initial="initial"
            whileInView="enlarge"
            transition={titlePulse}
            viewport={{ once: true }}
            variants={pulseVariants}
          >
            <h1 className=" fw-bolder display-1">Our Approach</h1>
            <p className="fs-2 w-0">
              At Lorene's House we combine the Early Years Foundation Stage
              framework with the ‘Curiosity Approach’ to plan for learning.
            </p>
          </motion.div>
        }
      />
      <MotionContainer
        fluid
        className="d-flex flex-column p-0 overflow-hidden h-auto justify-content-center"
        initial="hidden"
        whileInView="visible"
        transition={easeIn}
        viewport={{ once: true }}
        variants={easeInYVariants}
        custom={50}
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
            defaultActiveKey="prime"
            id="uncontrolled-tab-example"
            className="mb-3 w-fit-content bg-white"
          >
            <Tab
              className="h-auto bg-white mb-3"
              eventKey="prime"
              title="Prime Areas"
            >
              <MotionContainer
                variants={{
                  visible: {
                    transition: {
                      delay: 1,
                      staggerChildren: 0.3,
                    },
                  },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                fluid
              >
                <h2>Prime Areas:</h2>
                <p className="fs-4">
                  The Prime Areas are fundamental to igniting a child’s
                  curiosity and building their capacity to learn. These are:
                </p>
                <Container
                  fluid
                  className="d-flex flex-wrap flex-row text-center justify-content-evenly w-100 p-0"
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
              </MotionContainer>
            </Tab>
            <Tab
              className="h-auto bg-white mb-3"
              eventKey="specific"
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
                className={cn(
                  "d-flex flex-wrap flex-row text-center w-100 p-0",
                  {
                    "justify-content-between": !swapArea,
                    "justify-content-evenly": swapArea,
                  }
                )}
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
      </MotionContainer>
      <Container
        fluid
        className="d-flex flex-column bg-turquoise text-white rounded-top-5 align-items-center pb-5"
      >
        <motion.h1
          initial="hidden"
          whileInView="visible"
          transition={easeIn}
          viewport={{ once: true }}
          variants={easeInYVariants}
          className="text-center"
          custom={20}
        >
          The Curiosity Approach
        </motion.h1>
        <MotionContainer
          initial="hidden"
          whileInView="visible"
          transition={easeIn}
          viewport={{ once: true }}
          variants={easeInYVariants}
          custom={20}
          fluid={isTablet}
          className="fs-4"
        >
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
              <Image className="image-stack__item--top-left" src={curious} />
            </div>
          </div>
        </MotionContainer>
      </Container>
    </div>
  );
};

export default Approach;
