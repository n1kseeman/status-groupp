import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Партнёрам",
  description:
    "Сотрудничество со Status Groupp: азиатские пивные бренды для магазинов, ресторанов и дистрибьюторов.",
};

const audiences = [
  {
    number: "01",
    title: "Розничным магазинам",
    copy: "Подберём узнаваемые азиатские бренды и форматы упаковки для вашей полки.",
  },
  {
    number: "02",
    title: "Ресторанам и барам",
    copy: "Соберём ассортимент, который поддержит азиатское меню и барную карту.",
  },
  {
    number: "03",
    title: "Дистрибьюторам",
    copy: "Обсудим линейку, географию поставок и рабочий формат сотрудничества.",
  },
];

export default function PartnersPage() {
  return (
    <main>
      <section className="page-hero partners-hero">
        <div className="container">
          <p className="eyebrow">Сотрудничество</p>
          <h1>
            Азиатская коллекция
            <br />
            <em>для вашего бизнеса.</em>
          </h1>
          <p>
            Поможем выбрать бренды и позиции под формат заведения, магазина или
            региональной дистрибуции.
          </p>
          <button className="button button-primary" data-price-request>
            Обсудить сотрудничество <span>↗</span>
          </button>
        </div>
      </section>

      <section className="audience-grid container">
        {audiences.map((item) => (
          <article key={item.number}>
            <span>{item.number}</span>
            <h2>{item.title}</h2>
            <p>{item.copy}</p>
          </article>
        ))}
      </section>

      <section className="steps-section">
        <div className="container">
          <p className="eyebrow">Как начать</p>
          <h2>
            Три простых шага
            <br />
            <em>до первой поставки.</em>
          </h2>
          <div className="steps-grid">
            <div>
              <span>1</span>
              <h3>Запросите прайс</h3>
              <p>Расскажите о формате бизнеса, городе и интересующих брендах.</p>
            </div>
            <div>
              <span>2</span>
              <h3>Согласуйте ассортимент</h3>
              <p>Менеджер уточнит актуальные позиции и обсудит рабочие условия.</p>
            </div>
            <div>
              <span>3</span>
              <h3>Организуйте поставку</h3>
              <p>Согласуем детали и географию поставки под вашу задачу.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="partners-contact">
        <div>
          <p className="eyebrow">Отдел продаж</p>
          <h2>Готовы обсудить задачу</h2>
        </div>
        <div>
          <a href="tel:+79112210410">+7 (911) 221-04-10</a>
          <a href="mailto:sales1@status-groupp.ru">sales1@status-groupp.ru</a>
        </div>
        <button className="button button-light" data-price-request>
          Получить прайс <span>↗</span>
        </button>
      </section>
    </main>
  );
}

