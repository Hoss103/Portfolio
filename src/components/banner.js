import Container from "react-bootstrap/esm/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './bannerstyke.css'
import smallphoto from '../logos/5e72f9747d02a-384x384.png';
import MyCV from '../logos/My_CV.pdf'
import { useState, useEffect } from "react";
export const Bannerr = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  return (
    <section className="home" id="home">
      <Container>
        <Row className="align-items-center" >
          <Col xs={12} md={6} xl={7}>
            <span className="Welcome"> Welcome to my portfolio</span>
            <h1>Hi i am Hossam<span ClassName="wrap"> a  CyberSecurity specialist</span></h1>
            <p>Here is my portfolio so you can get to know me further. Kindly click the button if you are interested in knowing me better.</p>
            <a href={MyCV} download="My_CV.pdf" style={{ textDecoration: 'none' }}>
              <button className="vvd-pro">
                <span>
                  Download CV
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 2 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                  </svg>
                </span>
              </button>
            </a>
          </Col>
          <Col xs={12} md={6} xl={5} className="d-flex justify-content-center align-items-center">
            <a href="https://github.com/Hoss103" target="_blank" rel="noopener noreferrer">
              <img
                id='smallphoto'
                src={smallphoto}
                alt='GitHub Profile'
                style={{ cursor: 'pointer' }}
              />
            </a>
          </Col>
        </Row>

      </Container>
    </section>
  );
}
export default Bannerr;