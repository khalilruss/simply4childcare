import { Form, Button } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

type ContactFormProps = {
  className?: string;
  setToggleForm: React.Dispatch<React.SetStateAction<boolean>>;
};

const ContactForm = ({
  className,
  setToggleForm,
}: ContactFormProps): JSX.Element => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <Form className={`${className} pt-4 d-flex flex-column`}>
      <h1 className={`${!isTabletOrMobile ? "fs-2" : "fs-4"}`}>Contact Us</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className={`${!isTabletOrMobile ? "fs-5" : "fs-6"}`}>
          Child's Name
        </Form.Label>
        <Form.Control
          className={`${!isTabletOrMobile ? "fs-5" : "fs-6"}`}
          type="text"
          placeholder="Enter the child's name"
        />
      </Form.Group>
      <div className="d-flex flex-row justify-content-around align-content-start">
        <Form.Group className="w-100" controlId="dob">
          <Form.Label className={`${!isTabletOrMobile ? "fs-5" : "fs-6"}`}>
            Child's DOB
          </Form.Label>
          <Form.Control
            className={`${!isTabletOrMobile ? "fs-5" : "fs-6"}`}
            type="date"
            name="dob"
            placeholder="Date of Birth"
          />
        </Form.Group>
        <Form.Group className="w-100" controlId="dob">
          <Form.Label className={`${!isTabletOrMobile ? "fs-5" : "fs-6"}`}>
            Preferred Start Date
          </Form.Label>
          <Form.Control
            className={`${!isTabletOrMobile ? "fs-5" : "fs-6"}`}
            type="date"
            name="start-date"
            placeholder="Preferred Start Date"
          />
        </Form.Group>
      </div>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className={`${!isTabletOrMobile ? "fs-5" : "fs-6"}`}>
          Contact Email
        </Form.Label>
        <Form.Control
          className={`${!isTabletOrMobile ? "fs-5" : "fs-6"}`}
          type="email"
          placeholder="Enter Email"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className={`${!isTabletOrMobile ? "fs-5" : "fs-6"}`}>
          Contact number
        </Form.Label>
        <Form.Control
          className={`${!isTabletOrMobile ? "fs-5" : "fs-6"}`}
          type="phone number"
          placeholder="Enter Email"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label className={`${!isTabletOrMobile ? "fs-5" : "fs-6"}`}>
          Additional comments
        </Form.Label>
        <Form.Control
          className={`${!isTabletOrMobile ? "fs-5" : "fs-6"}`}
          as="textarea"
          aria-label="With textarea"
        />
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
