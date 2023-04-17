import React from 'react'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {SiFreelancer} from 'react-icons/si'
import {GiTeacher} from 'react-icons/gi'
import {RiEnglishInput} from 'react-icons/ri'
import {FaGraduationCap} from 'react-icons/fa'
import {GrTechnology} from 'react-icons/gr'
import {FcSupport} from 'react-icons/fc'

const Timeline = () => {
  return (
    <section id='Timeline'>
      <h5>Timeline of what I have been doing</h5>
      <h2>Timeline</h2>
      <div className='job-timeline'>

      <VerticalTimeline>

      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#00203FFF', color: '#ADEFD1FF', borderRadius: '2rem' }}
          contentArrowStyle={{ borderRight: '7px solid  rgba(77, 181, 255, 0.4)' }}
          date="2023 - Present"
          iconStyle={{ background: '#00203FFF', color: '#fff' }}
          icon={<FcSupport />}
        >
          <h3 className="vertical-timeline-element-title">Technical Support Representative</h3>
          <h4 className="vertical-timeline-element-subtitle">Support Ninja</h4>
          <p>
            NodeJS, ReactJS, Technical Support, HTML, CSS, JSON
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#00203FFF', color: '#ADEFD1FF', borderRadius: '2rem' }}
          contentArrowStyle={{ borderRight: '7px solid  rgba(77, 181, 255, 0.4)' }}
          date="2022 - 2023"
          iconStyle={{ background: '#00203FFF', color: '#fff' }}
          icon={<SiFreelancer />}
        >
          <h3 className="vertical-timeline-element-title">Freelance Front-end Web Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">WRTH Digital</h4>
          <p>
            HTML, CSS, JS, Landing Pages, Wix, GoHighLevel, Wordpress 
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#00203FFF', color: '#ADEFD1FF', borderRadius: '2rem' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2018 - 2022"
          iconStyle={{ background: '#00203FFF', color: '#fff' }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">Graduated Master in Information Technology</h3>
          <h4 className="vertical-timeline-element-subtitle">Master Degree</h4>
          <p>
            Graduated in Master in Information Technology as part of the requirements to be a professor in the University. 
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#00203FFF', color: '#ADEFD1FF', borderRadius: '2rem' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2018 - 2022"
          iconStyle={{ background: '#00203FFF', color: '#fff' }}
          icon={<GiTeacher />}
        >
          <h3 className="vertical-timeline-element-title">IT Professor</h3>
          <h4 className="vertical-timeline-element-subtitle">University of the Cordilleras, Governor Pack Road, Baguio City</h4>
          <p>
            IT Courses, Syllabus Creation, Fullstack Web Development
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#00203FFF', color: '#ADEFD1FF', borderRadius: '2rem' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2018 - 2018"
          iconStyle={{ background: '#00203FFF', color: '#fff' }}
          icon={<RiEnglishInput />}
        >
          <h3 className="vertical-timeline-element-title">ESL Teacher</h3>
          <h4 className="vertical-timeline-element-subtitle">Acadsoc</h4>
          <p>
            English as a Second Language teacher
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{background: '#00203FFF', color: '#ADEFD1FF', borderRadius: '2rem' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2018 - 2018"
          iconStyle={{ background: '#00203FFF', color: '#fff' }}
          icon={<GrTechnology />}
        >
          <h3 className="vertical-timeline-element-title">IT Staff</h3>
          <h4 className="vertical-timeline-element-subtitle">Commission in Higher Education</h4>
          <p>
            Fullstack Web Development, Server Maintenance, Website Deployment
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{background: '#00203FFF', color: '#ADEFD1FF', borderRadius: '2rem' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2018 - 2018"
          iconStyle={{ background: '#00203FFF', color: '#fff' }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">Graduated Bachelor of Science in Information Technology Major in Web Technologies</h3>
          <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
          <p>
            Fullstack Web Development, Multimedia Designs, Game Development, Audio Editing, Video Editing
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<SiFreelancer />}
        />
      </VerticalTimeline>
      </div>
          </section>
          

  )
}

export default Timeline