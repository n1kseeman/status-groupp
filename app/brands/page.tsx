import type { Metadata } from "next";
import { BrandLogoExplorer } from "../components/BrandLogoExplorer";
import { brands, products } from "../data";
import styles from "../inner-pages.module.css";

export const metadata: Metadata = {
  title: "Бренды Status Groupp",
  description: "Все азиатские бренды в портфеле Status Groupp. Нажмите на логотип, чтобы узнать историю бренда и посмотреть ассортимент.",
};

const productCounts = Object.fromEntries(
  brands.map((brand) => [brand.slug, products.filter((product) => product.brand === brand.slug).length]),
);

export default function BrandsPage() {
  return (
    <main className={styles.page}>
      <section className={`${styles.innerHero} ${styles.logoHero}`}>
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Портфель / {brands.length} брендов</p>
          <h1>Имена Азии.<br /><em>В одной коллекции.</em></h1>
          <p className={styles.heroLead}>
            От китайской классики до ярких фруктовых линеек Таиланда и Вьетнама.
            Нажмите на любой логотип, чтобы открыть информацию о бренде.
          </p>
        </div>
        <div className={styles.logoHeroMark} aria-hidden="true">
          <span>11</span>
          <p>брендов<br />в портфеле</p>
        </div>
        <div className={styles.heroStrip}>
          <span>Китай</span><i /><span>Таиланд</span><i /><span>Вьетнам</span>
          <p>Логотип → история → ассортимент</p>
        </div>
      </section>

      <section className={styles.logoSection}>
        <header className={styles.sectionHeader} data-reveal>
          <div><p>Все бренды</p><h2>Выберите имя.<br /><em>Откройте историю.</em></h2></div>
          <span>Каждый логотип интерактивен: внутри — описание бренда, страна происхождения и количество позиций в каталоге.</span>
        </header>
        <BrandLogoExplorer brands={brands} productCounts={productCounts} />
      </section>
    </main>
  );
}
