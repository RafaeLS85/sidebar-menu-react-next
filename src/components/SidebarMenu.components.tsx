import React from "react";
import { getDividerWidth, styles } from "./SidebarMenu.styled";

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <div style={styles.wrapper}>{children}</div>;
};

export const Sidebar = ({ children, isOpenMenu }: { children: React.ReactNode, isOpenMenu: boolean }) => {
  return <aside style={{ ...styles.sidebar, width: isOpenMenu ? "74px" : "268px" }}>{children}</aside>;
};

export const SidebarTop = ({ children, isOpenMenu }: { children: React.ReactNode, isOpenMenu: boolean }) => {
  return <div style={{ ...styles.sidebarTop, marginLeft: isOpenMenu ? "" : "1rem" }}>{children}</div>;
};

export const SidebarLogo = ({ children, onClick }: { children: React.ReactNode, onClick: () => void }) => {
  return <span style={styles.sidebarLogo} onClick={onClick}>{children}</span>;
};

export const LogoName = ({ children, isOpenMenu }: { children: React.ReactNode, isOpenMenu: boolean }) => {
  return <p style={{ ...styles.logoName, display: isOpenMenu ? "none" : "" }} >{children}</p>;
};

export const SidebarIcon = ({ children }: { children: React.ReactNode }) => {
  return <span style={styles.sidebarIcon}>{children}</span>;
};

export const SidebarName = ({ children, isOpenMenu }: { children: React.ReactNode, isOpenMenu: boolean }) => {
  return <span style={{ ...styles.sidebarName, display: isOpenMenu ? "none" : "" }}>{children}</span>;
};

export const SubmenuName = ({ children, isOpenMenu }: { children: React.ReactNode, isOpenMenu: boolean }) => {
  return <span style={{ ...styles.submenuName, display: isOpenMenu ? "none" : "" }}>{children}</span>;
};

export const CollapsedDiv = ({
  children,
  style,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: {
  children: React.ReactNode;
  style: React.CSSProperties;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  onMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => void;
}) => {
  return (
    <div
      onClick={onClick}
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
};

export const StyledUl = ({ children }: { children: React.ReactNode }) => {
  return <ul style={styles.styledUl}>{children}</ul>;
};

export const ArrowWrapper = ({ children }: { children: React.ReactNode }) => {
  return <span style={styles.arrowWrapper}>{children}</span>;
};

export const SubMenuMainTitle = ({ children, isMainElementActive, isOpenMenu }: { children: React.ReactNode, isMainElementActive: boolean, isOpenMenu: boolean }) => { // Add isOpenMenu
  return <span style={{ ...styles.subMenuMainTitle, fontWeight: isMainElementActive ? "500" : "400", display: isOpenMenu ? "none" : "" }}>{children}</span>; // Add display: isOpenMenu ? "none" : ""
};

export const Divider = ({ isOpenMenu }: { isOpenMenu: boolean }) => {
  return <div style={{ ...styles.divider, width: getDividerWidth(isOpenMenu) }} />;
};
