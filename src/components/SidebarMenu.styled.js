export const styles = {
  styledLink: {
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: '400',
    textDecoration: 'none',
    borderRadius: '8px',
    padding: '0.8rem 1rem',
    height: '45px',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  styledLinkHover: {
    backgroundColor: '#F0F0FA',
    fontWeight: '500',
    height: '45px',
  },
  collapsedDiv: {
    fontFamily: 'Roboto',
    fontSize: '14px',
    textDecoration: 'none',
    borderRadius: '8px',
    display: 'flex',
    cursor: 'pointer',
    height: '45px',
  },
  collapsedDivHover: {
    backgroundColor: '#F0F0FA',
    height: '45px',
  },
  styledUl: {
    listStyle: 'none',
    margin: '0px',
    padding: '0px',
  },
  wrapper: {
    position: 'relative',
    backgroundColor: '#FAFAFF',
  },
  arrowWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'end',
  },
  subMenuMainTitle: {
    marginLeft: '0.5rem',
    whiteSpace: 'nowrap',
  },
  subMenuMainTitleHover: {
    fontWeight: '500',
  },
  sidebar: {
    height: '100vh',
    transition: 'width 200ms',
    paddingTop: '16px',
    paddingBottom: '0px',
    paddingLeft: '10px',
    paddingRight: '10px',
    position: 'sticky',
    top: '0',
  },
  sidebarLogo: {
    cursor: 'pointer',
  },
  sidebarTop: {
    width: 'max-content',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    paddingBottom: '1rem',
    marginLeft: '1rem',
    height: '40px',
  },
  logoName: {
    color: '#65657E',
    fontSize: '14px',
    lineHeight: '3',
    fontFamily: 'Roboto',
    fontWeight: '400',
  },
  sidebarList: {
    listStyle: 'none',
  },
  divider: {
    borderBottom: '1px solid #D5D5E7',
    height: '0.5px',
  },
  sidebarIcon: {
    fontSize: '1.2rem',
    display: 'inline-block',
  },
  sidebarName: {
    marginLeft: '0.5rem',
  },
  submenuIcon: {
    fontSize: '0.8rem',
    display: 'inline-block',
  },
  submenuName: {
    whiteSpace: 'nowrap',
  },
  closeBtn: {
    position: 'absolute',
    right: '0',
    top: '4.7rem',
    border: '1px solid #e5e7eb',
    borderRadius: '50%',
    backgroundColor: '#fff',
    width: '1.5rem',
    height: '1.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transform: 'translateX(50%)',
    fontSize: '1.1rem',
  },
};

export const getIconColor = (active) => {
  return active ? '#5A2DB2' : '#65657E';
};

export const getDividerWidth = (isOpen) => {
  return isOpen ? '55px' : '248px';
};

export const getPointerEvents = (hasPermission) => {
  return hasPermission ? 'auto' : 'none';
};