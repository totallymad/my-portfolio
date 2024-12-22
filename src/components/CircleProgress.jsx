import PropTypes from "prop-types";

const CircleProgress = ({ percentage, label }) => {
  const radius = 50;
  const strokeWidth = 10;
  const perimeter = 2 * Math.PI * radius;

  const strokeDashoffset = perimeter - (percentage / 100) * perimeter;

  return (
    <div className="flex flex-col items-center">
      <svg
        width="200"
        height="200" 
        viewBox="0 0 200 200" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="100"
          cy="100"
          r={radius}
          stroke="#e6e6e6"
          strokeWidth={strokeWidth}
          fill="none"
        />

        <circle
          cx="100"
          cy="100"
          r={radius}
          stroke="#077757"
          strokeWidth={strokeWidth + 3}
          fill="none"
          strokeDasharray={perimeter}
          strokeDashoffset={strokeDashoffset}
          style={{
            transition: "stroke-dashoffset 1s ease-in-out",
            transform: "rotate(-90deg)",
            transformOrigin: "50% 50%",
          }}
        />

        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="18" 
          fontWeight="bold"
          fill="#eee" 
        >
          {percentage}%
        </text>
      </svg>
      <div className="relative mb-10 text-sm font-semibold flex flex-col justify-center items-center">
        <p className="text-center absolute -top-8">{label}</p>
      </div>
    </div>
  );
};

CircleProgress.propTypes = {
  percentage: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,

};

export default CircleProgress;
