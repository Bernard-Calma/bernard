import './App.css';
import Footer from './components/Footer';
import AboutMe from './containers/AboutMe';
import Experience from './containers/Experience';
import Projects from './containers/Projects';

const App = () => {
  return (
    <div className='App'>
      App
      <AboutMe />
      <Experience />
      <Projects />
      <Footer />
    </div>
  )
}
export default App;
