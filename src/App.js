import './App.css';
import { useEffect, useState, lazy, Suspense } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { LoadingSpinner } from './Spinner';
import { ArrowUpCircle } from "react-bootstrap-icons";
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
const Banner = lazy(() =>
  import('./components/Banner').then(module => ({
    default: module.Banner
  })));
const Skills = lazy(() => 
  import('./components/Skills').then(module => ({
    default: module.Skills
  })));
const Projects = lazy(() => 
  import('./components/Projects').then(module => ({
    default: module.Projects
  })));
const Honours = lazy(() =>
 import ('./components/Honours').then(module => ({
  default: module.Honours
 })));
const Education = lazy(() => 
  import('./components/Education').then(module => ({
    default: module.Education
  })));
const Experience = lazy(() => 
  import('./components/Experience').then(module => ({
    default: module.Experience
  })));
const Contact = lazy(() =>
 import('./components/Contact').then(module => ({
    default: module.Contact
 })));

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
            <Suspense fallback={<LoadingSpinner />}>
              <Banner />
            </Suspense>
            <Suspense fallback={<LoadingSpinner />}>
              <Skills />
            </Suspense>
             <Suspense fallback={<LoadingSpinner />}>
              <Projects />
            </Suspense>
            <Suspense fallback={<LoadingSpinner />}>
              <Honours />
            </Suspense>
            <Suspense fallback={<LoadingSpinner />}>
              <Education />
            </Suspense>
            <Suspense fallback={<LoadingSpinner />}>
              <Experience />
            </Suspense>
            <Suspense fallback={<LoadingSpinner />}>
              <Contact />
            </Suspense> 
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