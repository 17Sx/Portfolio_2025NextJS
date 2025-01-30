import { useRef } from 'react';
import Image from "next/image";

const About = () => {
const aboutRef = useRef<HTMLElement>(null);

return (
<section className="presentation" id="about" ref={aboutRef}>
<div className="presentation-content">
  <div className="presentation-text">
    <h2 className="animated-title">About Me</h2>
    <div className="animated-paragraph">
      Hi! I&apos;m Noa, i have 19 years old, and I&apos;m currently living in Paris, France. 
      I&apos;m a developer still in school! I&apos;m currently studying at the 
      <a target='blank' href="https://www.iim.fr/" className="highlight-link">
        ❝ IIM DIGITAL SCHOOL - La Défense in Paris ❞
      </a>
      , and i&apos;m always looking for new opportunities to learn and grow.
      I&apos;m really passionate about web development, and I&apos;m always looking 
      for new projects to work on. I&apos;m also a huge fan of design, and I love 
      to create beautiful and functional interfaces. I&apos;m currently looking for 
      an internship in web development, so if you&apos;re interested, feel free to
        <a className="highlight-link" href="#contact"> contact me!</a> 
    </div>
    <div className='resumeButton'>
      <a target="_blank" href="" className='resumeLink'>
        <span className='resumeText'>See my resume!</span>
        <Image src="/img/uprarr.png" alt="" width={24} height={24} />  
      </a>
    </div>
  </div>
</div>
</section>

);
}

export default About;