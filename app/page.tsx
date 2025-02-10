"use client";

import Skills from '@/components/Skills';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Header from '@/components/Header';
import Scene from '@/components/Scene';
import LoadingPage from '@/components/LoadingPage'; 
import Footer from '@/components/Footer';
import Respsection from '@/components/Respsection';

import styles from './page.module.css';


import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';


export default function Home() {
  const sceneRef = useRef(null);
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
          scrub: 1
        }
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "main",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          markers: false,
          onUpdate: (self) => {
            if (self.progress < 0.25) {
              setSceneText(" ");
            } else if (self.progress < 0.35) {
              setSceneText("Who am I?");
            } else if (self.progress < 0.50) {
              setSceneText(" ");
            } else if (self.progress < 0.70) {
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
        transform: "translateY(-50%)",
          }
        )
        .to(".scene-container", {
          left: "0%",
        })
        .to(".scene-container", {
          left: "30%",
        })
        .to(".scene-container", {
          left: "60%",
        })
        .to(".scene-container", {
          left: "60%",
        })
        .to(".scene-container", {
          left: "30%",
        })
        .to(".scene-container", {
          top: "-10%",
        })


      gsap.from("#about .presentation-content", {
        opacity: 0,
        x: 100,
        scrollTrigger: {
          trigger: "#about",
          start: "top center",
          end: "top top",
          scrub: 2
        }
      });

      gsap.from("#skills .skills-content", {
        opacity: 0,
        x: -100,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
          end: "top top",
          scrub: 2
        }
      });

      gsap.from("#projects .projects-content", {
        opacity: 0,
        x: 0,
        scrollTrigger: {
          trigger: "#projects",
          start: "top center",
          end: "top top",
          scrub: 2
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
<Header />

  <div className="responsive-section-wrapper">
    <Respsection/>
  </div>
  <section className="top" id="home">
    <div className="scene-container" ref={sceneRef}>
      <Scene  text={sceneText} />
    </div>
  </section>
  <About/>
  <section className="arrow-down">
    <p>Keep Scrolling!</p>
  </section>
  <Skills/>
  <Projects/>
  <Footer/>
</main>
  ); 
  
}
 