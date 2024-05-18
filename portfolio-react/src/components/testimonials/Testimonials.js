import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assests/avatar1.jpg";
import AVTR2 from "../../assests/avatar2.jpg";
import AVTR3 from "../../assests/avatar3.jpg";
import AVTR4 from "../../assests/avatar4.jpg";



const data = [
  {
    avatar: AVTR1,
    name: "Boopathy",
    review:
      "Do cillum cupidatat laboris adipisicing sit id commodo labore ea consequat qui eu consequat consectetur",
  },
  {
    avatar: AVTR2,
    name: "Aravind",
    review:
      "Do cillum cupidatat laboris adipisicing sit id commodo labore ea consequat qui eu consequat consectetur",
  },
  {
    avatar: AVTR3,
    name: "Avinash",
    review:
      "Do cillum cupidatat laboris adipisicing sit id commodo labore ea consequat qui eu consequat consectetur",
  },
  {
    avatar: AVTR4,
    name: "Rishi",
    review:
      "Do cillum cupidatat laboris adipisicing sit id commodo labore ea consequat qui eu consequat consectetur",
  },
];

const Testimonials = () => {
  return (
    <section>
      <h5> Review from the Clients</h5>
      <h2> Testimonials</h2>

      <div className="container testimonials__container">

        {data.map(({ avatar, name, review }, index) => {
          return (
            <article className="testimonials" >
              
              <div className="client__avatar">
                <img src={avatar} alt={review}></img>
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>

            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
