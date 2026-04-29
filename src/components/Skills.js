import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import meter1 from "../logos/meter1.svg";
import meter2 from "../logos/meter2.svg";
import meter3 from "../logos/meter3.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>I can assist you with the following specialized skill sets.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="Reverse Engineering" />
                  <h5>Reverse Engineering</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Network Security" />
                  <h5>Network Security</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Vulnerability Assessment" />
                  <h5>Vulnerability Assessment</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Web Development" />
                  <h5>Web Development</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};