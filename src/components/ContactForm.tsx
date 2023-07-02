import { Form, Button } from "react-bootstrap";

type ContactFormProps = {
  className?: string;
  setToggleForm: React.Dispatch<React.SetStateAction<boolean>>;
};

const ContactForm = ({
  className,
  setToggleForm,
}: ContactFormProps): JSX.Element => {
  return (
    <Form className={`${className} pt-4 d-flex flex-column`}>
      <h2>Contact Us</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Child's Name</Form.Label>
        <Form.Control type="text" placeholder="Enter the child's name" />
      </Form.Group>
      <div className="d-flex flex-row justify-content-around align-content-start">
        <Form.Group className="w-100" controlId="dob">
          <Form.Label>Child's DOB</Form.Label>
          <Form.Control type="date" name="dob" placeholder="Date of Birth" />
        </Form.Group>
        <Form.Group className="w-100" controlId="dob">
          <Form.Label>Preferred Start Date</Form.Label>
          <Form.Control
            type="date"
            name="start-date"
            placeholder="Preferred Start Date"
          />
        </Form.Group>
      </div>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contact Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contact number</Form.Label>
        <Form.Control type="phone number" placeholder="Enter Email" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Additional comments</Form.Label>
        <Form.Control as="textarea" aria-label="With textarea" />
      </Form.Group>
      <div className="w-auto align-self-center pt-3">
        <Button className="w-auto" variant="secondary" type="submit">
          Submit
        </Button>
        <Button
          variant="link"
          className="text-white"
          onClick={() => setToggleForm(false)}
        >
          Cancel
        </Button>
      </div>
    </Form>
  );
};

export default ContactForm;
