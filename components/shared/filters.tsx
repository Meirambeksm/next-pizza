import React from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui";
import { RangeSlider } from "../ui/range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className} /*6*/>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" /*7*/ />

      {/*Top checkboxes*/}
      <div className="flex flex-col gap-4" /*8*/>
        <FilterCheckbox text="Можно собирать" value="1" /*12*/ />
        <FilterCheckbox text="Новинки" value="2" /*13*/ />
      </div>

      {/*Price filters*/}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7" /*22*/>
        <p className="font-bold mb-3" /*23*/>Цена от и до:</p>
        <div className="flex gap-3 mb-5" /*24*/>
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={0}
            /*25*/
          />

          <Input
            type="number"
            placeholder="1000"
            min={100}
            max={1000}
            /*26*/
          />
        </div>

        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} /*30*/ />
      </div>

      {/**/}
      <CheckboxFiltersGroup
        title="Ингридиенты"
        className="mt-5"
        limit={6}
        defaultItems={[
          {
            text: "Сырный соус",
            value: "1",
          },
          {
            text: "Моццарелла",
            value: "2",
          },
          {
            text: "Чеснок",
            value: "3",
          },
          {
            text: "Солённые огурчики",
            value: "4",
          },
          {
            text: "Красный лук",
            value: "5",
          },
          {
            text: "Томаты",
            value: "6",
          },
        ]}
        items={[
          {
            text: "Сырный соус",
            value: "1",
          },
          {
            text: "Моццарелла",
            value: "2",
          },
          {
            text: "Чеснок",
            value: "3",
          },
          {
            text: "Солённые огурчики",
            value: "4",
          },
          {
            text: "Красный лук",
            value: "5",
          },
          {
            text: "Томаты",
            value: "6",
          },
          {
            text: "Сырный соус",
            value: "1",
          },
          {
            text: "Моццарелла",
            value: "2",
          },
          {
            text: "Чеснок",
            value: "3",
          },
          {
            text: "Солённые огурчики",
            value: "4",
          },
          {
            text: "Красный лук",
            value: "5",
          },
          {
            text: "Томаты",
            value: "6",
          },
        ]}
        /*49*/
      />
    </div>
  );
};

// 9. Create filter-checkbox.tsx and go to filter-checkbox.tsx
// 14. Go to index.ts in shared folder
// 27. Create range-slider.tsx in ui folder and go to range-slider.tsx
// 31. Create checkbox-filters-group.tsx and go to checkbox-filters-group.tsx
// 50. Go to checkbox-filters-group.tsx
