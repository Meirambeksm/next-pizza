import { create } from "zustand";

interface State {
  activeId: number;
  setActiveId: (activeId: number) => void;
} /*13*/

export const useCategoryStore = create<State>()((set) => ({
  activeId: 1,
  setActiveId: (activeId: number) => set({ activeId }),
})); /*14*/

// 15. Go to products-group-list.tsx
