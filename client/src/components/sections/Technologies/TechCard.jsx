import "./Technologies.css";

const TechCard = ({ logo, name, category }) => {
  return (
    <article className="tech-card glass">
      <img
        src={logo}
        alt={name}
        className="tech-logo"
        loading="lazy"
      />

      <h3>{name}</h3>

      <span>{category}</span>
    </article>
  );
};

export default TechCard;