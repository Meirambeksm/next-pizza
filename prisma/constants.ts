export const categories = [
  {
    name: "Пиццы",
  },
  {
    name: "Завтрак",
  },
  {
    name: "Закуски",
  },
  {
    name: "Коктейли",
  },
  {
    name: "Напитки",
  },
];

export const ingredients = [
  {
    name: "Сырный бортик",
    price: 179,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png",
  },
  {
    name: "Сливочная моцарелла",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png",
  },
  {
    name: "Сыры чеддер и пармезан",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796",
  },
  {
    name: "Острый перец халапеньо",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png",
  },
  {
    name: "Нежный цыпленок",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A",
  },
  {
    name: "Шампиньоны",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324",
  },
  {
    name: "Бекон",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA637AAB68F",
  },
  {
    name: "Ветчина",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61",
  },
  {
    name: "Пикантная пепперони",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3",
  },
  {
    name: "Острая чоризо",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027",
  },
  {
    name: "Маринованные огурчики",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B",
  },
  {
    name: "Свежие томаты",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67",
  },
  {
    name: "Красный лук",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C",
  },
  {
    name: "Сочные ананасы",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6795BA2A0",
  },
  {
    name: "Итальянские травы",
    price: 39,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png",
  },
  {
    name: "Сладкий перец",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA63F774C1B",
  },
  {
    name: "Кубики брынзы",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349",
  },
  {
    name: "Митболы",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png",
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
  {
    name: "Омлет сырный",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/0193bb30c4717357b994752952f02275.avif",
    categoryId: 2,
  },
  {
    name: "Омлет с ветчиной и грибами",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/0193bb3060dd780ea0213e01e77268d1.avif",
    categoryId: 2,
  },
  {
    name: "Омлет с пепперони",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/0193bb30a8b170ff8fd9516907f51269.avif",
    categoryId: 2,
  },
  {
    name: "Блины с мясом",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ef53d598d3b19cae2533a09bce14c2.avif",
    categoryId: 2,
  },
  {
    name: "Додстер с ветчиной",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/0193bb39023076bd9842ef5da3137d96.avif",
    categoryId: 2,
  },
  {
    name: "Сырники с малиновым вареньем",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ee7d5fe8809be8855c790c2397b237.avif",
    categoryId: 2,
  },
  {
    name: "Сырники",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ee89379dc2f715a73e9cb2b6483bb2.avif",
    categoryId: 2,
  },
  {
    name: "Комбо Завтрак на двоих",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ef53d3dc61a513badb62f99c0e5aa5.avif",
    categoryId: 2,
  },
  {
    name: "Кофе Капучино",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ee7d5fde2ecb8a9c04b1c9c797196d.avif",
    categoryId: 2,
  },
  {
    name: "Кофе Латте",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ee7d5fe022e6adbbb9536f9aef79f7.avif",
    categoryId: 2,
  },
  {
    name: "Карамельный Капучино",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ee7d5fdeaa48fcb8982ebd4349ee54.avif",
    categoryId: 2,
  },
  {
    name: "Кофе Ореховый латте",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ee7d5fe09c942e9b40710c68641d1b.avif",
    categoryId: 2,
  },
  {
    name: "Чикен ролл",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/0193bb39e3d9755a8de4b870d3f7cfb1.avif",
    categoryId: 3,
  },
  {
    name: "Блины с творогом",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ef53d492c368cfaafee58e89fc548e.avif",
    categoryId: 3,
  },
  {
    name: "Дэнвич ветчина и сыр",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ee796f1967b5af950a96dc718bf68d.avif",
    categoryId: 3,
  },
  {
    name: "Додстер",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ee796ed53607aaafbd7a1ef6ecc214.avif",
    categoryId: 3,
  },
  {
    name: "Острый Додстер",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ee796ef1eb53ba87169c2905c0c567.avif",
    categoryId: 3,
  },
  {
    name: "Додстер с ветчиной",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/0193bb39023076bd9842ef5da3137d96.avif",
    categoryId: 3,
  },
  {
    name: "Паста Мясная",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ee796f1a7ffac9b2a6d4dd0f2bfb2a.avif",
    categoryId: 3,
  },
  {
    name: "Паста Песто",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ee796f1ab4d0b0ae915c30248d0ce4.avif",
    categoryId: 3,
  },
  {
    name: "Супермясной Додстер",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ee796f166475f080334aa3b1289699.avif",
    categoryId: 3,
  },
  {
    name: "Грибной Стартер",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11efa1f4d120d20db93d27d515e94ffb.avif",
    categoryId: 3,
  },
  {
    name: "Сырный Стартер",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11efa1f4c830cbdf927e33f5f2a13345.avif",
    categoryId: 3,
  },
  {
    name: "Куриные наггетсы",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11eef45f462096838fe18bb893d93602.avif",
    categoryId: 3,
  },
  {
    name: "Картофель из печи с соусом",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ee8b6eaa686f5c92e5818facf057b5.avif",
    categoryId: 3,
  },
  {
    name: "Картофель из печи",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ee85418a5a22a5bdb76cc58fe4efb4.avif",
    categoryId: 3,
  },
  {
    name: "Картофельные дольки с сырным соусом",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ee7d5fd4f1435cb186d9beaff3ebae.avif",
    categoryId: 3,
  },
  {
    name: "Картофельные дольки",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ee878183b8cebe9168f5162f6c478f.avif",
    categoryId: 3,
  },
  {
    name: "Картофельные смайлики",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ef5dfdebe6431babd49f3845fca22b.avif",
    categoryId: 3,
  },
  {
    name: "Картофельные оладьи",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ee796ed1f587baace8982cd3c5b905.avif",
    categoryId: 3,
  },
  {
    name: "Ланчбокс с крыльями барбекю",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ee796eecefbb139d1bcfa7c8a4226d.avif",
    categoryId: 3,
  },
  {
    name: "Салат Цезарь",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ef8f8847dd1101b84fe8924e4000c9.avif",
    categoryId: 3,
  },
  {
    name: "Куриные кусочки",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ee7d5fea740036a282d15974613786.avif",
    categoryId: 3,
  },
  {
    name: "Куриные крылья барбекю",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ee89376c3a465babb6f5d85db66a14.avif",
    categoryId: 3,
  },
  {
    name: "Молочные коктейль с печеньем Орео",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ee796edc8861bc860e43989a45c019.avif",
    categoryId: 4,
  },
  {
    name: "Классический молочный коктейль",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ee796ecf42909db401d3bff796742e.avif",
    categoryId: 4,
  },
  {
    name: "Шоколадный молочный коктейль",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/0193bb3b1e1e7484be5eef523583ff0b.avif",
    categoryId: 4,
  },
  {
    name: "Молочный коктейль Ежевика-малина",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ef18d081a5575f9fd95a1400f504d8.avif",
    categoryId: 4,
  },
  {
    name: "Молочный коктейль Пина Колада",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ef18d22cbc5c0ab6f22e982acec859.avif",
    categoryId: 4,
  },
  {
    name: "Клубничный молочный коктейль",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ef18d0c055057e879581e384e98506.avif",
    categoryId: 4,
  },
  {
    name: "Кофе Капучино",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ee7d5fde2ecb8a9c04b1c9c797196d.avif",
    categoryId: 5,
  },
  {
    name: "Карамельный Капучино",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ee7d5fdeaa48fcb8982ebd4349ee54.avif",
    categoryId: 5,
  },
  {
    name: "Кофе Латте",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ee7d5fe022e6adbbb9536f9aef79f7.avif",
    categoryId: 5,
  },
  {
    name: "Кофе Ореховый латте",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ee7d5fe09c942e9b40710c68641d1b.avif",
    categoryId: 5,
  },
  {
    name: "Айс капучино",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ee796f0f282a1393f7b7c62557eb0b.avif",
    categoryId: 5,
  },
  {
    name: "Кофе Американо",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ee7d5fec6640c5a109f430eb09fd02.avif",
    categoryId: 5,
  },
];
