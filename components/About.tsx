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
    <div className='resumeButton'>
      <a target="_blank" href="" className='resumeLink'>
        <span className='resumeText'>See my resume!</span>
        <Image src="img/uprarr.png" alt="" />  
      </a>
    </div>
  </div>
</div>
</section>

);
}

export default About;