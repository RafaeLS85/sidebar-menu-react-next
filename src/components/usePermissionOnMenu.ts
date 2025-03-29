const usePermissionOnMenu = () => {
  const userPermissions = ['admin', 'user']; // Example user permissions

  return (permissions: string[]) => {
    return permissions.some((permission) => userPermissions.includes(permission));
  };
};

export default usePermissionOnMenu;