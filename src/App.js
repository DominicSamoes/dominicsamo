import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projets } from './components/Projects';
import { Honours } from './components/Honours';
import { Education } from './components/Education';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <NavBar />
            <Banner />
            <Skills />
            <Projets />
            <Honours />
            <Education />
        </div>
    );
}

export default App