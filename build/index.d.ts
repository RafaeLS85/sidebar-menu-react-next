import React from 'react';

export interface SidebarItem {
    name: string;
    href: string;
    icon: React.ReactNode;
    permissions: string[];
    isOpen?: boolean;
    submenu?: SidebarItem[];
}

interface SidebarMenuProps {
    handleNavigation: (href: string) => void;
    isActive: (href: string, isSubmenu?: boolean) => boolean;
    items: SidebarItem[];
}

declare const SidebarMenu: React.FC<SidebarMenuProps>;

export default SidebarMenu;
export type MenuItem = SidebarItem;
