import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ctaContent } from "./aboutData";

const CTASection = () => {
  return (
    <section className="about-cta">
      <div className="container">
        <div className="about-cta-card">
          <span className="section-tag">
            Ready to Work Together?
          </span>

          <h2>{ctaContent.title}</h2>

          <p>{ctaContent.description}</p>

          <div className="about-actions">
            <Link
              to="/contact"
              className="btn-primary"
            >
              Contact Us

              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;