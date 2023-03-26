import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import AboutMe from './containers/AboutMe';
import Contact from './containers/Contact';
import Experience from './containers/Experience';
import Header from './containers/Header';
import Projects from './containers/Projects';
import Skills from './containers/Skills';

const App = () => {
  const [scrollBarView, setScrollBarView] = useState(false)
  const toggleScrollBar = () => {
    if (scrollBarView) {
      document.body.classList.add("hideScrollBar")
    } else {
      document.body.classList.remove("hideScrollBar")
    }
    setScrollBarView(!scrollBarView)
  }

  useEffect(()=>{
    window.addEventListener('scroll', () => {
      var reveals = document.querySelectorAll(".reveal");
      // console.log(reveals[3].offsetHeight)
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        var elementHide = reveals[i].offsetHeight + 150;

        if (elementTop < windowHeight - elementVisible && elementTop > windowHeight - elementHide) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    })
  }, [])
  return (
    <div className='App'>
      <p className='scrollBar' onClick={toggleScrollBar}>Scroll Bar</p>
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
