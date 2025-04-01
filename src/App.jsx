import { useState } from 'react'
import './App.css'
import SidebarMenu from './components/SidebarMenu'
import { FaCog, FaHome, FaUser } from 'react-icons/fa';

function App() { 

  const [activeLink, setActiveLink] = useState('');

  const handleNavigation = (href) => {
    setActiveLink(href);
    console.log(`Navigating to: ${href}`);
    // Add your navigation logic here, e.g., using React Router
  };

  const isActive = (href, isSubmenu) => {
    return activeLink === href;
  };

  const menuItems = [
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
    <div style={{ display: "flex", gap: "1rem" }}>
      
     <SidebarMenu 
      handleNavigation={handleNavigation}
      isActive={isActive}
      items={menuItems}   
      permissions={['admin', 'user']}  
     />
     <div>{activeLink}</div> 

    </div>
  )
}

export default App
