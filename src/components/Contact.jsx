Contact.jsx;
const socialLinks = [
  {
    href: "https://github.com/totallymad",
    alt: "GitHub",
    iconSrc: "/github.svg",
  },
  {
    href: "https://t.me/kurnover",
    alt: "Telegram",
    iconSrc: "/telegram.svg",
  },
  {
    href: "https://vk.com/id650987909",
    alt: "VK",
    iconSrc: "/vk.svg",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="mt-20">
      <div className="container ">
        <div className="grid gap-5 grid-row-2 lg:grid-cols-2">
          <div className="">
            <h2 className="subheader">Свяжитесь со мной</h2>
            <p className="text-zinc-400">
              Свяжитесь с нами сегодня, чтобы обсудить потребности вашего
              проекта и начать сотрудничать над чем-то удивительным!
            </p>
            <div className=" my-4 flex flex-wrap items-center gap-4 lg:justify-start">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="w-24 h-24 flex flex-col items-center justify-center gap-2 p-4 bg-zinc-900 rounded-xl border border-emerald-800 hover:bg-zinc-800 hover:scale-105 transition"
                  target="_blank"
                >
                  <img
                    width={30}
                    height={30}
                    src={link.iconSrc}
                    alt={link.alt}
                  />
                  <span>{link.alt}</span>
                </a>
              ))}
            </div>
          </div>

          <form
            action="https://getform.io/f/aollyorb"
            method="POST"
            className=""
          >
            <div className="flex flex-col">
              <div className="mb-3">
                <label htmlFor="name">Имя</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  className="input-field"
                  placeholder="Ваше имя"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email">Электронная почта</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  required
                  className="input-field"
                  placeholder="пример@почта.ру"
                />
              </div>
            </div>

            <div className="">
              <label htmlFor="message">Сообщение</label>
              <textarea
                name="message"
                id="message"
                className="input-field resize-y min-h-24"
                required
                placeholder="🙋‍♂️🙋‍♂️🙋‍♂️"
              ></textarea>
            </div>

            <button
              className="btn btn-secondary w-full text-center py-5 px-4 rounded-xl mt-5"
              type="submit"
            >
              Подтвердить
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
