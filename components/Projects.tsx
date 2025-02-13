import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs, faHtml5, faCss3, faPhp, faCss } from '@fortawesome/free-brands-svg-icons'
import TiltedCard from '@/components/TiltedCard/TiltedCard';
import { useState } from 'react'; 
import Image from 'next/image';


const Projects = () => {
  const [showMore, setShowMore] = useState(false);

return (
<section className="projects" id="projects">
<div className="projects-content">
  <h2 className="animated-title">Here&apos;s some of my latest projects.</h2>
  <div className="projects-grid">
    <TiltedCard
                imageSrc="/img/Todo.png"
                altText="ToDoList - 2024"
                captionText="A task management web application built with JavaScript, TypeScript, and CSS, integrated with Supabase database for efficient data handling and storage."
                containerHeight="300px"
                containerWidth="350px"
                imageHeight="300px"
                imageWidth="350px"
                rotateAmplitude={10}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text">
                    ToDoList - 2024
                  </p> as any
                }
                linkUrl={"https://github.com/Noootzzz/PokemonFightsPHP"} 
              />

    <TiltedCard
                imageSrc="/img/PokeFight.png"
                altText="PokemonFightPHP - 2024"
                captionText="A school project created with a friend to simulate battles between Pokémon. The technologies used are: PHP OO, PDO & MVC."
                containerHeight="300px"
                containerWidth="350px"
                imageHeight="300px"
                imageWidth="350px"
                rotateAmplitude={10}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text">
                    PokemonFightPHP - 2024
                  </p> as any
                }
                linkUrl={"https://github.com/Noootzzz/PokemonFightsPHP"} 
              />

    <TiltedCard
                imageSrc="/img/Portfolio2024.png"
                altText="First Portfolio - 2024"
                captionText="This project showcases my first personal website portfolio, highlighting my skills and experiences as a developer and my first step to learn ThreeJS. While functional and professional, it has some minor areas for improvement in responsive design and user interaction."
                containerHeight="300px"
                containerWidth="350px"
                imageHeight="300px"
                imageWidth="350px"
                rotateAmplitude={10}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text">
                    First Portfolio - 2024
                  </p> as any
                }
                linkUrl={"https://17sx.github.io/Portfolio_2024/"} 
              />
    <TiltedCard
                imageSrc="/img/WeatherApp.png"
                altText="Weather App - 2024"
                captionText="A weather application made as a side project thanks to tutorials to improve my knowledge in JS"
                containerHeight="300px"
                containerWidth="350px"
                imageHeight="300px"
                imageWidth="350px"
                rotateAmplitude={10}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text">
                    Weather App - 2024
                  </p> as any
                }
                linkUrl={"https://17sx.github.io/WeatherAPP/"} 
              />
                            <TiltedCard
                imageSrc="/img/PhpCrud.png"
                altText="Simple CRUD Php - 2024"
                captionText="A CRUD Php to train myself in PHP made in year 2 in my school"
                containerHeight="300px"
                containerWidth="350px"
                imageHeight="300px"
                imageWidth="350px"
                rotateAmplitude={10}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text">
                    Simple CRUD Php - 2024
                  </p> as any
                }
                linkUrl={"https://github.com/17Sx/ProjetD-axe2024/"} 
              />
              <TiltedCard
                imageSrc="/img/Harrycards.png"
                altText="Harry&apos;s Card&apos;s - 2023"
                captionText="A simple project of card exchange and request to an API made in year 1 in my school, with quite a few flaws"
                containerHeight="300px"
                containerWidth="350px"
                imageHeight="300px"
                imageWidth="350px"
                rotateAmplitude={10}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text">
                    Harry&apos;s Card&apos;s - 2023
                  </p> as any
                }
                linkUrl={"https://github.com/17Sx/ProjetD-axe2024/"} 
              />

  </div>

</div>
</section>

);
}

export default Projects;