import type { Metadata } from "next";
import styles from "../inner-pages.module.css";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Контакты отдела продаж Status Groupp в Москве и Санкт-Петербурге.",
};

export default function ContactsPage() {
  return (
    <main className={styles.page}>
      <section className={`${styles.innerHero} ${styles.contactsHero}`}>
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Контакты / Отдел продаж</p>
          <h1>Давайте<br /><em>поговорим.</em></h1>
          <p className={styles.heroLead}>Ответим по ассортименту, наличию, оптовым условиям и географии поставки.</p>
        </div>
        <div className={`${styles.heroVisual} ${styles.contactHeroCard}`}>
          <p>Прямой контакт</p>
          <a href="tel:+79112210410">+7 (911)<br />221-04-10</a>
          <a href="mailto:sales1@status-groupp.ru">sales1@status-groupp.ru</a>
          <div>
            <a href="https://wa.me/79112210410?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%BE%D0%B1%D1%81%D1%83%D0%B4%D0%B8%D1%82%D1%8C%20%D0%B0%D1%81%D1%81%D0%BE%D1%80%D1%82%D0%B8%D0%BC%D0%B5%D0%BD%D1%82%20Status%20Groupp." target="_blank" rel="noreferrer">WhatsApp <span aria-hidden="true">↗</span></a>
            <button data-price-request>Запросить прайс</button>
          </div>
        </div>
        <div className={styles.heroStrip}>
          <span>Телефон</span><i /><span>WhatsApp</span><i /><span>Email</span>
          <p>Санкт-Петербург · Москва</p>
        </div>
      </section>

      <section className={styles.officesSection}>
        <header className={styles.sectionHeader} data-reveal>
          <div><p>Офисы</p><h2>Два города.<br /><em>Одна команда.</em></h2></div>
          <span>Свяжитесь с отделом продаж перед визитом — подскажем удобное время.</span>
        </header>
        <div className={styles.officeGrid}>
          <article data-reveal>
            <span>01 / LED</span><p>Санкт-Петербург</p>
            <h2>Софийская ул.,<br />дом 74</h2>
            <p>лит. А, пом. 3–7</p>
            <a href="https://yandex.ru/maps/?text=%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3%2C%20%D0%A1%D0%BE%D1%84%D0%B8%D0%B9%D1%81%D0%BA%D0%B0%D1%8F%2074" target="_blank" rel="noreferrer">Открыть на карте <span aria-hidden="true">↗</span></a>
          </article>
          <article data-reveal>
            <span>02 / MOW</span><p>Москва</p>
            <h2>Рябиновая ул.,<br />дом 55</h2>
            <p>стр. 9, пом. 15–3, ком. 8</p>
            <a href="https://yandex.ru/maps/?text=%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C%20%D0%A0%D1%8F%D0%B1%D0%B8%D0%BD%D0%BE%D0%B2%D0%B0%D1%8F%2055" target="_blank" rel="noreferrer">Открыть на карте <span aria-hidden="true">↗</span></a>
          </article>
        </div>
      </section>

      <section className={styles.contactNote} data-reveal>
        <p>Нужен быстрый ответ?</p>
        <h2>Напишите задачу —<br /><em>мы начнём с неё.</em></h2>
        <button data-price-request>Оставить запрос <span aria-hidden="true">↗</span></button>
      </section>
    </main>
  );
}
