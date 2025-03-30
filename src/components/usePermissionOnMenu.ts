const usePermissionOnMenu = () => {
  const userPermissions = ['admin', 'user'];

  return (permissions: string[]) => {
    return permissions.some((permission) => userPermissions.includes(permission));
  };
};

export default usePermissionOnMenu;