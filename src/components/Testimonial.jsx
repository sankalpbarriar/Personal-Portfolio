import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonials">
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard
          name={"Sankalp"}
          feedback={"Great learner and person"}
        />
        <TestimonialCard
          name={"Sankalp"}
          feedback={"Great learner and person"}
        />
        <TestimonialCard
          name={"Sankalp"}
          feedback={"Great learner and person"}
        />

        
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;