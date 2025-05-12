import { useEffect, useRef } from "react";
import { Filters } from "./use-filters";
import qs from "qs";
import { useRouter } from "next/navigation";

export const useQueryFilters = (filters: Filters) => {
  const isMounted = useRef(false); /*3c*/
  const router = useRouter();

  useEffect(() => {
    if (isMounted /*3e*/) {
      const params = {
        ...filters.prices,
        pizzaTypes: Array.from(filters.pizzaTypes),
        sizes: Array.from(filters.sizes),
        ingredients: Array.from(filters.selectedIngredients),
      };

      const query = qs.stringify(params, { arrayFormat: "comma" });

      router.push(`?${query}`, { scroll: false });
    }

    isMounted.current = true; /*3d*/
  }, [filters]);
};

// 3f(end). Go to header.tsx in shared of components
