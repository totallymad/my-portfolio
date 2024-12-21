import PropTypes from "prop-types";

const CircleProgress = ({ percentage, label }) => {
  const radius = 50;
  const strokeWidth = 10;
  const perimeter = 2 * Math.PI * radius; // Периметр круга

  // Рассчитываем, сколько должно быть заполнено
  const strokeDashoffset = perimeter - (percentage / 100) * perimeter;

  return (
    <div className="flex flex-col items-center">
      <svg
        width="200"
        height="200" // Увеличиваем размеры SVG
        viewBox="0 0 200 200" // Увеличиваем размер области просмотра
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Фон круга */}
        <circle
          cx="100"
          cy="100"
          r={radius}
          stroke="#e6e6e6"
          strokeWidth={strokeWidth}
          fill="none"
        />

        {/* Заполняющийся круг */}
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

        {/* Текст внутри круга */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="18" // Размер шрифта
          fontWeight="bold"
          fill="#333" // Цвет текста
        >
          {percentage}%
        </text>
      </svg>
      <div className="mt-3 text-sm font-semibold flex flex-col justify-center items-center">
        <p className="text-center">{label}</p>
      </div>
    </div>
  );
};

CircleProgress.propTypes = {
  percentage: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,

};

export default CircleProgress;
