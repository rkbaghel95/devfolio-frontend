import SectionHeader from "../../common/SectionHeader";
import FeatureCard from "./FeatureCard";
import { featuresData } from "./featuresData";

const FeaturesSection = () => {
  return (
    <section className="py-32">

      <div className="max-w-7xl mx-auto px-8">

        <SectionHeader
          subtitle="Expertise"
          title="What I Bring To The Table"
        />

        <div className="grid lg:grid-cols-2 gap-8">

          {featuresData.map((feature) => (
            <FeatureCard
              key={feature.id}
              {...feature}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default FeaturesSection;