import { Link } from "react-router-dom";
import "./Contact.css";
import { contactCTA } from "./contactData";

const Contact = () => {
  const {
    badge,
    title,
    description,
    secondaryButton,
    arrow: Arrow,
  } = contactCTA;

  const SecondaryIcon = secondaryButton.icon;

  return (
    <section className="contact-cta section">
      <div className="container">
        <div className="contact-box">

          <span className="section-badge">
            {badge}
          </span>

          <h2>{title}</h2>

          <p>{description}</p>

          <div className="contact-actions">
            <Link
              to={secondaryButton.link}
              className="contact-btn primary"
            >
              <SecondaryIcon size={20} />

              {secondaryButton.text}

              <Arrow size={18} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;