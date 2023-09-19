import Header from './Header';
import { useNavigate } from 'react-router-dom';
import Project from './Project'
import About from './About'

import { Link, Element } from "react-scroll";


function Home() {
  return (
    <div className='h-screen bg-black bg-no-repeat bg-cover bg-center'>
      <Element name="header">
        <Header id="header" />
      </Element>

      <Element name="project">
        <Project />
      </Element>

      <Element name="about">
        <About />
      </Element>

    </div >
  )
}


export default Home
