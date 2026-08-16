"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import type { Product } from "../data";
import styles from "../inner-pages.module.css";

const filters = [
  { value: "all", label: "Все бренды" },
  { value: "tsingtao", label: "Tsingtao" },
  { value: "harbin", label: "Harbin" },
  { value: "singha", label: "Singha / Leo" },
  { value: "saigon", label: "Saigon" },
];

export function CatalogGrid({ products }: { products: Product[] }) {
  const [active, setActive] = useState("all");
  const visible = useMemo(
    () => (active === "all" ? products : products.filter((product) => product.brand === active)),
    [active, products],
  );

  return (
    <>
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
          <article className={styles.productCard} key={product.id}>
            <div className={styles.productMedia}>
              <span>0{index + 1}</span>
              <small>{product.country}</small>
              <Image
                src={product.image}
                alt={product.name}
                width={800}
                height={1000}
                sizes="(max-width: 620px) calc(100vw - 48px), (max-width: 1000px) 44vw, 28vw"
              />
            </div>
            <div className={styles.productInfo}>
              <p>{product.type}</p>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <dl>
                <div><dt>Объём</dt><dd>{product.volume}</dd></div>
                {product.abv && <div><dt>Крепость</dt><dd>{product.abv}</dd></div>}
              </dl>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
