import { Container, Table } from "react-bootstrap";
import ImageOverlay from "../components/ImageTextOverlay/ImageTextOverlay";
import counting from "../assets/Fees/stock-photo-little-boy-counting-his-savings-167008340.jpg";
import { titlePulse, pulseVariants } from "../components/MotionComponents";
import { motion } from "framer-motion";

const Fees = (): JSX.Element => {
  return (
    <>
      <ImageOverlay
        imageSrc={counting}
        content={
          <motion.h1
            initial="initial"
            whileInView="enlarge"
            transition={titlePulse}
            viewport={{ once: true }}
            variants={pulseVariants}
            className="fw-bolder display-1"
          >
            Fees & Sessions
          </motion.h1>
        }
      />
      <Container className="bg-white">
        <h1>Sessions:</h1>
        <p className="fs-4">
          Full Day sessions - 8.00am-6.00pm, 52 weeks per year (Charges still
          apply for Bank Holidays)
        </p>
        <p className="fs-4">Half-Day sessions - 8:00am-1:00 or 1:00pm-6:00pm</p>
        <p className="fs-4">
          Morning sessions include: breakfast, morning snack and 2-course lunch.
        </p>
        <p className="fs-4">
          Afternoon sessions include: afternoon snack and 2-course tea.
        </p>
        <p className="fs-4">£60 per day for all ages</p>
        <p className="fs-4">£30 per day for ½ day all ages</p>
        <p className="fs-4">REGISTRATION FEE [NON-REFUNDABLE] £50.00</p>
        <p className="fs-4">
          DEPOSIT - 2 WEEKS - This will hold your child’s place before they
          start with us. Once their placement has been confirmed and the deposit
          paid, any cancellation with less than four weeks’ notice will result
          in a forfeit of the deposit. If your child does join us, then your
          deposit will be deducted from the required notice period of four weeks
          when they leave. We require 4 full weeks / 1 month written notice
          [Monday-to-Friday] when your child is due to leave us.
        </p>
        <p className="fs-4">
          A minimum of 2 full days or equivalent must be booked
        </p>
        <Table striped bordered hover className="fs-4">
          <thead>
            <tr>
              <th>Session</th>
              <th>Weekly</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1 Day</td>
              <td>£60.00</td>
            </tr>
            <tr>
              <td>2 Days</td>
              <td>£120.00</td>
            </tr>
            <tr>
              <td>3 Days</td>
              <td>£180.00</td>
            </tr>
            <tr>
              <td>4 Days</td>
              <td>£240.00</td>
            </tr>
            <tr>
              <td>5 Days</td>
              <td>£280.00</td>
            </tr>
          </tbody>
        </Table>
        <p className="fs-4">
          Five day places are charged at a premium rate, as these often result
          in unsold sessions at the nursery.
        </p>

        <h1>How do we calculate our fees?</h1>
        <p className="fs-4">
          For children who attend all year round, places are charged at a fixed
          monthly rate. This is based on a 52-week year, split over 12 months.
        </p>
        <p className="fs-4">
          Term-time only places are charged monthly, based on the number of
          term-time sessions in the month.
        </p>
        <p className="fs-4">
          Discounts for siblings are applied after factoring in the funded
          hours.
        </p>
        <p className="fs-4">
          Fees for any extra sessions are paid as you go and discounts do not
          apply to extra sessions.
        </p>
        <p className="fs-4">
          We offer Government-funded hours options, which are three full days or
          three morning/afternoon sessions a week term-time only.
        </p>

        <h1>How to pay</h1>
        <p className="fs-4">
          Debit and/or credit cards can be used to make payments by direct
          debit.
        </p>
        <p className="fs-4">We do not accept American Express or cheques.</p>
        <p className="fs-4">
          All fees are revised annually at the beginning of March and
          implemented at the beginning of April.
        </p>
      </Container>
    </>
  );
};

export default Fees;
