import { Col } from "react-bootstrap"
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

export const SkillCard = ({ description, imgUrl }) => {
    return (
        <Col sm={6} md={6}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt="" />
                <div className="proj-txtx">
                    <h3>{description}</h3>
                </div>
            </div>
        </Col>
    )
}

export const ProjectCard = ({ title, description, imgUrl, url }) => {
    return (
        <Col sm={6} md={6}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt="" />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <h6>Project <a href={url} rel='opener'><AutoStoriesIcon /></a></h6>
                </div>
            </div>
        </Col>
    )
}

export const ProjectCardArt = ({ title, description, plans, imgUrl }) => {
    return (
        <Col sm={6} md={6}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt="" />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <span>{plans}</span>
                </div>
            </div>
        </Col>
    )
}

export const HonoursCard = ({ title, institution, date, description, imgUrl }) => {
    return (
        <Col sm={6} md={6}>
            <div className="hon-imgbx">
                <img src={imgUrl} alt="" />
                <div className="hon-txtx">
                    <h4>{title}</h4>
                    <h3>{institution}</h3>
                    <span>{description}</span>
                    <p>{date}</p>
                </div>
            </div>
        </Col>
    )
}

export const CertificateCard = ({ description, timeframe, imgUrl, link }) => {
    return (
        <Col sm={6} md={6}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt="" />
                <div className="proj-txtx">
                    <h4>{description}</h4>
                    <span>{timeframe}</span>
                    <h6>Verify <a href={link} rel='opener'><AutoStoriesIcon /></a></h6>
                </div>
            </div>
        </Col>
    )
}

export const DegreeCard = ({ institution, description, timeframe, imgUrl }) => {
    return (
        <Col sm={6} md={6}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt="" />
                <div className="proj-txtx">
                    <h4>{description}</h4>
                    <h5>{institution}</h5>
                    <span>{timeframe}</span>
                </div>
            </div>
        </Col>
    )
}