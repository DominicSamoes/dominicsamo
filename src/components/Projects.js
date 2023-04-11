import { Container, Row, Col, Nav, Tab } from "react-bootstrap"
import { ProjectCard, ProjectCardArt } from "./Card"
import projImg1 from "../assets/img/footer-bg.jpg"
import ttImg from "../assets/img/tt.png"
import aluImg from "../assets/img/alu.png"
import songImg from "../assets/img/sotemp.png"
import hhLogo from "../assets/img/hh.png"
import slLogo from "../assets/img/sl.jpg"

export const Projets = () => {
    const sweprojects = [
        {
            title: "FNB Virtual Centre",
            description: "FNB Innovation Contest",
            imgUrl: projImg1
        },
        {
            title: "TheTradesmon",
            description: "UNESWA final year Computer Science research project",
            imgUrl: ttImg
        },
        {
            title: "Tindlu",
            description: "MTN Hackathon Hack",
            imgUrl: projImg1
        },
        {
            title: "Alumnyy",
            description: "ALX Africa Software Engineering Certificate Foundations Portfolio Project",
            imgUrl: aluImg
        },
        {
            title: "Songcondvo",
            description: "ALX Africa Software Engineering Certificate Specialisations Final Portfolio Project",
            imgUrl: songImg
        },
    ]

    const dsprojects = [
        {
            title: "Zimnat Monthly Insurance Claim Prediction",
            description: "Zindi Africa Umojahack",
            imgUrl: projImg1
        }
    ]

    const artprojects = [
        {
            title: "Hood Heros",
            description: "Graphic Novels about three university students who are also state agents from a fictional African city-state called Mayoralty of Sunnyland.",
            plans: "To one day publish the novels, make them an animated TV series and video games.",
            imgUrl: hhLogo
        },
        {
            title: "Samo League",
            description: "Comics about football clubs from around the world who play in a global league.",
            plans: "To one day publish the comics and also turn them into video games.",
            imgUrl: slLogo
        }
    ]

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pill-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Software Engineering Projects</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Data Science Projects</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Art Projects</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            sweprojects.map((project, index) => {
                                                return (
                                                    <ProjectCard 
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            dsprojects.map((project, index) => {
                                                return (
                                                    <ProjectCard 
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {
                                            artprojects.map((project, index) => {
                                                return (
                                                    <ProjectCardArt 
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>        
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={projImg1} alt="" />
        </section>
    )
 }