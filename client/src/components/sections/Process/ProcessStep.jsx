import "./Process.css";

const ProcessStep = ({
  title,
  description,
  icon: Icon,
  id,
}) => {
  return (
    <article className="process-step">
      <div className="step-number">
        {String(id).padStart(2, "0")}
      </div>

      <div className="step-icon">
        <Icon size={28} />
      </div>

      <h3>{title}</h3>

      <p>{description}</p>
    </article>
  );
};

export default ProcessStep;