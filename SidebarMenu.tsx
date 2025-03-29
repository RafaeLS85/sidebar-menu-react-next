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
} from "./SidebarMenu.styled";
// Eliminamos las importaciones de useRouter y usePathname
import BarsIcon from "../common/icons/menu/BarsIcon";
import CloseIcon from "../common/icons/menu/CloseIcon";
import { ChevronUpIcon, ChevronDownIcon } from "@fravega-it/bumeran-ds-fvg";
import { useMenuStore } from "@/store/menu";
import usePermissionOnMenu from "./usePermissionOnMenu";
import ActiveLink from "./ActiveLink";

type SidebarMenuProps = {
  handleNavigation: (href: string) => void;
  isActive: (href: string, isSubmenu?: boolean) => boolean;
};

const SidebarMenu = ({ handleNavigation, isActive }: SidebarMenuProps) => {
  const items = useMenuStore((state) => state.items);
  const setOpenMenu = useMenuStore((state) => state.setOpenMenu);
  const updateList = useMenuStore((state) => state.updateList);
  const isOpenMenu = useMenuStore((state) => state.isOpenMenu);
  const hasPermission = usePermissionOnMenu();

  return (
    <Wrapper>
      <Sidebar
        style={{
          width: isOpenMenu ? "74px" : "268px",
        }}
      >
        <SidebarTop style={{ marginLeft: isOpenMenu ? "" : "1rem" }}>
          <SidebarLogo onClick={() => setOpenMenu(!isOpenMenu)}>
            {isOpenMenu ? (
              <BarsIcon data-id="barsIcon" />
            ) : (
              <CloseIcon data-id="closeButton" />
            )}
          </SidebarLogo>
          <LogoName
            style={{ display: isOpenMenu ? "none" : "" }}
            data-id="logoName"
          >
            Cerrar
          </LogoName>
        </SidebarTop>

        <span style={{ display: "block", marginBottom: "1rem" }}>
          <Divider isOpen={isOpenMenu} />
        </span>

        <StyledUl>
          {items?.map((item) => (
            <li key={item.name}>
              {!item.submenu && (
                <ActiveLink
                  href={item.href}
                  isOpenMenu={isOpenMenu}
                  hasPermission={hasPermission(item.permissions)}
                  onClick={handleNavigation} // Recibimos handleNavigation como prop
                  isActive={isActive} // Recibimos isActive como prop
                >
                  <SidebarIcon>{item.icon}</SidebarIcon>
                  <SidebarName style={{ display: isOpenMenu ? "none" : "" }}>
                    {item.name}
                  </SidebarName>
                </ActiveLink>
              )}
              {item.submenu && (
                <SubMenu
                  item={item}
                  isOpenMenu={isOpenMenu}
                  setOpenMenu={setOpenMenu}
                  updateList={updateList}
                  handleNavigation={handleNavigation} // Pasamos handleNavigation a SubMenu
                  isActive={isActive} // Pasamos isActive a SubMenu
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
      {active ? <ChevronUpIcon size="s" /> : <ChevronDownIcon size="s" />}
    </ArrowWrapper>
  );
};

type SubMenuProps = {
  item: any;
  isOpenMenu: boolean;
  setOpenMenu: (open: boolean) => void;
  updateList: (item: any) => void;
  handleNavigation: (href: string) => void; // Recibimos handleNavigation como prop
  isActive: (href: string, isSubmenu?: boolean) => boolean; // Recibimos isActive como prop
};

const SubMenu = ({
  item,
  isOpenMenu,
  setOpenMenu,
  updateList,
  handleNavigation, // Recibimos handleNavigation como prop
  isActive, // Recibimos isActive como prop
}: SubMenuProps) => {
  const isSubmenuActive = isActive(item.href, isOpenMenu);
  const isMainElementActive = isActive(item.href);
  const hasPermission = usePermissionOnMenu();

  const style = {
    fontWeight: isSubmenuActive ? "500" : "400",
    justifyContent: isOpenMenu ? "center" : "",
    alignItems: "center",
    padding: isOpenMenu ? "8px" : "0.8rem 1rem",
    backgroundColor: isSubmenuActive ? "#EAE5FF" : "",
  };

  const handleOpenOnCollapsed = () => {
    if (isOpenMenu) {
      setOpenMenu(false);
    }
  };

  return (
    <span onClick={handleOpenOnCollapsed}>
      <CollapsedDiv
        onClick={() => updateList(item)}
        style={style}
        active={isSubmenuActive}
      >
        <span>{item.icon}</span>
        <SubMenuMainTitle
          data-id="subMenuMainTitle"
          style={{
            display: isOpenMenu ? "none" : "",
            fontWeight: isMainElementActive ? "500" : "400",
          }}
        >
          {item.name}
        </SubMenuMainTitle>
        <SubMenuButton active={item.isOpen} isOpenMenu={isOpenMenu} />
      </CollapsedDiv>
      {item.isOpen &&
        !isOpenMenu &&
        item.submenu.map((submenu: any) => {
          return (
            <span key={submenu.name}>
              <ActiveLink
                href={submenu.href}
                key={submenu.name}
                isOpenMenu={isOpenMenu}
                hasPermission={hasPermission(submenu.permissions)}
                isSubmenu={true}
                onClick={handleNavigation} // Pasamos handleNavigation a ActiveLink
                isActive={isActive} // Pasamos isActive a ActiveLink
              >
                <SubmenuName
                  style={{
                    display: isOpenMenu ? "none" : "",
                  }}
                >
                  {submenu.name}
                </SubmenuName>
              </ActiveLink>
            </span>
          );
        })}
    </span>
  );
};

export default SidebarMenu;
