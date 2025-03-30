"use client";

import React, { useState, useReducer, useEffect, ReactNode } from "react";
import {
  Wrapper,
  Sidebar,
  SidebarTop,
  SidebarLogo,
  LogoName,
  SidebarIcon,
  SidebarName,
  SubmenuName,
  CollapsedDiv,
  StyledUl,
  ArrowWrapper,
  SubMenuMainTitle,
  Divider,
} from "./SidebarMenu.components";
import { styles } from "./SidebarMenu.styled";

import ActiveLink from "./ActiveLink";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import BarsIcon from "./icons/BarsIcon";
import CloseIcon from "./icons/CloseIcon";
import usePermissionOnMenu from "./usePermissionOnMenu";

export interface MenuItem {
  name: string;
  isOpen?: boolean;
  href?: string;
  permissions?: string[];
  icon?: ReactNode;
  submenu?: MenuItem[];
}

interface MenuState {
  isOpenMenu: boolean;
  items: MenuItem[];
}

type MenuAction =
  | { type: 'TOGGLE_MENU' }
  | { type: 'TOGGLE_SUBMENU'; payload: string }
  | { type: 'UPDATE_ITEMS'; payload: MenuItem[] };

const menuReducer = (state: MenuState, action: MenuAction): MenuState => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return { ...state, isOpenMenu: !state.isOpenMenu };
    case 'TOGGLE_SUBMENU':
      return {
        ...state,
        items: state.items.map((item) =>
          item.name === action.payload
            ? { ...item, isOpen: !item.isOpen }
            : item,
        ),
      };
    case 'UPDATE_ITEMS':
      return { ...state, items: action.payload };
    default:
      return state;
  }
};

type SidebarMenuProps = {
  handleNavigation: (href: string) => void;
  isActive: (href: string, isSubmenu?: boolean) => boolean;
  items: MenuItem[];
};

const SidebarMenu = ({ handleNavigation, isActive, items }: SidebarMenuProps) => {
  const [state, dispatch] = useReducer(menuReducer, {
    isOpenMenu: true,
    items: items,
  });
  const { isOpenMenu, items: menuItems } = state;
  const checkPermission = usePermissionOnMenu();

  useEffect(() => {
    dispatch({ type: 'UPDATE_ITEMS', payload: items });
  }, [items]);

  const toggleMenu = () => {
    dispatch({ type: 'TOGGLE_MENU' });
  };

  const toggleSubmenu = (itemName: string) => {
    dispatch({ type: 'TOGGLE_SUBMENU', payload: itemName });
  };

  const updateList = (item: MenuItem) => {
    toggleSubmenu(item.name);
  };

  return (
    <Wrapper>
      <Sidebar isOpenMenu={isOpenMenu}>
        <SidebarTop isOpenMenu={isOpenMenu}>
          <SidebarLogo onClick={toggleMenu}>
            {isOpenMenu ? <BarsIcon data-id="barsIcon" /> : <CloseIcon data-id="closeButton" />}
          </SidebarLogo>
          <LogoName isOpenMenu={isOpenMenu}>Cerrar</LogoName>
        </SidebarTop>

        <span style={{ display: "block", marginBottom: "1rem" }}>
          <Divider isOpenMenu={isOpenMenu} />
        </span>

        <StyledUl>
          {menuItems?.map((item) => (
            <li key={item.name}>
              {!item.submenu && (
                <ActiveLink
                  href={item.href || ""}
                  isOpenMenu={isOpenMenu}
                  hasPermission={checkPermission(item.permissions || [])}
                  onClick={handleNavigation}
                  isActive={isActive}
                >
                  <SidebarIcon>{item.icon}</SidebarIcon>
                  <SidebarName isOpenMenu={isOpenMenu}>{item.name}</SidebarName>
                </ActiveLink>
              )}
              {item.submenu && (
                <SubMenu
                  item={item}
                  isOpenMenu={isOpenMenu}
                  updateList={updateList}
                  handleNavigation={handleNavigation}
                  isActive={isActive}
                />
              )}
            </li>
          ))}
        </StyledUl>
      </Sidebar>
    </Wrapper>
  );
};

type SubMenuButtonProps = {
  active?: boolean;
  isOpenMenu?: boolean;
};

const SubMenuButton = ({ active, isOpenMenu }: SubMenuButtonProps) => {
  if (isOpenMenu) return <></>;
  return (
    <ArrowWrapper>
      {active ? <FaChevronUp size="14px" /> : <FaChevronDown size="14px" />}
    </ArrowWrapper>
  );
};

type SubMenuProps = {
  item: MenuItem;
  isOpenMenu: boolean;
  updateList: (item: MenuItem) => void;
  handleNavigation: (href: string) => void;
  isActive: (href: string, isSubmenu?: boolean) => boolean;
};

const SubMenu = ({
  item,
  isOpenMenu,
  updateList,
  handleNavigation,
  isActive,
}: SubMenuProps) => {
  const isSubmenuActive = isActive(item.href || "", isOpenMenu);
  const isMainElementActive = isActive(item.href || "");
  const hasPermission = usePermissionOnMenu();
  const itemIsOpen = item.isOpen;

  const collapsedDivStyle = {
    ...styles.collapsedDiv,
    fontWeight: isSubmenuActive ? "500" : "400",
    justifyContent: isOpenMenu ? "center" : "",
    alignItems: "center",
    padding: isOpenMenu ? "8px" : "0.8rem 1rem",
    backgroundColor: isSubmenuActive ? "#EAE5FF" : "",
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isSubmenuActive) {
      e.currentTarget.style.backgroundColor = styles.collapsedDivHover.backgroundColor;
      e.currentTarget.style.height = styles.collapsedDivHover.height;
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isSubmenuActive) {
      e.currentTarget.style.backgroundColor = "";
      e.currentTarget.style.height = "";
    }
  };

  return (
    <span onClick={() => {}}>
      <CollapsedDiv
        onClick={(event) => {
          event.stopPropagation();
          updateList(item);
        }}
        style={collapsedDivStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <SidebarIcon>{item.icon}</SidebarIcon>
        <SubMenuMainTitle isMainElementActive={isMainElementActive} isOpenMenu={isOpenMenu}>
          {item.name}
        </SubMenuMainTitle>
        <SubMenuButton active={itemIsOpen} isOpenMenu={isOpenMenu} />
      </CollapsedDiv>
      {itemIsOpen &&
        !isOpenMenu &&
        item.submenu?.map((submenu) => (
          <span key={submenu.name}>
            <ActiveLink
              href={submenu.href || ""}
              key={submenu.name}
              isOpenMenu={isOpenMenu}
              hasPermission={hasPermission(submenu.permissions || [])}
              isSubmenu={true}
              onClick={handleNavigation}
              isActive={isActive}
            >
              <SubmenuName isOpenMenu={isOpenMenu}>{submenu.name}</SubmenuName>
            </ActiveLink>
          </span>
        ))}
    </span>
  );
};

export default SidebarMenu;
