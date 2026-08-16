import type { Metadata, Viewport } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import "./globals.css";
import { InteractiveShell } from "./components/InteractiveShell";
import { MotionEffects } from "./components/MotionEffects";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const metadataBase = new URL(
  `${publicBasePath}/`,
  "https://n1kseeman.github.io",
);
const description =
  "Оптовые поставки Tsingtao, Harbin, Singha, Leo и Saigon по России. Каталог азиатского пива для магазинов, ресторанов и дистрибьюторов.";

export const metadata: Metadata = {
  metadataBase,
  applicationName: "Status Groupp",
  title: {
    default: "Status Groupp — азиатские пивные бренды оптом",
    template: "%s — Status Groupp",
  },
  description,
  alternates: {
    canonical: "./",
  },
  referrer: "strict-origin-when-cross-origin",
  formatDetection: {
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
  },
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
        url: "og.jpg",
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
    images: ["og.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#183729",
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
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'"
        />
      </head>
      <body
        style={
          {
            "--hero-collage": `url("${publicBasePath}/assets/hero-collage.webp")`,
          } as CSSProperties
        }
      >
        <a className="skip-link" href="#main-content">
          К основному содержанию
        </a>
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
        <div id="main-content" tabIndex={-1}>
          {children}
        </div>
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
        <MotionEffects />
        <InteractiveShell />
      </body>
    </html>
  );
}
