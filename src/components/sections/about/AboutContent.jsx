import { aboutData } from "./aboutData";
import AboutStats from "./AboutStats";

const AboutContent = () => {
  return (
    <div>

      <p className="uppercase">
        About Me
      </p>

      <h2 className="text-5xl font-bold mt-4">
        {aboutData.title}
      </h2>

      <p className="mt-6">
        {aboutData.description}
      </p>

      <p className="mt-6">
        {aboutData.goal}
      </p>

      <AboutStats
        stats={aboutData.stats}
      />

    </div>
  );
};

export default AboutContent;