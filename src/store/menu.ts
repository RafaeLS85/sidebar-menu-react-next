import { create } from 'zustand';

interface MenuItem {
  name: string;
  isOpen?: boolean; // Add the isOpen property here
  href?: string;
  permissions?: string[];
  icon?: React.ReactNode;
  submenu?: MenuItem[];
}

interface MenuState {
  isOpenMenu: boolean;
  setOpenMenu: (open: boolean) => void;
  updateList: (item: MenuItem) => void;
  items: MenuItem[];
}

export const useMenuStore = create<MenuState>((set) => ({
  isOpenMenu: true,
  setOpenMenu: (open) => set({ isOpenMenu: open }),
  items: [],
  updateList: (item) =>
    set((state) => ({
      ...state,
      isOpenMenu: state.isOpenMenu,
      items: state.items.map((i) =>
        i.name === item.name ? { ...i, isOpen: !i.isOpen } : i,
      ),
    })),
}));
