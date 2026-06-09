const HeroContent = () => {
  return (
    <div className="max-w-xl">

      <p className="text-lg">
        Hello, I'm
      </p>

      <h1 className="text-6xl font-bold mt-3">
        Rahul Baghel
      </h1>

      <h2 className="text-2xl mt-4">
        Java Full Stack Developer
      </h2>

      <p className="mt-6">
        Building scalable web applications using
        Java, Spring Boot, React and MySQL.
      </p>

      <div className="flex gap-4 mt-8">

        <button>
          Hire Me
        </button>

        <button>
          Download CV
        </button>

      </div>

    </div>
  );
};

export default HeroContent;