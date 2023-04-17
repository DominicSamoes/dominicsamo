import { Container, Row, Col, Nav, Tab } from "react-bootstrap"
import { DegreeCard, CertificateCard } from "./Card"
import projImg1 from "../assets/img/footer-bg.jpg"
import pyImg from "../assets/img/py.png"
import introlImg from "../assets/img/introml.png"
import imlImg from "../assets/img/iml.png"
import cvImg from "../assets/img/vision.png"
import aietImg from "../assets/img/aiethics.png"
import vizImg from "../assets/img/viz.png"
import bscImg from "../assets/img/bsc.png"
import psfImg from "../assets/img/psffa.png"
import itnImg from "../assets/img/itn.png"
import srweImg from "../assets/img/srwe.png"
import alxImg from "../assets/img/alx.png"

export const Education = () => {
    const tertiary = [
        {
            description: "Bachelor of Science Majoring in Computer Science and Physics",
            institution: "University of Eswatini",
            timeframe: "2017 - 2021",
            imgUrl: bscImg
        },
    ]
    const alx = [
        {
            description: "ALX SE Holberton Program, Software Engineering",
            timeframe: "February 2022 - March 2023",
            imgUrl: alxImg,
            link: "test.com"
        },
    ]
    const cisco = [
        {
            description: "CCNA: Switching, Routing, and Wireless Essentials",
            timeframe: "March 2022 - June 2022",
            imgUrl: srweImg,
            link: "https://www.credly.com/badges/4e1ab90d-1609-4cca-86b0-3b414654c65b/linked_in_profile"
        },
        {
            description: "CCNA: Introduction to Networks, Switching and Routing",
            timeframe: "August 2021 - Nov 2021",
            imgUrl: itnImg,
            link: "https://www.credly.com/badges/200f42e3-0971-4418-bad7-ccf64c85d4d5?source=linked_in_profile"
        }
    ]
    const kaggle = [
        {
            description: "Python",
            timeframe: "9 August 2021",
            imgUrl: pyImg,
            link: "https://www.kaggle.com/learn/certification/dominicsamoes/python"
        },
        {
            description: "Intro to Machine Learning",
            timeframe: "12 August 2021",
            imgUrl: introlImg,
            link: "https://www.kaggle.com/learn/certification/dominicsamoes/intro-to-machine-learning" 
        },
        {
            description: "Intermediate Machine Learning",
            timeframe: "17 August 2021",
            imgUrl: imlImg,
            link: "https://www.kaggle.com/learn/certification/dominicsamoes/intermediate-machine-learning"
        },
        {
            description: "Computer Vision",
            timeframe: "7 January 2022",
            imgUrl: cvImg,
            link: "https://www.kaggle.com/learn/certification/dominicsamoes/computer-vision"
        },
        {
            description: "Intro to AI Ethics",
            timeframe: "24 January 2023",
            imgUrl: aietImg,
            link: "https://www.kaggle.com/learn/certification/dominicsamoes/intro-to-ai-ethics"
        },
        {
            description: "Data Visualization",
            timeframe: "2 February 2023",
            imgUrl: vizImg,
            link: "https://www.kaggle.com/learn/certification/dominicsamoes/data-visualization"
        }
    ]
    const coursera = [
        {
            description: "Python and Statistics for Financial Analysis",
            timeframe: "January 2023 - February 2023",
            imgUrl: psfImg,
            link: "https://www.coursera.org/account/accomplishments/certificate/RVBAC6MS7JZY"
        }
    ]
    const udacity = [
        {
            description: "Developing Android Apps with Kotlin",
            timeframe: "Ongoing",
            imgUrl: projImg1,
            link: "https://udacity.com"
        }
    ]

    return (
        <section className="education" id="education">
            <Container>
                <Row>
                    <Col>
                        <h2>Education</h2>
                        <Tab.Container id="education-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pill-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tertiary</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">ALX Africa</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Kaggle</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Cisco Networking Academy</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Coursera</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="sixth">Udacity</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            tertiary.map((certificate, index) => {
                                                return (
                                                    <DegreeCard 
                                                        key={index}
                                                        {...certificate}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            alx.map((certificate, index) => {
                                                return (
                                                    <CertificateCard 
                                                        key={index}
                                                        {...certificate}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {
                                            kaggle.map((certificate, index) => {
                                                return (
                                                    <CertificateCard 
                                                        key={index}
                                                        {...certificate}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>    
                                <Tab.Pane eventKey="fourth">
                                    <Row>
                                        {
                                            cisco.map((certificate, index) => {
                                                return (
                                                    <CertificateCard 
                                                        key={index}
                                                        {...certificate}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>    
                                <Tab.Pane eventKey="fifth">
                                    <Row>
                                        {
                                            coursera.map((certificate, index) => {
                                                return (
                                                    <CertificateCard 
                                                        key={index}
                                                        {...certificate}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>  
                                <Tab.Pane eventKey="sixth">
                                    <Row>
                                        {
                                            udacity.map((certificate, index) => {
                                                return (
                                                    <CertificateCard 
                                                        key={index}
                                                        {...certificate}
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