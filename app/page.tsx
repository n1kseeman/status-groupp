import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { MotionEffects } from "./components/MotionEffects";
import { assetPath, brands, products } from "./data";
import styles from "./home.module.css";

const featuredProductIds = new Set([
  "tsingtao-premium-033",
  "tsingtao-ipa",
  "harbin-033",
  "singha-033",
]);

const featuredProducts = products.filter((product) => featuredProductIds.has(product.id));

const revealDelay = (index: number) =>
  ({ "--reveal-delay": `${index * 90}ms` }) as CSSProperties;

export default function Home() {
  return (
    <main className={styles.page}>
      <MotionEffects />
      <div className={styles.scrollProgress} aria-hidden="true"><span /></div>

      <section className={styles.hero}>
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>Импортная коллекция · Азия → Россия</p>
          <h1>
            Истории Азии.
            <span>Собраны в одной коллекции.</span>
          </h1>
          <p className={styles.heroLead}>
            Четыре бренда с собственным характером — от китайской классики до
            ярких вкусов Таиланда и Вьетнама. Для ритейла, HoReCa и дистрибуции.
          </p>
          <div className={styles.heroActions}>
            <Link className={styles.primaryAction} href="#brands">
              Исследовать коллекцию <span aria-hidden="true">↘</span>
            </Link>
            <button className={styles.secondaryAction} data-price-request>
              Получить прайс
            </button>
          </div>
        </div>

        <div className={styles.heroScene} aria-label="Главный бренд коллекции — Tsingtao">
          <div className={styles.heroHalo} aria-hidden="true">
            <span>1903</span><span>Qingdao</span><span>China</span>
          </div>
          <div className={styles.heroBottle}>
            <Image
              src={assetPath("/products/tsingtao-hero.webp")}
              alt="Бутылка и бокал Tsingtao"
              width={421}
              height={800}
              sizes="(max-width: 600px) 78vw, (max-width: 1000px) 46vw, 34vw"
              preload
            />
          </div>
          <div className={styles.heroEdition}>
            <span>01</span>
            <p>Флагман коллекции</p>
            <strong>Tsingtao Premium</strong>
          </div>
        </div>

        <div className={styles.heroFacts}>
          <div><strong>04</strong><span>бренда</span></div>
          <div><strong>03</strong><span>страны</span></div>
          <div><strong>15+</strong><span>позиций</span></div>
          <p>Оптовые поставки по России</p>
        </div>
      </section>

      <section className={styles.manifesto} aria-label="О коллекции">
        <p data-reveal>Не просто импорт.</p>
        <h2 data-reveal>
          Мы собираем <em>культуру места</em> — в брендах, которые уже знают и
          выбирают по всему миру.
        </h2>
        <div className={styles.manifestoMeta} data-reveal>
          <span>Китай</span><i /><span>Таиланд</span><i /><span>Вьетнам</span>
        </div>
      </section>

      <section className={styles.collection} id="brands">
        <header className={styles.sectionHeading} data-reveal>
          <p>Коллекция / 01—04</p>
          <h2>Четыре бренда.<br /><em>Четыре характера.</em></h2>
          <span>Прокрутите, чтобы открыть историю каждого места.</span>
        </header>

        <div className={styles.brandChapters}>
          {brands.map((brand, index) => (
            <article
              className={styles.brandChapter}
              data-reveal
              key={brand.slug}
              style={{
                "--brand-accent": brand.accent,
                "--reveal-delay": `${index * 45}ms`,
              } as CSSProperties}
            >
              <div className={styles.chapterIndex} aria-hidden="true">0{index + 1}</div>
              <div className={styles.chapterCopy}>
                <div className={styles.chapterMeta}>
                  <span>{brand.country}</span><span>{brand.since}</span>
                </div>
                <p>{brand.type}</p>
                <h3>{brand.name}</h3>
                <p className={styles.chapterIntro}>{brand.intro}</p>
                <p className={styles.chapterStory}>{brand.short}</p>
                <Link href={`/brands/${brand.slug}`}>
                  Открыть историю <span aria-hidden="true">↗</span>
                </Link>
              </div>
              <div className={styles.chapterVisual}>
                <div className={styles.chapterSun} aria-hidden="true" />
                <Image
                  src={brand.image}
                  alt={`Линейка ${brand.name}`}
                  width={920}
                  height={1227}
                  sizes="(max-width: 760px) 88vw, 48vw"
                />
                <span className={styles.chapterCountry}>{brand.country}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.routeSection}>
        <div className={styles.routeIntro} data-reveal>
          <p>Как работает Status Groupp</p>
          <h2>От места происхождения — <em>до вашей полки.</em></h2>
        </div>
        <div className={styles.routeTrack}>
          {[
            ["01", "Находим", "Бренды с историей, узнаваемостью и понятным вкусом."],
            ["02", "Собираем", "Портфель под разные форматы, аудитории и гастросценарии."],
            ["03", "Доставляем", "Работаем с партнёрами и обсуждаем поставки по России."],
          ].map(([number, title, copy], index) => (
            <article data-reveal style={revealDelay(index)} key={number}>
              <span>{number}</span><h3>{title}</h3><p>{copy}</p>
            </article>
          ))}
        </div>
        <div className={styles.routeLine} aria-hidden="true"><span /></div>
      </section>

      <section className={styles.productsSection} id="products">
        <header className={styles.productsHeading} data-reveal>
          <div>
            <p>Выбор коллекции</p>
            <h2>Попробуйте<br /><em>Азию по-разному.</em></h2>
          </div>
          <Link href="/catalog">Смотреть весь каталог <span aria-hidden="true">↗</span></Link>
        </header>
        <div className={styles.productRail}>
          {featuredProducts.map((product, index) => (
            <article data-reveal style={revealDelay(index)} key={product.id}>
              <div className={styles.productImage}>
                <span>0{index + 1}</span>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={600}
                  sizes="(max-width: 620px) 72vw, (max-width: 1000px) 38vw, 23vw"
                />
              </div>
              <div className={styles.productMeta}>
                <p>{product.country} · {product.type}</p>
                <h3>{product.name}</h3>
                <span>{product.volume}{product.abv ? ` · ${product.abv}` : ""}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.partnerCta}>
        <div className={styles.ctaMarquee} aria-hidden="true">
          <div>
            <span>RETAIL</span><i /><span>HORECA</span><i /><span>DISTRIBUTION</span><i />
            <span>RETAIL</span><i /><span>HORECA</span><i /><span>DISTRIBUTION</span><i />
          </div>
        </div>
        <div className={styles.ctaContent}>
          <div data-reveal>
            <p>Сотрудничество</p>
            <h2>Соберём азиатскую полку, которую <em>заметят.</em></h2>
          </div>
          <div className={styles.ctaAside} data-reveal>
            <p>
              Расскажите о формате бизнеса — предложим ассортимент и актуальные
              оптовые условия.
            </p>
            <button data-price-request>
              Получить прайс-лист <span aria-hidden="true">↗</span>
            </button>
            <Link href="/partners">Условия сотрудничества</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
