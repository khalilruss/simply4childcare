import { Container, Image, Card, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const titlePulse = {
  delay: 0.2,
  repeat: 1,
  repeatType: "reverse" as "reverse",
  duration: 0.5,
};
export const pulseVariants = {
  enlarge: { scale: 1.1 },
  initial: { scale: 1 },
};

export const easeIn = { ease: "easeIn", delay: 0.2, duration: 0.4 };
export const easeInYVariants = {
  visible: {
    opacity: 1,
    y: 0,
  },
  hidden: (i: number) => ({ opacity: 0, y: i }),
};
export const easeInXVariants = {
  visible: {
    opacity: 1,
    x: 0,
  },
  hidden: (i: number) => ({ opacity: 0, x: i }),
};

export const MotionContainer = motion(Container);
export const MotionImage = motion(Image);
export const MotionCard = motion(Card);
export const MotionLink = motion(Link);
export const MotionNavDropdown = motion(NavDropdown);
