import { useSessionStore } from "@/store/session";

const usePermissionOnMenu = () => {
  const session = useSessionStore((state) => state.session);

  const hasPermission = (permissions: string[]) => {
    return permissions.some((permission) =>
      session?.permissions.includes(permission)
    );
  };

  return hasPermission;
};

export default usePermissionOnMenu;
