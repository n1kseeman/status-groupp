"use client";

import { type CSSProperties, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Brand } from "../data";
import styles from "../inner-pages.module.css";

export function BrandLogoExplorer({
  brands,
  productCounts,
}: {
  brands: Brand[];
  productCounts: Record<string, number>;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<Brand | null>(null);

  const openBrand = (brand: Brand) => {
    setSelected(brand);
    requestAnimationFrame(() => dialog.current?.showModal());
  };

  return (
    <>
      <div className={styles.logoWall}>
        {brands.map((brand, index) => (
          <button
            className={styles.logoTile}
            key={brand.slug}
            onClick={() => openBrand(brand)}
            style={{ "--brand-accent": brand.accent } as CSSProperties}
            aria-label={`Открыть информацию о бренде ${brand.name}`}
          >
            <span className={styles.logoIndex}>{String(index + 1).padStart(2, "0")}</span>
            <span className={styles.logoCountry}>{brand.country}</span>
            <span className={styles.logoArtwork}>
              {brand.logo ? (
                <Image src={brand.logo} alt={brand.name} width={420} height={220} />
              ) : (
                <strong>{brand.logoText}</strong>
              )}
            </span>
            <span className={styles.logoHint}>Нажмите, чтобы узнать больше <i aria-hidden="true">↗</i></span>
          </button>
        ))}
      </div>

      <dialog
        className={styles.brandDialog}
        ref={dialog}
        onClick={(event) => {
          if (event.target === dialog.current) dialog.current?.close();
        }}
      >
        {selected && (
          <article style={{ "--brand-accent": selected.accent } as CSSProperties}>
            <button
              className={styles.brandDialogClose}
              onClick={() => dialog.current?.close()}
              aria-label="Закрыть информацию о бренде"
            >
              ×
            </button>
            <div className={styles.brandDialogVisual}>
              <Image
                src={selected.image}
                alt={`Ассортимент ${selected.name}`}
                width={920}
                height={1100}
                sizes="(max-width: 700px) 100vw, 42vw"
              />
            </div>
            <div className={styles.brandDialogCopy}>
              <p>{selected.country} · {selected.since}</p>
              <h2>{selected.name}</h2>
              <strong>{selected.short}</strong>
              <p>{selected.story}</p>
              <dl>
                <div><dt>Страна</dt><dd>{selected.country}</dd></div>
                <div><dt>В каталоге</dt><dd>{productCounts[selected.slug] ?? 0} поз.</dd></div>
              </dl>
              <div className={styles.brandDialogActions}>
                <Link href={`/brands/${selected.slug}`}>Открыть страницу бренда <span aria-hidden="true">↗</span></Link>
                <button
                  data-price-request
                  onClick={() => dialog.current?.close()}
                >
                  Запросить прайс
                </button>
              </div>
            </div>
          </article>
        )}
      </dialog>
    </>
  );
}
