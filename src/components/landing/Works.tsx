import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";

const works = [
  {
    src: work1,
    title: "Ремонт ноутбуков и ПК",
    description: "Диагностика и обслуживание партии ноутбуков разных моделей",
  },
  {
    src: work2,
    title: "Настройка ОС",
    description: "Установка и настройка Windows с переносом данных",
  },
  {
    src: work3,
    title: "Ремонт периферии",
    description: "Восстановление работоспособности геймпадов и другой техники",
  },
];

const Works = () => {
  return (
    <section id="works" className="bg-gradient-subtle py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Мои работы
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Несколько примеров из практики — от мелкого ремонта до крупных заказов
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {works.map(({ src, title, description }) => (
            <figure
              key={title}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={src}
                  alt={title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="p-5">
                <h3 className="font-semibold text-foreground">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;