import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
        setScrolled(false);
        }
    }

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);

  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
{/*           <Navbar.Brand href="/">
            <p>Dominic Samo</p>
          </Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}><AutoStoriesIcon /></Nav.Link>
              {/* <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link> */}
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="#honours" className={activeLink === 'honours' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('honours')}>Honours & Awards</Nav.Link>
              <Nav.Link href="#education" className={activeLink === 'certificates' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('education')}>Education</Nav.Link>
              <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('education')}>Experience</Nav.Link>
              <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/dominic-samo-754014187/" rel="opener"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/DominicSamoes" rel="opener"><img src={navIcon2} alt="" /></a>
                <a href="https://medium.com/@dominicsamo" rel="opener"><img src={navIcon3} alt="" /></a>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}