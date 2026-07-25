import "./Services.css";

const ServiceCard = ({
  title,
  description,
  features,
  icon: Icon,
  arrow: Arrow,
  button,
  color,
}) => {
  return (
    <article className={`service-card ${color}`}>
      <div className="service-icon">
        <Icon size={30} strokeWidth={2} />
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <ul className="service-features">
        {features.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <button className="service-btn">
        {button}

        <Arrow size={18} />
      </button>
    </article>
  );
};

export default ServiceCard;