"use client";

import styles from './page.module.css';
import Header from '@/components/Header';
import Scene from '@/components/Scene';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPython,
  faJs,
  faHtml5,
  faPhp,
  faNodeJs,
  faBootstrap,
  faGit,
  faGithub,
  faFigma,
  faReact,
  faSass,
} from '@fortawesome/free-brands-svg-icons';

import {
  faArrowDown,
  faCode,
  faDatabase,
  faTools,
  faLayerGroup,
} from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const sceneRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const [sceneText, setSceneText] = useState(" ");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "main",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        markers: true,
        onUpdate: (self) => {
          if (self.progress < 0.3) {
            setSceneText(" ");
          } else if (self.progress < 0.7) {
            setSceneText("About Me");
          } else {
            setSceneText("My Skills");
          }
        }
      }
    });
  
    timeline
      .fromTo(".scene-container", 
        {
          width: "100%",
          height: "100vh",
          position: "relative",
          top: "0",
          left: "0",
          transform: "none",
        },
        {
          width: "40%",
          height: "60vh",
          position: "fixed",
          top: "50%",
          left: "5%",
          transform: "translateY(-50%)",
        }
      )
      .to(".scene-container", {
        left: "55%",
      });
  
    gsap.from("#about .presentation-content", {
      opacity: 0,
      x: 100,
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
        end: "top top",
        scrub: 1
      }
    });
  
    gsap.from("#skills .skills-content", {
      opacity: 0,
      x: -100,
      scrollTrigger: {
        trigger: "#skills",
        start: "top center",
        end: "top top",
        scrub: 1
      }
    });
  
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  
  

  return (
    <main className={styles.main}>
      
      <section className="top" id="home">
        <Header />
        <div className="scene-container" ref={sceneRef}>
          <Scene  text={sceneText} />
        </div>
      </section>

      <section className="presentation" id="about" ref={aboutRef}>
        <div className="presentation-content">
          <div className="presentation-text">
            <h2 className="animated-title">About Me</h2>
            <div className="animated-paragraph">
              Hi! I'm Noa, i have 19 years old, and I'm currently living in Paris, France. 
              I'm a developer still in school! I'm currently studying at the 
              <a target='blank' href="https://www.iim.fr/" className="highlight-link">
                ❝ IIM DIGITAL SCHOOL - La Défense in Paris ❞
              </a>
              , and i'm always looking for new opportunities to learn and grow.
              I'm really passionate about web development, and I'm always looking 
              for new projects to work on. I'm also a huge fan of design, and I love 
              to create beautiful and functional interfaces. I'm currently looking for 
              an internship in web development, so if you're interested, feel free to
                <a className="highlight-link" href="#contact"> contact me!</a> 
            </div>
          </div>
        </div>
        </section>

        <section className="arrow-down">
            <FontAwesomeIcon icon={faArrowDown} size="2x" />
        </section>

        <section className="skills" id="skills" ref={skillsRef}>
  <div className="skills-content">
    <h2 className="animated-title">Skills</h2>
    <div className="skills-grid">
      <div className="skill-category">
        <h3><FontAwesomeIcon icon={faCode} /> Programming Languages</h3>
        <ul>
          <li className="skill-item">
            <FontAwesomeIcon icon={faPython} /> Python
          </li>
          <li className="skill-item">
            <FontAwesomeIcon icon={faJs} /> JS/TS
          </li>
          <li className="skill-item">
            <FontAwesomeIcon icon={faHtml5} /> HTML/CSS
          </li>
          <li className="skill-item">
            <FontAwesomeIcon icon={faPhp} /> PHP
          </li>
        </ul>
      </div>
      <div className="skill-category">
        <h3><FontAwesomeIcon icon={faLayerGroup} /> Frameworks & Libraries</h3>
        <ul>
          <li className="skill-item">
            <FontAwesomeIcon icon={faReact} /> React/Next.js
          </li>
          <li className="skill-item">
            <FontAwesomeIcon icon={faBootstrap} /> Bootstrap
          </li>
          <li className="skill-item">
            <FontAwesomeIcon icon={faSass} /> Sass/SCSS
          </li>
          <li className="skill-item">
            <FontAwesomeIcon icon={faNodeJs} /> Express.js
          </li>
          <li className="skill-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.00341 15.7279C3.79994 15.4069 3.79686 14.9982 3.99548 14.6741L11.4738 2.47545C11.8898 1.79696 12.8941 1.85628 13.2273 2.57901L20.0591 17.3988C20.3126 17.9487 20.0208 18.5957 19.4408 18.7697L8.81343 21.9579C8.38584 22.0862 7.92513 21.9143 7.68611 21.5372L4.00341 15.7279ZM12.3367 6.04224C12.4087 5.68338 12.9004 5.63163 13.0456 5.96762L17.7581 16.8721C17.8468 17.0774 17.7364 17.3142 17.5221 17.3781L10.1794 19.57C9.9095 19.6506 9.65096 19.4147 9.70642 19.1386L12.3367 6.04224Z" fill="black"/>
          </svg>
            Prisma
          </li>
        </ul>
      </div>
      <div className="skill-category">
        <h3><FontAwesomeIcon icon={faTools} /> Tools & Platforms</h3>
        <ul>
          <li className="skill-item">
            <FontAwesomeIcon icon={faGit} /> Git
          </li>
          <li className="skill-item">
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </li>
          <li className="skill-item">
            <FontAwesomeIcon icon={faFigma} /> Figma
          </li>
          <li className="skill-item">
            <i className="fas fa-code-branch"></i> VS Code
          </li>
        </ul>
      </div>
      <div className="skill-category">
        <h3><FontAwesomeIcon icon={faDatabase} /> Databases</h3>
        <ul>
          <li className="skill-item">
            <i className="fas fa-database"></i> MySQL
          </li>
          <li className="skill-item">
            <i className="fas fa-leaf"></i> SQLite
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

    </main>
  );
}
