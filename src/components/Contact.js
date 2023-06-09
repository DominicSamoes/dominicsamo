import { Container } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/kaggle-icon.svg';
import navIcon5 from '../assets/img/zindiLogo_result.webp';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import HandshakeIcon from '@mui/icons-material/Handshake';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';


export const Contact = () => {
    return (
        <section className="contact" id="contact">
            <Container>
                <div className="row">
                    <h2>Contact</h2>
                    <div className="col">
                        <h3><HandshakeIcon /> Connect With Me</h3>
                        <p>I am active on LinkedIn, GitHub and Medium.</p>
                        <div className="social-icon-contact">
                            <a href="https://www.linkedin.com/in/dominic-samo-754014187/" rel="opener"><img src={navIcon1} alt="" /></a>
                            <a href="https://github.com/DominicSamoes" rel="opener"><img src={navIcon2} alt="" /></a>
                            <a href="https://medium.com/@dominicsamo" rel="opener"><img src={navIcon3} alt="" /></a>
                        </div>
                        <h4><PhoneInTalkIcon /> <a href="tel:+26879760400" className="a">+268 7976 0400</a></h4>
                        <h4><EmailIcon /> <a href="mailto:samoxcorp@gmail.com" className="a">samoxcorp@gmail.com</a></h4>
                    </div>
                    <div className="col">
                        <h3><ForwardToInboxIcon  /> Data Science Sites</h3>
                        <p>I am active on Data Science Sites Kaggle and Zindi.</p>
                        <div className="social-icon-contact">
                            <a href="https://www.kaggle.com/dominicsamoes" rel="opener"><img src={navIcon4} alt="" /></a>
                            <a href="https://zindi.africa/users/DSamo" rel="opener"><img src={navIcon5} alt="" /></a>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
} 