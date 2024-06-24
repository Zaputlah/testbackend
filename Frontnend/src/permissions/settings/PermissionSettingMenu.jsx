import {useContext} from "react";
import {UtilStateContextBase} from "../../utils/states/contexts.jsx";
import {NavDropdown} from "react-bootstrap";
import ManagerWidgetRBAC from "../../managers/widgets/ManagerWidgetRBAC.jsx";
import {CREATE_PERMISSIONS, READ_PERMISSIONS} from "../states/constants.jsx";

const PermissionSettingMenu = () => {
  const context = useContext(UtilStateContextBase);

  return (
    <ManagerWidgetRBAC context={context} permissions={[READ_PERMISSIONS, CREATE_PERMISSIONS]} or={true}>
      <NavDropdown title="Permission Manager" id="basic-nav-dropdown">
        <ManagerWidgetRBAC context={context} permissions={[READ_PERMISSIONS]}>
          <NavDropdown.Item href="#permissions">
            Permissions
          </NavDropdown.Item>
        </ManagerWidgetRBAC>
        <ManagerWidgetRBAC context={context} permissions={[CREATE_PERMISSIONS]}>
          <NavDropdown.Item href="#permissions/new">
            New Permission
          </NavDropdown.Item>
        </ManagerWidgetRBAC>
      </NavDropdown>
    </ManagerWidgetRBAC>
  )
}

export default PermissionSettingMenu;