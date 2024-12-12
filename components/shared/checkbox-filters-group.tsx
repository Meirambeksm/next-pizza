"use client";
import React from "react";
import { FilterChecboxProps, FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui";

type Item = FilterChecboxProps; /*40*/

interface Props {
  title: string /*32*/;
  items: Item[] /*33*/;
  defaultItems: Item[] /*34*/;
  limit?: number /*35*/;
  searchInputPlaceholder?: string /*36*/;
  onChange?: (values: string[]) => void /*37*/;
  defaultValue?: string[] /*38*/;
  className?: string /*39*/;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = "Поиск",
  className,
  onChange,
  defaultValue,
}) /*41*/ => {
  const [showAll, setShowAll] = React.useState(false); /*51*/
  const [searchValue, setSearchValue] = React.useState(""); /*57*/

  // const list = showAll ? items : defaultItems.slice(0, limit); /*53*/ use this line before step 60
  const list = showAll
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLowerCase())
      )
    : defaultItems.slice(0, limit); /*60*/

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }; /*58*/

  return (
    <div className={className} /*42*/>
      <p className="font-bold mb-3" /*43*/>{title}</p>

      {showAll /*52*/ && (
        <div className="mb-5" /*44*/>
          <Input
            onChange={onChangeSearchInput} /*59*/
            placeholder={searchInputPlaceholder}
            className="bg-gray-50 border-none" /*45*/
          />
        </div>
      )}

      <div
        className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar" /*46*/
      >
        {
          // items.map((item, index) => ( use this line before step 54
          list.map((item, index /*54*/) => (
            <FilterCheckbox
              key={index}
              text={item.text}
              value={item.value}
              endAdornment={item.endAdornment}
              checked={false}
              onCheckedChange={(ids) => console.log(ids)} /*"use client"*/
            />
          )) /*47*/
        }
      </div>

      {
        items.length > limit && (
          <div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-primary mt-3"
            >
              {showAll ? "Скрыть" : "+ Показать все"}
            </button>
          </div>
        ) /*55*/
      }
    </div>
  );
};

// 48. Go to filters.tsx
// 56. To check add more items in filters.tsx
// 61. Finish
