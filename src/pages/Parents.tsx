import handshake from "../assets/Parents/shutterstock_2325395553.jpg";
import parents from "../assets/Parents/shutterstock_1243109917.jpg";

import { motion } from "framer-motion";

import Section from "../components/Section/Section";
import ImageOverlay from "../components/ImageTextOverlay/ImageTextOverlay";
import {
  MotionContainer,
  titlePulse,
  pulseVariants,
  easeIn,
  easeInXVariants,
  easeInYVariants,
} from "../components/MotionComponents";

const Parents = (): JSX.Element => {
  return (
    <>
      <ImageOverlay
        imageSrc={handshake}
        content={
          <motion.h1
            initial="initial"
            whileInView="enlarge"
            transition={titlePulse}
            viewport={{ once: true }}
            variants={pulseVariants}
            className="fw-bolder display-1"
          >
            Parents as Partners
          </motion.h1>
        }
      />
      <MotionContainer
        className="mt-5 bg-white d-flex flex-column align-self-center"
        initial="hidden"
        whileInView="visible"
        transition={easeIn}
        viewport={{ once: true }}
        variants={easeInYVariants}
        custom={80}
      >
        <h2>Closures</h2>
        <p className="fs-4">
          Please note that we are closed on Public/Bank Holidays and INSET days.
          You will still be charged for these days. If we are closed between
          Christmas and New Year, you will not be charged for this period.
        </p>
        <h2>Policies</h2>
        <p className="fs-4">
          We have a range of policies and procedures that are given to all
          parents when they join us. They are also on display around the setting
          for parents, carers and staff to read at any time. Our policies and
          procedures are used as a training tool as well as new staff/student
          inductions. They are also explained to parents at
          registration/settling in visits.
        </p>
      </MotionContainer>
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
            <h2>Parent carer workshops</h2>
            <p className="fs-4">Potty training</p>
            <p className="fs-4">Biting </p>
            <p className="fs-4">New siblings </p>
            <p className="fs-4">Establishing routines </p>
            <p className="fs-4">Understanding child development </p>
            <p className="fs-4"> School reediness </p>
            <p className="fs-4">
              Early Literacy, numeracy and introduction to phonics{" "}
            </p>
            <p className="fs-4">Dealing with unwanted behaviour </p>
            <p className="fs-4">Understanding the EYFS curriculum </p>
          </motion.div>
        }
        imageSrc={parents}
        imagePosition="right"
        imageWidth="w-35"
        imageStacked={true}
        stackDirection="left"
        stackBackgroundColor="bg-yellow"
        background={true}
        backgroundColor="bg-light-pink"
        curveDirection="left"
      />
      <MotionContainer
        className="mt-5 bg-white mb-5 d-flex flex-column align-self-center"
        initial="hidden"
        whileInView="visible"
        transition={easeIn}
        viewport={{ once: true }}
        variants={easeInYVariants}
        custom={80}
      >
        <h2>Communication</h2>
        <p className="fs-4">
          As well as daily verbal feedback we use an online daily diary to help
          you keep in touch with your child’s day wherever you are. As parents,
          the first day of handing over your child to the care of another can be
          an emotional time. As your child adjusts to experiences without you we
          will continue to share key moments. Our online daily diary facilitates
          this by enabling a personal photo journal, or diary, to build over
          time. Photographs, videos and notes of special moments are not only
          recorded, but can be made available to you. Whether you use iOS or
          Android, we will use an app that will enable you to receive new
          entries in your child’s journal celebrating their achievements and
          exciting activities, individually or with their new friends and the
          staff looking after them. As parents you can contribute to this
          growing journal by commenting on the journal entries, or even adding
          your own. You can let us teachers know what your child loves doing at
          home by sending photos and videos back, helping them understand their
          development at home. Your child’s other relatives can also be set up
          with access to the Tapestry profile so you can all share the
          excitement of the growth of your child.
        </p>
      </MotionContainer>
    </>
  );
};

export default Parents;
