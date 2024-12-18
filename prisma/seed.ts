import { categories, ingredients, products } from "./constants";
import { prisma } from "./prisma-client";
import { hashSync } from "bcrypt";
import { Prisma } from "@prisma/client";
import { connect } from "http2";

const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
}; /*28*/

const generateProductItem = ({
  productId,
  pizzaType,
  size,
}: {
  productId: number;
  pizzaType?: 1 | 2;
  size?: 20 | 30 | 40;
}) => {
  return {
    productId,
    price: randomNumber(190, 600),
    pizzaType,
    size,
  } as Prisma.ProductItemUncheckedCreateInput;
}; /*29*/

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: "User",
        email: "user@test.kz",
        password: hashSync("111111", 10),
        verified: new Date(),
        role: "USER",
      } /*12*/,
      {
        fullName: "Admin",
        email: "admin@test.kz",
        password: hashSync("111111", 10),
        verified: new Date(),
        role: "ADMIN",
      } /*13*/,
    ],
  });

  await prisma.category.createMany({
    data: categories,
  }); /*19*/

  await prisma.ingredient.createMany({
    data: ingredients,
  }); /*22*/

  await prisma.product.createMany({
    data: products,
  }); /*24*/

  const pizza1 = await prisma.product.create({
    data: {
      name: "Бургер-пицца",
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/11ee7d5fc4b92aefbdcf1f0db2745d1c.avif",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(0, 5),
      },
    },
  }); /*25*/

  const pizza2 = await prisma.product.create({
    data: {
      name: "Сырная",
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/11ee7d5f837255b58b25a62c60ffdb38.avif",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(5, 10),
      },
    },
  }); /*26*/

  const pizza3 = await prisma.product.create({
    data: {
      name: "Чаризо Фреш",
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/11ee7d5fbd0756a6aaa0bbeba01b343a.avif",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(10, 40),
      },
    },
  }); /*27*/

  await prisma.productItem.createMany({
    data: [
      // Бургер-пицца
      generateProductItem({
        productId: pizza1.id,
        pizzaType: 1,
        size: 20,
      }) /*30*/,
      generateProductItem({
        productId: pizza1.id,
        pizzaType: 2,
        size: 30,
      }) /*30*/,
      generateProductItem({
        productId: pizza1.id,
        pizzaType: 2,
        size: 40,
      }) /*30*/,

      // Сырная
      generateProductItem({
        productId: pizza2.id,
        pizzaType: 1,
        size: 20,
      }) /*30*/,
      generateProductItem({
        productId: pizza2.id,
        pizzaType: 1,
        size: 30,
      }) /*30*/,
      generateProductItem({
        productId: pizza2.id,
        pizzaType: 1,
        size: 40,
      }) /*30*/,
      generateProductItem({
        productId: pizza2.id,
        pizzaType: 2,
        size: 20,
      }) /*30*/,
      generateProductItem({
        productId: pizza2.id,
        pizzaType: 2,
        size: 30,
      }) /*30*/,
      generateProductItem({
        productId: pizza2.id,
        pizzaType: 2,
        size: 40,
      }) /*30*/,

      // Чаризо Фреш
      generateProductItem({
        productId: pizza3.id,
        pizzaType: 1,
        size: 20,
      }) /*30*/,
      generateProductItem({
        productId: pizza3.id,
        pizzaType: 2,
        size: 30,
      }) /*30*/,
      generateProductItem({
        productId: pizza3.id,
        pizzaType: 2,
        size: 40,
      }) /*30*/,

      //   Остальные продукты
      generateProductItem({ productId: 1 }), // 34
      generateProductItem({ productId: 2 }), // 34
      generateProductItem({ productId: 3 }), // 34
      generateProductItem({ productId: 4 }), // 34
      generateProductItem({ productId: 5 }), // 34
      generateProductItem({ productId: 6 }), // 34
      generateProductItem({ productId: 7 }), // 34
      generateProductItem({ productId: 8 }), // 34
      generateProductItem({ productId: 9 }), // 34
      generateProductItem({ productId: 10 }), // 34
      generateProductItem({ productId: 11 }), // 34
      generateProductItem({ productId: 12 }), // 34
      generateProductItem({ productId: 13 }), // 34
      generateProductItem({ productId: 14 }), // 34
      generateProductItem({ productId: 15 }), // 34
      generateProductItem({ productId: 16 }), // 34
      generateProductItem({ productId: 17 }), // 34
    ],
  });

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: 0,
        token: "11111",
      },
      {
        userId: 2,
        totalAmount: 0,
        token: "22222",
      },
    ],
  }); /*36*/

  await prisma.cartItem.create({
    data: {
      productItemId: 1,
      cartId: 1,
      quantity: 2,
      ingredients: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
      },
    },
  }); /*37*/
} /*7*/

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`; /*14*/
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`; /*32*/
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`; /*31*/
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`; /*38*/
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`; /*39*/
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`; /*34*/
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`; /*33*/
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
} /*6*/

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  }); /*15*/

/**/
// 8. Go to schema.prisma
// 10. Run in terminal:change npm run prisma:push (due to change in prisma.schema)
// 11. Install bcrypt library: npm install @types/bcrypt bcrypt
// 16. Run in terminal: npm run prisma:seed
// 17. Create constants.ts in prisma folder and go to constants.ts
// 20. Go to constants.ts
// 22. Go to constants.ts
// 35. Run in terminal: npm run prisma:seed
// 40. Run in terminal: npm run prisma:seed
// 41. Finish
