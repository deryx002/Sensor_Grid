import "./About.css";

import HeroSection from "./HeroSection";
import StorySection from "./StorySection";
import MissionVision from "./MissionVision";
import ExpertiseSection from "./ExpertiseSection";
import CTASection from "./CTASection";

const About = () => {
  return (
    <main className="about-page">
      <HeroSection />

      <StorySection />

      <MissionVision />

      <ExpertiseSection />

      <CTASection />
    </main>
  );
};

export default About;