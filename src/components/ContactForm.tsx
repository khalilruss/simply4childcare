import { Form, Button } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { useForm, FieldValues, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import "yup-phone-lite";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

type ContactFormProps = {
  className?: string;
  setToggleForm: React.Dispatch<React.SetStateAction<boolean>>;
};

const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .required("Email is required")
    .matches(emailRegex, "Email is invalid"),
  number: Yup.string()
    .phone("GB", "${path} is invalid")
    .required("Please enter a contact number"),
  additional_comments: Yup.string(),
});

const defaultValues = {
  name: "",
  email: "",
  number: "",
  additional_comments: "",
};
const ContactForm = ({
  className,
  setToggleForm,
}: ContactFormProps): JSX.Element => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const sendEmail = (formData: FieldValues) => {
    setIsDisabled(true);
    toast.promise(
      emailjs.send(
        "s4c_email_service",
        "lorenes_house_template",
        formData,
        `${process.env.REACT_APP_EMAIL_JS_API_KEY}`
      ),
      {
        pending: {
          render() {
            return "Sending Message";
          },
        },
        success: {
          render() {
            reset(defaultValues);
            setIsDisabled(false);
            return "Message Sent";
          },
        },
        error: {
          render() {
            setIsDisabled(false);
            return "Something went wrong, Please try again";
          },
        },
      },
      {
        className: "bg-light-grey text-black",
        pauseOnHover: false,
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2500,
      }
    );
  };

  return (
    <>
      <Form
        className={`${className} mt-4 mb-4 d-flex flex-column`}
        onSubmit={handleSubmit(sendEmail)}
      >
        <h1 className={`${!isTabletOrMobile ? "fs-2" : "fs-4"}`}>Contact Us</h1>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label className={`${!isTabletOrMobile ? "fs-5" : "fs-6"}`}>
            Full Name
          </Form.Label>
          <Controller
            control={control}
            name="name"
            defaultValue=""
            render={({ field: { onChange, value, ref } }) => (
              <Form.Control
                className={`${!isTabletOrMobile ? "fs-5" : "fs-6"}`}
                onChange={onChange}
                value={value}
                ref={ref}
                isInvalid={errors.name ? true : false}
                placeholder="Enter your name"
              />
            )}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name?.message?.toString()}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label className={`${!isTabletOrMobile ? "fs-5" : "fs-6"}`}>
            Contact Email
          </Form.Label>
          <Controller
            control={control}
            name="email"
            defaultValue=""
            render={({ field: { onChange, value, ref } }) => (
              <Form.Control
                className={`${!isTabletOrMobile ? "fs-5" : "fs-6"}`}
                onChange={onChange}
                value={value}
                ref={ref}
                isInvalid={errors.email ? true : false}
                type="email"
                placeholder="Enter your email"
              />
            )}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email?.message?.toString()}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formNumber">
          <Form.Label className={`${!isTabletOrMobile ? "fs-5" : "fs-6"}`}>
            Contact number
          </Form.Label>
          <Controller
            control={control}
            name="number"
            defaultValue=""
            render={({ field: { onChange, value, ref } }) => (
              <Form.Control
                className={`${!isTabletOrMobile ? "fs-5" : "fs-6"}`}
                onChange={onChange}
                value={value}
                ref={ref}
                isInvalid={errors.number ? true : false}
                placeholder="Enter your contact number"
              />
            )}
          />
          <Form.Control.Feedback type="invalid">
            {errors.number?.message?.toString()}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label className={`${!isTabletOrMobile ? "fs-5" : "fs-6"}`}>
            Additional comments
          </Form.Label>
          <Controller
            control={control}
            name="additional_comments"
            defaultValue=""
            render={({ field: { onChange, value, ref } }) => (
              <Form.Control
                className={`${!isTabletOrMobile ? "fs-5" : "fs-6"}`}
                onChange={onChange}
                value={value}
                ref={ref}
                as="textarea"
                aria-label="With textarea"
                placeholder="Enter any additional comments..."
              />
            )}
          />
        </Form.Group>
        <div className="w-auto align-self-center pt-3">
          <Button
            className="w-auto"
            variant="secondary"
            type="submit"
            disabled={isDisabled}
          >
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
    </>
  );
};

export default ContactForm;
