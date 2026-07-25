import "./Services.css";

import ServiceCard from "./ServiceCard";
import { services } from "./servicesData";

const Services = () => {
  return (
    <section className="services section">
      <div className="container">

        <div className="section-heading">

          <span className="section-badge">
            Our Services
          </span>

          <h2>
            Digital Solutions Built Around Your Needs
          </h2>

          <p>
            From responsive websites and intelligent IoT systems
            to creative UI/UX design, we help businesses and
            students turn ideas into successful digital products.
          </p>

        </div>

        <div className="services-grid">

          {services.map((service) => (
            <ServiceCard
              key={service.id}
              {...service}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Services;    