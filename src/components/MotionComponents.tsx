import { Container, Image, Card, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

export const MotionContainer = motion(Container);
export const MotionImage = motion(Image);
export const MotionCard = motion(Card);
export const MotionLink = motion(Link);
export const MotionNavDropdown = motion(NavDropdown);
