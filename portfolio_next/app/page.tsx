"use client";

import Skills from '@/components/Skills';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Header from '@/components/Header';
import Scene from '@/components/Scene';
import LoadingPage from '@/components/LoadingPage'; 

import styles from './page.module.css';


import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPython,
  faJs,
  faHtml5,
  faPhp,
  faCss3,
  faBootstrap,
  faGit,
  faGithub,
  faFigma,
  faReact,
  faSass,
} from '@fortawesome/free-brands-svg-icons';

import {
  faArrowDown,
} from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const sceneRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const [sceneText, setSceneText] = useState(" ");
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);


  useEffect(() => {
    if (!isLoading) {
      gsap.registerPlugin(ScrollTrigger);

      gsap.to(".arrow-path path", {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ".arrow-down",
          start: "top center",
          end: "bottom center",
          scrub: 2
        }
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "main",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          markers: true,
          onUpdate: (self) => {
            if (self.progress < 0.25) {
              setSceneText("");
            } else if (self.progress < 0.5) {
              setSceneText("Who am I?");
            } else if (self.progress < 0.70) {
              setSceneText(" ");
            } else if (self.progress < 0.78) {
              setSceneText("What can I do?");
            } else {
              setSceneText(" ");
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
        })
        .to(".scene-container", {
          left: "30%",
        })


        gsap.fromTo(".arrow-down img", 
          {
            clipPath: "inset(0 0 100% 0)" 
          },
          {
            clipPath: "inset(0 0 0% 0)", 
            scrollTrigger: {
              trigger: ".arrow-down",
              start: "top center",
              end: "center center",
              scrub: 5, // Increase scrub value for slower animation
            }
          }
        );
    

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

      gsap.from("#projects .projects-content", {
        opacity: 0,
        x: 0,
        scrollTrigger: {
          trigger: "#projects",
          start: "top center",
          end: "top top",
          scrub: 1
        }
      });

      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, [isLoading]);


  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    
<main className={styles.main}>
  <section className="top" id="home">
    <Header />
    <div className="scene-container" ref={sceneRef}>
      <Scene  text={sceneText} />
    </div>
  </section>
  <About/>
  <section className="arrow-down">
      {/*<FontAwesomeIcon icon={faArrowDown} size="2x" />*/}
      <img src="img/arr.png" alt="" />
  </section>
  <Skills/>
  <Projects/>
</main>
  );
}
