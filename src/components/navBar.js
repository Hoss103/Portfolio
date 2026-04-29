import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style.css';
import facebookIcon from '../logos/Facebook_Logo_2023.png';
import instagramIcon from '../logos/Instagram_icon.png';
import linkedinIcon from '../logos/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.webp';

function NavBarr() {
  return (



    <Navbar expand="lg" variant="dark" className="navbar">
      <Container>
        <Navbar.Brand href="#home">

          <h1 style={{ color: 'white' }}>PORTFOLIO</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#Projects">Projects</Nav.Link>
          </Nav>

          <span className="navbar-text">

            <a href="https://www.linkedin.com/in/hossam-manaa-4095422a6" target="_blank" rel="noreferrer">
              <img src={linkedinIcon} alt="linkedin" />
            </a>

            <a href="https://www.facebook.com/share/1CyqAYzHMY/" target="_blank" rel="noreferrer">
              <img src={facebookIcon} alt="facebook" />
            </a>

            <a href="https://www.instagram.com/hossam._.mannaa/" target="_blank" rel="noreferrer">
              <img src={instagramIcon} alt="instagram" />
            </a>
          </span>
          <button
            className="vvd"
            onClick={() => {
              window.location.href = "#contact";
              console.log("pressed");
            }}
          >
            <span>Let's Connect</span>
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarr;