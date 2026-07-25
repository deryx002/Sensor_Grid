import "./Testimonials.css";
import { Star } from "lucide-react";

const TestimonialCard = ({
  name,
  company,
  service,
  rating,
  quote,
  icon: Icon,
}) => {
  return (
    <article className="testimonial-card">
      <div className="testimonial-icon">
        <Icon size={24} />
      </div>

      <div className="testimonial-rating">
        {[...Array(rating)].map((_, index) => (
          <Star
            key={index}
            size={16}
            fill="currentColor"
          />
        ))}
      </div>

      <p className="testimonial-quote">
        "{quote}"
      </p>

      <div className="testimonial-footer">
        <div className="testimonial-avatar">
          {name.charAt(0)}
        </div>

        <div>
          <h4>{name}</h4>
          <span>{company}</span>
          <small>{service}</small>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;