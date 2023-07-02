import { Container, Image } from "react-bootstrap";
import nutrition from "../assests/nutrition.jpg";
import menu from "../assests/sample-menu.png";

const Nutrition = (): JSX.Element => {
  return (
    <>
      <Container
        fluid
        style={{
          backgroundImage: `url(${nutrition})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className=" d-flex vh-50 justify-content-center align-items-center p-0"
      >
        <div className="color-overlay">
          <h1 className="text-light fw-bolder">Nutrition</h1>
        </div>
      </Container>

      <Container className="d-flex flex-column justify-content-evenly pt-5">
        <h2>Sample Menu:</h2>
        <Image
          rounded
          className="ms-5 w-auto vw-50 align-self-center "
          src={menu}
        />
        <div>
          <p className="fw-bold">
            *Seasonal menus and allergen information available
          </p>
          <p className="fs-4">
            Children start learning about food at a very early age. The messages
            they receive during this time lay the foundations for the choices
            they make about food as they move up to school and beyond. We
            actively teach children about nutrition, to eat well and make
            healthy choices.
          </p>
          <p className="fs-4">
            We operate a no sugar and no salt policy in our freshly prepared
            food offered to the children. We also follow all the government
            standards to ensure healthy, nutritious meals are provided each day.
            These guidelines are used to prepare, plan and cook the children
            healthy and balanced menus.
          </p>
          <p className="fs-4">
            The nutrient and food-based government standards aim to make the
            food offered healthier by:
          </p>
          <ul className="fs-4">
            <li>Increasing the vitamin and mineral content</li>
            <li>Decreasing the saturated fat and sugars</li>
          </ul>
          <p className="fs-4">
            There are four main groups which contain guidelines that we follow;
            the main groups are below but there are also other guidelines which
            intertwine these groups.
          </p>
          <ul className="fs-4">
            <li>starchy foods</li>
            <li>fruit and vegetables</li>
            <li>
              meat, fish, eggs and beans, other non-dairy sources of protein
            </li>
            <li>milk and dairy foods</li>
          </ul>
          <p className="fs-4">
            We cater to weaning babies as well as special dietary requirements
            and allergies.
          </p>
        </div>
      </Container>
    </>
  );
};

export default Nutrition;
