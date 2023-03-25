import './App.css';
import Footer from './components/Footer';
import AboutMe from './containers/AboutMe';
import Contact from './containers/Contact';
import Experience from './containers/Experience';
import Header from './containers/Header';
import Projects from './containers/Projects';
import Skills from './containers/Skills';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <AboutMe />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
export default App;
