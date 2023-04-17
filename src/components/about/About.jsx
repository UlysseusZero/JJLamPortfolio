import React from 'react'
import './about.css'
import ME from '../../assets/The Great Ulysseus Zero1.png'
import {FaAward} from 'react-icons/fa'
import {IoMdSchool} from 'react-icons/io'
import {GrProjects} from 'react-icons/gr'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know me</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
            <div className="about_cards">
              <article className='about_card'>
                  <FaAward className='about_icon' />
                  <h5>Experience</h5>
                  <small>3+ Working Years</small>
              </article>

              <article className='about_card'>
                  <IoMdSchool className='about_icon' />
                  <h5>Highest Education attained</h5>
                  <small>Master in Information Technology</small>
              </article>

              <article className='about_card'>
                  <GrProjects className='about_icon' />
                  <h5>Projects</h5>
                  <small>4 Completed</small>
              </article>
            </div>
            <p>Meet Jan Jefferson, a seasoned IT professional with extensive experience in website and application development using HTML, CSS, JavaScript, and various frameworks, including ReactJS, NodeJS, and Bootstrap. Jan is skilled in software development tools such as Java, C++, and C#, as well as database management using MySQL, NoSQL, and Firebase. With a passion for creating and deploying systems, managing databases, and providing technical support, Jan has published research on establishing the syntactic rules of the Kankana-ey dialect using TensorFlow and even created a mobile application for barter trading. In his free time, Jan enjoys doing podcasting and streaming. He also has a strong ability to teach and develop curriculum, as well as collaborate with team members and clients. </p>


            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About