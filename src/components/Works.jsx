const works = [
  {
    imgSrc: "/project1.png",
    title: "Ballons",
    link: "https://totallymad.github.io/ballons/",
    descr:
      "Интерактивный веб-сайт для бронирования увлекательных полетов на воздушных шарах с описанием маршрутов и галереей. ",
  },
  {
    imgSrc: "/project2.png",
    title: "Qucik Repair",
    link: "https://totallymad.github.io/quick-repair/",
    descr:
      " Платформа для заказа услуг ремонта компьютеров с подробной информацией о неисправностях и стоимости услуг. ",
  },
  {
    imgSrc: "/project3.png",
    title: "Deleicious Deserts",
    link: "https://delicious-desserts-react.netlify.app/",
    descr: "Удобное приложение для выбора и заказа свежих десертов.",
  },
  {
    imgSrc: "/project4.png",
    title: "Sneakers",
    link: "https://best-sneakers.netlify.app/",
    descr: "Приложение для поиска, выбора и заказа брендовых кроссовок. ",
  },
];

export default function Works() {
  return (
    <section className="mt-20" id="work">
      <div className="container">
        <h2 className="subheader">Мои работы</h2>
        <div className="mt-5 grid gap-x-7 gap-y-6 grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] md:grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))]">
          {works.map((item, index) => (
            <div
              className="p-3 bg-zinc-800 rounded-xl hover:scale-105 transition"
              key={index}
            >
              <img
                className="object-cover h-auto w-full rounded-3xl"
                src={item.imgSrc}
                alt={item.title}
              />
              <div className="mt-3 bg-zinc-700 p-3 rounded-xl flex justify-between items-center">
                <h3 className="text-xl">{item.title}</h3>
                <a
                  className="flex gap-3 mr-2 hover:text-emerald-700 hover:translate-x-2 transition mb-2"
                  href={item.link}
                  target="_blank"
                >
                  <span className="material-symbols-rounded text-4xl">
                    forward
                  </span>
                </a>
              </div>
              <p className="p-3 text-zinc-400">{item.descr}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
