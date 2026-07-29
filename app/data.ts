export type Brand = {
  slug: string;
  name: string;
  country: string;
  type: string;
  since: string;
  image: string;
  short: string;
  intro: string;
  story: string;
  accent: string;
};

export type Product = {
  id: string;
  brand: string;
  name: string;
  country: string;
  type: string;
  volume: string;
  abv?: string;
  image: string;
  description: string;
};

export const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function assetPath(path: string) {
  return `${publicBasePath}${path}`;
}

export const brands: Brand[] = [
  {
    slug: "tsingtao",
    name: "Tsingtao",
    country: "Китай",
    type: "Китайское пиво",
    since: "с 1903 года",
    image: assetPath("/products/tsingtao-range.webp"),
    short: "Один из самых известных китайских пивных брендов с более чем вековой историей.",
    intro:
      "Пивоварня Tsingtao известна всему миру и продаётся более чем в 100 странах.",
    story:
      "Лёгкие освежающие лагеры Tsingtao подходят к самой разной кухне. В производстве используется родниковая вода из высокогорного региона Laoshan, дрожжи и злаковые из Австралии и Канады, а также местный рис.",
    accent: "#b85032",
  },
  {
    slug: "harbin",
    name: "Harbin",
    country: "Китай",
    type: "Китайское пиво",
    since: "с 1900 года",
    image: assetPath("/products/harbin-range.webp"),
    short: "Светлый лагер из Харбина, в рецептуре которого используется рис сорта «жемчужина».",
    intro:
      "Пивоварня в Харбине была основана в 1900 году и выпускает одноимённую марку пива.",
    story:
      "Harbin — светлое пиво, при приготовлении которого используется особый сорт риса «жемчужина». В коллекции Status Groupp представлены бутылки двух форматов.",
    accent: "#6a8c55",
  },
  {
    slug: "singha",
    name: "Singha",
    country: "Таиланд",
    type: "Тайское пиво",
    since: "с 1933 года",
    image: assetPath("/products/singha-range.webp"),
    short: "Ярко-золотой тайский лагер с узнаваемым львом на этикетке и международной историей.",
    intro:
      "Singha производится Boon Rawd Brewery с 1933 года и известен далеко за пределами Таиланда.",
    story:
      "Премиальный лагер обладает дрожжевым оттенком и лёгкой горчинкой. Его вкус особенно хорошо раскрывается рядом с пряной тайской кухней. В ассортимент также входит популярный тайский бренд Leo.",
    accent: "#c69a2b",
  },
  {
    slug: "saigon",
    name: "Saigon",
    country: "Вьетнам",
    type: "Вьетнамское пиво",
    since: "История из Хошимина",
    image: assetPath("/products/saigon-range.webp"),
    short: "Популярный вьетнамский бренд из Хошимина с линейкой Special, Lager и Export.",
    intro:
      "Пиво Saigon производится в Хошимине — крупнейшем мегаполисе Вьетнама.",
    story:
      "В ассортименте заявлены Saigon Special и Saigon Lager в алюминиевых банках 330 мл, а также Saigon Export в стеклянных бутылках 355 мл.",
    accent: "#b45c39",
  },
];

export const products: Product[] = [
  {
    id: "tsingtao-premium-033",
    brand: "tsingtao",
    name: "Tsingtao Premium Lager",
    country: "Китай",
    type: "Лагер",
    volume: "0,33 / 0,64 л",
    abv: "4,7%",
    image: assetPath("/products/tsingtao-premium.webp"),
    description:
      "Лёгкий и освежающий лагер, подходящий к самой разной кухне.",
  },
  {
    id: "tsingtao-premium-050",
    brand: "tsingtao",
    name: "Tsingtao Premium Lager",
    country: "Китай",
    type: "Лагер",
    volume: "0,5 л",
    abv: "4,7%",
    image: assetPath("/products/tsingtao-064.webp"),
    description:
      "Питкий вкус с приятными солодовыми тонами и деликатной горчинкой хмеля.",
  },
  {
    id: "tsingtao-ipa",
    brand: "tsingtao",
    name: "Tsingtao IPA",
    country: "Китай",
    type: "IPA",
    volume: "0,33 л",
    abv: "5,2%",
    image: assetPath("/products/tsingtao-ipa.webp"),
    description:
      "Цитрусовые, цветочные и фруктовые ноты с умеренной горчинкой.",
  },
  {
    id: "tsingtao-wheat",
    brand: "tsingtao",
    name: "Tsingtao Wheat",
    country: "Китай",
    type: "Пшеничное",
    volume: "0,33 л",
    abv: "4,7%",
    image: assetPath("/products/tsingtao-wheat.webp"),
    description:
      "Мягкое пшеничное пиво с нотами банана, специй и классической технологией.",
  },
  {
    id: "tsingtao-stout",
    brand: "tsingtao",
    name: "Tsingtao Stout",
    country: "Китай",
    type: "Стаут",
    volume: "0,33 л",
    abv: "6,7%",
    image: assetPath("/products/tsingtao-stout.webp"),
    description:
      "Насыщенное тёмное пиво с оттенками жжёного и карамельного солода.",
  },
  {
    id: "tsingtao-zero",
    brand: "tsingtao",
    name: "Tsingtao Zero",
    country: "Китай",
    type: "Безалкогольное",
    volume: "0,33 л",
    abv: "0,0%",
    image: assetPath("/products/tsingtao-zero.webp"),
    description:
      "Освежающий вкус с ярким хмелевым ароматом, фруктовыми и цветочными нотами.",
  },
  {
    id: "tsingtao-soda",
    brand: "tsingtao",
    name: "Tsingtao Soda Water",
    country: "Китай",
    type: "Содовая",
    volume: "0,31 л",
    image: assetPath("/products/tsingtao-soda.webp"),
    description:
      "Содовая вода без сахара, жиров и калорий.",
  },
  {
    id: "harbin-033",
    brand: "harbin",
    name: "Harbin Premium",
    country: "Китай",
    type: "Лагер",
    volume: "0,33 л",
    abv: "5%",
    image: assetPath("/products/harbin-033.webp"),
    description:
      "Светлый лагер, в рецептуре которого используется рис сорта «жемчужина».",
  },
  {
    id: "harbin-061",
    brand: "harbin",
    name: "Harbin Premium",
    country: "Китай",
    type: "Лагер",
    volume: "0,61 л",
    abv: "5%",
    image: assetPath("/products/harbin-061.webp"),
    description:
      "Классический Harbin Premium в большом бутылочном формате.",
  },
  {
    id: "singha-033",
    brand: "singha",
    name: "Singha Premium Lager",
    country: "Таиланд",
    type: "Лагер",
    volume: "0,33 л",
    abv: "5%",
    image: assetPath("/products/singha-033.webp"),
    description:
      "Ярко-золотой премиальный лагер с дрожжевым оттенком и лёгкой горчинкой.",
  },
  {
    id: "singha-050",
    brand: "singha",
    name: "Singha Premium Lager",
    country: "Таиланд",
    type: "Лагер",
    volume: "0,5 л",
    abv: "5%",
    image: assetPath("/products/singha-050.webp"),
    description:
      "Тайский лагер в баночном формате, особенно подходящий к пряной кухне.",
  },
  {
    id: "singha-061",
    brand: "singha",
    name: "Singha Premium Lager",
    country: "Таиланд",
    type: "Лагер",
    volume: "0,61 л",
    abv: "5%",
    image: assetPath("/products/singha-061.webp"),
    description:
      "Фирменный золотой лагер Singha в большом бутылочном формате.",
  },
  {
    id: "leo-033",
    brand: "singha",
    name: "Leo Premium",
    country: "Таиланд",
    type: "Лагер",
    volume: "0,33 л",
    image: assetPath("/products/leo-033.webp"),
    description:
      "Сбалансированный тайский лагер с ровным, чистым характером.",
  },
  {
    id: "leo-050",
    brand: "singha",
    name: "Leo Premium",
    country: "Таиланд",
    type: "Лагер",
    volume: "0,5 л",
    image: assetPath("/products/leo-050.webp"),
    description:
      "Популярный в Таиланде светлый лагер в формате 0,5 л.",
  },
  {
    id: "saigon-special",
    brand: "saigon",
    name: "Saigon Special",
    country: "Вьетнам",
    type: "Лагер",
    volume: "0,33 л",
    image: assetPath("/products/saigon-range.webp"),
    description:
      "Одна из ключевых позиций вьетнамского портфеля Saigon.",
  },
  {
    id: "saigon-lager",
    brand: "saigon",
    name: "Saigon Lager",
    country: "Вьетнам",
    type: "Лагер",
    volume: "0,33 л",
    image: assetPath("/products/saigon-range.webp"),
    description:
      "Светлый вьетнамский лагер в алюминиевой банке.",
  },
  {
    id: "saigon-export",
    brand: "saigon",
    name: "Saigon Export",
    country: "Вьетнам",
    type: "Лагер",
    volume: "0,355 л",
    image: assetPath("/products/saigon-range.webp"),
    description:
      "Экспортная линейка Saigon в стеклянной бутылке.",
  },
];
