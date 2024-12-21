// Slider.js
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Основные стили Swiper
import CircleProgress from "./CircleProgress";
import { Autoplay } from "swiper/modules"; // Импортируем только Autoplay

const Slider = () => {
  return (
    <div className="container mt-10 relative">
      <Swiper
        modules={[Autoplay]} // Подключаем только Autoplay
        spaceBetween={10} // Расстояние между слайдами
        slidesPerView={1} // Количество отображаемых слайдов
        loop={true} // Зацикливаем слайдер
        autoplay={{
          delay: 3000, // Задержка в миллисекундах (3 секунды)
          disableOnInteraction: true, // Продолжать автопрокрутку после взаимодействия
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        <SwiperSlide>
          <CircleProgress percentage={90} label="Разработка" />
        </SwiperSlide>
        <SwiperSlide>
          <CircleProgress percentage={80} label="Дизайн" />
        </SwiperSlide>
        <SwiperSlide>
          <CircleProgress percentage={95} label="Работа в команде" />
        </SwiperSlide>
        <SwiperSlide>
          <CircleProgress percentage={85} label="Создание логотипов" />
        </SwiperSlide>
        <SwiperSlide>
          <CircleProgress percentage={90} label="Адаптивный дизайн" />
        </SwiperSlide>
        <SwiperSlide>
          <CircleProgress
            percentage={85}
            label="Оптимизация производительности"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
