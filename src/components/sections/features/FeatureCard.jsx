/**
 * Core Expertise Card
 *
 * Purpose:
 * Highlight key development strengths.
 */

const FeatureCard = ({
  title,
  subtitle,
  description,
  stats,
}) => {
  return (
    <div
      className="
      rounded-3xl
      border
      p-8
      hover:-translate-y-2
      transition-all
      duration-300
      "
    >
      <p className="text-sm font-medium">
        {subtitle}
      </p>

      <h3 className="text-2xl font-bold mt-2">
        {title}
      </h3>

      <p className="mt-4">
        {description}
      </p>

      <div className="mt-6">
        <span className="font-semibold">
          {stats}
        </span>
      </div>
    </div>
  );
};

export default FeatureCard;