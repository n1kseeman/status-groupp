"use client";

import { useRef, useState } from "react";
import Link from "next/link";

export function MobileMenu() {
  const menu = useRef<HTMLDetailsElement>(null);
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    if (menu.current) menu.current.open = false;
    setOpen(false);
  };

  return (
    <details
      className="mobile-menu"
      ref={menu}
      onToggle={(event) => setOpen(event.currentTarget.open)}
    >
      <summary aria-label={open ? "Закрыть меню" : "Открыть меню"}>
        <i />
        <i />
      </summary>
      <nav aria-label="Мобильная навигация">
        <Link href="/brands" onClick={closeMenu}>Бренды</Link>
        <Link href="/catalog" onClick={closeMenu}>Каталог</Link>
        <Link href="/partners" onClick={closeMenu}>Партнёрам</Link>
        <Link href="/#about" onClick={closeMenu}>О нас</Link>
        <Link href="/contacts" onClick={closeMenu}>Контакты</Link>
        <button data-price-request onClick={closeMenu}>Получить прайс</button>
      </nav>
    </details>
  );
}
