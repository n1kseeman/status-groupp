"use client";

import { FormEvent, useEffect, useRef, useState, useSyncExternalStore } from "react";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const AGE_STORAGE_KEY = "status-groupp-age";
const AGE_CHANGE_EVENT = "status-groupp-age-change";

function subscribeToAgeConfirmation(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(AGE_CHANGE_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(AGE_CHANGE_EVENT, onChange);
  };
}

function getAgeConfirmation() {
  return window.localStorage.getItem(AGE_STORAGE_KEY) === "confirmed";
}

export function InteractiveShell() {
  const ageConfirmed = useSyncExternalStore(
    subscribeToAgeConfirmation,
    getAgeConfirmation,
    () => false,
  );
  const [sent, setSent] = useState(false);
  const ageDialog = useRef<HTMLDialogElement>(null);
  const priceDialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ageDialog.current;
    if (!dialog) return;

    if (ageConfirmed) {
      if (dialog.open) dialog.close();
    } else if (!dialog.open) {
      dialog.showModal();
    }
  }, [ageConfirmed]);

  useEffect(() => {
    const openPrice = (event: Event) => {
      const target = event.target as HTMLElement;
      const button = target.closest("[data-price-request]");
      if (!button) return;
      event.preventDefault();
      if (priceDialog.current && !priceDialog.current.open) {
        priceDialog.current.showModal();
      }
    };

    document.addEventListener("click", openPrice);
    return () => document.removeEventListener("click", openPrice);
  }, []);

  const confirmAge = () => {
    window.localStorage.setItem(AGE_STORAGE_KEY, "confirmed");
    window.dispatchEvent(new Event(AGE_CHANGE_EVENT));
  };

  const submitRequest = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const body = [
      `Компания: ${form.get("company") || "не указана"}`,
      `Имя: ${form.get("name") || "не указано"}`,
      `Телефон: ${form.get("phone") || "не указан"}`,
      `Комментарий: ${form.get("message") || "нет"}`,
    ].join("\n");
    setSent(true);
    window.location.href = `mailto:sales1@status-groupp.ru?subject=${encodeURIComponent(
      "Запрос прайс-листа с сайта Status Groupp",
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <dialog
        className="age-gate"
        ref={ageDialog}
        aria-labelledby="age-title"
        onCancel={(event) => event.preventDefault()}
      >
        <div className="age-gate-card">
          <span className="age-gate-mark">18+</span>
          <p className="eyebrow">Status Groupp</p>
          <h2 id="age-title">Подтвердите возраст</h2>
          <p>
            Сайт содержит информацию, не рекомендованную лицам, не достигшим
            совершеннолетнего возраста. Сведения носят информационный характер.
          </p>
          <button className="button button-primary" onClick={confirmAge}>
            Мне исполнилось 18 лет
            <span className="arrow-icon arrow-icon-right" aria-hidden="true" />
          </button>
        </div>
      </dialog>

      <dialog className="price-dialog" ref={priceDialog} aria-labelledby="price-title">
        <button
          className="dialog-close"
          onClick={() => priceDialog.current?.close()}
          aria-label="Закрыть"
        >
          ×
        </button>
        <p className="eyebrow">Актуальные оптовые условия</p>
        <h2 id="price-title">Получить прайс-лист</h2>
        <p>
          Оставьте данные — письмо сформируется в вашем почтовом приложении.
          Можно также сразу написать в WhatsApp.
        </p>
        <form onSubmit={submitRequest}>
          <label>
            Компания
            <input name="company" autoComplete="organization" placeholder="Название компании" />
          </label>
          <div className="form-row">
            <label>
              Имя
              <input name="name" autoComplete="name" placeholder="Как к вам обращаться" required />
            </label>
            <label>
              Телефон
              <input name="phone" type="tel" autoComplete="tel" placeholder="+7" required />
            </label>
          </div>
          <label>
            Комментарий
            <textarea name="message" rows={3} placeholder="Город, формат бизнеса, интересующие бренды" />
          </label>
          <label className="consent">
            <input type="checkbox" required />
            <span>
              Согласен на обработку данных в соответствии с{" "}
              <a href={`${publicBasePath}/privacy`}>условиями сайта</a>
            </span>
          </label>
          <button className="button button-primary" type="submit">
            Сформировать письмо
            <span className="arrow-icon" aria-hidden="true" />
          </button>
          <a
            className="button button-whatsapp"
            href="https://wa.me/79112210410?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D0%BF%D1%80%D0%B0%D0%B9%D1%81-%D0%BB%D0%B8%D1%81%D1%82%20Status%20Groupp."
            target="_blank"
            rel="noreferrer"
          >
            Написать в WhatsApp
          </a>
          {sent && (
            <p className="form-status" aria-live="polite">
              Письмо сформировано — проверьте почтовое приложение.
            </p>
          )}
        </form>
      </dialog>
    </>
  );
}
