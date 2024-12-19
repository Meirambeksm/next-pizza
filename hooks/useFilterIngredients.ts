import { Api } from "@/services/api-client";
import { Ingredient } from "@prisma/client";
import { useEffect, useState } from "react";
import { useSet } from "react-use";

interface ReturnProps {
  ingredients: Ingredient[];
  loading: boolean /*23*/;
  selectedIds: Set<string> /*38*/;
  onAddId: (id: string) => void /*39*/;
}

export const useFilterIngredients = (): ReturnProps => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [loading, setLoading] = useState(true); /*20*/
  // const [set, { toggle }] = useSet(new Set<string>([])); /*29*/
  const [selectedIds, { toggle }] = useSet(
    new Set<string>([])
  ); /*37 replace step 29*/

  useEffect(() => {
    async function fetchIngredients() {
      try {
        setLoading(true); /*21*/
        const ingredients = await Api.ingredients.getAll();
        setIngredients(ingredients);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false); /*22*/
      }
    }

    fetchIngredients();
  }, []);

  return {
    ingredients /*10*/,
    loading /*24*/,
    onAddId: toggle,
    selectedIds /*40*/,
  };
}; /*10*/

// 11. Go to filters.tsx
// 25. Go to filters.tsx
// 30. Go to checkbox-filters-group.tsx
// 41. Go to filter.tsx
