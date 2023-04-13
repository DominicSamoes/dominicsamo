import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 2
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
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>

                            <hr className="line" />
                            
                            <h4>Technical Skills</h4>
                            <Carousel responsive={responsive} infinite={true} className="skills-slider">
                                <div className="item">
                                    <p>Languages: Python, Java, C++, C, Haskell, PHP and JavaScript</p>
                                </div>
                                
                                <div className="item">
                                    <p>Backend and Frontend Engineering</p>
                                </div>
                                <div className="item">
                                    <p>Databases: MongoDB, MySQL and PostgreSQL</p>
                                </div>
                                <div className="item">
                                    <p>Operating Systems: Linux and Microsoft</p>
                                </div>
                                <div className="item">
                                    <p>Data Analysis</p>
                                </div>
                                <div className="item">
                                    <p>Tools: Android Studio, Jupyter Notebook, Postman and Git</p>
                                </div>
                                <div className="item">
                                    <p>Databases: MongoDB, MySQL andPostgreSQL</p>
                                </div>
                                <div className="item">
                                    <p>Web: Flask, Mongoose, Node, React, Express, Sass, CSS and HTML5</p>
                                </div>
                                <div className="item">
                                    <p>Writing: LaTex and Markdown</p>
                                </div>
                                <div className="item">
                                    <p>MS Office: Word, Excel, Powerpoint, Outlook and Access</p>
                                </div>
                                <div className="item">
                                    <p>Productivity: Slack and Teams</p>
                                </div>
                                <div className="item">
                                    <p>Financial Analysis</p>
                                </div>
                                <div className="item">
                                    <p>
                                        Research: Source checking, intellectual property rights and
                                         advanced search engine search
                                    </p>
                                </div>
                            </Carousel>

                            <hr className="line" />

                            <h4>Soft Skills</h4>
                            <Carousel responsive={responsive} infinite={true} className="skills-slider">
                                <div className="item">
                                    <p>Artistic abilities</p>
                                </div>
                                <div className="item">
                                    <p>Critical thinking</p>
                                </div>
                                <div className="item">
                                    <p>Digital literacy</p>
                                </div>
                                <div className="item">
                                    <p>Professional attitude</p>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}