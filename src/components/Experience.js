import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import svLogo from "../assets/img/sv_result.webp"
import montLogo from "../assets/img/mont_result.webp"

export const Experience = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }

    return (
        <section className="skill" id="experience">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Experience</h2>

                            <hr className="line" />
                            
                            <h4><img src={svLogo} alt="" className="experience"/> SV TECHWORLD</h4>
                            <h5>Software Development Company</h5>
                            <Carousel responsive={responsive} infinite={true} className="skills-slider">
                                <div className="item">
                                    <p>Software Engineer</p>
                                </div>                                
                                <div className="item">
                                    <p>March 2023 - Present</p>
                                </div>
                                <div className="item">
                                    <p>Manzini, Manzini, Eswatini</p>
                                </div>
                            </Carousel>
                            
                            <hr className="line" />

                            <h4><img src={montLogo} alt="" className="experience"/> Montigny Investments</h4>
                            <h5>Integrated Timber Company</h5>
                            <Carousel responsive={responsive} infinite={true} className="skills-slider">
                                <div className="item">
                                    <p>Information Technology Intern</p>
                                </div>
                                <div className="item">
                                    <p>Aug 2022 - Dec 2022</p>
                                </div>
                                <div className="item">
                                    <p>Bhunya, Manzini, Eswatini</p>
                                </div>
                                <div className="item">
                                    <p>Information Technology Intern</p>
                                </div>
                                <div className="item">
                                    <p>Feb 2017 - Feb 2020 *</p>
                                    <p>
                                        * After completing high school in 2016, I interned at Montigny from February to July 2017. Started university at August of the same year. 
                                        During my university holidays I interned at the company until February 2020 before COVID-19 arrived in Eswatini. Resumed my internship August 2022.
                                    </p>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}