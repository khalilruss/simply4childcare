import rainbow from "../assets/Ethos/shutterstock_1694662114.jpg";
import thinking from "../assets/Ethos/shutterstock_1759350455.jpg";
import quality from "../assets/Ethos/shutterstock_1476186818.svg";
import relationship from "../assets/Ethos/shutterstock_1903206772.jpg";

import Section from "../components/Section/Section";
import ImageOverlay from "../components/ImageTextOverlay/ImageTextOverlay";
import { motion } from "framer-motion";
import {
  titlePulse,
  pulseVariants,
  easeIn,
  easeInXVariants,
  easeInYVariants,
} from "../components/MotionComponents";

const Ethos = (): JSX.Element => {
  return (
    <>
      <ImageOverlay
        imageSrc={rainbow}
        content={
          <motion.h1
            initial="initial"
            whileInView="enlarge"
            transition={titlePulse}
            viewport={{ once: true }}
            variants={pulseVariants}
            className="fw-bolder display-1"
          >
            Our Ethos
          </motion.h1>
        }
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={easeIn}
        viewport={{ once: true }}
        variants={easeInYVariants}
        custom={20}
      >
        <Section
          content={
            <p className="fs-3 bg-white">
              At Lorene's House we pioneer a forward-thinking approach each and
              every day. We will achieve this by making significant investments
              in our learning and development by ensuring ongoing training and
              professional development.
            </p>
          }
          imageSrc={thinking}
          imagePosition="right"
          imageWidth="w-40"
          imageStacked={true}
          stackBackgroundColor="bg-dark-pink"
          stackDirection="left"
          background={false}
        />
      </motion.div>
      <Section
        content={
          <motion.p
            initial="hidden"
            whileInView="visible"
            transition={easeIn}
            viewport={{ once: true }}
            variants={easeInXVariants}
            custom={50}
            className="fs-3"
          >
            At Lorene's House we pride ourselves in paying close attention to
            what children tell us and show us. By doing this, we are able to
            gain important insights into the minds and to the development of
            each child. Focusing a child’s strengths, passions and interests, as
            they emerge, enables us to provide a stimulating environment and
            plan appropriate activities in order to promote their learning and
            development.
          </motion.p>
        }
        imageSrc={quality}
        imagePosition="left"
        imageWidth="w-40"
        imageStacked={false}
        background={true}
        backgroundColor="bg-green"
        curveDirection="left"
      />
      <Section
        content={
          <motion.p
            initial="hidden"
            whileInView="visible"
            transition={easeIn}
            viewport={{ once: true }}
            variants={easeInXVariants}
            custom={-50}
            className="fs-3 bg-white"
          >
            At Lorene's House we are dedicated to delivering high quality
            practice and leadership. We work hard each day to build excellent
            relationships with each other, the children and their parents. Our
            environment is calm and nurturing. The children’s happiness is our
            always number one priority. Our home-from-home atmosphere enables
            the children to develop a sense of security and allows them to excel
            in all areas of their development.
          </motion.p>
        }
        imageSrc={relationship}
        imagePosition="right"
        imageWidth="w-35"
        imageStacked={true}
        stackDirection="left"
        stackBackgroundColor="bg-base"
        background={false}
        marginBottom="mb-7"
      />
    </>
  );
};

export default Ethos;
