import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const HeroSection = () => {
  return (
    <section className="min-h-screen px-8">
      <div className="max-w-7xl mx-auto min-h-screen flex items-center justify-between">

        <HeroContent />

        <HeroImage />

      </div>
    </section>
  );
};

export default HeroSection;