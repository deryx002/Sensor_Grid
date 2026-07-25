import Hero from "../../../components/sections/Hero/Hero";
import Technologies from "../../../components/sections/Technologies/Technologies";
import Services from "../../../components/sections/Services/Services";
import Projects from "../../../components/sections/Projects/Projects";
import Process from "../../../components/sections/Process/Process";
import Testimonials from "../../../components/sections/Testimonials/Testimonials";
import Contact from "../../../components/sections/Contact/Contact";

import "./Home.css";

function Home() {
  return (
    <main className="home">
      <Hero />
      <Technologies />
      <Services />
      <Projects />
      <Process />
      <Testimonials />
      <Contact />
    </main>
  );
}

export default Home;