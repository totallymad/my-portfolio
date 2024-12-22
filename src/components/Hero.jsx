import TypingEffect from "./TypingEffect";

export default function Hero() {
  return (
    <section
      id="home"
      className="mt-40 w-full max-w-screen-2xl mx-auto section"
    >
      <div className="container flex flex-col-reverse items-center mx-auto justify-center px-2 lg:flex-row">
        <div className="mt-10 w-full lg:w-3/5 lg:mt-0 items-center lg:items-start flex flex-col justify-center">
          <h2 className="text-2xl lg:text-4xl text-center lg:text-left font-bold bg-gradient-to-r from-emerald-500 to-emerald-50 bg-clip-text text-transparent ">
            Привет, меня зовут Илья,
          </h2>
          <TypingEffect />
          <h3 className="my-5 text-xl lg:text-2xl lg:text-left font-thin text-emerald-50 opacity-70 text-center">
            Преобразую идеи в живые интерфейсы{" "}
          </h3>
          <div className="flex gap-6">
            <button className="btn btn-secondary text-sm md:text-lg px-4 py-6 rounded-full">
              <a href="#contact">Написать мне</a>
            </button>
            <button className="btn btn-text text-sm md:text-lg flex items-center  gap-1 rounded-full px-4 py-6">
              <a className="flex items-center gap-1" href="#about">
                <span>Скролл вниз</span>
                <span className="material-symbols-rounded hover:translate-y-1 transition">
                  keyboard_double_arrow_down
                </span>
              </a>
            </button>
          </div>
        </div>
        <figure className=" max-w-[480px] lg:ml-auto bg-gradient-to-t from-emerald-700 rounded-[60px] ">
          <img
            width={500}
            height={500}
            src="avatar-main.png"
            alt="Ilya Kurak"
          />
        </figure>
      </div>
    </section>
  );
}
