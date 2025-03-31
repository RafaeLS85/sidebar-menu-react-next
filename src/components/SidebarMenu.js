import React, { useState, useReducer, useEffect } from "react";
import PropTypes from "prop-types";
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

const menuReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_MENU":
      return { ...state, isOpenMenu: !state.isOpenMenu };
    case "TOGGLE_SUBMENU":
      return {
        ...state,
        items: state.items.map((item) =>
          item.name === action.payload ? { ...item, isOpen: !item.isOpen } : item
        ),
      };
    case "UPDATE_ITEMS":
      return { ...state, items: action.payload };
    default:
      return state;
  }
};

const SidebarMenu = ({ handleNavigation, isActive, items }) => {
  const [state, dispatch] = useReducer(menuReducer, {
    isOpenMenu: true,
    items: items,
  });
  const { isOpenMenu, items: menuItems } = state;
  const checkPermission = usePermissionOnMenu();

  useEffect(() => {
    dispatch({ type: "UPDATE_ITEMS", payload: items });
  }, [items]);

  const toggleMenu = () => {
    dispatch({ type: "TOGGLE_MENU" });
  };

  const toggleSubmenu = (itemName) => {
    dispatch({ type: "TOGGLE_SUBMENU", payload: itemName });
  };

  const updateList = (item) => {
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

SidebarMenu.propTypes = {
  handleNavigation: PropTypes.func.isRequired,
  isActive: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      isOpen: PropTypes.bool,
      href: PropTypes.string,
      permissions: PropTypes.arrayOf(PropTypes.string),
      icon: PropTypes.node,
      submenu: PropTypes.array,
    })
  ).isRequired,
};

const SubMenuButton = ({ active, isOpenMenu }) => {
  if (isOpenMenu) return null;
  return (
    <ArrowWrapper>
      {active ? <FaChevronUp size="14px" /> : <FaChevronDown size="14px" />}
    </ArrowWrapper>
  );
};

SubMenuButton.propTypes = {
  active: PropTypes.bool,
  isOpenMenu: PropTypes.bool,
};

const SubMenu = ({ item, isOpenMenu, updateList, handleNavigation, isActive }) => {
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

  return (
    <span>
      <CollapsedDiv
        onClick={(event) => {
          event.stopPropagation();
          updateList(item);
        }}
        style={collapsedDivStyle}
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

SubMenu.propTypes = {
  item: PropTypes.object.isRequired,
  isOpenMenu: PropTypes.bool.isRequired,
  updateList: PropTypes.func.isRequired,
  handleNavigation: PropTypes.func.isRequired,
  isActive: PropTypes.func.isRequired,
};

export default SidebarMenu;
