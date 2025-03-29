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
npm install sidebar-menu-component-fvg @fravega-it/bumeran-ds-fvg styled-components react zustand
```

### Nota: Se deben instalar las dependencias @fravega-it/bumeran-ds-fvg, styled-components, react y zustand



## Uso
## Ejemplo Básico (Next.js App Router)



``` jsx
"use client";

import { usePathname, useRouter } from "next/navigation";
import SidebarMenu from "sidebar-menu-component-fvg"; // Importa el componente

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