import "./Testimonials.css";

import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./testimonialsData";

const Testimonials = () => {
  return (
    <section className="testimonials section">
      <div className="container">
        <div className="section-heading">
          <span className="section-badge">
            Testimonials
          </span>

          <h2>
            What Our Clients Say
          </h2>

          <p>
            We focus on building long-term relationships by
            delivering reliable software solutions and
            exceptional customer experiences.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;