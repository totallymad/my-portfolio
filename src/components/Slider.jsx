// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import CircleProgress from "./CircleProgress";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// // import required modules
// import { Pagination } from "swiper/modules";

// export default function Slider() {
//   return (
//     <div className="container">
//       <Swiper
//         slidesPerView={3}
//         spaceBetween={30}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Pagination]}
//         className="slider"
//       >
//         <SwiperSlide>
//           <CircleProgress percentage={90} label="Разработка" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <CircleProgress percentage={80} label="Дизайн" />
//         </SwiperSlide>
//         <SwiperSlide><CircleProgress percentage={95} label="Работа в команде" /></SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }

// Slider.js
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Импорт стилей для Swiper
import CircleProgress from "./CircleProgress";

const Slider = () => {
  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <Swiper
        spaceBetween={10} // Расстояние между слайдами
        slidesPerView={1} // Количество отображаемых слайдов
        // loop={true} // Зацикливаем слайдер
        navigation // Навигация (стрелки вперед/назад)
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // when window width is >= 640px
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
