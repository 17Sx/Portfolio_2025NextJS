import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs, faHtml5, faCss3 } from '@fortawesome/free-brands-svg-icons'
import exp from 'constants';


const Projects = () => {

return (
<section className="projects" id="projects">
<div className="projects-content">
  <h2 className="animated-title">Here's some of my latest projects.</h2>
  <div className="projects-grid">
    <div className="project-card">
      <h3>Project 1</h3>
      <p>A brief description of project 1. </p>
      <div className="bottom-card">
        <a href="#" className="project-link">View Project</a>
        <div className='tech-project'>
          {/* Technologies utilisées */}
        </div>
      </div>
    </div>
    <div className="project-card">
      <h3>Project 2</h3>
      <p>A brief description of project 2. </p>
      <div className="bottom-card">
        <a href="#" className="project-link">View Project</a>
        <div className='tech-project'>
          {/* Technologies utilisées */}
        </div>
      </div>
    </div>
    <div className="project-card">
      <h3>Project 3</h3>
      <p>A brief description of project 3. </p>
      <div className="bottom-card">
        <a href="#" className="project-link">View Project</a>
        <div className='tech-project'>
          {/* Technologies utilisées */}
        </div>
      </div>
    </div>
    <div className="project-card">
      <h3>Harry's Card's - 2023</h3>
      <p>A simple project of card exchange and request to an API made in year 1 in my school, with quite a few flaws</p>
      <img src="../img/Harrycards.png" alt=""></img>
      <div className="bottom-card">
        <a href="#" className="project-link">View Project</a>
        <div className='tech-project'>
          <FontAwesomeIcon icon={faJs} /> 
          <FontAwesomeIcon icon={faHtml5} /> 
          <FontAwesomeIcon icon={faCss3} />
        </div>
      </div>
    </div>
  </div>
</div>
</section>

);
}

export default Projects;