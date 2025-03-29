"use client";

import React from "react";
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
import { useMenuStore } from "../store/menu";
import usePermissionOnMenu from "./usePermissionOnMenu";

type SidebarMenuItem = {
  name: string;
  href: string;
  icon: React.ReactNode;
  permissions: string[];
  isOpen?: boolean;
  submenu?: SidebarMenuItem[];
};

type SidebarMenuProps = {
  handleNavigation: (href: string) => void;
  isActive: (href: string, isSubmenu?: boolean) => boolean;
  items: SidebarMenuItem[];
};

const SidebarMenu = ({ handleNavigation, isActive, items }: SidebarMenuProps) => {
  const setOpenMenu = useMenuStore((state) => state.setOpenMenu);
  const updateList = useMenuStore((state) => state.updateList);
  const isOpenMenu = useMenuStore((state) => state.isOpenMenu);
  const hasPermission = usePermissionOnMenu();

  React.useEffect(() => {
    useMenuStore.setState((state) => ({ ...state, items: items }));
  }, [items]);

  return (
    <Wrapper>
      <Sidebar isOpenMenu={isOpenMenu}>
        <SidebarTop isOpenMenu={isOpenMenu}>
          <SidebarLogo onClick={() => setOpenMenu(!isOpenMenu)}>
            {isOpenMenu ? <BarsIcon data-id="barsIcon" /> : <CloseIcon data-id="closeButton" />}
          </SidebarLogo>
          <LogoName isOpenMenu={isOpenMenu}>Cerrar</LogoName>
        </SidebarTop>

        <span style={{ display: "block", marginBottom: "1rem" }}>
          <Divider isOpenMenu={isOpenMenu} />
        </span>

        <StyledUl>
          {items?.map((item) => (
            <li key={item.name}>
              {!item.submenu && (
                <ActiveLink
                  href={item.href}
                  isOpenMenu={isOpenMenu}
                  hasPermission={hasPermission(item.permissions)}
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
                  setOpenMenu={setOpenMenu}
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
  item: SidebarMenuItem;
  isOpenMenu: boolean;
  setOpenMenu: (open: boolean) => void;
  updateList: (item: any) => void;
  handleNavigation: (href: string) => void;
  isActive: (href: string, isSubmenu?: boolean) => boolean;
};

const SubMenu = ({
  item,
  isOpenMenu,
  setOpenMenu,
  updateList,
  handleNavigation,
  isActive,
}: SubMenuProps) => {
  const isSubmenuActive = isActive(item.href, isOpenMenu);
  const isMainElementActive = isActive(item.href);
  const hasPermission = usePermissionOnMenu();

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
    <span onClick={() => setOpenMenu(!isOpenMenu)}>
      <CollapsedDiv
        onClick={() => updateList(item)}
        style={collapsedDivStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <SidebarIcon>{item.icon}</SidebarIcon>
        <SubMenuMainTitle isMainElementActive={isMainElementActive}>
          {item.name}
        </SubMenuMainTitle>
        <SubMenuButton active={item.isOpen} isOpenMenu={isOpenMenu} />
      </CollapsedDiv>
      {item.isOpen &&
        !isOpenMenu &&
        item.submenu?.map((submenu) => (
          <span key={submenu.name}>
            <ActiveLink
              href={submenu.href}
              key={submenu.name}
              isOpenMenu={isOpenMenu}
              hasPermission={hasPermission(submenu.permissions)}
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
