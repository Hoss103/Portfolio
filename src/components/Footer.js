import { Container, Row, Col } from "react-bootstrap"; 
import logo from "../logos/gato-de-terno-suit-cat.gif"; 
import facebookIcon from '../logos/Facebook_Logo_2023.png';
import instagramIcon from '../logos/Instagram_icon.png';
import linkedinIcon from '../logos/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.webp';
export const Footer = () => { 
  return ( 
    <footer className="footer"> 
      <Container> 
        <Row className="align-items-center"> 
           
          <Col size={12} sm={6}> 
            <img src={logo} alt="Logo" /> 
          </Col> 
          <Col size={12} sm={6} className="text-center text-sm-end"> 
            <div className="social-icon"> 
              <a href="https://www.facebook.com/share/1CyqAYzHMY/"><img src={facebookIcon} alt="Facebook" /></a> 
              <a href="https://www.instagram.com/hossam._.mannaa/"><img src={instagramIcon} alt="Instagram" /></a> 
              <a href="https://www.linkedin.com/in/hossam-manaa-4095422a6"><img src={linkedinIcon} alt="LinkedIn" /></a> 
            </div> 
            <p>Copyright 2026. All Rights Reserved</p> 
          </Col> 
        </Row> 
      </Container> 
    </footer> 
  ) 
}