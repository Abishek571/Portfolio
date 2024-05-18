import React from "react";
import './portfolio.css'
import IMG1 from '../../assests/portfolio1.jpg'
 import IMG2 from '../../assests/portfolio2.jpg'
 import IMG3 from '../../assests/portfolio3.jpg'
 import IMG4 from '../../assests/portfolio4.jpg'
 import IMG5 from '../../assests/portfolio5.png'
 import IMG6 from '../../assests/portfolio6.jpg'



 

const data =[

{
id:1,
image:IMG1,
title:'Charts infographics & templates in figma',
github:'https://github.com',
demo:'https://dribbble.com/shots/22697653-Orion-UI-kit-design-system-for-Figma'
},

{
id:2,
image:IMG2,
title:'Charts infographics & templates in figma',
github:'https://github.com',
demo:'https://dribbble.com/shots/22697653-Orion-UI-kit-design-system-for-Figma'
},

{
id:3,
image:IMG3,
title:'Charts infographics & templates in figma',
github:'https://github.com',
demo:'https://dribbble.com/shots/22697653-Orion-UI-kit-design-system-for-Figma'
},

{
id:4,
image:IMG4,
title:'Charts infographics & templates in figma',
github:'https://github.com',
demo:'https://dribbble.com/shots/22697653-Orion-UI-kit-design-system-for-Figma'
},

{
id:5,
image:IMG5,
title:'Charts infographics & templates in figma',
github:'https://github.com',
demo:'https://dribbble.com/shots/22697653-Orion-UI-kit-design-system-for-Figma'
},

{
id:6,
image:IMG6,
title:'Charts infographics & templates in figma',
github:'https://github.com',
demo:'https://dribbble.com/shots/22697653-Orion-UI-kit-design-system-for-Figma'
}
]


const Portfolio = () => {
  return (

    <section id="portfolio">

      <h5> My recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {/* it is the declaration of the array map function in javascript */}

        {
         data.map( ({id,image,title,github,demo}) =>{

          return(

          <article className="portfolio__items">

          <div className="portfolio__items-images">
            <img src={image} alt={title}></img>
          </div>

          <h3>{title}</h3>


          <div className="portfolio__items-cta">
          <a href={github} className="btn" rel="noopener noreferrer" > Github </a>
          <a href={demo} className="btn btn-primary" target='_blank' rel="noopener noreferrer"> Live Demo</a>
          </div>
        
          </article>

          )

        })
        }


        </div>

    </section>
    
  );
};


export default Portfolio;
