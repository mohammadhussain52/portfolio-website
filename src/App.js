import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Navbar/Intro/intro';
import Skills from './components/Navbar/Skills/skills';
import Works from './components/Works/works';
import Resume from './components/Resume/resume';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Intro></Intro>
      <Skills></Skills>
      <Works></Works>
      <Resume></Resume>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App

