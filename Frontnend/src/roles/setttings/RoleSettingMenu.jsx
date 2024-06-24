import { useContext } from "react";
import { UtilStateContextBase } from "../../utils/states/contexts.jsx";
import ManagerWidgetRBAC from "../../managers/widgets/ManagerWidgetRBAC.jsx";
import { CREATE_ROLES, READ_ROLES } from "../states/constants.jsx";
import { NavDropdown } from "react-bootstrap";
import { READ_PERMISSIONS } from "../../permissions/states/constants.jsx";

const RoleSettingMenu = () => {
  const context = useContext(UtilStateContextBase);

  return (
    <ManagerWidgetRBAC
      context={context}
      permissions={[READ_ROLES, CREATE_ROLES, READ_PERMISSIONS]}
    >
      <NavDropdown title="Role Management">
        <ManagerWidgetRBAC context={context} permissions={[READ_ROLES]}>
          <NavDropdown.Item href="#roles">Roles</NavDropdown.Item>
        </ManagerWidgetRBAC>
        <ManagerWidgetRBAC
          context={context}
          permissions={[CREATE_ROLES, READ_PERMISSIONS]}
        >
          <NavDropdown.Item href="#roles/new">New Role</NavDropdown.Item>
        </ManagerWidgetRBAC>
      </NavDropdown>
    </ManagerWidgetRBAC>
  );
};

export default RoleSettingMenu;
