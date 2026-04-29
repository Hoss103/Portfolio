import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarr from './components/navBar';
import Bannerr from './components/banner';
import { Skills } from './components/Skills';
import { Projects } from './components/projects';
import { Contact } from './components/Contact';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBarr />
      <Bannerr />
      <Skills />
      <Projects />
      <Contact />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;