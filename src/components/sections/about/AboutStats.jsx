const AboutStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 gap-6 mt-8">

      {stats.map((item) => (
        <div
          key={item.id}
          className="rounded-2xl border p-6"
        >
          <h3 className="text-3xl font-bold">
            {item.value}
          </h3>

          <p>{item.label}</p>
        </div>
      ))}

    </div>
  );
};

export default AboutStats;