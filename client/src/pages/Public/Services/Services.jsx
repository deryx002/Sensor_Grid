import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import {
  services,
  technologies,
  processSteps,
  whyChooseUs,
} from "./servicesData";

import "./Services.css";

const Services = () => {
  return (
    <main className="services-page">
      {/* ================= HERO ================= */}

      <section className="services-hero">
        <div className="container services-hero-content">
          <span className="section-badge">
            <Sparkles size={16} />
            Our Services
          </span>

          <h1>
            Building Innovative Digital
            <span> Solutions for Tomorrow</span>
          </h1>

          <p>
            From web applications and IoT platforms to embedded
            systems and AI-powered automation, SensorGrid delivers
            scalable technology solutions tailored to your business.
          </p>

          <div className="services-hero-actions">
            <Link
              to="/contact"
              className="btn btn-primary"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}

      <section className="services-section">
        <div className="container">

          <div className="section-header">
            <span>What We Do</span>

            <h2>Our Expertise</h2>

            <p>
              We provide end-to-end digital solutions that combine
              software engineering, hardware innovation, and modern
              design principles.
            </p>
          </div>

          <div className="services-grid">

            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  className="service-card"
                  key={service.id}
                >
                  <div className="service-icon">
                    <Icon size={34} />
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <div className="service-tags">

                    {service.technologies.map((tech) => (
                      <span key={tech}>
                        {tech}
                      </span>
                    ))}

                  </div>
                </article>
              );
            })}

          </div>
        </div>
      </section>

      {/* ================= TECHNOLOGIES ================= */}

      <section className="tech-section">
        <div className="container">

          <div className="section-header">
            <span>Technology Stack</span>

            <h2>Technologies We Work With</h2>

            <p>
              Modern tools and frameworks for building reliable,
              secure, and scalable solutions.
            </p>
          </div>

          <div className="tech-grid">

            {technologies.map((tech) => (
              <div
                key={tech}
                className="tech-chip"
              >
                {tech}
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}

      <section className="process-section">
        <div className="container">

          <div className="section-header">
            <span>Our Process</span>

            <h2>How We Build Great Products</h2>

            <p>
              Every project follows a structured workflow to ensure
              quality, transparency, and successful delivery.
            </p>
          </div>

          <div className="process-grid">

            {processSteps.map((step) => (
              <div
                key={step.number}
                className="process-card"
              >
                <span className="step-number">
                  {step.number}
                </span>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= WHY US ================= */}

      <section className="why-section">
        <div className="container">

          <div className="section-header">
            <span>Why SensorGrid</span>

            <h2>Why Businesses Choose Us</h2>

            <p>
              We focus on long-term partnerships, innovative
              engineering, and exceptional customer experiences.
            </p>
          </div>

          <div className="why-grid">

            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="why-card"
              >
                <CheckCircle2 size={26} />

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="services-cta">
        <div className="container">

          <div className="cta-card">

            <h2>
              Ready to Turn Your Idea into Reality?
            </h2>

            <p>
              Whether you're building a startup, scaling an
              enterprise, or creating the next IoT innovation,
              SensorGrid is here to help.
            </p>

            <Link
              to="/contact"
              className="btn btn-primary"
            >
              Contact Us

              <ArrowRight size={18} />
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
};

export default Services;