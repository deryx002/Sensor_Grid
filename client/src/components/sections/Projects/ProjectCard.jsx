import "./Projects.css";

const ProjectCard = ({
  title,
  category,
  description,
  technologies,
  status,
  button,
  icon: Icon,
  arrow: Arrow,
  color,
}) => {
  return (
    <article className={`project-card ${color}`}>
      <div className="project-top">
        <div className="project-icon">
          <Icon size={28} />
        </div>

        <span
          className={`project-status ${
            status === "Completed"
              ? "completed"
              : "progress"
          }`}
        >
          {status}
        </span>
      </div>

      <span className="project-category">
        {category}
      </span>

      <h3>{title}</h3>

      <p>{description}</p>

      <div className="project-tech">
        {technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      <button className="project-btn">
        {button}

        <Arrow size={18} />
      </button>
    </article>
  );
};

export default ProjectCard;