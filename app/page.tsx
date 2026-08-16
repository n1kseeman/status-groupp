import Link from "next/link";
import Image from "next/image";
import { assetPath, brands } from "./data";

export default function Home() {
  return (
    <main>
      <section className="hero hero-home">
        <div className="hero-text container">
          <p className="eyebrow">Пиво с характером места</p>
          <h1>
            Истории Азии,
            <br />
            которые хочется <em>попробовать.</em>
          </h1>
          <p className="hero-lead">
            Tsingtao, Harbin, Singha и Saigon — оригинальные бренды с локальной
            историей и собственным вкусом. Поставляем оптом по России.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/catalog">
              Познакомиться с брендами
              <span className="arrow-icon" aria-hidden="true" />
            </Link>
            <button className="button button-ghost" data-price-request>
              Получить прайс-лист
            </button>
          </div>
          <div className="country-list" aria-label="География брендов">
            <span>Китай</span>
            <i />
            <span>Таиланд</span>
            <i />
            <span>Вьетнам</span>
          </div>
        </div>

        <aside className="hero-product">
          <div className="hero-product-arch">
            <Image
              src={assetPath("/products/tsingtao-hero.webp")}
              alt="Пиво Tsingtao"
              width={421}
              height={800}
              sizes="(max-width: 820px) 255px, 265px"
              preload
            />
          </div>
          <p>Бренд коллекции</p>
          <strong>Tsingtao / Китай</strong>
        </aside>
        <div className="hero-note">
          Четыре бренда.
          <br />
          Три страны.
          <br />
          Одна сильная коллекция.
        </div>
      </section>

      <section className="brand-ribbon" aria-label="Бренды Status Groupp">
        <span className="brand-ribbon-intro">
          Открывайте
          <br />
          новые вкусы <span className="arrow-icon arrow-icon-right" aria-hidden="true" />
        </span>
        {brands.map((brand) => (
          <Link href={`/brands/${brand.slug}`} key={brand.slug}>
            <strong>{brand.name}</strong>
            <span>{brand.country}</span>
          </Link>
        ))}
      </section>

      <section className="section section-intro container" id="brands">
        <div>
          <p className="eyebrow">Коллекция Status Groupp</p>
          <h2>
            Четыре характера.
            <br />
            <em>Один сильный портфель.</em>
          </h2>
        </div>
        <p className="section-copy">
          От лёгких азиатских лагеров до пшеничного пива, стаута и
          безалкогольных вариантов. Ассортимент собран так, чтобы закрыть разные
          вкусовые сценарии и форматы продаж.
        </p>
      </section>

      <section className="brand-grid container">
        {brands.map((brand, index) => (
          <article className={`brand-card brand-card-${brand.slug}`} key={brand.slug}>
            <div className="brand-card-top">
              <span>0{index + 1}</span>
              <span>{brand.country}</span>
            </div>
            <Image
              src={brand.image}
              alt={`Ассортимент ${brand.name}`}
              width={920}
              height={1227}
              sizes="(max-width: 820px) calc(100vw - 32px), 50vw"
            />
            <div className="brand-card-copy">
              <p>{brand.type}</p>
              <h3>{brand.name}</h3>
              <p>{brand.short}</p>
              <Link href={`/brands/${brand.slug}`}>
                История и ассортимент
                <span className="arrow-icon" aria-hidden="true" />
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="story-section">
        <div className="story-visual">
          <div className="story-stamp">
            <span>Asia</span>
            <span className="arrow-icon arrow-icon-right" aria-hidden="true" />
            <span>Russia</span>
          </div>
        </div>
        <div className="story-copy">
          <p className="eyebrow">Status Groupp</p>
          <h2>
            Азия ближе,
            <br />
            чем кажется.
          </h2>
          <p>
            Мы знакомим российский рынок с узнаваемыми азиатскими пивными
            брендами и помогаем бизнесу подобрать актуальный ассортимент.
          </p>
          <div className="story-points">
            <div>
              <strong>По всей России</strong>
              <span>Обсуждаем географию и формат поставки под задачу партнёра.</span>
            </div>
            <div>
              <strong>Прямой контакт</strong>
              <span>Отдел продаж на связи по телефону, WhatsApp и email.</span>
            </div>
            <div>
              <strong>Понятный выбор</strong>
              <span>Бренды и позиции собраны в едином оптовом каталоге.</span>
            </div>
          </div>
          <Link className="text-link" href="/partners">
            Узнать о сотрудничестве
            <span className="arrow-icon" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="section featured-products container">
        <div className="featured-heading">
          <p className="eyebrow">Выбор коллекции</p>
          <h2>
            От классики
            <br />
            <em>до новых вкусов.</em>
          </h2>
          <Link className="button button-outline" href="/catalog">
            Весь каталог
            <span className="arrow-icon" aria-hidden="true" />
          </Link>
        </div>
        <div className="featured-card featured-card-main">
          <span className="product-tag">Китай · 4,7%</span>
          <Image
            src={assetPath("/products/tsingtao-premium.webp")}
            alt="Tsingtao Premium Lager"
            width={410}
            height={445}
            sizes="(max-width: 820px) calc(100vw - 72px), 38vw"
          />
          <h3>Tsingtao Premium Lager</h3>
          <p>Лёгкий, освежающий лагер для самых разных гастрономических сочетаний.</p>
        </div>
        <div className="featured-stack">
          <div className="featured-mini">
            <Image
              src={assetPath("/products/singha-033.webp")}
              alt="Singha Premium Lager"
              width={500}
              height={500}
              sizes="(max-width: 460px) calc(100vw - 72px), 22vw"
            />
            <div>
              <span className="product-tag">Таиланд · 5%</span>
              <h3>Singha Premium</h3>
              <p>Ярко-золотой лагер с лёгкой горчинкой.</p>
            </div>
          </div>
          <div className="featured-mini">
            <Image
              src={assetPath("/products/harbin-033.webp")}
              alt="Harbin Premium"
              width={360}
              height={540}
              sizes="(max-width: 460px) calc(100vw - 72px), 22vw"
            />
            <div>
              <span className="product-tag">Китай · 5%</span>
              <h3>Harbin Premium</h3>
              <p>Светлый лагер с особым сортом риса «жемчужина».</p>
            </div>
          </div>
        </div>
      </section>

      <section className="partnership-cta">
        <div>
          <p className="eyebrow">Для магазинов, ресторанов и дистрибьюторов</p>
          <h2>
            Давайте соберём
            <br />
            <em>вашу азиатскую полку.</em>
          </h2>
        </div>
        <div>
          <p>
            Запросите актуальный прайс-лист — отдел продаж свяжется с вами и
            поможет подобрать позиции под формат бизнеса.
          </p>
          <button className="button button-light" data-price-request>
            Получить прайс-лист
            <span className="arrow-icon" aria-hidden="true" />
          </button>
        </div>
      </section>
    </main>
  );
}
