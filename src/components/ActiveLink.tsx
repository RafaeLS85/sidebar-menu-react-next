import React from "react";
import { getPointerEvents, styles } from "./SidebarMenu.styled";

type Props = {
  children: React.ReactNode;
  href: string;
  isOpenMenu: boolean;
  hasPermission: boolean;
  isSubmenu?: boolean;
  onClick: (href: string) => void;
  isActive: (href: string, isSubmenu?: boolean) => boolean;
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
    e.stopPropagation();
    onClick(href);
  };

  const linkStyle = {
    ...styles.styledLink,
    color: active ? "#5A2DB2" : isSubmenu ? "#000" : "#242433",
    justifyContent: isOpenMenu ? "space-between" : "",
    backgroundColor: active ? "#EAE5FF" : "",
    opacity: hasPermission ? 1 : 0.5,
    marginLeft: isSubmenu ? "2.3rem" : "",
    paddingRight: isSubmenu ? "17px" : "",
    pointerEvents: getPointerEvents(hasPermission),
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!active) {
      e.currentTarget.style.backgroundColor = styles.styledLinkHover.backgroundColor;
      e.currentTarget.style.fontWeight = styles.styledLinkHover.fontWeight;
      e.currentTarget.style.height = styles.styledLinkHover.height;
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!active) {
      e.currentTarget.style.backgroundColor = '';
      e.currentTarget.style.fontWeight = '';
      e.currentTarget.style.height = '';
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      style={linkStyle}
      data-id={href + "-link"}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </a>
  );
}

export default ActiveLink;
