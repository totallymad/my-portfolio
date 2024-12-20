const CircleProgress = ({ percentage, label }) => {
  const radius = 50;
  const strokeWidth = 10;
  const perimeter = 2 * Math.PI * radius; // Периметр круга

  // Рассчитываем, сколько должно быть заполнено
  const strokeDashoffset = perimeter - (percentage / 100) * perimeter;

  return (
    <div className="flex flex-col items-center">
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Фон круга */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#e6e6e6"
          strokeWidth={strokeWidth}
          fill="none"
        />

        {/* Заполняющийся круг */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#077757"
          strokeWidth={strokeWidth + 3}
          fill="none"
          strokeDasharray={perimeter}
          strokeDashoffset={strokeDashoffset}
          style={{
            transition: "stroke-dashoffset 1s ease-in-out", // Анимация изменения
            transform: "rotate(-90deg)", // Поворот, чтобы начать с верхней части
            transformOrigin: "50% 50%", // Ориентируем на центр
          }}
        />
      </svg>
      <div className="mt-3 text-sm font-semibold">
        {label} {percentage}%
      </div>
    </div>
  );
};

export default CircleProgress;
