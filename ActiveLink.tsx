import React from "react";
import { StyledLink } from "./SidebarMenu.styled";

type Props = {
  children: React.ReactNode;
  href: string;
  isOpenMenu: boolean;
  hasPermission: boolean;
  isSubmenu?: boolean;
  onClick: (href: string) => void; // Función para la navegación
  isActive: (href: string, isSubmenu?: boolean) => boolean; // Función para detectar si está activo
};

function ActiveLink({
  children,
  href,
  isOpenMenu,
  hasPermission,
  isSubmenu = false,
  onClick,
  isActive,
}: Props) {
  const active = isActive(href, isSubmenu);

  const handleClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onClick(href); // Llamamos a la función de navegación
  };

  const style = {
    color: active ? "#5A2DB2" : isSubmenu ? "#000" : "#242433",
    justifyContent: isOpenMenu ? "space-between" : "",
    backgroundColor: active ? "#EAE5FF" : "",
    opacity: hasPermission ? 1 : 0.5,
    marginLeft: isSubmenu ? "2.3rem" : "",
    paddingRight: isSubmenu ? "17px" : "",
  };

  return (
    <StyledLink
      href={href}
      onClick={handleClick}
      active={active}
      style={style}
      data-id={href + "-link"}
      hasPermission={hasPermission}
    >
      {children}
    </StyledLink>
  );
}

export default ActiveLink;
