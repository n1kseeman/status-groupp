import type { Metadata } from "next";
import { CatalogGrid } from "../components/CatalogGrid";
import { products } from "../data";

export const metadata: Metadata = {
  title: "Каталог азиатского пива",
  description:
    "Оптовый каталог Tsingtao, Harbin, Singha, Leo и Saigon от Status Groupp.",
};

export default function CatalogPage() {
  return (
    <main>
      <section className="page-hero catalog-hero">
        <div className="container">
          <p className="eyebrow">Оптовый ассортимент</p>
          <h1>
            Каталог вкусов
            <br />
            <em>из Азии.</em>
          </h1>
          <p>
            Лагеры, IPA, пшеничное пиво, стаут, безалкогольные позиции и
            содовая. Актуальное наличие и условия уточняйте в прайс-листе.
          </p>
        </div>
      </section>
      <section className="catalog-section container">
        <CatalogGrid products={products} />
      </section>
      <section className="catalog-request">
        <div>
          <p className="eyebrow">Нужны цены и наличие?</p>
          <h2>Запросите актуальный прайс-лист</h2>
        </div>
        <button className="button button-light" data-price-request>
          Получить прайс <span>↗</span>
        </button>
      </section>
    </main>
  );
}

