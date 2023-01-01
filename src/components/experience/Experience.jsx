import React from 'react'
import './experience.css'
import { AiFillHtml5, AiFillCode } from 'react-icons/ai'
import { DiCss3, DiJavascript1, DiRedis, DiGit } from 'react-icons/di'
import { SiBootstrap, SiExpress, SiMongodb, SiPostman, SiAdobeaftereffects, SiAdobepremierepro, SiAdobephotoshop, SiAirplayvideo } from 'react-icons/si'
import { FaReact, FaNodeJs, FaAws } from 'react-icons/fa'
import { MdPermDataSetting } from 'react-icons/md'
import { BsGithub } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">

        <div className="experience__programming">
          <h3 >Programming</h3>
          <div className="experience__content">

            <article className="experience__details">
              <DiJavascript1 className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <MdPermDataSetting className='experience__details-icon' />
              <div>
                <h4>Data Structure and Algorithms</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <AiFillCode className='experience__details-icon' />
              <div>
                <h4>C</h4>
                <small className='text-light'>beginner</small>
              </div>
            </article>

          </div>
        </div>
        {/* end of Programming  */}

        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">

            <article className="experience__details">
              <AiFillHtml5 className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <DiCss3 className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <SiBootstrap className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <FaReact className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

          </div>
        </div>
        {/* end of Front End  */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">

            <article className="experience__details">
              <FaNodeJs className='experience__details-icon' />
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <SiExpress className='experience__details-icon' />
              <div>
                <h4>Express</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <SiMongodb className='experience__details-icon' />
              <div>
                <h4>Mongo DB</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <FaAws className='experience__details-icon' />
              <div>
                <h4>AWS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <DiRedis className='experience__details-icon' />
              <div>
                <h4>Redis</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <SiPostman className='experience__details-icon' />
              <div>
                <h4>Postman</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <DiGit className='experience__details-icon' />
              <div>
                <h4>Git</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsGithub className='experience__details-icon' />
              <div>
                <h4>GitHub</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

          </div>
        </div>
        {/* end of Back End  */}

        <div className="experience__editing">
          <h3>Visual Editing</h3>
          <div className="experience__content">

            <article className="experience__details">
              <SiAdobeaftereffects className='experience__details-icon' />
              <div>
                <h4>Adobe AfterEffects</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <SiAdobepremierepro className='experience__details-icon' />
              <div>
                <h4>Adobe Premier pro</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <SiAirplayvideo className='experience__details-icon' />
              <div>
                <h4>DaVinci Resolve</h4>
                <small className='text-light'>beginner</small>
              </div>
            </article>

            <article className="experience__details">
              <SiAdobephotoshop className='experience__details-icon' />
              <div>
                <h4>Adobe PhotoShop</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>

          </div>
        </div>


      </div>
    </section>
  )
}

export default Experience