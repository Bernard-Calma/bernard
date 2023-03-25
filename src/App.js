import { useEffect } from 'react';
import './App.css';
import Footer from './components/Footer';
import AboutMe from './containers/AboutMe';
import Contact from './containers/Contact';
import Experience from './containers/Experience';
import Header from './containers/Header';
import Projects from './containers/Projects';
import Skills from './containers/Skills';

const App = () => {

  useEffect(()=>{
    window.addEventListener('scroll', () => {
      var reveals = document.querySelectorAll(".reveal");

      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        var elementHide = elementTop + 2000;

        if (elementTop < windowHeight - elementVisible && elementTop + 500 > windowHeight - elementHide) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    })
  }, [])
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
