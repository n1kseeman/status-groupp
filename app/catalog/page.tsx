import type { Metadata } from "next";
import Image from "next/image";
import { CatalogGrid } from "../components/CatalogGrid";
import { assetPath, products } from "../data";
import styles from "../inner-pages.module.css";

export const metadata: Metadata = {
  title: "Каталог азиатского пива",
  description:
    "Оптовый каталог азиатского пива Status Groupp: 11 брендов и более 30 товарных позиций.",
};

export default function CatalogPage() {
  return (
    <main className={styles.page}>
      <section className={styles.innerHero}>
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Каталог / {products.length} позиции</p>
          <h1>Вкусы Азии.<br /><em>На одной полке.</em></h1>
          <p className={styles.heroLead}>
            От лёгких лагеров до IPA, стаута, фруктового пшеничного и безалкогольного пива.
            Фильтруйте коллекцию по 11 брендам и запрашивайте актуальное наличие.
          </p>
          <button className={styles.primaryButton} data-price-request>
            Получить оптовый прайс <span aria-hidden="true">↗</span>
          </button>
        </div>
        <div className={`${styles.heroVisual} ${styles.catalogVisual}`} aria-label="Выбор коллекции Status Groupp">
          <div className={styles.catalogOrbit} aria-hidden="true" />
          <Image className={styles.catalogBottleA} src={assetPath("/products/tsingtao-ipa.webp")} alt="Tsingtao IPA" width={500} height={720} preload />
          <Image className={styles.catalogBottleB} src={assetPath("/products/singha-033.webp")} alt="Singha Premium" width={500} height={700} />
          <Image className={styles.catalogBottleC} src={assetPath("/products/harbin-033.webp")} alt="Harbin Premium" width={500} height={760} />
          <span className={styles.heroBadge}>Лагер · IPA · Stout · Zero</span>
        </div>
        <div className={styles.heroStrip}>
          <span>Китай</span><i /><span>Таиланд</span><i /><span>Вьетнам</span>
          <p>Для ритейла · HoReCa · дистрибуции</p>
        </div>
      </section>

      <section className={styles.catalogSection}>
        <header className={styles.sectionHeader} data-reveal>
          <div><p>Вся коллекция</p><h2>Выберите свой<br /><em>характер вкуса.</em></h2></div>
          <span>Цены и наличие зависят от партии — уточняйте актуальные условия у отдела продаж.</span>
        </header>
        <CatalogGrid products={products} />
      </section>

      <section className={styles.universalCta}>
        <div data-reveal><p>Нужны цены и наличие?</p><h2>Получите актуальный<br /><em>оптовый прайс.</em></h2></div>
        <div data-reveal>
          <p>Расскажите о формате бизнеса — менеджер поможет собрать подходящий ассортимент.</p>
          <button data-price-request>Запросить прайс-лист <span aria-hidden="true">↗</span></button>
        </div>
      </section>
    </main>
  );
}
