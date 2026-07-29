"use client";

import { useMemo, useState } from "react";
import type { Product } from "../data";

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
      <div className="catalog-filters" role="group" aria-label="Фильтр по брендам">
        {filters.map((filter) => (
          <button
            key={filter.value}
            className={active === filter.value ? "active" : ""}
            onClick={() => setActive(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <div className="catalog-grid">
        {visible.map((product) => (
          <article className="product-card" key={product.id}>
            <div className="product-card-media">
              <span>{product.country}</span>
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-card-info">
              <p>{product.type}</p>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <dl>
                <div>
                  <dt>Объём</dt>
                  <dd>{product.volume}</dd>
                </div>
                {product.abv && (
                  <div>
                    <dt>Крепость</dt>
                    <dd>{product.abv}</dd>
                  </div>
                )}
              </dl>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

