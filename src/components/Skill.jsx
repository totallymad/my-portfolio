import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "/figma.svg",
    label: "Figma",
    desc: "Инструмент для дизайна",
  },
  {
    imgSrc: "/css3.svg",
    label: "CSS",
    desc: "Пользовательский интерфейс",
  },
  {
    imgSrc: "/scss.svg",
    label: "SCSS",
    desc: "Пользовательский интерфейс",
  },
  {
    imgSrc: "/javascript.svg",
    label: "JavaScript",
    desc: "Интерактивность",
  },
  {
    imgSrc: "/nodejs.svg",
    label: "NodeJS",
    desc: "Веб-сервер",
  },
  {
    imgSrc: "/react.svg",
    label: "React",
    desc: "Фреймворк",
  },
  {
    imgSrc: "/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "Пользовательский интерфейс",
  },
];

export default function Skill() {
  return (
    <section className="section mt-10">
      <div className="container">
        <h2 className="subheader">Основные инструменты, которые я использую</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
        Откройте для себя мощные инструменты и технологии, которые я использую для создания
        исключительных, высокопроизводительных веб-сайтов и приложений.
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} />
          ))}
        </div>
      </div>
    </section>
  );
}
