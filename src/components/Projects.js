import { Container, Row, Col, Nav, Tab } from "react-bootstrap"
import { ProjectCard, ProjectCardArt } from "./Card"
import projImg1 from "../assets/img/footer-bg_result.webp"
import ttImg from "../assets/img/tt_result.webp"
import aluImg from "../assets/img/alu_result.webp"
import songImg from "../assets/img/sotemp_result.webp"
import hhLogo from "../assets/img/hh_result.webp"
import slLogo from "../assets/img/sl_result.webp"
import tindlu from "../assets/img/tindlu_result.webp"

export const Projects = () => {
    const sweprojects = [
        {
            title: "FNB Virtual Centre",
            description: "FNB Innovation Contest",
            imgUrl: aluImg
        },
        {
            title: "TheTradesmon",
            description: "UNESWA final year Computer Science research project",
            imgUrl: ttImg
        },
        {
            title: "Tindlu",
            description: "Online marketplace that allow users to list, manage and book short-term or long-term accommodation.",
            imgUrl: tindlu,
            url: "https://tindlu.000webhostapp.com/"
        },
        {
            title: "Alumnyy",
            description: "ALX Africa Software Engineering Certificate Foundations Portfolio Project",
            imgUrl: aluImg,
            url: "https://alumnyyinc.pythonanywhere.com/"
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
            imgUrl: projImg1,
            url: "https://drive.google.com/file/d/1LP6cwOcBZcfgE2l-_3hhfirY9-2FN5yz/view?usp=sharing"
        },
        {
            title: "Salary Prediction ML Model Deployment",
            description: "Portfolio Data Science Project",
            imgUrl: projImg1,
            url: "https://github.com/DominicSamoes/ml-model-deployment-flask"
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
        </section>
    )
 }