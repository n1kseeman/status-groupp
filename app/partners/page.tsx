import type { CSSProperties } from "react";
import type { Metadata } from "next";
import styles from "../inner-pages.module.css";

export const metadata: Metadata = {
  title: "Партнёрам",
  description: "Сотрудничество со Status Groupp: азиатские пивные бренды для магазинов, ресторанов и дистрибьюторов.",
};

const audiences = [
  { number: "01", title: "Ритейл", label: "Розничным магазинам", copy: "Подберём узнаваемые азиатские бренды и форматы упаковки для вашей полки." },
  { number: "02", title: "HoReCa", label: "Ресторанам и барам", copy: "Соберём ассортимент, который поддержит азиатское меню и барную карту." },
  { number: "03", title: "Дистрибуция", label: "Региональным партнёрам", copy: "Обсудим линейку, географию поставок и рабочий формат сотрудничества." },
];

const steps = [
  ["01", "Запрос", "Расскажите о формате бизнеса, городе и интересующих брендах."],
  ["02", "Подбор", "Менеджер уточнит позиции и соберёт ассортимент под вашу задачу."],
  ["03", "Поставка", "Согласуем условия, географию и детали первой поставки."],
];

export default function PartnersPage() {
  return (
    <main className={styles.page}>
      <section className={`${styles.innerHero} ${styles.partnersHero}`}>
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Сотрудничество / Россия</p>
          <h1>Азия для<br /><em>вашего бизнеса.</em></h1>
          <p className={styles.heroLead}>Бренды с историей, понятный ассортимент и прямой контакт с отделом продаж.</p>
          <button className={styles.primaryButton} data-price-request>Обсудить сотрудничество <span aria-hidden="true">↗</span></button>
        </div>
        <div className={`${styles.heroVisual} ${styles.partnersVisual}`} aria-hidden="true">
          <div className={styles.partnerMap}>
            <span>Asia</span><i /><span>Russia</span>
          </div>
          <div className={styles.partnerMetric}><strong>04</strong><span>бренда</span></div>
          <div className={styles.partnerMetric}><strong>03</strong><span>страны</span></div>
          <div className={styles.partnerMetric}><strong>15+</strong><span>позиций</span></div>
        </div>
        <div className={styles.heroStrip}>
          <span>Ритейл</span><i /><span>HoReCa</span><i /><span>Дистрибуция</span>
          <p>Подбор под формат бизнеса</p>
        </div>
      </section>

      <section className={styles.audienceSection}>
        <header className={styles.sectionHeader} data-reveal>
          <div><p>Кому подойдёт</p><h2>Разные форматы.<br /><em>Один сильный портфель.</em></h2></div>
          <span>Собираем предложение вокруг вашей аудитории, меню, полки и географии.</span>
        </header>
        <div className={styles.audienceGrid}>
          {audiences.map((item, index) => (
            <article data-reveal style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties} key={item.number}>
              <span>{item.number}</span><p>{item.label}</p><h2>{item.title}</h2><p>{item.copy}</p>
              <button data-price-request aria-label={`Обсудить сотрудничество: ${item.title}`}>Обсудить <span aria-hidden="true">↗</span></button>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.stepsSection}>
        <header data-reveal><p>Как начать</p><h2>От запроса<br /><em>до поставки.</em></h2></header>
        <div className={styles.stepsTrack}>
          {steps.map(([number, title, copy], index) => (
            <article data-reveal style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties} key={number}>
              <span>{number}</span><h3>{title}</h3><p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.salesContact}>
        <div data-reveal><p>Отдел продаж</p><h2>Начнём<br /><em>с разговора.</em></h2></div>
        <div data-reveal>
          <a href="tel:+79112210410">+7 (911) 221-04-10</a>
          <a href="mailto:sales1@status-groupp.ru">sales1@status-groupp.ru</a>
          <button data-price-request>Получить прайс <span aria-hidden="true">↗</span></button>
        </div>
      </section>
    </main>
  );
}
