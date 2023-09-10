import children from "../assets/About/stock-photo-diverse-children-enjoying-playing-with-toys-1247691913.jpg";
import happyChild from "../assets/About/stock-photo-children-toddlers-girls-play-logical-toy-learning-shapes-arithmetic-and-colors-at-home-644198899.jpg";
import childPlaying from "../assets/About/stock-photo-young-boy-playing-with-educational-toys-1234278556.jpg";
import caringStaff from "../assets/About/stock-photo-female-infant-school-teacher-working-one-on-one-with-a-young-schoolboy-sitting-at-a-table-smiling-1283557810.jpg";
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

const AboutUs = (): JSX.Element => {
  return (
    <>
      <ImageOverlay
        imageSrc={children}
        content={
          <motion.div
            initial="initial"
            whileInView="enlarge"
            transition={titlePulse}
            viewport={{ once: true }}
            variants={pulseVariants}
          >
            <h1 className=" fw-bolder display-1">About Us</h1>
            <p className="fs-2 w-0">
              Every day at Simply 4 Childcare is packed with fun-filled learning
              and adventures.
            </p>
          </motion.div>
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
            <p className="fs-3">
              Our rooms and resources have the Early Years Foundation Stage
              (EYFS) completely covered. Children can relax with a book; get
              busy with construction toys or role-playing props; get creative
              with musical instruments, art and craft materials or learn in our
              maths areas and explore the garden. Our range of resources embrace
              the needs of a wide variety of abilities and cultures, giving our
              children the chance to learn about the different backgrounds of
              their new friends.
            </p>
          }
          imageSrc={childPlaying}
          imagePosition="right"
          imageWidth="w-35"
          imageStacked={true}
          stackDirection="left"
          stackBackgroundColor="bg-yellow"
          background={false}
        />
      </motion.div>

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
            <h2>Independent, happy children</h2>
            <p className="fs-3">
              We want our children to learn, play and explore indoors and out;
              and of course, have lots of fun; this way, a thirst for learning
              stays with them for life.
            </p>
            <p className="fs-3">
              At Simply 4 childcare, we encourage independence by letting our
              children choose what they want to play with throughout most of the
              day. This helps them to become confident at making choices as they
              grow. The amazing staff also plan special adult led activities to
              extend each child’s learning even further.
            </p>
          </motion.div>
        }
        imageSrc={happyChild}
        imagePosition="left"
        imageWidth="w-35"
        imageStacked={true}
        stackDirection="right"
        stackBackgroundColor="bg-dark-yellow"
        background={true}
        backgroundColor="bg-dark-pink"
        curveDirection="left"
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
            <h2>Professional, caring staff</h2>
            <p className="fs-3">
              Consistency is important for children, so our small team follow a
              daily routine that is displayed and shared with parents. Our staff
              are fully qualified to work with children, or have many years’
              experience within the sector. We also attend regular training
              sessions, delivered in-house or by outside trainers, to energize
              us and keep our ideas, knowledge and skills fresh.
            </p>
            <p className="fs-3">
              We strive to act as excellent role models, ensuring that everyone
              has fun, but also learns to listen to and respect each other.
            </p>
          </motion.div>
        }
        imageSrc={caringStaff}
        imagePosition="right"
        imageWidth="w-35"
        imageStacked={true}
        stackBackgroundColor="bg-green"
        stackDirection="left"
        background={false}
      />
    </>
  );
};

export default AboutUs;
