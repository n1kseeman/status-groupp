import type { Metadata } from "next";
import styles from "../inner-pages.module.css";

export const metadata: Metadata = { title: "Обработка персональных данных" };

export default function PrivacyPage() {
  return (
    <main className={styles.page}>
      <section className={`${styles.innerHero} ${styles.legalHero}`}>
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Документ / 01</p>
          <h1>Обработка<br /><em>персональных данных.</em></h1>
          <p className={styles.heroLead}>Как сайт Status Groupp использует сведения, которые вы указываете при обращении.</p>
        </div>
        <div className={`${styles.heroVisual} ${styles.legalMark}`} aria-hidden="true">
          <span>152</span><strong>ФЗ</strong><p>Правовая информация</p>
        </div>
        <div className={styles.heroStrip}>
          <span>Прозрачно</span><i /><span>По назначению</span><i /><span>Под контролем</span>
          <p>Редакция от 16.08.2026</p>
        </div>
      </section>

      <section className={styles.legalLayout}>
        <aside data-reveal>
          <p>Содержание</p>
          <a href="#general">01 · Общие положения</a>
          <a href="#data">02 · Какие данные</a>
          <a href="#purpose">03 · Для чего</a>
          <a href="#contact">04 · Контакты</a>
        </aside>
        <article className={styles.legalCopy}>
          <section id="general" data-reveal>
            <span>01</span><h2>Общие положения</h2>
            <p>При обработке персональных данных мы стремимся соблюдать требования законодательства Российской Федерации, в частности Федерального закона № 152-ФЗ «О персональных данных», а также правила, установленные для работы сайта Status Groupp.</p>
          </section>
          <section id="data" data-reveal>
            <span>02</span><h2>Какие данные обрабатываются</h2>
            <p>Если вы запрашиваете прайс-лист, в письме могут быть указаны имя, телефон, название компании и комментарий, которые вы вводите самостоятельно. Сайт также сохраняет на вашем устройстве отметку о подтверждении возраста.</p>
          </section>
          <section id="purpose" data-reveal>
            <span>03</span><h2>Для чего используются данные</h2>
            <p>Данные используются для ответа на запрос, обсуждения ассортимента и условий сотрудничества. Форма на сайте формирует письмо в вашем почтовом приложении; до отправки вы можете проверить и изменить его содержание.</p>
          </section>
          <section id="contact" data-reveal>
            <span>04</span><h2>Контакты</h2>
            <p>По вопросам обработки данных можно обратиться по адресу <a href="mailto:sales1@status-groupp.ru">sales1@status-groupp.ru</a> или по телефону <a href="tel:+79112210410">+7 (911) 221-04-10</a>.</p>
          </section>
        </article>
      </section>
    </main>
  );
}
