import { Link } from "react-router-dom";
import HeroCard from "./HeroCard";
import HeroStats from "./HeroStats";
import { heroCards } from "./heroData";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-gradient"></div>
      <div className="hero-grid-bg"></div>

      <div className="container hero-container">
        {/* LEFT */}

        <div className="hero-content fade-up">
          <div className="hero-badge glass">
            Digital Solutions Partner
          </div>

          <h1>
            Transforming
            <span> Ideas Into </span>
            Digital Solutions
          </h1>

          <p>
            Sensor Grid helps startups, businesses and students
            build professional websites, innovative IoT solutions,
            and creative digital designs that make ideas become
            reality.
          </p>

          <div className="hero-buttons">
            <Link
              className="btn btn-primary btn-animate"
              to="/contact"
            >
              Contact Us
            </Link>

            <Link
              className="btn btn-outline"
              to="/services"
            >
              Explore Services
            </Link>
          </div>

          <HeroStats />
        </div>

        {/* RIGHT */}

        <div className="hero-right fade-right">
          <div className="hero-card-grid">
          {heroCards.map((card) => (
          <HeroCard
          key={card.id}
          {...card}
          />
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;