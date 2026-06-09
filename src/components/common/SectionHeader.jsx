/**
 * Reusable Section Header
 */

const SectionHeader = ({
  title,
  subtitle,
}) => {
  return (
    <div className="text-center mb-16">
      <p className="uppercase tracking-wider">
        {subtitle}
      </p>

      <h2 className="text-5xl font-bold mt-4">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;