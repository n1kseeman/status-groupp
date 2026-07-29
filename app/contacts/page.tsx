import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты",
  description:
    "Контакты отдела продаж Status Groupp в Москве и Санкт-Петербурге.",
};

export default function ContactsPage() {
  return (
    <main>
      <section className="page-hero contacts-hero">
        <div className="container">
          <p className="eyebrow">Всегда на связи</p>
          <h1>
            Обсудим ваш
            <br />
            <em>ассортимент.</em>
          </h1>
          <p>
            Позвоните, напишите в WhatsApp или отправьте письмо — отдел продаж
            поможет с каталогом и актуальными условиями.
          </p>
        </div>
      </section>

      <section className="contact-grid container">
        <article className="contact-main-card">
          <p className="eyebrow">Отдел продаж</p>
          <a className="contact-phone" href="tel:+79112210410">
            +7 (911) 221-04-10
          </a>
          <a className="contact-email" href="mailto:sales1@status-groupp.ru">
            sales1@status-groupp.ru
          </a>
          <div>
            <a
              className="button button-primary"
              href="https://wa.me/79112210410?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%BE%D0%B1%D1%81%D1%83%D0%B4%D0%B8%D1%82%D1%8C%20%D0%B0%D1%81%D1%81%D0%BE%D1%80%D1%82%D0%B8%D0%BC%D0%B5%D0%BD%D1%82%20Status%20Groupp."
              target="_blank"
              rel="noreferrer"
            >
              Написать в WhatsApp
              <span className="arrow-icon" aria-hidden="true" />
            </a>
            <button className="button button-outline" data-price-request>
              Запросить прайс
            </button>
          </div>
        </article>
        <article className="address-card address-spb">
          <span>01</span>
          <p>Санкт-Петербург</p>
          <h2>
            Софийская ул.,
            <br />
            дом 74
          </h2>
          <p>лит. А, пом. 3–7</p>
        </article>
        <article className="address-card address-moscow">
          <span>02</span>
          <p>Москва</p>
          <h2>
            Рябиновая ул.,
            <br />
            дом 55
          </h2>
          <p>стр. 9, пом. 15–3, ком. 8</p>
        </article>
      </section>
    </main>
  );
}
