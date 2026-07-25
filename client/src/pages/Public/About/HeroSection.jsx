import { Link } from "react-router-dom";
import { ArrowRight, Award, Briefcase, Users } from "lucide-react";
import { heroContent } from "./aboutData";

const HeroSection = () => {
  return (
    <section className="about-hero">
      <div className="container about-hero-grid">
        <div className="about-hero-content">
          <span className="about-badge">{heroContent.badge}</span>

          <h1>{heroContent.title}</h1>

          <p>{heroContent.description}</p>

          <div className="about-actions">
            <Link to="/contact" className="btn-primary">
              Contact Us
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <div className="about-hero-cards">
          <div className="about-card">
            <Award size={34} />

            <h3>Quality First</h3>

            <p>
              Every project is developed with clean architecture,
              maintainability, and long-term scalability in mind.
            </p>
          </div>

          <div className="about-card">
            <Briefcase size={34} />

            <h3>Business Focused</h3>

            <p>
              We build technology that solves real business
              challenges—not just software that looks impressive.
            </p>
          </div>

          <div className="about-card">
            <Users size={34} />

            <h3>Client Partnership</h3>

            <p>
              We believe successful products come from continuous
              collaboration and transparent communication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;