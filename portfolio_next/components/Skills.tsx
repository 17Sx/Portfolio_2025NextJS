  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faPython, faJs, faHtml5, faPhp, faReact, faBootstrap, faSass, faGit, faGithub, faFigma } from '@fortawesome/free-brands-svg-icons';
  import { useRef } from 'react';
  
  const Skills = () => {
    const skillsRef = useRef(null);
  
    return (
      <section className="skills" id="skills" ref={skillsRef}>
    <div className="skills-content">
      <h2 className="animated-title">Skills</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h3>Languages</h3>
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
          <h3>Frameworks</h3>
          <ul>
            <li className="skill-item">
              <FontAwesomeIcon icon={faReact} /> React/Next.js
            </li>
            <li className="skill-item">
              <FontAwesomeIcon icon={faBootstrap} /> Bootstrap
            </li>
            <li className="skill-item">
              <FontAwesomeIcon icon={faSass} /> Sass
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
          <h3>Tools & Platforms</h3>
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
          <h3>Databases</h3>
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
    );
  };
  
  export default Skills;
