import { Container, ProductForm } from "@/shared/components/shared";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
    include: {
      ingredients: true /*4a*/,
      category: {
        include: {
          products: {
            include: {
              items: true,
            },
          },
        },
      } /*4b (14:39 suggestion from the author from youtube)*/,
      items: true /*4c*/,
    },
  });

  if (!product) {
    return notFound();
  }

  return (
    <Container className="flex flex-col my-10">
      <ProductForm
        product={product} /*4d replace the old jsx with a new component*/
      />
    </Container>
  );
}

// 4e(end). Go to choose-product-modal.tsx of modals folder of shared of components
