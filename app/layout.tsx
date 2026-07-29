import type { Metadata, Viewport } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import "./globals.css";
import { InteractiveShell } from "./components/InteractiveShell";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const metadataBase = new URL(
  `${publicBasePath}/`,
  "https://n1kseeman.github.io",
);
const description =
  "Оптовые поставки Tsingtao, Harbin, Singha, Leo и Saigon по России. Каталог азиатского пива для магазинов, ресторанов и дистрибьюторов.";

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Status Groupp — азиатские пивные бренды оптом",
    template: "%s — Status Groupp",
  },
  description,
  icons: {
    icon: `${publicBasePath}/favicon.png`,
    shortcut: `${publicBasePath}/favicon.png`,
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    title: "Status Groupp — истории Азии, которые хочется попробовать",
    description,
    images: [
      {
        url: "og.png",
        width: 1200,
        height: 630,
        alt: "Status Groupp — азиатские пивные бренды",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Status Groupp — истории Азии, которые хочется попробовать",
    description,
    images: ["og.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f7efdc",
};

function Wordmark() {
  return (
    <Link className="wordmark" href="/" aria-label="Status Groupp — главная">
      <span className="wordmark-mark">SG</span>
      <span>
        Status
        <br />
        Groupp
      </span>
    </Link>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        style={
          {
            "--hero-collage": `url("${publicBasePath}/assets/hero-collage.png")`,
          } as CSSProperties
        }
      >
        <header className="site-header">
          <Wordmark />
          <nav className="desktop-nav" aria-label="Основная навигация">
            <Link href="/#brands">Бренды</Link>
            <Link href="/catalog">Каталог</Link>
            <Link href="/partners">Партнёрам</Link>
            <Link href="/#about">О нас</Link>
            <Link href="/contacts">Контакты</Link>
          </nav>
          <span className="age-mark">18+</span>
          <button className="header-price" data-price-request>
            Получить прайс
            <span className="arrow-icon" aria-hidden="true" />
          </button>
          <details className="mobile-menu">
            <summary aria-label="Открыть меню">
              <i />
              <i />
            </summary>
            <nav>
              <Link href="/#brands">Бренды</Link>
              <Link href="/catalog">Каталог</Link>
              <Link href="/partners">Партнёрам</Link>
              <Link href="/contacts">Контакты</Link>
              <button data-price-request>Получить прайс</button>
            </nav>
          </details>
        </header>
        {children}
        <footer className="site-footer" id="about">
          <div className="footer-top">
            <Wordmark />
            <p>
              Азиатские пивные бренды
              <br />
              для российского рынка.
            </p>
            <div className="footer-links">
              <Link href="/catalog">Каталог</Link>
              <Link href="/partners">Партнёрам</Link>
              <Link href="/contacts">Контакты</Link>
              <Link href="/privacy">Обработка данных</Link>
            </div>
          </div>
          <div className="footer-contact">
            <div>
              <span>Отдел продаж</span>
              <a href="tel:+79112210410">+7 (911) 221-04-10</a>
              <a href="mailto:sales1@status-groupp.ru">sales1@status-groupp.ru</a>
            </div>
            <div>
              <span>Санкт-Петербург</span>
              <p>Софийская ул., дом 74, лит. А, пом. 3–7</p>
            </div>
            <div>
              <span>Москва</span>
              <p>Рябиновая ул., дом 55, стр. 9, пом. 15–3, ком. 8</p>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Status Groupp</span>
            <span>Информация для лиц старше 18 лет</span>
          </div>
        </footer>
        <InteractiveShell />
      </body>
    </html>
  );
}
