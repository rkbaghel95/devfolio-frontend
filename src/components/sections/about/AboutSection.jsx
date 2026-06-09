import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";

const AboutSection = () => {
  return (
    <section className="py-32">

      <div
        className="
        max-w-7xl
        mx-auto
        px-8
        grid
        lg:grid-cols-2
        gap-16
        items-center
        "
      >

        <AboutImage />

        <AboutContent />

      </div>

    </section>
  );
};

export default AboutSection;