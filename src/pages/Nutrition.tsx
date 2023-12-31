import nutrition from "../assets/Nutrition/shutterstock_1674278998.jpg";
import lunch from "../assets/Nutrition/shutterstock_1177724494.jpg";
import healthy from "../assets/Nutrition/shutterstock_309721823.jpg";

import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import cn from "classnames";

import MediaCarousel from "../components/MediaCarousel/MediaCarousel";
import ImageOverlay from "../components/ImageTextOverlay/ImageTextOverlay";
import Section from "../components/Section/Section";
import { useScreenSize } from "../screenSizeContext/ScreenSizeContext";
import {
  MotionContainer,
  titlePulse,
  pulseVariants,
  easeIn,
  easeInXVariants,
  easeInYVariants,
} from "../components/MotionComponents";

const menuPictures = require.context("../assets/Nutrition/Menus", true);
const menuMedia = menuPictures.keys().map((menu) => menuPictures(menu));

const Nutrition = (): JSX.Element => {
  const { isXXs, isXs, isSm, isMd, isLg, isXl, isXXl } = useScreenSize();

  return (
    <>
      <ImageOverlay
        imageSrc={nutrition}
        content={
          <motion.h1
            initial="initial"
            whileInView="enlarge"
            transition={titlePulse}
            viewport={{ once: true }}
            variants={pulseVariants}
            className="fw-bolder display-1"
          >
            Nutrition
          </motion.h1>
        }
      />

      <Container className="d-flex flex-column align-items-center justify-content-evenly  text-black curved-section-right">
        <MotionContainer
          className="d-flex flex-column"
          initial="hidden"
          whileInView="visible"
          transition={easeIn}
          viewport={{ once: true }}
          variants={easeInYVariants}
          custom={80}
        >
          <h1 className="align-self-center">Sample Menus:</h1>
          <div
            className={cn("align-self-center mb-2", {
              "vw-100": isXs || isXXs,
              "w-90": isSm,
              "w-80": isMd || isLg || isXl || isXXl,
            })}
            // className="w-80 align-self-center mb-2"
          >
            <MediaCarousel media={menuMedia} />
          </div>
          <div>
            <p className="fw-bold fs-4 bg-white w-fit-content">
              *Seasonal menus and allergen information available <br />
              Green- vegetarian <br />
              Red- meat/fish <br />
              Orange Dairy <br />
              N- Contains nuts <br />
              E- Contains egg
            </p>
          </div>
        </MotionContainer>
      </Container>
      <Section
        content={
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={easeIn}
            viewport={{ once: true }}
            variants={easeInXVariants}
            custom={50}
          >
            <p className="fs-3">
              Children start learning about food at a very early age. The
              messages they receive during this time lay the foundations for the
              choices they make about food as they move up to school and beyond.
              We actively teach children about nutrition, to eat well and make
              healthy choices.
            </p>
            <p className="fs-3">
              We operate a no sugar and no salt policy in our freshly prepared
              food offered to the children. We also follow all the government
              standards to ensure healthy, nutritious meals are provided each
              day. These guidelines are used to prepare, plan and cook the
              children healthy and balanced menus.
            </p>
          </motion.div>
        }
        imageSrc={lunch}
        imagePosition="left"
        imageWidth="w-35"
        imageStacked={true}
        stackDirection="right"
        stackBackgroundColor="bg-yellow"
        background={true}
        backgroundColor="bg-yellow"
        curveDirection="right"
      />
      <Section
        content={
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={easeIn}
            viewport={{ once: true }}
            variants={easeInXVariants}
            custom={-50}
          >
            <p className="fs-3">
              The nutrient and food-based government standards aim to make the
              food offered healthier by:
              <ul className="fs-3">
                <li>Increasing the vitamin and mineral content</li>
                <li>Decreasing the saturated fat and sugars</li>
              </ul>
            </p>
            <p className="fs-3">
              There are four main groups which contain guidelines that we
              follow; the main groups are below but there are also other
              guidelines which intertwine these groups.
              <ul className="fs-3">
                <li>starchy foods</li>
                <li>fruit and vegetables</li>
                <li>
                  meat, fish, eggs and beans, other non-dairy sources of protein
                </li>
                <li>milk and dairy foods</li>
              </ul>
              We cater to weaning babies as well as special dietary requirements
              and allergies.
            </p>
          </motion.div>
        }
        imageSrc={healthy}
        imagePosition="right"
        imageWidth="w-35"
        imageStacked={true}
        stackBackgroundColor="bg-base"
        stackDirection="left"
        background={false}
        contentWidth="mw-50"
      />
    </>
  );
};

export default Nutrition;
