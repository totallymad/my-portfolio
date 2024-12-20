import TypingEffect from "./TypingEffect";

export default function Hero() {
  return (
    <section id="home" className="mt-40 w-full max-w-screen-2xl mx-auto section">
      <div className="container flex mx-auto justify-center px-2">
        <div className="w-3/5 flex flex-col justify-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-500 to-emerald-50 bg-clip-text text-transparent">
            Привет, меня зовут Илья,
          </h2>
          <TypingEffect />
          <h3 className="my-5 text-2xl font-thin text-emerald-50 opacity-70">
            Преобразую идеи в живые интерфейсы{" "}
          </h3>
          <div className="flex">
            <button className="p-4 border border-emerald-500 rounded-3xl active:scale-95 active:bg-emerald-300 transition active:text-zinc-950">
              Нанять меня
            </button>
            <button className="flex items-center gap-1">
              Скролл вниз{" "}
              <span className="material-symbols-rounded">
                keyboard_double_arrow_down
              </span>
            </button>
          </div>
        </div>
        <figure className=" ml-auto max-w-[480px] bg-gradient-to-t from-emerald-700 rounded-[60px] hidden md:block">
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
