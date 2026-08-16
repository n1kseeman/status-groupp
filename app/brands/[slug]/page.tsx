import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { brands, products } from "../../data";

export function generateStaticParams() {
  return brands.map((brand) => ({ slug: brand.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const brand = brands.find((item) => item.slug === slug);
  if (!brand) return {};
  const title = `${brand.name} оптом`;
  const description = `${brand.short} Ассортимент ${brand.name} от Status Groupp.`;
  const image = new URL(brand.image, "https://n1kseeman.github.io").toString();

  return {
    title,
    description,
    openGraph: {
      type: "website",
      locale: "ru_RU",
      title,
      description,
      images: [{ url: image, alt: `Ассортимент ${brand.name}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const brand = brands.find((item) => item.slug === slug);
  if (!brand) notFound();
  const brandProducts = products.filter((product) => product.brand === slug);

  return (
    <main className={`brand-page brand-page-${brand.slug}`}>
      <section className="brand-hero">
        <div className="brand-hero-copy">
          <p className="eyebrow">{brand.type}</p>
          <h1>{brand.name}</h1>
          <p className="brand-hero-intro">{brand.intro}</p>
          <div className="brand-facts">
            <span>
              <small>Страна</small>
              {brand.country}
            </span>
            <span>
              <small>История бренда</small>
              {brand.since}
            </span>
          </div>
          <button className="button button-primary" data-price-request>
            Запросить прайс
            <span className="arrow-icon" aria-hidden="true" />
          </button>
        </div>
        <div className="brand-hero-media">
          <Image
            src={brand.image}
            alt={`Ассортимент ${brand.name}`}
            width={920}
            height={1227}
            sizes="(max-width: 820px) 86vw, 50vw"
            preload
          />
          <span>{brand.country}</span>
        </div>
      </section>

      <section className="brand-story container">
        <p className="eyebrow">Характер бренда</p>
        <div>
          <h2>
            История,
            <br />
            <em>которую можно попробовать.</em>
          </h2>
          <p>{brand.story}</p>
        </div>
      </section>

      <section className="brand-products container">
        <div className="section-title-row">
          <div>
            <p className="eyebrow">Ассортимент</p>
            <h2>Позиции {brand.name}</h2>
          </div>
          <Link className="text-link" href="/catalog">
            Весь каталог
            <span className="arrow-icon" aria-hidden="true" />
          </Link>
        </div>
        <div className="brand-product-grid">
          {brandProducts.map((product) => (
            <article className="brand-product-card" key={product.id}>
              <Image
                src={product.image}
                alt={product.name}
                width={800}
                height={1000}
                sizes="(max-width: 820px) calc(100vw - 82px), (max-width: 1100px) 44vw, 28vw"
              />
              <p>{product.type}</p>
              <h3>{product.name}</h3>
              <div>
                <span>{product.volume}</span>
                {product.abv && <span>{product.abv}</span>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="partnership-cta">
        <div>
          <p className="eyebrow">Оптовые поставки</p>
          <h2>
            Добавим {brand.name}
            <br />
            <em>в ваш ассортимент?</em>
          </h2>
        </div>
        <div>
          <p>
            Получите актуальный прайс и обсудите доступные позиции с отделом
            продаж Status Groupp.
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
