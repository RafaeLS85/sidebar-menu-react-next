# Sidebar Menu FVG

A customizable and responsive sidebar menu component for React applications.

## Installation

You can install the `sidebar-fvg` package using npm or yarn:

**npm:**

```bash
npm install sidebar-fvg
```

```jsx

import React, { useState } from 'react';
import SidebarMenu, { MenuItem } from 'sidebar-fvg';
import { FaHome, FaUser, FaCog } from 'react-icons/fa'; // Example icons

function App() {
  const [activeLink, setActiveLink] = useState<string>('');

  const handleNavigation = (href: string) => {
    setActiveLink(href);
    console.log(`Navigating to: ${href}`);
    // Add your navigation logic here, e.g., using React Router
  };

  const isActive = (href: string, isSubmenu?: boolean) => {
    return activeLink === href;
  };

  const menuItems: MenuItem[] = [
    {
      name: 'Home',
      href: '/',
      icon: <FaHome />,
      permissions: ['user', 'admin'],
    },
    {
      name: 'Users',
      href: '/users',
      icon: <FaUser />,
      permissions: ['admin'],
    },
    {
      name: 'Settings',
      icon: <FaCog />,
      permissions: ['admin', 'user'],
      submenu: [
        {
          name: 'Profile',
          href: '/settings/profile',
          permissions: ['admin', 'user'],
        },
        {
          name: 'Security',
          href: '/settings/security',
          permissions: ['admin'],
        },
      ],
    },
  ];

  return (
    <div>
      <SidebarMenu
        handleNavigation={handleNavigation}
        isActive={isActive}
        items={menuItems}
      />
      {/* Your main content here */}
      <main>
        <h1>Main Content</h1>
        <p>Current Active Link: {activeLink}</p>
      </main>
    </div>
  );
}

export default App;
```