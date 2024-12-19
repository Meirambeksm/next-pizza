"use client";
import React from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui";
import { RangeSlider } from "../ui/range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
import { useFilterIngredients } from "@/hooks/useFilterIngredients";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients /*12*/, loading /*26*/, onAddId, selectedIds /*42*/ } =
    useFilterIngredients(); /*12*/

  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  })); /*13*/

  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      {/*Top checkboxes*/}
      <div className="flex flex-col gap-4">
        <FilterCheckbox name="abc" /*59*/ text="Можно собирать" value="1" />
        <FilterCheckbox name="cde" /*60*/ text="Новинки" value="2" />
      </div>

      {/*Price filters*/}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={0}
          />

          <Input type="number" placeholder="1000" min={100} max={1000} />
        </div>

        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
      </div>

      {/*Ingredients*/}
      <CheckboxFiltersGroup
        title="Ингридиенты"
        name="ingridients" /*58*/
        className="mt-5"
        limit={6}
        defaultItems={items.slice(0, 6)} /*14*/
        items={items} /*15*/
        loading={loading /*27*/}
        // onClickChecbox={(id) => console.log(id) /*35*/}
        onClickChecbox={onAddId} /*43 replace step 35*/
        selectedIds={selectedIds} /*44*/
      />
    </div>
  );
};

// 16. Go to checkbox-filters-group.tsx
// 28. Go to useFilterIngredients.ts
// 36. Go to useFilterIngredients.ts
// 45. Go to checkbox-filters-group.tsx
// 61. Finish
