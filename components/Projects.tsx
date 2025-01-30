import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs, faHtml5, faCss3, faPhp, faCss } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'; 
import Image from 'next/image';


const Projects = () => {
  const [showMore, setShowMore] = useState(false);

return (
<section className="projects" id="projects">
<div className="projects-content">
  <h2 className="animated-title">Here&apos;s some of my latest projects.</h2>
  <div className="projects-grid">
  <div className="project-card">
      <h3>ToDoList - 2024</h3>
      <p>A task management web application built with JavaScript, TypeScript, and CSS, integrated with Supabase database for efficient data handling and storage.</p>
      <Image className='project-img' src="./img/Todo.png" alt=""/>
      <div className="bottom-card">
      <div className='project-btn'>
        <a href="https://github.com/17Sx/ToDoList_IIMA2" className="project-link">View Project</a>
        <Image src="./img/uprarr.png" alt="" />
      </div>
      <div className='tech-project'>
          <FontAwesomeIcon icon={faHtml5} /> 
          <FontAwesomeIcon icon={faCss3} />
          <Image className='iconimg' src="./img/ts.png" alt="" />
        </div>
      </div>
    </div>
    <div className="project-card">
      <h3>PokemonFightPHP - 2024</h3>
      <p>A school project created with a friend to simulate battles between Pokémon. The technologies used are: PHP OO, PDO & MVC.</p>
      <Image className='project-img' src="./img/PokeFight.png" alt=""/>
      <div className="bottom-card">
      <div className='project-btn'>
        <a href="https://github.com/Noootzzz/PokemonFightsPHP" className="project-link">View Project</a>
        <Image src="./img/uprarr.png" alt="" />
      </div>
      <div className='tech-project'>
          <FontAwesomeIcon icon={faHtml5} /> 
          <FontAwesomeIcon icon={faCss3} />
          <Image className='iconimg' src="./img/ts.png" alt="" />
        </div>
      </div>
    </div>
    <div className="project-card">
      <h3>First Portfolio - 2024</h3>
      <p>This project showcases my first personal website portfolio, highlighting my skills and experiences as a developer and my first step to learn ThreeJS. While functional and professional, it has some minor areas for improvement in responsive design and user interaction.</p>
      <Image className='project-img' src="./img/Portfolio2024.png" alt=""/>
      <div className="bottom-card">
      <div className='project-btn'>
        <a href="https://github.com/17Sx/ToDoList_IIMA2" className="project-link">View Project</a>
        <Image src="./img/uprarr.png" alt="" />
      </div>
      <div className='tech-project'>
          <FontAwesomeIcon icon={faHtml5} /> 
          <FontAwesomeIcon icon={faJs} />
          <Image className='iconimg' src="./img/Sass.png" alt="" />
          <Image className='iconimg' src="./img/threejs.png" alt="" />
        </div>
      </div>
    </div>
    <div className="project-card">
      <h3>Weather App - 2024</h3>
      <p>A weather application made as a side project thanks to tutorials to improve my knowledge in JS</p>
      <Image className='project-img' src="./img/WeatherApp.png" alt=""/>
      <div className="bottom-card">
      <div className='project-btn'>
        <a href="https://17sx.github.io/WeatherAPP/" className="project-link">View Project</a>
        <Image src="./img/uprarr.png" alt="" />
      </div>
      <div className='tech-project'>
          <FontAwesomeIcon icon={faJs} /> 
          <FontAwesomeIcon icon={faHtml5} /> 
          <FontAwesomeIcon icon={faCss3} />
        </div>
      </div>
    </div>
    {showMore && (
            <>
    <div className="project-card">
      <h3>Simple CRUD Php - 2024</h3>
      <p>A CRUD Php to train myself in PHP made in year 2 in my school</p>
      <Image className='project-img' src="./img/PhpCrud.png" alt=""/>
      <div className="bottom-card">
      <div className='project-btn'>
        <a href="#" className="project-link">View Project</a>
        <Image src="./img/uprarr.png" alt="" />
      </div>
      <div className='tech-project'>
          <FontAwesomeIcon icon={faPhp} /> 
          <FontAwesomeIcon icon={faCss3} />
        </div>
      </div>
    </div>
    <div className="project-card">
      <h3>Harry&apos;s Card&apos;s - 2023</h3>
      <p>A simple project of card exchange and request to an API made in year 1 in my school, with quite a few flaws</p>
      <Image className='project-img' src="./img/Harrycards.png" alt=""/>
      <div className="bottom-card">
      <div className='project-btn'>
        <a href="#" className="project-link">View Project</a>
        <Image src="./img/uprarr.png" alt="" />
      </div>
      <div className='tech-project'>
          <FontAwesomeIcon icon={faJs} /> 
          <FontAwesomeIcon icon={faHtml5} /> 
          <FontAwesomeIcon icon={faCss3} />
        </div>
      </div>
    </div>
  </>
  )}

  </div>

</div>
<button 
          className="see-more-btn" 
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? 'Show Less' : 'See more'}
        </button>
</section>

);
}

export default Projects;