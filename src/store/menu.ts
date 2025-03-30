import { create } from 'zustand';

export interface MenuItem {
  name: string;
  isOpen?: boolean;
  href?: string; // Make href optional
  permissions?: string[]; // Make permissions optional
  icon?: React.ReactNode;
  submenu?: MenuItem[];
}

interface MenuState {
  isOpenMenu: boolean;
  setOpenMenu: (open: boolean) => void;
  updateList: (item: MenuItem) => void;
  items: MenuItem[];
}

export const useMenuStore = create<MenuState>((set, get) => ({
  isOpenMenu: true,
  setOpenMenu: (open) => set({ isOpenMenu: open }),
  items: [],
  updateList: (item) => {
    console.log("updateList - Input Item:", item);
    const currentState = get();
    console.log("updateList - Current State:", currentState);
    set((state) => {
      const updatedItems = state.items.map((i) =>
        i.name === item.name ? { ...i, isOpen: !i.isOpen } : i,
      );
      console.log("updateList - Updated Items:", updatedItems);
      return {
        ...state,
        items: updatedItems,
      };
    });
  },
}));
