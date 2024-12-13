import Link from "next/link";
import React from "react";
import { Title } from "./title";
import { Button } from "../ui";
import { Plus } from "lucide-react";

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
} /*3*/

export const ProductCard: React.FC<Props> = (
  { id, name, price, imageUrl, className } /*4*/
) => {
  return (
    <div className={className}>
      <Link href={`/product/${id}`} /*5*/>
        <div
          className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]" /*6*/
        >
          <img
            className="w-[215px] h-[215px]"
            src={imageUrl}
            alt={name} /*8*/
          />
        </div>

        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" /*8*/ />

        <p className="text-sm text-gray-400" /*9*/>
          Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус
          альфредо, чеснок
        </p>

        <div className="flex justify-between items-center mt-4" /*10*/>
          <span className="text-[20px]" /*11*/>
            от <b>{price} ₽</b>
          </span>

          <Button variant="secondary" className="text-base font-bold" /*12*/>
            <Plus size={20} className="mr-1" /*13*/ />
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  );
};

// 2. Make some adjustments in .eslint.json: "@next/next/no-img-element" and come back
// 14. Create products-group-list.tsx and go to products-group-list
