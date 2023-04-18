import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import HandshakeIcon from '@mui/icons-material/Handshake';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';

export const Contact = () => {
    const formInitialDetails = {
        name: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails)
    const [buttonText, setButtonText] = useState('Send')
    const [status, setStatus] = useState({})

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending...')
        let response = await fetch('http://localhost:5000/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json;charset=utf-8',
            },
            body: JSON.stringify(formDetails)
        });
        setButtonText('Send');
        let result = response.json();
        setFormDetails(formInitialDetails);
        if (result.code === 200) {
            setStatus({ success: true, message: 'Message sent successfully' });
        } else {
            setStatus({ success: false, message: 'Message not sent, please try again' })
        }
    };

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
                        <h3><ForwardToInboxIcon  /> Email Me Right Away</h3>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" 
                                           value={formDetails.name} 
                                           placeholder="Name" 
                                           onChange={(e) => onFormUpdate('name', e.target.value)} 
                                    />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" 
                                           value={formDetails.email} 
                                           placeholder="Email Address" 
                                           onChange={(e) => onFormUpdate('email', e.target.value)} 
                                    />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" 
                                           value={formDetails.phone} 
                                           placeholder="Phone Number" 
                                           onChange={(e) => onFormUpdate('phone', e.target.value)} 
                                    />
                                </Col>
                                <Col>
                                    <textarea 
                                           rows="6" 
                                           value={formDetails.message} 
                                           placeholder="Message" 
                                           onChange={(e) => onFormUpdate('message', e.target.value)} 
                                    />
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message && 
                                    <Col>
                                       <p className={status.success === false ? 'danger' : 'success'}>{status.message}</p> 
                                    </Col>
                                }
                            </Row>
                        </form>
                    </div>
                </div>
            </Container>
        </section>
    )
} 