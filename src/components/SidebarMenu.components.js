import React from "react";
import { getDividerWidth, styles } from "./SidebarMenu.styled";

export const Wrapper = ({ children }) => <div style={styles.wrapper}>{children}</div>;
export const Sidebar = ({ children, isOpenMenu }) => (
  <aside style={{ ...styles.sidebar, width: isOpenMenu ? "74px" : "268px" }}>{children}</aside>
);
export const SidebarTop = ({ children, isOpenMenu }) => (
  <div style={{ ...styles.sidebarTop, marginLeft: isOpenMenu ? "" : "1rem" }}>{children}</div>
);
export const SidebarLogo = ({ children, onClick }) => (
  <span style={styles.sidebarLogo} onClick={onClick}>{children}</span>
);
export const LogoName = ({ children, isOpenMenu }) => (
  <p style={{ ...styles.logoName, display: isOpenMenu ? "none" : "" }}>{children}</p>
);
export const SidebarIcon = ({ children }) => <span style={styles.sidebarIcon}>{children}</span>;
export const SidebarName = ({ children, isOpenMenu }) => (
  <span style={{ ...styles.sidebarName, display: isOpenMenu ? "none" : "" }}>{children}</span>
);
export const SubmenuName = ({ children, isOpenMenu }) => (
  <span style={{ ...styles.submenuName, display: isOpenMenu ? "none" : "" }}>{children}</span>
);
export const CollapsedDiv = ({ children, style, onClick, onMouseEnter, onMouseLeave }) => (
  <div onClick={onClick} style={style} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
    {children}
  </div>
);
export const StyledUl = ({ children }) => <ul style={styles.styledUl}>{children}</ul>;
export const ArrowWrapper = ({ children }) => <span style={styles.arrowWrapper}>{children}</span>;
export const SubMenuMainTitle = ({ children, isMainElementActive, isOpenMenu }) => (
  <span style={{ ...styles.subMenuMainTitle, fontWeight: isMainElementActive ? "500" : "400", display: isOpenMenu ? "none" : "" }}>{children}</span>
);
export const Divider = ({ isOpenMenu }) => (
  <div style={{ ...styles.divider, width: getDividerWidth(isOpenMenu) }} />
);
