import "./Hero.css";

const HeroCard = ({
  Icon,
  title,
  subtitle,
  tech,
  className,
}) => {
  return (
    <article className={`hero-card glass ${className}`}>
      <div className="hero-card-icon">
        <Icon size={28} strokeWidth={2} />
      </div>

      <h3>{title}</h3>

      <p>{subtitle}</p>

      <div className="hero-tech-list">
        {tech.map((item) => (
          <span
            key={item}
            className="hero-tech-pill"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
};

export default HeroCard;