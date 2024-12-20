import { Container, ProductImage, Title } from "@/components/shared";
import { GroupVariants } from "@/components/shared/group-variants";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

export default async function /*2*/ ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
  }); /*3*/

  if (!product) {
    return notFound();
  } /*4*/

  return (
    <Container className="flex flex-col my-10">
      <div className="flex flex-1" /*11*/>
        <ProductImage imageUrl={product.imageUrl} size={40} /*12*/ />

        <div className="w-[490px] bg-[#f7f6f5] p-7" /*13*/>
          <Title
            text={product.name}
            size="md"
            className="font-extrabold mb-1" /*14*/
          />

          <p className="text-gray-400" /*15*/>
            Lorem ipsum dolor sit amet consectetur
          </p>

          <GroupVariants
            selectedValue="2"
            items={[
              {
                name: "Маленькая",
                value: "1",
              },
              {
                name: "Средняя",
                value: "2",
              },
              {
                name: "Большая",
                value: "3",
                disabled: true,
              },
            ]} /*21*/
          />
        </div>
      </div>
    </Container>
  );
}

// 5. Create product-image.tsx in shared folder and go to product-image.tsx
// 16. Create group-variants.tsx in shared folder
// 22. Finish
