import { Container, Image } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import nutrition from "../assets/Nutrition/stock-photo-healthy-lunch-table-scene-with-nutritious-lettuce-wraps-buddha-bowl-vegetables-sandwiches-and-1674278998.jpg";
import lunch from "../assets/Nutrition/lunch.jpg";
import healthy from "../assets/Nutrition/stock-photo-child-little-girl-eats-vegetable-salad-using-fork-309721823.jpg";
import MediaCarousel from "../components/MediaCarousel/MediaCarousel";
import cn from "classnames";

const menus = require.context("../assets/Nutrition/Menus", true);
const menuMedia = menus.keys().map((menu) => menus(menu));

const Nutrition = (): JSX.Element => {
  const isTablet = useMediaQuery({ query: "(max-width: 1000px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  const isSmallDesktop = useMediaQuery({ query: "(max-width: 1200px)" });
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

      <Container className="d-flex flex-column align-items-center justify-content-evenly  text-black styled-div-right">
        <Container className="d-flex flex-column ">
          <h1 className="align-self-center">Sample Menus:</h1>
          <div className="w-80 align-self-center">
            {/* imageClassNames="d-block w-100" */}
            <MediaCarousel
              itemWidth={1000}
              media={menuMedia}
              carouselClassNames="text-center"
            />
          </div>
          <div>
            <p className="fw-bold fs-4">
              *Seasonal menus and allergen information available <br />
              Green- vegetarian <br />
              Red- meat/fish <br />
              Orange Dairy <br />
              N- Contains nuts <br />
              E- Contains egg
            </p>
          </div>
        </Container>
      </Container>

      <Container
        fluid
        className={`d-flex align-content-center justify-content-evenly text-light mt-5 bg-base styled-div-left ${
          !isTablet ? "mb-6 flex-row vh-60" : "mb-4 flex-column"
        }`}
      >
        <div className="image-stack align-self-center w-35">
          <div className=" image-stack__item--bottom-left bg-white" />
          <Image
            // roundedCircle
            className="image-stack__item--top-right bg-white"
            // className="vw-30 vh-50"
            // className={cn({
            //   "mw-95 ms-5 vh-60 ": !isTablet && !isMobile && !isSmallDesktop,
            //   "vh-50": isSmallDesktop,
            //   "w-100 pt-2": isTablet || isMobile,
            // })}
            src={lunch}
          />
        </div>
        <div
          className={cn("align-self-center m-0", {
            "mw-40": !isTablet && !isMobile && !isSmallDesktop,
          })}
        >
          <p className="fs-3">
            Children start learning about food at a very early age. The messages
            they receive during this time lay the foundations for the choices
            they make about food as they move up to school and beyond. We
            actively teach children about nutrition, to eat well and make
            healthy choices.
          </p>
          <p className="fs-3">
            We operate a no sugar and no salt policy in our freshly prepared
            food offered to the children. We also follow all the government
            standards to ensure healthy, nutritious meals are provided each day.
            These guidelines are used to prepare, plan and cook the children
            healthy and balanced menus.
          </p>
        </div>
      </Container>
      <Container
        fluid
        className={`d-flex align-content-center justify-content-evenly mt-5 ${
          !isTablet ? "mb-6 flex-row" : "mb-4 flex-column"
        }`}
      >
        <div
          className={cn("align-self-center m-0 bg-white", {
            "mw-50": !isTablet && !isMobile && !isSmallDesktop,
          })}
        >
          <p className="fs-3">
            The nutrient and food-based government standards aim to make the
            food offered healthier by:
            <ul className="fs-3">
              <li>Increasing the vitamin and mineral content</li>
              <li>Decreasing the saturated fat and sugars</li>
            </ul>
          </p>

          <p className="fs-3">
            There are four main groups which contain guidelines that we follow;
            the main groups are below but there are also other guidelines which
            intertwine these groups.
            <ul className="fs-3">
              <li>starchy foods</li>
              <li>fruit and vegetables</li>
              <li>
                meat, fish, eggs and beans, other non-dairy sources of protein
              </li>
              <li>milk and dairy foods</li>
            </ul>
            We cater to weaning babies as well as special dietary requirements
            and allergies.
          </p>
        </div>
        <div className="image-stack align-self-center w-35">
          <div className=" image-stack__item--bottom-right bg-base" />
          <Image
            // roundedCircle
            className="image-stack__item--top-left bg-white"
            // className="vw-30 vh-50"
            // className={cn({
            //   "mw-95 ms-5 vh-60 ": !isTablet && !isMobile && !isSmallDesktop,
            //   "vh-50": isSmallDesktop,
            //   "w-100 pt-2": isTablet || isMobile,
            // })}
            src={healthy}
          />
        </div>
      </Container>
    </>
  );
};

export default Nutrition;
