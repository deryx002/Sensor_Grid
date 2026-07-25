import "./Projects.css";

import { projects } from "./projectsData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="projects section">
      <div className="container">
        <div className="section-heading">
          <span className="section-badge">
            Featured Projects
          </span>

          <h2>
            Solutions We've Built
          </h2>

          <p>
            Explore a selection of web applications,
            IoT systems and creative design projects
            crafted to solve real-world problems.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;