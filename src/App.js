import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar.js'
import { Banner } from './components/Home.js'
import { Skills } from './components/Skills.js'
import { Projects } from './components/Projects.js'
import { Contact } from './components/Contact.js'
// import { NewsLetter } from './components/NewsLetter.js'
import { Footer } from './components/Footer.js'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <div className="App">
            <NavBar/>
            <Banner/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
