"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { brands, type Product } from "../data";
import styles from "../inner-pages.module.css";

const filters = [{ value: "all", label: "Все бренды" }, ...brands.map((brand) => ({
  value: brand.slug,
  label: brand.name,
}))];

export function CatalogGrid({ products }: { products: Product[] }) {
  const [active, setActive] = useState("all");
  const [visibleCount, setVisibleCount] = useState(12);
  const visible = useMemo(
    () => (active === "all" ? products : products.filter((product) => product.brand === active)),
    [active, products],
  );

  return (
    <>
      <label className={styles.catalogMobileFilter}>
        <span>Показать бренд</span>
        <select value={active} onChange={(event) => setActive(event.target.value)}>
          {filters.map((filter) => (
            <option key={filter.value} value={filter.value}>{filter.label}</option>
          ))}
        </select>
      </label>
      <div className={styles.catalogFilters} role="group" aria-label="Фильтр по брендам">
        {filters.map((filter) => (
          <button
            key={filter.value}
            className={active === filter.value ? styles.activeFilter : ""}
            aria-pressed={active === filter.value}
            onClick={() => setActive(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <p className={styles.catalogResult} aria-live="polite">Показано позиций: {visible.length}</p>
      <div className={styles.catalogGrid}>
        {visible.map((product, index) => (
          <article
            className={`${styles.productCard} ${index >= visibleCount ? styles.mobileHidden : ""}`}
            key={product.id}
          >
            <div className={styles.productMedia}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <small>{product.country}</small>
              <Image
                src={product.image}
                alt={product.name}
                width={800}
                height={1000}
                sizes="(max-width: 760px) 120px, (max-width: 1000px) 44vw, 28vw"
              />
            </div>
            <div className={styles.productInfo}>
              <p>{product.type}</p>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <dl>
                <div><dt>Объём</dt><dd>{product.volume}</dd></div>
                {product.abv && <div><dt>Крепость</dt><dd>{product.abv}</dd></div>}
                {product.pack && <div><dt>В упаковке</dt><dd>{product.pack}</dd></div>}
              </dl>
              {(product.composition || product.shelfLife) && (
                <details className={styles.productDetails}>
                  <summary>Подробнее о позиции <span aria-hidden="true">+</span></summary>
                  {product.composition && <p><strong>Состав:</strong> {product.composition}</p>}
                  {product.shelfLife && <p><strong>Срок годности:</strong> {product.shelfLife}</p>}
                </details>
              )}
            </div>
          </article>
        ))}
      </div>
      {visibleCount < visible.length && (
        <button
          className={styles.catalogMore}
          type="button"
          onClick={() => setVisibleCount((count) => Math.min(count + 12, visible.length))}
        >
          Показать ещё {Math.min(12, visible.length - visibleCount)}
          <span aria-hidden="true">↓</span>
        </button>
      )}
    </>
  );
}
