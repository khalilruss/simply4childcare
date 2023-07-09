import { Container } from "react-bootstrap";
import handshake from "../assests/stock-photo-japanese-parent-and-child-holding-hands-in-the-living-room-2325395553.jpg";

const Parents = (): JSX.Element => {
  return (
    <>
      <Container
        fluid
        style={{
          backgroundImage: `url(${handshake})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className=" d-flex vh-50 justify-content-center align-items-center p-0"
      >
        <div className="color-overlay">
          <h1 className="text-light fw-bolder">Parents as Partners</h1>
        </div>
      </Container>
      <Container>
        <h2>Closures</h2>
        <p className="fs-4">
          Please note that we are closed on Public/Bank Holidays and INSET days.
          You will still be charged for these days. If we are closed between
          Christmas and New Year, you will not be charged for this period.
        </p>
        <h2>Policies</h2>
        <p className="fs-4">
          complaints policy, special educational needs, our terms and
          conditions, sickness, medication and absence, settling in, safety and
          security, fees. I will drag information from our policies to add to
          this section of the site
        </p>
        <h2>Easy activities to do at home with your child</h2>
        <p className="fs-4">
          Reading at home (Simply Reading) <br />
          Maths at home (Simply Maths) <br />
          Sports, music and dance at home (Simply movement) <br />
          Healthy eating (Simply nutrition/recipes) <br />
          Outdoor learning (Simply outdoors) <br />
          Arts and crafts at home (Simply creative)
        </p>
        <h2>Communication</h2>
        <h2>Parent carer workshops</h2>
        <p className="fs-4">
          Potty training <br />
          Biting <br />
          New siblings <br />
          Establishing routines <br />
          Understanding child development <br />
          School reediness <br />
          Early Literacy, numeracy and introduction to phonics <br />
          Dealing with unwanted behaviour <br />
          Understanding the EYFS curriculum <br />
        </p>
      </Container>
    </>
  );
};

export default Parents;
