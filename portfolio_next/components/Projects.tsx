import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs, faHtml5, faCss3, faPhp } from '@fortawesome/free-brands-svg-icons'
import exp from 'constants';


const Projects = () => {

return (
<section className="projects" id="projects">
<div className="projects-content">
  <h2 className="animated-title">Here's some of my latest projects.</h2>
  <div className="projects-grid">
  <div className="project-card">
      <h3>Simple CRUD Php - 2024</h3>
      <p>A CRUD Php to train myself in PHP made in year 2 in my school</p>
      <img className='project-img' src="./img/PhpCrud.png" alt=""></img>
      <div className="bottom-card">
      <div className='project-btn'>
        <a href="#" className="project-link">View Project</a>
        <img src="./img/uprarr.png" alt="" />
      </div>
      <div className='tech-project'>
          <FontAwesomeIcon icon={faPhp} /> 
          <FontAwesomeIcon icon={faCss3} />
        </div>
      </div>
    </div>
    <div className="project-card">
      <h3>Weather App - 2024</h3>
      <p>A weather application made as a side project thanks to tutorials to improve my knowledge in JS</p>
      <img className='project-img' src="./img/WeatherApp.png" alt=""></img>
      <div className="bottom-card">
      <div className='project-btn'>
        <a href="https://17sx.github.io/WeatherAPP/" className="project-link">View Project</a>
        <img src="./img/uprarr.png" alt="" />
      </div>
      <div className='tech-project'>
          <FontAwesomeIcon icon={faJs} /> 
          <FontAwesomeIcon icon={faHtml5} /> 
          <FontAwesomeIcon icon={faCss3} />
        </div>
      </div>
    </div>
    <div className="project-card">
      <h3>Simple CRUD Php - 2024</h3>
      <p>A CRUD Php to train myself in PHP made in year 2 in my school</p>
      <img className='project-img' src="./img/PhpCrud.png" alt=""></img>
      <div className="bottom-card">
      <div className='project-btn'>
        <a href="#" className="project-link">View Project</a>
        <img src="./img/uprarr.png" alt="" />
      </div>
      <div className='tech-project'>
          <FontAwesomeIcon icon={faPhp} /> 
          <FontAwesomeIcon icon={faCss3} />
        </div>
      </div>
    </div>
    <div className="project-card">
      <h3>Harry's Card's - 2023</h3>
      <p>A simple project of card exchange and request to an API made in year 1 in my school, with quite a few flaws</p>
      <img className='project-img' src="./img/Harrycards.png" alt=""></img>
      <div className="bottom-card">
      <div className='project-btn'>
        <a href="#" className="project-link">View Project</a>
        <img src="./img/uprarr.png" alt="" />
      </div>
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