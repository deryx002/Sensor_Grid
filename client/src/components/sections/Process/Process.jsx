import "./Process.css";

import { processSteps } from "./processData";
import ProcessStep from "./ProcessStep";

const Process = () => {
  return (
    <section className="process section">
      <div className="container">
        <div className="section-heading">
          <span className="section-badge">
            Our Process
          </span>

          <h2>
            From Idea to Deployment
          </h2>

          <p>
            We follow a structured development process to
            ensure every project is delivered efficiently,
            transparently, and with high quality.
          </p>
        </div>

        <div className="process-grid">
          {processSteps.map((step) => (
            <ProcessStep
              key={step.id}
              {...step}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;