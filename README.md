# Sidebar Menu Component

[![npm version](https://badge.fury.io/js/sidebar-menu-component-fvg.svg)](https://badge.fury.io/js/sidebar-menu-component-fvg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Sidebar Menu Component** es un componente de menú lateral (sidebar) flexible y reutilizable, creado con React y TypeScript. Está diseñado para ser utilizado en diferentes proyectos, incluyendo Next.js (con App Router y Pages Router) y React puro. Permite la navegación programática y la detección de la ruta activa, lo que lo hace adaptable a diferentes sistemas de routing.

## Características

*   **Reutilizable:** Puede ser utilizado en diferentes proyectos (Next.js, React).
*   **Navegación Programática:** La navegación se maneja a través de una función que se pasa como prop.
*   **Detección de Ruta Activa:** La detección de la ruta activa se maneja a través de una función que se pasa como prop.
*   **Submenús:** Soporta submenús con colapsado.
*   **Estilos Personalizables:** Los estilos están encapsulados y pueden ser personalizados.
*   **Accesibilidad:** Diseñado pensando en la accesibilidad.
*   **TypeScript:** Escrito en TypeScript para una mayor seguridad y mantenibilidad.
* **Dependencias**: No depende de `next/navigation`

## Instalación

Puedes instalar el paquete usando npm o yarn:

```bash
npm install sidebar-menu-component-fvg @fravega-it/bumeran-ds-fvg react zustand
```

### Nota: Se deben instalar las dependencias @fravega-it/bumeran-ds-fvg, react y zustand



## Uso
## Ejemplo Básico (Next.js App Router)


``` jsx
"use client";

import { usePathname, useRouter } from "next/navigation";
import SidebarMenu from "./SidebarMenu"; // Importa tu componente SidebarMenu

// Icons
const HomeIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" fill="#65657E"/></svg>;
const AboutIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 10H13V16H11V10ZM11 8H13V6H11V8Z" fill="#65657E"/></svg>;
const SettingsIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.14 12.94C19.05 12.69 19 12.45 19 12C19 11.55 19.05 11.31 19.14 11.06L21.14 8.06C21.46 7.59 21.3 7 20.71 7L18.33 7C18.1 6.41 17.73 5.85 17.3 5.38L19.15 3.15C19.5 2.6 19.35 2 18.75 2L16.35 2C15.85 1.5 15.15 1.25 14.5 1.14L14.5 3.14C14.5 3.64 14.3 4.11 14 4.5L12 4.5C11.7 4.5 11.5 4.5 11.5 4.5L9.5 4.5C9.2 4.11 9 3.64 9 3.14L9 1.14C8.35 1.25 7.65 1.5 7.15 2L4.75 2C4.15 2 4 2.6 4.35 3.15L6.2 5.38C5.77 5.85 5.4 6.41 5.17 7L2.79 7C2.2 7 2.04 7.59 2.36 8.06L4.36 11.06C4.45 11.31 4.5 11.55 4.5 12C4.5 12.45 4.45 12.69 4.36 12.94L2.36 15.94C2.04 16.41 2.2 17 2.79 17L5.17 17C5.4 17.59 5.77 18.15 6.2 18.62L4.35 20.85C4 21.4 4.15 22 4.75 22L7.15 22C7.65 22.5 8.35 22.75 9 22.86L9 20.86C9 20.36 9.2 19.89 9.5 19.5L11.5 19.5C11.5 19.5 11.7 19.5 12 19.5L14 19.5C14.3 19.89 14.5 20.36 14.5 20.86L14.5 22.86C15.15 22.75 15.85 22.5 16.35 22L18.75 22C19.35 22 19.5 21.4 19.15 20.85L17.3 18.62C17.73 18.15 18.1 17.59 18.33 17L20.71 17C21.3 17 21.46 16.41 21.14 15.94L19.14 12.94ZM12 15.5C13.93 15.5 15.5 13.93 15.5 12C15.5 10.07 13.93 8.5 12 8.5C10.07 8.5 8.5 10.07 8.5 12C8.5 13.93 10.07 15.5 12 15.5Z" fill="#65657E"/></svg>;

export default function MyPage() {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (href: string) => {
    router.push(href);
  };

  const isActive = (href: string, isSubmenu?: boolean) => {
    return isSubmenu ? pathname?.includes(href) : pathname === href;
  };

  // Ejemplo de data para el menu
  const items = [
    {
      name: "Home",
      href: "/",
      icon: <HomeIcon />, // Pass the icon component here
      permissions: ["admin", "user"],
      isOpen: false,
    },
    {
      name: "About",
      href: "/about",
      icon: <AboutIcon />, // Pass the icon component here
      permissions: ["admin", "user"],
      isOpen: false,
    },
    {
      name: "Settings",
      href: "/settings",
      icon: <SettingsIcon />, // Pass the icon component here
      permissions: ["admin"],
      isOpen: false,
      submenu: [
        {
          name: "Profile",
          href: "/settings/profile",
          permissions: ["admin"],
          icon: <SettingsIcon />,
        },
        {
          name: "Security",
          href: "/settings/security",
          permissions: ["admin"],
          icon: <SettingsIcon />,
        },
      ],
    },
  ];

  return (
    <div>
      <SidebarMenu handleNavigation={handleNavigation} isActive={isActive} items={items}/>
      {/* El resto de tu contenido */}
    </div>
  );
}


```

## Ejemplo Básico (React Puro)


``` jsx
import React, { useState } from 'react';
import SidebarMenu from 'sidebar-menu-component-fvg'; // Importa el componente

function MyComponent() {
  const [currentPath, setCurrentPath] = useState('/');

  const handleNavigation = (href: string) => {
    // Aquí iría la lógica de navegación con history.push o similar
    setCurrentPath(href);
    console.log(`Navegando a: ${href}`);
  };

  const isActive = (href: string) => {
    return currentPath === href;
  };

  // Ejemplo de data para el menu
  const items = [
    {
      name: "Home",
      href: "/",
      icon: <HomeIcon />,
      permissions: ["admin", "user"],
    },
    {
      name: "About",
      href: "/about",
      icon: <AboutIcon />,
      permissions: ["admin", "user"],
    },
    {
      name: "Settings",
      href: "/settings",
      icon: <SettingsIcon />,
      permissions: ["admin"],
      submenu: [
        {
          name: "Profile",
          href: "/settings/profile",
          permissions: ["admin"],
        },
        {
          name: "Security",
          href: "/settings/security",
          permissions: ["admin"],
        },
      ],
    },
  ];

  return (
    <div>
      <SidebarMenu handleNavigation={handleNavigation} isActive={isActive} items={items}/>
      {/* El resto de tu contenido */}
    </div>
  );
}

```