import { expertise } from "./aboutData";

const ExpertiseSection = () => {
  return (
    <section className="expertise-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Expertise</span>

          <h2>Technology That Solves Real Problems</h2>

          <p>
            We combine software engineering, IoT innovation, and
            creative design to build solutions that are scalable,
            secure, and easy to use.
          </p>
        </div>

        <div className="expertise-grid">
          {expertise.map((item) => {
            const Icon = item.icon;

            return (
              <article
                className="expertise-card"
                key={item.title}
              >
                <div className="expertise-icon">
                  <Icon size={34} />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </article>
            );
          })}
        </div>

        <div className="expertise-stats">
          <div className="stat-card">
            <h3>Modern Stack</h3>

            <p>
              React, Node.js, Express, MongoDB, REST APIs,
              Authentication, Responsive UI, and Cloud-ready
              architecture.
            </p>
          </div>

          <div className="stat-card">
            <h3>Our Approach</h3>

            <p>
              Every solution is designed with clean architecture,
              performance, scalability, and long-term maintenance
              in mind.
            </p>
          </div>

          <div className="stat-card">
            <h3>Our Goal</h3>

            <p>
              Build software that helps businesses operate more
              efficiently while delivering an excellent user
              experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;