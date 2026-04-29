import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../logos/images.png"; 
import projImg2 from "../logos/pngtree-startup-project-mobile-development-team-rocket-takes-off-for-launching-a-png-image_4520231.png"; 
import projImg3 from "../logos/download233.png";
import projImg4 from "../logos/png-clipart-project-management-computer-icons-the-noun-project-agile-process-icon-blue-text-thumbnail.png";
import projImg5 from "../logos/download1312321.png";
import projImg6 from "../logos/download13123112.png"
import TrackVisibility from 'react-on-screen';
import 'animate.css';

export const Projects = () => {

    const projects = [
        { title: "Business Startup", description: "Design & Development", imgUrl: projImg1 },
        { title: "Business Startup", description: "Design & Development", imgUrl: projImg2 },
        { title: "Business Startup", description: "Design & Development", imgUrl: projImg3 },
        { title: "Business Startup", description: "Design & Development", imgUrl: projImg4 },
        { title: "Business Startup", description: "Design & Development", imgUrl: projImg5 },
        { title: "Business Startup", description: "Design & Development", imgUrl: projImg6 },
    ];

    // Data for Tab 2
    const projectsTab2 = [
        { title: "Cyber Security", description: "Ethical Hacking", imgUrl: projImg2 },
        { title: "Network Defense", description: "Firewall Setup", imgUrl: projImg3 },
        { title: "Data Privacy", description: "Encryption Task", imgUrl: projImg1 },
        { title: "Data Privacy", description: "Encryption Task", imgUrl: projImg5 },
        { title: "Data Privacy", description: "Encryption Task", imgUrl: projImg4 },
        { title: "Data Privacy", description: "Encryption Task", imgUrl: projImg6 },
    ];

    // Data for Tab 3
    const projectsTab3 = [
        { title: "Mobile App", description: "React Native", imgUrl: projImg3 },
        { title: "E-Commerce", description: "Web Store", imgUrl: projImg1 },
        { title: "Portfolio", description: "UI/UX Design", imgUrl: projImg2 },
        { title: "Data Privacy", description: "Encryption Task", imgUrl: projImg4 },
        { title: "Data Privacy", description: "Encryption Task", imgUrl: projImg6 },
        { title: "Data Privacy", description: "Encryption Task", imgUrl: projImg5 },
    ];

    return (
        <section className="Projects" id="Projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p>Here are my projects so you can know me better</p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {projects.map((project, index) => (
                                                        <ProjectCard key={index} {...project} />
                                                    ))}
                                                </Row>
                                            </Tab.Pane>
                                            
                                            <Tab.Pane eventKey="second">
                                                <Row>
                                                    {projectsTab2.map((project, index) => (
                                                        <ProjectCard key={index} {...project} />
                                                    ))}
                                                </Row>
                                            </Tab.Pane>
                                            
                                            <Tab.Pane eventKey="third">
                                                <Row>
                                                    {projectsTab3.map((project, index) => (
                                                        <ProjectCard key={index} {...project} />
                                                    ))}
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}