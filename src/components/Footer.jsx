const navItems = [
  {
    label: "Главная",
    link: "#home",
  },
  {
    label: "Обо мне",
    link: "#about",
  },
  {
    label: "Работы",
    link: "#work",
  },
  {
    label: "Контакты",
    link: "#contact",
  },
];

const socialLinks = [
  {
    href: "https://github.com/totallymad",
    label: "GitHub",
  },
  {
    href: "https://github.com/totallymad",
    label: "Telegram",
  },
  {
    href: "https://vk.com/id650987909",
    label: "VK",
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="container mt-12">
        <div className="bg-zinc-800 p-5 rounded-xl">
          <h2 className="text-2xl lg:text-4xl text-center font-bold bg-gradient-to-r from-emerald-500 to-emerald-50 bg-clip-text text-transparent">
            Давайте работать вместе!
          </h2>
        </div>
        <div className="mt-5 flex justify-evenly">
          <ul>
            {navItems.map((item, key) => (
              <li className="mt-1" key={key}>
                <a
                  className="text-zinc-400 hover:text-zinc-50 text-lg"
                  href={item.link}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ul>
            {socialLinks.map((item, key) => (
              <li className="mt-1" key={key}>
                <a
                  className="text-zinc-400 hover:text-zinc-50 text-lg"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-5 mb-5 flex justify-between items-center">
          <img width={40} height={40} src="/logo.png" alt="логотип" />
          <p>©2024. Все права защищены</p>
        </div>
      </div>
    </footer>
  );
}
