import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Status Groupp home page", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  assert.equal(response.headers.get("x-content-type-options"), "nosniff");
  assert.equal(response.headers.get("x-frame-options"), "DENY");

  const html = await response.text();
  assert.match(html, /Status Groupp/);
  assert.match(html, /Истории Азии/);
  assert.match(html, /Собраны в одной коллекции/);
  assert.match(html, /От места происхождения/);
  assert.match(html, /Получить прайс/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|Building your site/i);
});

test("server-renders the catalog", async () => {
  const response = await render("/catalog");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Каталог вкусов/);
  assert.match(html, /Tsingtao Premium Lager/);
});

test("server-renders a brand page", async () => {
  const response = await render("/brands/tsingtao");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /История бренда/);
  assert.match(html, /Позиции[\s\S]{0,30}Tsingtao/);
});
