import "./Technologies.css";
import TechCard from "./TechCard";
import { technologies } from "./technologiesData";

const Technologies = () => {
  return (
    <section className="technologies section">
      <div className="container">

        <div className="section-heading">
          <span className="section-badge">
            Technologies
          </span>

          <h2>
            Technologies We Trust
          </h2>

          <p>
            We build modern digital products using reliable,
            scalable and industry-proven technologies for web,
            IoT and creative design.
          </p>
        </div>

        <div className="tech-grid">
          {technologies.map((tech) => (
            <TechCard
              key={tech.id}
              {...tech}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Technologies;