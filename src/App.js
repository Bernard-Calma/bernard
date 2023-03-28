import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import AboutMe from './containers/AboutMe';
import Contact from './containers/Contact';
import Experience from './containers/Experience';
import Header from './containers/Header';
import Projects from './containers/Projects';

const App = () => {

  const handleHideProject = (event) => {
    let projectToHide = document.querySelector(".front");
    let target = event.target;
    if (target !== projectToHide) projectToHide?.classList.remove('front')
  }

  useEffect(()=>{
    document.body.classList.add("hideScrollBar")
    window.addEventListener('scroll', () => {
      var reveals = document.querySelectorAll(".reveal");
      // console.log(reveals[3].offsetHeight)
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 50;
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
    <div className='App' onMouseUp={handleHideProject}>
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
