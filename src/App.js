import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projets } from './components/Projects';
import { Honours } from './components/Honours';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { ArrowUpCircle } from "react-bootstrap-icons";

function App() {
    // The back-to-top button 
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
          if (window.pageYOffset > 300) {
            setShowButton(true);
          } else {
            setShowButton(false);
          }
        });
      }, [])

    // Scroll the window to the top 
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        })
    }  

    return (
        <div className="App">
            <NavBar />
            <Banner />
            <Skills />
            <Projets />
            <Honours />
            <Education />
            <Experience />
            <Contact />
            {showButton && (
                <button onClick={scrollToTop} className="back-to-top">
                    <ArrowUpCircle />
                </button>
            )}
            <Footer />
        </div>
    );
}

export default App