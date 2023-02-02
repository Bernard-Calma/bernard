import './App.css';
import Footer from './components/Footer';
import AboutMe from './containers/AboutMe';
import Contact from './containers/Contact';
import Experience from './containers/Experience';
import Header from './containers/Header';
import Projects from './containers/Projects';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
export default App;
