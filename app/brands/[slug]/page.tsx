import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { brands, products } from "../../data";
import styles from "../../inner-pages.module.css";

export function generateStaticParams() {
  return brands.map((brand) => ({ slug: brand.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const brand = brands.find((item) => item.slug === slug);
  if (!brand) return {};
  const title = `${brand.name} оптом`;
  const description = `${brand.short} Ассортимент ${brand.name} от Status Groupp.`;
  const image = new URL(brand.image, "https://n1kseeman.github.io").toString();
  return {
    title,
    description,
    openGraph: { type: "website", locale: "ru_RU", title, description, images: [{ url: image, alt: `Ассортимент ${brand.name}` }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export default async function BrandPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const brand = brands.find((item) => item.slug === slug);
  if (!brand) notFound();
  const brandProducts = products.filter((product) => product.brand === slug);

  return (
    <main
      className={styles.page}
      style={{ "--page-accent": brand.accent } as CSSProperties}
    >
      <section className={`${styles.innerHero} ${styles.brandHero}`}>
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>{brand.country} · {brand.since}</p>
          <h1>{brand.name}<br /><em>характер места.</em></h1>
          <p className={styles.heroLead}>{brand.intro}</p>
          <div className={styles.brandFacts}>
            <div><span>Страна</span><strong>{brand.country}</strong></div>
            <div><span>Коллекция</span><strong>{brandProducts.length} поз.</strong></div>
          </div>
          <button className={styles.primaryButton} data-price-request>
            Запросить прайс <span aria-hidden="true">↗</span>
          </button>
        </div>
        <div className={`${styles.heroVisual} ${styles.brandHeroVisual}`}>
          <div className={styles.brandRings} aria-hidden="true" />
          <Image src={brand.image} alt={`Ассортимент ${brand.name}`} width={920} height={1227} sizes="(max-width: 680px) 92vw, 50vw" preload />
          <span className={styles.brandCountry}>{brand.country}</span>
          <span className={styles.heroBadge}>{brand.type}</span>
        </div>
        <div className={styles.heroStrip}>
          <span>Status Groupp</span><i /><span>{brand.name}</span><i /><span>{brand.country}</span>
          <p>{brand.since}</p>
        </div>
      </section>

      <section className={styles.brandStory}>
        <div data-reveal><p>Характер бренда</p><span>01 / История</span></div>
        <div data-reveal>
          <h2>История, которую<br /><em>можно попробовать.</em></h2>
          <p>{brand.story}</p>
        </div>
        <aside data-reveal>
          <span>“</span>
          <p>{brand.short}</p>
        </aside>
      </section>

      <section className={styles.brandProducts}>
        <header className={styles.sectionHeader} data-reveal>
          <div><p>Ассортимент</p><h2>Позиции<br /><em>{brand.name}.</em></h2></div>
          <Link href="/catalog">Весь каталог <span aria-hidden="true">↗</span></Link>
        </header>
        <div className={styles.brandProductGrid}>
          {brandProducts.map((product, index) => (
            <article data-reveal style={{ "--reveal-delay": `${index * 80}ms` } as CSSProperties} key={product.id}>
              <div className={styles.brandProductMedia}>
                <span>0{index + 1}</span>
                <Image src={product.image} alt={product.name} width={800} height={1000} sizes="(max-width: 620px) calc(100vw - 48px), (max-width: 1000px) 44vw, 28vw" />
              </div>
              <p>{product.type}</p>
              <h3>{product.name}</h3>
              <div><span>{product.volume}</span>{product.abv && <span>{product.abv}</span>}</div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.universalCta}>
        <div data-reveal><p>Оптовые поставки</p><h2>Добавим {brand.name}<br /><em>в ваш ассортимент?</em></h2></div>
        <div data-reveal>
          <p>Получите актуальный прайс и обсудите доступные позиции с отделом продаж.</p>
          <button data-price-request>Получить прайс-лист <span aria-hidden="true">↗</span></button>
        </div>
      </section>
    </main>
  );
}
