"use client";
import { cn } from "@/lib/utils";
import { Api } from "@/services/api-client";
import { Product } from "@prisma/client";
import { Search } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useClickAway, useDebounce } from "react-use";

interface Props {
  className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const [searchQuery, setSearchQuery] = useState(""); /*31*/
  const [focused, setFocused] = useState(false); /*10*/
  const [products, setProducts] = useState<Product[]>([]); /*40*/
  const ref = useRef(null); /*14*/

  useClickAway(ref, () => {
    setFocused(false);
  }); /*15*/

  /*
  useEffect(() => {
    // Api.products.search(searchQuery); Replace this line of step 32 with step 41
    Api.products.search(searchQuery).then((items) => {
      setProducts(items);
    }); // 41 replace line of step 32
  }, [searchQuery]); // 32
  */

  useDebounce(
    () => {
      Api.products.search(searchQuery).then((items) => {
        setProducts(items);
      });
    },
    250,
    [searchQuery]
  ); /*44 replace step 41*/

  const onClickItem = () => {
    setFocused(false);
    setSearchQuery("");
    setProducts([]);
  }; /*49*/

  return (
    </*12*/>
      {
        /*13*/
        focused && (
          <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30" />
        )
      }
      <div
        ref={ref} /*16*/
        className={cn(
          "flex rounded-2xl flex-1 justify-between relative h-11 z-30",
          className
        )}
      >
        <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
        <input
          className="rounded-2xl outline-none w-full bg-gray-100 pl-11"
          type="text"
          placeholder="Найти пиццу..."
          onFocus={() => setFocused(true) /*11*/}
          value={searchQuery} /*33*/
          onChange={(e) => setSearchQuery(e.target.value)} /*34*/
        />

        {products.length > 0 && (
          /*45*/ <div
            className={cn(
              "absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30",
              focused && "visible opacity-100 top-12"
            )} /*17*/
          >
            {/* 
          <Link
            className="flex items-center gap-3 px-3 py-2 hover:bg-primary/10 cursor-pointer"
            href="/product/1" // 18
            >
            <img
              className="rounded-sm h-8 w-8"
              src="https://media.dodostatic.net/image/r:292x292/11ee7d5fd6097096b601585d57f44a6f.avif"
              alt="Pizza 1" // 19
            />
            <div // 20>Pizza</div>
          </Link> this whole line is before step 42
          */}

            {
              products.map((product) => (
                <Link
                  onClick={onClickItem} /*50*/
                  key={product.id}
                  className="flex items-center gap-3 px-3 py-2 hover:bg-primary/10 cursor-pointer"
                  href={`/product/${product.id}`}
                >
                  <img
                    className="rounded-sm h-8 w-8"
                    src={product.imageUrl}
                    alt={product.name}
                  />
                  <span>{product.name}</span>
                </Link>
              )) /*43*/
            }
          </div>
        )}
      </div>
    </>
  );
}; /*5*/

// 6. Go to index.ts
// 21. Create services folder and api-client.ts and products.ts and instance.ts in services folder and go to instance.ts
// 35. Create constants.ts in services and go to constants.ts
// 46. Create product and [id] folders in app folder and create page.tsx in [id] folder and go to page.tsx
// 51. Finish
