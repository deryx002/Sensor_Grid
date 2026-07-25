import { CheckCircle2 } from "lucide-react";
import { missionVision } from "./aboutData";

const features = {
  "Our Mission": [
    "Deliver high-quality software solutions",
    "Build reliable and scalable systems",
    "Create value through innovation",
  ],
  "Our Vision": [
    "Become a trusted technology partner",
    "Drive digital transformation",
    "Empower businesses through technology",
  ],
};

const MissionVision = () => {
  return (
    <section className="mission-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Mission & Vision</span>

          <h2>Driven by Purpose. Focused on Results.</h2>

          <p>
            Everything we build is guided by clear objectives,
            strong engineering principles, and a commitment to
            delivering meaningful results for our clients.
          </p>
        </div>

        <div className="mission-grid">
          {missionVision.map((item) => {
            const Icon = item.icon;

            return (
              <div
                className="mission-card"
                key={item.title}
              >
                <div className="mission-icon">
                  <Icon size={34} />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <ul>
                  {features[item.title].map((feature) => (
                    <li key={feature}>
                      <CheckCircle2 size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;