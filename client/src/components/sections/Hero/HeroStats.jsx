import { heroStats } from "./heroData";

const HeroStats = () => {
  return (
    <div className="hero-stats">
      {heroStats.map((item) => (
        <div key={item.label} className="hero-stat glass">
          <h2>{item.value}</h2>

          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default HeroStats;