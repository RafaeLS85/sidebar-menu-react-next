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



## Uso

## Ejemplo Básico (Next.js App Router)

``` jsx
"use client";

import { usePathname, useRouter } from "next/navigation";
import SidebarMenu from "sidebar-menu-react-next-rafaelfvg";
import { FaHome, FaUsers, FaCog, FaBook, FaEnvelope, FaLock } from "react-icons/fa";

export default function MyPage() {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (href: string) => {
    router.push(href);
  };

  const isActive = (href: string, isSubmenu?: boolean) => {
    return isSubmenu ? pathname?.includes(href) : pathname === href;
  };

  const items = [
    {
      name: "Home",
      href: "/",
      icon: <FaHome />,
      permissions: ["admin", "user"],
    },
    {
      name: "Users",
      href: "/users",
      icon: <FaUsers />,
      permissions: ["admin"],
    },
    {
      name: "Hidden Item",
      href: "/hidden",
      icon: <FaLock />,
      permissions: ["superadmin"],
    },
    {
      name: "Settings",
      href: "/settings",
      icon: <FaCog />,
      permissions: ["admin"],
      isOpen: false,
      submenu: [
        {
          name: "General",
          href: "/settings/general",
          icon: <FaCog />,
          permissions: ["admin"],
        },
        {
          name: "Security",
          href: "/settings/security",
          icon: <FaBook />,
          permissions: ["admin"],
        },
        {
          name: "Hidden Submenu",
          href: "/settings/hidden",
          icon: <FaLock />,
          permissions: ["superadmin"],
        },
      ],
    },
    {
      name: "Contact",
      href: "/contact",
      icon: <FaEnvelope />,
      permissions: ["admin", "user"],
    },
  ];

  return (
    <div>
       <SidebarMenu 
        handleNavigation={handleNavigation} 
        isActive={isActive} 
        items={items}
        permissions={['admin', 'user']} 
      />
      {/*  */}
    </div>
  );
}
```

## Ejemplo Básico (React Puro)


``` jsx
import React, { useState } from 'react';
import SidebarMenu from 'sidebar-menu-react-next-rafaelfvg'; 

function MyComponent() {
  const [currentPath, setCurrentPath] = useState('/');

  const handleNavigation = (href: string) => {
    setCurrentPath(href);
    console.log(`Navegando a: ${href}`);
  };

  const isActive = (href: string) => {
    return currentPath === href;
  };

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
      <SidebarMenu 
        handleNavigation={handleNavigation} 
        isActive={isActive} 
        items={items}
        permissions={['admin', 'user']} 
      />
      {/* El resto de tu contenido */}
    </div>
  );
}

```