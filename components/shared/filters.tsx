"use client";
import React from "react";
import { Title } from "./title";
import { Input } from "../ui";
import { RangeSlider } from "../ui/range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
import { useIngredients, useFilters, useQueryFilters } from "@/hooks"; /*19*/

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading } = useIngredients(); /*11a*/
  const filters = useFilters(); /*11b*/

  useQueryFilters(filters); /*15*/

  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));

  const updatePrices = (prices: number[]) => {
    filters.setPrices("priceFrom", prices[0]);
    filters.setPrices("priceTo", prices[1]);
  }; /*20j*/

  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      {/*Top checkboxes*/}
      <CheckboxFiltersGroup
        title="Тип теста"
        name="pizzaTypes"
        className="mb-5"
        onClickChecbox={filters.setPizzaTypes /*20*/}
        selected={filters.pizzaTypes /*20b*/}
        items={[
          { text: "Тонкое", value: "1" },
          { text: "Традиционное", value: "2" },
        ]}
      />

      <CheckboxFiltersGroup
        title="Размеры"
        name="sizes"
        className="mb-5"
        onClickChecbox={filters.setSizes /*20c*/}
        selected={filters.sizes /*20d*/}
        items={[
          { text: "20 см", value: "20" },
          { text: "30 см", value: "30" },
          { text: "40 см", value: "40" },
        ]}
      />
      {/*Price filters*/}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={String(filters.prices.priceFrom) /*20e*/}
            onChange={
              (e) =>
                filters.setPrices("priceFrom", Number(e.target.value)) /*20f*/
            }
          />

          <Input
            type="number"
            placeholder="1000"
            min={100}
            max={1000}
            value={String(filters.prices.priceTo) /*20g*/}
            onChange={
              (e) =>
                filters.setPrices("priceTo", Number(e.target.value)) /*20h*/
            }
          />
        </div>

        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={
            [
              filters.prices.priceFrom || 0,
              filters.prices.priceTo || 1000,
            ] /*20i*/
          }
          onValueChange={updatePrices /*20k*/}
        />
      </div>

      {/*Ingredients*/}
      <CheckboxFiltersGroup
        title="Ингридиенты"
        name="ingridients"
        className="mt-5"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickChecbox={filters.setSelectedIngredients /*20l*/}
        selected={filters.selectedIngredients /*20m*/}
      />
    </div>
  );
};

// 12. Create use-query-filters.ts in hooks folder and go to use-query-filters.ts
// 16. Create index.ts in hooks folder and go to index.ts
// 21. Finish
