import {
  CheckCircle2,
  Code2,
  Cpu,
  Palette,
} from "lucide-react";
import { storyContent } from "./aboutData";

const highlights = [
  {
    icon: Code2,
    title: "Modern Development",
    description:
      "Scalable React applications and secure backend systems built with modern technologies.",
  },
  {
    icon: Cpu,
    title: "IoT Innovation",
    description:
      "Smart monitoring systems, automation, and embedded solutions tailored to business needs.",
  },
  {
    icon: Palette,
    title: "Creative Experiences",
    description:
      "User-centered interfaces and branding that make products intuitive and memorable.",
  },
];

const StorySection = () => {
  return (
    <section className="about-story">
      <div className="container about-story-grid">
        <div className="about-story-content">
          <span className="section-tag">
            Our Story
          </span>

          <h2>{storyContent.title}</h2>

          {storyContent.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          <ul className="about-check-list">
            <li>
              <CheckCircle2 size={18} />
              Client-first development approach
            </li>

            <li>
              <CheckCircle2 size={18} />
              Clean and maintainable architecture
            </li>

            <li>
              <CheckCircle2 size={18} />
              Long-term support and continuous improvements
            </li>
          </ul>
        </div>

        <div className="about-story-cards">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                className="story-feature-card"
                key={item.title}
              >
                <div className="story-icon">
                  <Icon size={30} />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StorySection;