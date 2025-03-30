import React, { useState } from "react";
import SidebarMenu from "./components/SidebarMenu";
import { FaHome, FaUsers, FaCog, FaBook, FaEnvelope, FaLock } from "react-icons/fa";

function App() {
  const [activeLink, setActiveLink] = useState<string>("/");

  const handleNavigation = (href: string) => {
    setActiveLink(href);
    console.log(`Navigating to: ${href}`);
  };

  const isActive = (href: string, isSubmenu?: boolean) => {
    if (isSubmenu) {
      return activeLink.startsWith(href);
    }
    return activeLink === href;
  };

  const sidebarItems = [
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
    <div style={{ display: "flex" }}>
      <SidebarMenu
        handleNavigation={handleNavigation}
        isActive={isActive}
        items={sidebarItems}
      />
      <div style={{ padding: "20px" }}>
        <h1>Main Content</h1>
        <p>Current Active Link: {activeLink}</p>
      </div>
    </div>
  );
}

export default App;
